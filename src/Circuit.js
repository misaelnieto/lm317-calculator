export function nFormatter(num, digits) {
  const lookup = [
    { value: 1e-12, symbol: " p" },
    { value: 1e-9, symbol: " n" },
    { value: 1e-6, symbol: " u" },
    { value: 1e-3, symbol: " m" },
    { value: 1, symbol: "" },
    { value: 1e3, symbol: " K" },
    { value: 1e6, symbol: " M" },
    { value: 1e9, symbol: " G" },
    { value: 1e12, symbol: " T" },
    { value: 1e15, symbol: " P" },
    { value: 1e18, symbol: " E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}


export function Circuit({Vin, c_in, i_adj, r_1, r_2, c_out, Vout}) {
  return (
    <svg version="1.2" name="SVG LM317 Schematic" viewBox="0 0 600 320">
      <style>
        {`
      #background {
        fill: #fff;
      }
      #lm317 rect{
        fill: skyblue; stroke: blue; stroke-width: 3;
      }
  
      #lm317 text {
        font-size: 1.2em;
        font-weight: bold;
        stroke: blue;
      }
  
  
      #V_in circle {
        stroke: #000;
        stroke-width: 5px;
        fill: #e8e490;
      }
  
      #V_in .plus-minus, #V_out .plus-minus {
        font-weight: bold;
      }
  
      #V_out .readout-bg {
        stroke: #000;
        stroke-width: 4px;
        fill: #000;
      }
      #V_out .readout-text {
        fill: #66ff94;
        font-family: monospace;
        font-size: smaller;
      }
  
      #I_adj {
        stroke: blue;
        stroke-width: 2px;
      }
      #arrow {
        stroke: blue;
        fill: blue;
      }
  
      .gnd path, .connector{
        stroke: black;
        stroke-width: 4px;
        fill: none;
      }

      .actual_value {
        font-family: monospace;
        font-weight: light;
        stroke: none;
        fill: #f00;
        font-size: 0.7em;
      }

      path.resistor {
        fill: none;
        stroke: #c8b080;
        stroke-width: 4px;
      }

      path.capacitor {
        fill: none;
        stroke-width: 4px;
        stroke: #7b9971;
      }
    `}
      </style>
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
        <marker
          id="circle"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="5"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <circle cx="5" cy="5" r="2.5" />
        </marker>
      </defs>
      <rect id="background" x="0" y="0" width="100%" height="100%" />
      <g id="lm317" transform="translate(180,10)">
        <rect x="1" y="1" width="130" height="50" />
        <text x="33" y="30">
          LM317
        </text>
      </g>
      <g id="C_in" transform="translate(120,55)">
        <path
          className="capacitor"
          d="M 16.5,0 v 40
              M 0,38 h 35
              M 0,53 q 17.5 -10, 35 0
              M 16.5,49 v 40
              "
        />
        <text x="40" y="30">
          C
          <tspan dy="7" fontSize=".7em">
            IN
          </tspan>
        </text>
        <text id="Cin_value" x="40" y="50" className="actual_value">
          ({nFormatter(c_in, 2)}F)
        </text>
      </g>
      <g id="C_out" transform="translate(431,70)">
        <path
          className="capacitor"
          d="M 16.5,0 v 40
              M 0,38 h 35
              M 0,53 q 17.5 -10, 35 0
              M 16.5,49 v 40
              "
        />
        <text x="40" y="30">
          C
          <tspan dy="7" fontSize=".7em">
            OUT
          </tspan>
        </text>
        <text id="Cout_value" x="30" y="70" className="actual_value">
          ({nFormatter(c_out, 2)}F)
        </text>
      </g>
      <g id="R_1" transform="translate(370,30)">
        <path
          className="resistor"
          d="M 0,10 v 15
           l -7.5,10 13,10 -13,10 13,10, -13,10 7.5,10 0,15
          "
        />
        <text x="20" y="50">
          R
          <tspan dy="7" fontSize=".7em">
            1
          </tspan>
        </text>
        <text id="R1_value" x="10" y="70" className="actual_value">
          ({nFormatter(r_1, 2)})
        </text>
      </g>
      <g id="R_2" transform="translate(250,150)">
        <path
          className="resistor"
          d="M 0,10 v 15
           l -7.5,10 13,10 -13,10 13,10, -13,10 7.5,10 0,15
          "
        />
        <text x="20" y="50">
          R
          <tspan dy="7" fontSize=".7em">
            2
          </tspan>
        </text>
        <text id="R2_value" x="20" y="70" className="actual_value">
          ({nFormatter(r_2, 2)})
        </text>
      </g>
      <g id="V_in" transform="translate(10,50)">
        <circle cx="50" cy="50" r="25" />
        <text x="45" y="45" className="plus-minus">
          +
        </text>
        <text x="45" y="65" className="plus-minus">
          –
        </text>
        <text x="10" y="10">
          V
          <tspan dy="7" fontSize=".7em">
            in
          </tspan>
        </text>
        <text id="Vin_value" x="60" y="10" className="actual_value">
          ({nFormatter(Vin, 2)} V)
        </text>
        <path stroke="#000000" strokeWidth="4" d="M 50,0 v 25 M 50,75 v 25" />
      </g>
      <g id="V_out" transform="translate(500,63)">
        <circle className="readout-bg" cx="50" cy="50" r="25" />
        <text id="Vout_value" className="readout-text" dx="50" dy="52" textAnchor="middle">
          {nFormatter(Vout, 2)} V
        </text>
        <text x="60" y="10">
          V
          <tspan dy="7" fontSize=".7em">
            out
          </tspan>
        </text>
        <path stroke="#000000" strokeWidth="4" d="M 50,0 v 25 M 50,75 v 25" />
      </g>
      <g id="I_adj" transform="translate(200,120)">
        <line
          className="arrow"
          x1="0"
          y1="0"
          x2="0"
          y2="50"
          markerEnd="url(#arrow)"
        />
        <text x="10" y="25">
          I
          <tspan dy="7" fontSize=".7em">
            ADJ
          </tspan>
        </text>
        <text id="Iadj_value" x="-30" y="70" className="actual_value">
          ({nFormatter(i_adj, 2)}A)
        </text>
      </g>

      <g className="gnd" transform="translate(45.5,280)">
        <path
          d="M 14.5,0 v 15
              M 0,15 h 30
              M 5,23 h 20
              M 12.5,29 h 5
              "
        />
      </g>

      <line
        id="vin_connector"
        className="connector"
        x1="60"
        y1="146"
        x2="60"
        y2="280"
      />
      <path className="connector" d="M 60,50 v -20 h 120" />
      <line
        className="connector"
        x1="136"
        y1="28"
        x2="136.5"
        y2="59"
        markerStart="url(#circle)"
      />
      <path
        id="cin_connector"
        className="connector"
        d="M 136,144 v 120 h -78"
        markerEnd="url(#circle)"
      />
      <path id="r1_connector_lm" className="connector" d="M 311,30 h 59 v 10" />
      <path id="r2_connector_lm" className="connector" d="M 250,60 v 100" />
      <path
        id="r2_connector_gnd"
        className="connector"
        d="M 250,244 v 20 h -115"
        markerEnd="url(#circle)"
      />
      <path
        id="r1_connector_r2"
        className="connector"
        d="M 369,130 v 15 h -120"
        markerEnd="url(#circle)"
      />
      <path
        id="cout_connector_lm"
        className="connector"
        d="M 368,30 h 80 v 40"
        markerStart="url(#circle)"
      />
      <path
        id="cout_connector_gnd"
        className="connector"
        d="M 448,156 v 108 h -200"
        markerEnd="url(#circle)"
      />
      <path
        id="vout_connector_plus"
        className="connector"
        d="M 550,65 v -34 h -90"
        markerEnd="url(#arrow)"
      />
      <path
        id="vout_connector_gnd"
        className="connector"
        d="M 550,155 v 108 h -90"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
}

