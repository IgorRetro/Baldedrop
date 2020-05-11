import React, { useState } from 'react';
import './App.css';
import LoginModal from './LoginModal';
import Secure from './images/secure.png';
import Remote from './images/remote.png';
import Organised from './images/organized.png'

const url = "http://baldedrop.hopto.org/";
const signUpUrl = "signup";
const verifyUrl = 'vefify';

const Header = () => (
  <header className="header">
    <button className="logo">Baldedrop</button>
    <ul className="nav-links">
      <li><button className="header-button">Plan</button></li>
      <li><button className="header-button">Security</button></li>
      <li><button className="header-button">Features</button></li>
      <li><button className="header-button">About us</button></li>
    </ul>
  </header>

)

const Main = () => {
  const [signUpData, setSignUpData] = useState({
    greeting: 'Mr.',
    firstName: '',
    lastName: '',
    company: '',
    department: '',
    email: '',
    password: '',
    plan: 'FREE',
    verification: null
  });
  const [verificationCodeGot, setVerificationCodeGot] = useState(false);

  //Обработчик изменения данных в форме подписки
  const SignUpDataChange = (e) => {
    const updatedValues = { [e.target.name]: e.target.value };
    setSignUpData(prevState => {
      return { ...prevState, ...updatedValues };
    });
  }

  // Обработчик клика подписки на бесплатный сервис в форме подписки
  const startFreeClickHandler = () => {
    console.log('startFreeClickHandler triggered');
    console.log(signUpData);
    fetch(url + signUpUrl, {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.error === '') {
          if (json.data.code_sent === true) {
            setVerificationCodeGot(true);
          } else console.log('ERROR OF SIGN-UP');

        }
      })
  }

  const handleVerification = () => {
    fetch(url + verifyUrl, {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.error === '') {
          if (json.data.code_sent === true) {
            setVerificationCodeGot(true);
          } else console.log('ERROR OF SIGN-UP');

        }
      })
  }

  return (
    <div>
      <div className="background">
        <div className="application-highlight">
          <h1>Welcome to our data storage
        for your easy teamwork!</h1>
        </div>
        <LoginModal
          signUpData={signUpData}
          onStartFree={startFreeClickHandler}
          onSignUpDataChange={SignUpDataChange}
          verificationCodeGot={verificationCodeGot}
          handleVerification={handleVerification}
          rememberMe="true" />

      </div>
      <div className="features">
        <h2>
          Features
      </h2>
        <div className="grid-container">
          <div className="grid-item item1"><img alt="secure cloud" src={Secure}></img></div>
          <div className="grid-item item2">Data security is our top priority. Start your free account and use up to 10 GB of memory. Switch to BUSINESS plan for getting unlimited advantages.</div>
          <div className="grid-item item3"><img alt="organised data" src={Organised}></img></div>
          <div className="grid-item item4">Well organised storage with clear structure. Fast and easy search in the cloud.</div>
          <div className="grid-item item5"><img alt="remote access" src={Remote}></img></div>
          <div className="grid-item item6">Quick and easy remote access from any place you have an Internet connection. Private and corporate solutions in one product.</div>
        </div>
      </div>
    </div>
  )
}

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return !isLoggedIn ? (
    <div className='App-wrapper'>
      <Header />
      <Main />
    </div>
  ) : (
      <h1>ЗАЛОГИНИЛСЯ!!!</h1>
    )
}
export default App;