import React from 'react';
import './tailwind.generated.css';
import Circuit from './Circuit.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      R_1_value: 240,
      R_1_scale: 1,
      R_2_value: 1,
      R_2_scale: 1E3,
      V_in: 12,
      C_in: 0.1e-6,
      I_adj: 100e-6,
      V_ref: 0.125,
      R_1: 1e3,
      R_2: 1e3,
      C_out: 1e-6,
      V_out: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.computeVout();
  }

  computeVout () {
    const Vref = 1.25,  //volts
          Iadj = 100e-6; //50 uA
    let R1 = this.state.R_1_value * this.state.R_1_scale;
    let R2 = this.state.R_2_value * this.state.R_2_scale;
    
    this.setState({
      V_out: Vref * (1 + R2 / R1)
    });
  }

  handleChange (evt) {
    let z = {};
    z[evt.currentTarget.id] = parseFloat(evt.target.value);
    this.setState(z);
    this.computeVout();
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">LM317 Calculator</h1>
        </header>
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <Circuit
                v_in={this.state.V_in}
                c_in={this.state.C_in}
                i_adj={this.state.I_adj}
                r_1={this.state.R_1_value}
                r_2={this.state.R_2_value}
                c_out={this.state.C_out}
                v_out={this.state.V_out}
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
                    <p className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700">
                      Range: 4.25 ~ 40
                    </p>
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
                    0.1 or 1.0 (ceramic or tantalum)
                  </p>
                </div>
                <div className="md:w-1/4">
                    &mu;F
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
                    1.0
                  </p>
                </div>
                <div className="md:w-1/4">
                    &mu;F
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
                    50 
                  </p>
                </div>
                <div className="md:w-1/4">
                    &mu;A
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
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                         type="number" step="1" min="0.0" name="R_1_value" id="R_1_value"
                         value={this.state.R_1_value}
                         onChange={this.handleChange}/>
                </div>
                <div className="md:w-1/4">
                    <select className="md:1/3 cursor-pointer bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="select" name="R_1_scale" id="R_1"
                            value={this.state.R_2_scale} onChange={this.handleChange}>
                      <option value="1">&Omega;</option>
                      <option value="1E3">K&Omega;</option>
                      <option value="1E6">M&Omega;</option>
                    </select>
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
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="number" step="1" min="0.0" name="R_2_value" id="R_2_value" value={this.state.R_2_value} onChange={this.handleChange}/>
                </div>
                <div className="md:w-1/4">
                    <select className="md:1/3 cursor-pointer appearance-none bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="select" name="R_2_scale" id="R_2"
                            value={this.state.R_2_scale} onChange={this.handleChange}>
                      <option value="1">&Omega;</option>
                      <option value="1E3">K&Omega;</option>
                      <option value="1E6">M&Omega;</option>
                    </select>
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
                  <p className="text-xs bg-green-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700">
                    {this.state.V_out.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}
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
}

export default App;
