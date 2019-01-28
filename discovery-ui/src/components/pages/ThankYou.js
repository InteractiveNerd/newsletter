import React, { Component } from 'react'

class ThankYou extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row ty">
          <div className="title">
            <p>congratulations!</p>
          </div>
          <div className="tab-des-ty">
            <div className="subTitleTY">
              <p><span className="aw">Thank You For</span> <span className="aw">Signing Up!</span></p>
            </div>
            <div className="bodyCopy">
              <p>Look out for the latest news on your favorite shows.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThankYou;