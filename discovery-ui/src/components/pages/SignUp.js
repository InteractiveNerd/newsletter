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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
      this.props.history.push('/thank-you');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="title">
              <p>Join The List</p>
            </div>
            <div className="tab-des">
            <div className="subTitle">
              <p>Almost Done! Please Enter Your First and Last Name.</p>
            </div>
            <div className="form-group">
              <div className="fullName">
                <div className="fName">
                  <input type="text" id="firstName" placeholder={this.state.firstName} value={this.state.firstName} onChange={this.handleChange}  required="1"/>
                </div>
                <div className="lName">
                  <input type="text" id="lastName" placeholder={this.state.lastName} value={this.state.lastName} onChange={this.handleChange}  required="1"/>
                </div>
              </div>
              <div className="submitBtn">
                <input type="submit" value="Sign Up" />
              </div>
              
            </div>
              <div className="gdpr plh">
                <div><input id="gdpr" name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} /></div>
                <div>
                  <label htmlFor="gdpr">
                    <span className="aw">I agree to receive information from</span> <span className="aw">Discovery Communications in accordance</span> <span className="aw">with the following <a href="https://www.google.com/" >Privacy Policy</a></span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp;