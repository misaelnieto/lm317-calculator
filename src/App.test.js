import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/LM317 Calculator/i);
  expect(titleElement).toBeInTheDocument();
});

test('Values are computed', () => {
  const {container} = render(<App />);
  expect(container.querySelector("#V_out_sidebar")).toHaveTextContent("7.56")
  fireEvent.change(container.querySelector('input[name="R_2"'), {target: {value: '220'}})
  screen.debug(container.querySelector("#V_out_sidebar"))
  expect(container.querySelector("#V_out_sidebar")).toHaveTextContent("1.37")


  // const svgElement = container.querySelector("svg")
  // expect(svgElement).toBeInTheDocument()
  // expect(container.querySelector("#Cin_value")).toHaveTextContent("(100 nF)")
  // expect(container.querySelector("#Cout_value")).toHaveTextContent("(1 uF)")
  // expect(container.querySelector("#R1_value")).toHaveTextContent("(240)")
  // expect(container.querySelector("#R2_value")).toHaveTextContent("(1.2 K)")
  // expect(container.querySelector("#Vin_value")).toHaveTextContent("(12 V)")
  // expect(container.querySelector("#Vout_value")).toHaveTextContent("7.56 V")
  // expect(container.querySelector("#Iadj_value")).toHaveTextContent("(50 uA)")
});