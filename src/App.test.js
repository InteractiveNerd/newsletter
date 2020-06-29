import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('First Test', () => {
  test('works', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/sign up for the IN newsletter./i);
    expect(linkElement).toBeInTheDocument();
  });
});
