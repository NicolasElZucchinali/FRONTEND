import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import useUserStore from "../../stateManagerStore/useUserStore"



function Login(props){

    const userCred = useUserStore((state)=> state.login)

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    const handleLoginNetCore = (res) => {

        var dataGoogle = new FormData();
        dataGoogle.append("code", JSON.stringify(res));

        
        document.getElementById('googleLogin').style.display="none";
        document.getElementById('procediBtn').style.display="block";
        

        var googleUserCredential = res;
        console.log(googleUserCredential);

        fetch('https://accademiaetic.eu/Edulogin/GoogleUserLogin',{
            method: 'POST',
            body: dataGoogle,
        }).then(
            r => r.json()
            ).then(
                res => {
                
                    
                //JSON Example
                /* {
                    "UserId": "76f6b946-c0a7-46c0-861c-a365a37b851e",
                    "UserEmail": "io.lorenzo.gaspari@gmail.com",
                    "UserName": "Gaspari Lorenzo",
                    "EduversoToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJ1c2VyaWQiLCJ1bmlxdWVfbmFtZSI6Ikdhc3BhcmkgTG9yZW56byIsIm5iZiI6MTY4MjM1Njc0OSwiZXhwIjoxNjgyMzU2OTg5LCJpYXQiOjE2ODIzNTY3NDl9.047hZxphPj_gzTB7J4UWXNWg0Bhc1soMAP-EKdesMAo",
                    "EduversoRole": 0,
                    "FirstAccess": true,
                    "Url": "Description"
                } */
                
                var parsed = JSON.parse(res["userlogin"]);
                console.log(parsed);
                
                userCred(parsed.UserId,parsed.UserName, parsed.UserEmail, parsed.UserPicturePath)
                
                Cookies.set('uid',  parsed["UserId"],  {secure: true, sameSite: 'None'} );
                Cookies.set('auth', parsed["EduversoToken"],  {secure: true, sameSite: 'None'});
            }) 
    }
    

    return(
        
        <div id='signInButton'>
            <div id="googleLogin">
            <GoogleLogin 
            
            buttonText='Login'
            onSuccess={handleLoginNetCore}
            prompt='consent'
            access_type='offline'
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            flow= 'auth-code'
            />
            </div>
            <button style={{display:"none"}} id="procediBtn" onClick={props.authHandler}>Procedi</button>
        </div>
        
    )
}


export default Login;