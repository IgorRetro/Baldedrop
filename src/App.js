import React from 'react';
import './App.css';
import LoginModal from './LoginModal'

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

const Main = () => (
  <div>
    <div className="background">
      <div className="application-highlight">
        <h1>Welcome to our data storage
        for your easy teamwork!</h1>
      </div>
      <LoginModal email="Email" password="Password" rememberMe="true" />

    </div>
    <div className="features">
      <h2>
        Features
      </h2>
    </div>
  </div>
)

const App = () => (
  <div className='App-wrapper'>
    <Header />
    <Main />
  </div>
);


export default App;
