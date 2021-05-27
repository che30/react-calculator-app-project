import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


import App from './App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('type', () => {
  render(<App />)
  const buttonEl = screen.getByText(/1/i);
  expect(buttonEl).toBeInTheDocument();
  // userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!')
  // expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!')
})