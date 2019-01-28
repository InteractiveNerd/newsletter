import React, { Component } from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'enter email address',
      gdpr: ''
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  handleSumbit = (e) => {
      e.preventDefault();
      this.props.signUp(this.state)
      // console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            <p>Join The List:</p>
          </div>
          <div className="subTitle">
            <p>Almost Done! Please Enter Your First and Last Name.</p>
          </div>
          <div className="email">
            <input id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="submitBtn">
            <input type="submit" value="Submit" />
          </div>
          <div className="gdpr">
            <label>
              <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
              I agree to receive information from Discovery Communications in accordance with the following <a href="https://www.google.com/" >Privacy Policy</a>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;