import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import regeneratorRuntime from 'regenerator-runtime';
import Display from './Display';

import App from './App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
describe('Calculator operations', () => {
  beforeEach(() => {
    render(<App />);
  });
it('type', () => {
  const buttonEl = screen.getByText(/1/i);
  expect(buttonEl).toBeInTheDocument();
})
it('add two numbers', async ()=>{
  await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('+'))
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/46/);
    expect(display).toBeInTheDocument();
})
it('subtract two numbers', async ()=>{
  await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('-'))
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/-22/);
    expect(display).toBeInTheDocument();
})
it('Multiply two numbers', async ()=>{
  await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('*'))
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText(/408/);
    expect(display).toBeInTheDocument();
})
it('Divide two numbers', async ()=>{
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('0'));
  await userEvent.click(screen.getByText('/'))
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('='));
  const display = await screen.findByText(/10/);
  expect(display).toBeInTheDocument();
})
it('check if +/- is working', async ()=>{
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('+/-'));
  const display = await screen.findByText(/-2/);
  expect(display).toBeInTheDocument();
})
it('check if AC is working', async ()=>{
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('3'));
  await userEvent.click(screen.getByText('AC'));
  expect(screen.queryByText('23')).toBeNull();
})


})