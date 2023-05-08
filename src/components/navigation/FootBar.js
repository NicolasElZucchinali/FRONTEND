import React from "react";

import './FootBar.css';

const FootBar = props => {

  return (
    <div className="footer">
      <div className="footer-row" onClick={props.mapHandler}>
        <img className="footer-img" src="/img/mappaButton.png" alt="mappa"/>
        <button className="footer-btn">MAPPA</button>
      </div>
      <div className="footer-row" onClick={props.labHandler}>
        <img className="footer-img" src="/img/mappaButton.png" alt="lab"/>
        <button className="footer-btn">LABORATORI</button>
      </div>
      <div className="footer-row" onClick={props.libraryHandler}>
        <img className="footer-img" src="/img/mappaButton.png" alt="library"/>
        <button className="footer-btn">BIBLIOTECA</button>
      </div>
      <div className="footer-row" onClick={props.accessHandler}>
        <img className="footer-img" src="/img/utente.png" alt="account"/>
        <button className="footer-btn">SPAZIO PERSONALE</button>
      </div>
      <div className="footer-row" onClick={props.tourHandler}>
        <img className="footer-img" src="/img/mappaButton.png" alt="account"/>
        <button className="footer-btn">CREA IL TUO TOUR</button>
      </div>
    </div>
  );
};

export default FootBar;