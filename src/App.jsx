import { useState } from 'react';
import './App.css';
import { Circuit, nFormatter } from './Circuit';
import SiteFooter from './Footer';

const VOUT_MIN = 1.25;
const VOUT_MAX = 35;
const C_IN = 0.1e-6;
const C_OUT = 1e-6;
const I_ADJ = 50e-6;
const V_REF = 1.25;

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export default function App() {
  const [R1, setR1] = useState(240);
  const [R2, setR2] = useState(720);
  const [Vin, setVin] = useState(12);
  const [Vout, setVout] = useState(computeVout());

  function computeVout(r1 = R1, r2 = R2, vin = Vin) {
    return clamp(
      clamp(V_REF * (1 + r2 / r1) + I_ADJ * r2, VOUT_MIN, vin),
      VOUT_MIN,
      VOUT_MAX
    );
  }

  function handleR1Change(evt) {
    const newR1 = parseFloat(evt.target.value);
    setR1(newR1);
    setVout(computeVout(newR1));
  }

  function handleR2Change(evt) {
    const newR2 = parseFloat(evt.target.value);
    setR2(newR2);
    setVout(computeVout(undefined, newR2));
  }

  function handleVinChange(evt) {
    const newVin = parseFloat(evt.target.value);
    setVin(newVin);
    setVout(computeVout(undefined, undefined, newVin));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>LM317 Calculator</h1>
        <p className="subtitle">Adjustable Voltage Regulator &mdash; Interactive Schematic</p>
      </header>

      <section className="app-body">
        <div className="circuit-panel">
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

        <div className="controls-panel">
          {/* V_in */}
          <div className="field-row">
            <label className="field-label" htmlFor="V_in">
              V<sub>in</sub>
            </label>
            <div className="field-value">
              {nFormatter(Vin, 2)} V
              <input
                type="range"
                id="V_in"
                name="V_in"
                min="3"
                max="40"
                value={Vin}
                onChange={handleVinChange}
              />
            </div>
          </div>

          {/* C_in */}
          <div className="field-row">
            <span className="field-label">
              C<sub>in</sub>
            </span>
            <span className="field-value readonly">
              {nFormatter(C_IN, 2)}F &nbsp;(ceramic or tantalum)
            </span>
          </div>

          {/* C_out */}
          <div className="field-row">
            <span className="field-label">
              C<sub>out</sub>
            </span>
            <span className="field-value readonly">
              {nFormatter(C_OUT, 2)}F
            </span>
          </div>

          {/* I_adj */}
          <div className="field-row">
            <span className="field-label">
              I<sub>adj</sub>
            </span>
            <span className="field-value readonly">
              {nFormatter(I_ADJ)}A
            </span>
          </div>

          {/* R_1 */}
          <div className="field-row">
            <label className="field-label" htmlFor="R_1">
              R<sub>1</sub>
            </label>
            <div className="field-value">
              {nFormatter(R1, 2)} &Omega;
              <input
                type="range"
                id="R_1"
                name="R_1"
                min="100"
                max="500"
                value={R1}
                onChange={handleR1Change}
              />
            </div>
          </div>

          {/* R_2 */}
          <div className="field-row">
            <label className="field-label" htmlFor="R_2">
              R<sub>2</sub>
            </label>
            <div className="field-value">
              {nFormatter(R2, 2)} &Omega;
              <input
                type="range"
                id="R_2"
                name="R_2"
                min="1"
                max="2500"
                value={R2}
                onChange={handleR2Change}
              />
            </div>
          </div>

          {/* V_out */}
          <div className="field-row">
            <span className="field-label">
              V<sub>out</sub>
            </span>
            <span className="field-value output" id="V_out_sidebar">
              {nFormatter(Vout, 2)} V
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
