import React, {useState} from "react";
import "./Access.css";
import Logo from "./Logo";
import Login from './Login';
import Authorize from "./Authorize";
import { GoogleOAuthProvider} from '@react-oauth/google';


const clientID = "104215956377-cmhsl8dngd83fj6c673j9jhjot03qkhd.apps.googleusercontent.com";

const Access= () => {

  const [auth, setAuth] = useState(false);
  

  const authClick = () => {
    if(auth){
      setAuth(false);
      
    } else {
      setAuth(true);
      
    }
  };

  return(
    <div className="centered">
      <div className="login">
        <Logo />
        <div className="vertical-line">
          <img className="line" alt="line" src="/img/linea.png" />
        </div>

        {/* {profilo && <Profilo></Profilo>}
        <Input profiloHandler={profiloClick}/> */}

                    <GoogleOAuthProvider clientId={clientID} >
                        {/* <Login/> */}
                        {!auth && <Login authHandler={authClick}></Login>}
                        {auth && <Authorize></Authorize>}
                    </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Access;