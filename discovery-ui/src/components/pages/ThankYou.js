import React, { Component } from 'react'
import { connect } from 'react-redux'
import TxtTitle from '../elements/TxtTitle'
import SubTitle from '../elements/SubTitle'


class ThankYou extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row ty">
          <TxtTitle text={this.props.txtTitle} />
          <div className="tab-des-ty">
            <SubTitle text={this.props.signUpTxt} />
            <div className="bodyCopy">
              <p>Look out for the latest news on your favorite shows.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  txtTitle: state.txtTitle2,
  emailText: state.emailText,
  email: state.email,
  signUpTxt: state.signUpTxt3
})
export default connect(mapStateToProps)(ThankYou);
