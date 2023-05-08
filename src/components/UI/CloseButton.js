import React from "react";

import './CloseButton.css';


const CloseButton = props => {
  return (
    <div className="close" onClick={props.close}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CloseButton;
