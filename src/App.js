import React from 'react';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
    </div>
  );
}

export default App;

export const add = (x, y) => {
  return x + y;
};

export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal);
};
