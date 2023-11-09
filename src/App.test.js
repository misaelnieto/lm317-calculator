import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/LM317 Calculator/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders svg', () => {
  const {container, app} = render(<App />);
  fireEvent.change(container.querySelector("#R_1_value"), {target: {value: '1200'}})
  fireEvent.change(container.querySelector("#R_2_value"), {target: {value: '2200'}})
  
  const svgElement = container.querySelector("svg")
  expect(svgElement).toBeInTheDocument()
  expect(container.querySelector("#Cin_value")).toHaveTextContent("(100 nF)")
  expect(container.querySelector("#Cout_value")).toHaveTextContent("(1 uF)")
  expect(container.querySelector("#R1_value")).toHaveTextContent("(1.2 K)")
  expect(container.querySelector("#R2_value")).toHaveTextContent("(2.2 K)")
  expect(container.querySelector("#Vin_value")).toHaveTextContent("(12 V)")
  expect(container.querySelector("#Vout_value")).toHaveTextContent("2.29 V")
  expect(container.querySelector("#Iadj_value")).toHaveTextContent("(100 uA)")
});