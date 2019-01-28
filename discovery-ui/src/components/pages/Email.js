import React, { Component } from 'react'

class Email extends Component {
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
          <form onSubmit={this.handleSubmit} className="">
            <div className="title">
              <p>Join The List:</p>
            </div>
            <div className="subTitle">
              <p><span class="aw">Sign up for</span> <span class="aw">the TLC newsletter</span></p>
            </div>
            <div className="email">
              <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="submitBtn">
              <input type="submit" value="Next" />
            </div>
            <div className="gdpr">
              <div><input id="gdpr" name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} /></div>
              <div>
                <label for="gdpr">
                  <span class="aw">I agree to receive information from</span> <span class="aw">Discovery Communications in accordance</span> <span class="aw">with the following <a href="https://www.google.com/" >Privacy Policy</a></span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Email;