import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/LM317 Calculator/i);
  expect(titleElement).toBeInTheDocument();
});

test('Values are computed', () => {
  const {container} = render(<App />);
  expect(container.querySelector("#V_out_sidebar")).toHaveTextContent("5.04")
  fireEvent.change(container.querySelector('input[name="R_2"'), {target: {value: '220'}})
  expect(container.querySelector("#V_out_sidebar")).toHaveTextContent("2.41")
});
