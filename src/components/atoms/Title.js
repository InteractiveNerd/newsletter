import React from 'react';

export default function Title({ text, type: titleType }) {
  return (
    <React.Fragment>
      <div className={titleType}>
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
}
