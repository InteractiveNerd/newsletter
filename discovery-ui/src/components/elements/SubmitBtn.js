import React from 'react'

const SubmitBtn = props => {
  return (
    <div>
      <div className="submitBtn">
        <input type="submit" value={props.text} />
      </div>
    </div>
  )
}

export default SubmitBtn

