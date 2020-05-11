import React, { useState } from 'react';
import './LoginModal.css';
import Google from './Google logo.png';
import SignUpForm from './SignUpForm'

function googleAuth() {
    debugger;
    const urlAuthorisationGoogle = 'http://baldedrop.hopto.org/oauth2/authorization/google';



    fetch(urlAuthorisationGoogle, { redirect: 'follow' })
        .catch(Error => console.log(Error))
        .then(response => response.url())
        .then(data => console.log(data))

    debugger
    //     console.log(response);
    //     if (response.ok) {
    //         const token = response.headers.Authorization;
    //         window.localStorage.auth = token;
    //     } else if (response.redirected) {
    //         let urlRedirect = response.url;
    //         console.log(urlRedirect);
    //         response = Response.redirect(urlRedirect);
    //     } else console.log('ошибка');
}

const LoginModal = (props) => {
    const [signUpDisplay, setSignUpDisplay] = useState(false);

    const displaySignUp = () => setSignUpDisplay(true);
    const handleClose = () => setSignUpDisplay(false);

    const onRememberMeChangeHandler = () => {

    }
    // Event handlers for signup form    
    function handleChange(e) {
        props.onSignUpDataChange(e);
    }

    function handleStart() {
        props.onStartFree()
    }

    function handleLoginSubmit(e) {
    }

    const handleVerification = () => {
        
    }

    // ----------------------------------------------------------------------------
    return signUpDisplay ? (
        <SignUpForm
            handleChange={handleChange}
            handleClose={handleClose}
            handleStart={handleStart}
            handleVerification={handleVerification}
            verificationCodeGot={props.verificationCodeGot}
        />
    ) : (
            <div className="login-modal">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label className="log-in">Log in</label>
                    <label className="label or">or</label>
                    <button className="sign-up-button" onClick={displaySignUp}>Create a new account</button>
                    <input className="log-in-input email" placeholder=" e-mail" type="email"></input>
                    <input className="log-in-input password" placeholder=" password" type="password"></input>
                    <input className="checkbox" type="checkbox" name="remember-me" defaultChecked ></input>
                    <label className="label remember" htmlFor="remember-me">Remember me</label>
                    <button className="log-in-button" onClick={handleLoginSubmit}>Log in</button>
                    <button className="google-button" onClick={googleAuth}><img alt="google-logo" src={Google}></img>Log in with Google</button>
                </form>
            </div>
        )
}


export default LoginModal;