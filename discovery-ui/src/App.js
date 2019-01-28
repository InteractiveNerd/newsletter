import React, { Component } from 'react';
import Email from './components/pages/Email';
import SignUp from './components/pages/SignUp';
import ThankYou from './components/pages/ThankYou'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Email} />
          <Route path="/sign-up/" component={SignUp} />
          <Route path="/thank-you/" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
