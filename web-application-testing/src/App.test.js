import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Balls/i);
  // console.log(linkElement)
  expect(linkElement[0]).toBeInTheDocument();
});

// test for displays
test('testing balls', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/balls/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/strikes/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('strike-button test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/strike-button/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('ball-button test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/ball-button/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('foul-button test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/foul-button/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('hit-button test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/hit-button/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

// 
// testing the outcome of the rules showing on display
// programmabley pressing strike button
test("fire event", () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId("strike-button")

  // 3 strikes test
  for(let i = 0; i < 4; i++) {
    fireEvent.click(button);

  }
  // getByTestId("strikes")

  expect(getByTestId("strikes")).toHaveTextContent("1");

} )
