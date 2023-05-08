import React from "react";

import './Input.css';

const Input = props => {
  return(
    <div className="input">
      <b className="input-tag" type="login">LOGIN</b>
      <input className="input-text" type="email" id="email" placeholder="email" required />
      <input className="input-text" type="password" id="pasword" placeholder="password" required/>
      <button onClick={props.profiloHandler} className="input-btn" type="submit">ACCEDI</button>
      <h6 className="input-forgot" type="forgot">Password dimenticata?</h6>
    </div>
  );
};



export default Input;