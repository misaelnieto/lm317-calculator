import React from 'react';
import './tailwind.generated.css';
import circuit from './LM317.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">LM317 simulator</h1>
      </header>
      <section class="text-gray-700 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <object type="image/svg+xml" data={circuit}>
                <img src={circuit} />
            </object>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            {/* V_in */}
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/4">
                  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="V_in">
                    V<sub>IN</sub>
                  </label>
                </div>
                <div class="md:w-2/4">
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="V_in" type="number" min="0" max="50" step="0.1"></input>
                </div>
                <div class="md:w-1/4">
                  <span>Volts</span>
                </div>
            </div>
            {/* C_in */}
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="C_in">
                  C<sub>IN</sub>
                </label>
              </div>
              <div class="md:w-2/4">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="number" step="0.01" min="0.0" name="C_in_value" id="C_in_value"/>
              </div>
              <div class="md:w-1/4">
                  <select class="md:1/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="select" name="C_in_scale" id="C_in">
                    <option value="uF">&mu;F</option>
                    <option value="pF">pF</option>
                  </select>
                </div>
            </div>
            {/* R_1 */}
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="R_1">
                  R<sub>1</sub>
                </label>
              </div>
              <div class="md:w-2/4">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="number" step="0.01" min="0.0" name="R_1_value" id="R_1_value"/>
              </div>
              <div class="md:w-1/4">
                  <select class="md:1/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="select" name="R_1_scale" id="R_1">
                    <option value="ohm">&Omega;</option>
                    <option value="kom">K&Omega;</option>
                    <option value="kom">M&Omega;</option>
                  </select>
                </div>
            </div>
            {/* R_2 */}
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="R_2">
                  R<sub>2</sub>
                </label>
              </div>
              <div class="md:w-2/4">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="number" step="0.01" min="0.0" name="R_2_value" id="R_2_value"/>
              </div>
              <div class="md:w-1/4">
                  <select class="md:1/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="select" name="R_2_scale" id="R_2">
                    <option value="ohm">&Omega;</option>
                    <option value="kom">K&Omega;</option>
                    <option value="kom">M&Omega;</option>
                  </select>
                </div>
            </div>
            {/* C_out */}
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="C_out">
                  C<sub>OUT</sub>
                </label>
              </div>
              <div class="md:w-2/4">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="number" step="0.01" min="0.0" name="C_out_value" id="C_out_value"/>
              </div>
              <div class="md:w-1/4">
                  <select class="md:1/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="select" name="C_out_scale" id="C_out">
                    <option value="uF">&mu;F</option>
                    <option value="pF">pF</option>
                  </select>
                </div>
            </div>
            {/* Readout */}
            <div class="md:flex md:items-center mb-6">
              <div class="readout bg-green-100 rounded-full md:w-1/3">
                <div class="label">I<sub>ADJ</sub></div>
                <div class="digit">55.1</div>
                <div class="unit">mA</div>
              </div>
              <div class="readout bg-green-100 rounded-full md:w-2/3">
              <div class="label">V<sub>out</sub></div>
                <div class="digit">5.1</div>
                <div class="unit">Volts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
