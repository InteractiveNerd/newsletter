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
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="title">
              <p>Join The List:</p>
            </div>
            <div className="subTitle">
              <p>Almost Done! Please Enter Your First and Last Name.</p>
            </div>
            <div className="fullName">
              <div className="fName">
                <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </div>
              <div className="lName">
                <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </div>
            </div>
            <div className="submitBtn">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp;