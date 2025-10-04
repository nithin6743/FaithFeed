import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='App'>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Main isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
}

function Header({ isLogin, setIsLogin }) {
  const today = new Date();
  // console.log(today);
  const formattedDate = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  // console.log(formattedDate);
  function handleClick() {
    setIsLogin(!isLogin);
  }

  return (
    <div className='header'>
      <h1 className='LogoName' href='#'>
        FaithFeed
      </h1>
      <p className='Date'>{formattedDate}</p>
      {!isLogin ? (
        <a className='Login' onClick={handleClick}>
          Login
        </a>
      ) : (
        <button className='Signup' onClick={handleClick}>
          Signup
        </button>
      )}
    </div>
  );
}

function Main({ isLogin, setIsLogin }) {

  function handleEnterButton(e) {
    e.preventDefault();
  }
  return (
    <div className='main'>
      {!isLogin ? (
        <div className='content'>
          <h1 className='title'>Start Fresh in Faith</h1>
          <p className='subtitle'>Explore truth, light, and meaning—one verse at a time.</p>
          <form className='signupfields'>
            <input className='signUpInput' type='text' placeholder='Name' />
            <input className='signUpInput' type='text' placeholder='Email' />
            <input className='signUpInput' type='text' placeholder='Password' />
            <button className='enterPage' onClick={handleEnterButton}>
              Get OTP
            </button>
          </form>
        </div>
      ) : (
        <div className='content'>
          <h1 className='title'>Welcome Home</h1>
          <p className='subtitle'>The Word’s been waiting. Your faith story continues here.</p>
          <form className='signupfields'>
            <input className='signUpInput' type='text' placeholder='Email' />
            <input className='signUpInput' type='text' placeholder='Password' />
            <button className='enterPage' onClick={handleEnterButton}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
