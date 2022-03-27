import React from 'react';

const SubmitBtn = (props) => {
  const { text } = props;
  return (
    <React.Fragment>
      <div className="submitBtn">
        <input type="submit" value={text} />
      </div>
    </React.Fragment>
  );
};

export default SubmitBtn;
