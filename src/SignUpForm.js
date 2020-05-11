import React from 'react';

const SignUpForm = (props) => {
    return !props.verificationCodeGot ? (
     <div className="sign-up-modal">
        <form className="sign-up-form" onSubmit={(e) => e.preventDefault()}>
            <label className="close-sign" onClick={props.handleClose}>&times;</label>
            <label className="sign-up-form-logo">baldedrop</label>
            <label className="form-header">Create a new account</label>
            <select id="greeting" name="greeting">
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
                <option value="Mrs">Mrs.</option>
            </select>
            <input type="text" placeholder="First Name" className="sign-up-input" id="name" name="firstName" onChange={props.handleChange}></input>
            <input type="text" placeholder="Last Name" className="sign-up-input" id="lastname" name="lastName" onChange={props.handleChange}></input>
            <label className="sign-up-label" id="company">
                Company
            <input className="sign-up-input" type="text" name="company" onChange={props.handleChange}></input>
            </label>

            <label className="sign-up-label" id="department">
                Department
            <input className="sign-up-input" type="text" name="department" onChange={props.handleChange}></input>
            </label>

            <label className="sign-up-label" id="email">
                e-mail:
            <input className="sign-up-input" type="email" name="email" onChange={props.handleChange}></input>
            </label>

            <label className="sign-up-label" id="password">
                password:
            <input className="sign-up-input" type="password" name="password" onChange={props.handleChange}></input>
            </label>

            <label className="sign-up-label" id="confirm">
                confirm password:
            <input className="sign-up-input" type="password" name="confirm" ></input>
            </label>

            <button className="sign-up-form-button active" id="start-free" onClick={props.handleStart}>Start FREE</button>
            <button className="sign-up-form-button" id="start-business">Start BUSINESS</button>
        </form>
    </div>
    ) : (
        <div className="sign-up-modal">
        <form className="sign-up-form" onSubmit={(e) => e.preventDefault()}>
            <label className="close-sign" onClick={props.handleClose}>&times;</label>
            <label className="sign-up-form-logo">baldedrop</label>
            <label className="form-header">Check your e-mail and input the verification code</label>
            <label className="sign-up-label" id="company">
                Verification Code
            <input className="sign-up-input" type="text" name="verification" onChange={props.handleChange}></input>
            </label>

            
            <button className="sign-up-form-button active" id="resend-verification" onClick={props.handleResend}>Resend Code</button>
            <button className="sign-up-form-button" id="confirm-verification" onClick={props.handleVerification}>Confirm code</button>
        </form>
    </div>
    ) 
}

export default SignUpForm;
