import { useState } from 'react';
import './tailwind.generated.css';
import {Circuit, nFormatter} from './Circuit.js';
import './App.css';

const VOUT_MIN = 1.25;
const VOUT_MAX = 35;
const C_IN = 0.1e-6;
const C_OUT = 1e-6;
const I_ADJ = 50e-6;
const V_REF = 1.25;

function clamp (num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export default function App() {
  const [R1, setR1] = useState(240);
  const [R2, setR2] = useState(1.2e3);
  const [Vin, setVin] = useState(12);
  const [Vout, setVout] = useState(computeVout());


  function computeVout() {
    return clamp(clamp(V_REF * (1 + R2 / R1) + I_ADJ * R2, VOUT_MIN, Vin), VOUT_MIN, VOUT_MAX);
  }

  function handleR1Change(evt) {
    setR1(parseFloat(evt.target.value))
    setVout(computeVout())
  }

  function handleR2Change(evt) {
    setR2(parseFloat(evt.target.value))
    setVout(computeVout())
  }

  function handleVinChange(evt) {
    setVin(parseFloat(evt.target.value))
    setVout(computeVout)
  }

  return (
    <div className="App">
      <header>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">LM317 Calculator</h1>
      </header>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <Circuit
              Vin={Vin}
              c_in={C_IN}
              i_adj={I_ADJ}
              r_1={R1}
              r_2={R2}
              c_out={C_OUT}
              Vout={Vout}
            />
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            {/* V_in */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  V<sub>IN</sub>
                </p>
              </div>
              <div className="md:w-2/4">
                <label htmlFor="V_in">{nFormatter(Vin, 2)} V</label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  name="V_in" id="V_in"
                  type="range" min="3" max="40" value={Vin} onChange={handleVinChange}
                  list="e12-resistors" />
              </div>
              <div className="md:w-1/4">
                <span>Volts</span>
              </div>
            </div>
            {/* C_in */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  C<sub>IN</sub>
                </p>
              </div>
              <div className="md:w-2/4">
                <p className="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700">
                  {nFormatter(C_IN,2)}F (ceramic or tantalum)
                </p>
              </div>
              <div className="md:w-1/4">
                F
              </div>
            </div>
            {/* C_out */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  C<sub>OUT</sub>
                </p>
              </div>
              <div className="md:w-2/4">
                <p className="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700">
                  {nFormatter(C_OUT, 2)}F
                </p>
              </div>
              <div className="md:w-1/4">
                F
              </div>
            </div>
            {/* I_adj */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  I<sub>ADJ</sub>
                </p>
              </div>
              <div className="md:w-2/4">
                <p className="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700">
                  {nFormatter(I_ADJ)}A
                </p>
              </div>
              <div className="md:w-1/4">
                A
              </div>
            </div>
            {/* R_1 */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="R_1">
                  R<sub>1</sub>
                </label>
              </div>
              <div className="md:w-2/4">
              <label htmlFor="R_1">{nFormatter(R1, 2)} &Omega;</label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  name="R_1" id="R_1"
                  type="range" min="100" max="500" value={R1} onChange={handleR1Change}
                  />
              </div>
              <div className="md:w-1/4">
                &Omega;
              </div>
            </div>
            {/* R_2 */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="R_2">
                  R<sub>2</sub>
                </label>
              </div>
              <div className="md:w-2/4">
                <label htmlFor="R_2">{nFormatter(R2, 2)} &Omega;</label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  name="R_2" id="R_2"
                  type="range" min="1" max="2500" value={R2} onChange={handleR2Change}
                  />
              </div>
              <div className="md:w-1/4">
                &Omega;
              </div>
            </div>
            {/* V_out */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  V<sub>out</sub>
                </p>
              </div>
              <div className="md:w-2/4">
                <p id="V_out_sidebar" className="text-xs bg-green-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700">
                  {nFormatter(Vout, 2)}
                </p>
              </div>
              <div className="md:w-1/4">
                V
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
