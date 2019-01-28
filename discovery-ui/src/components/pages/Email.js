import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      emailText: 'enter email address',
      email: '',
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
    console.log(this.state);
    this.props.history.push('/sign-up');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} >
            <div className="title">
              <p>Join The List</p>
            </div>
            <div className="tab-des">
              <div className="subTitle">
                <p><span className="aw">Sign up for</span> <span className="aw">the TLC newsletter</span></p>
              </div>
              <div className="form-group">
                <div className="email">
                  <input type="email" id="email" placeholder={this.state.emailText} value={this.state.email} onChange={this.handleChange} required="1"/>
                </div>
                <div className="submitBtn">
                  <input type="submit" value="Submit" />
                </div>
              </div>
              <div className="gdpr">
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
export default withRouter(Email);