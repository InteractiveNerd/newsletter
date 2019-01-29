import React, { Component } from 'react';
import Email from './components/pages/Email';
import SignUp from './components/pages/SignUp';
import ThankYou from './components/pages/ThankYou'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';

const initState = {
  firstName: 'First Name',
  lastName: 'Last Name',
  emailText: 'enter email address',
  email: '',
  gdpr: '',
  txtTitle: 'Join The List',
  txtTitle2: 'congradulations!',
  signUpTxt: 'Sign up for the TLC newsletter',
  signUpTxt2: 'Almost Done! Please Enter Your First and Last Name.'
}
function reducer(state = initState, action) {
  switch (action.type) {
    case "INIT":
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      emailText: state.emailText,
      txtTitle: state.txtTitle,
      signUpTxt: state.signUpTxt,
      signUpTxt2: state.signUpTxt2
    }
    case "DECREMENT":
    return {
      emailText: state.emailText
    }
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: "INIT" })
// store.dispatch({ type: "DECREMENT" })
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact component={Email} />
            <Route path="/sign-up/" component={SignUp} />
            <Route path="/thank-you/" component={ThankYou} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
