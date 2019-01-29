import React, { Component } from 'react';
import { connect } from 'react-redux'
import SubTitle from '../elements/SubTitle'
import TxtTitle from '../elements/TxtTitle'
import SubmitBtn from '../elements/SubmitBtn'

class Email extends Component {
  handleChange = (e) => {
    // this.setState({
    //     [e.target.id]: e.target.value
    // })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.history.push('/sign-up');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} >
            <TxtTitle text={this.props.txtTitle} />
            <div className="tab-des">
              <SubTitle text={this.props.signUpTxt} />
              <div className="form-group">
                <div className="email">
                  <input type="email" id="email" placeholder={this.props.emailText} value={this.props.email} onChange={this.handleChange} required="1"/>
                </div>
                <SubmitBtn text="Next" />
              </div>
              <div className="gdpr">
                <div><input id="gdpr" name="isGoing" type="checkbox" /></div>
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
const mapStateToProps = (state) => ({
  txtTitle: state.txtTitle,
  emailText: state.emailText,
  email: state.email,
  signUpTxt: state.signUpTxt
})
export default connect(mapStateToProps)(Email);