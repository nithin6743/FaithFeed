export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <div className='header'>
      <a className='LogoName' href='#'>
        FaithFeed
      </a>
      <a className='Date'>01/10/2025</a>
      <a className='Login' href='https://www.google.com/?zx=1759334362126&no_sw_cr=1'>
        Login
      </a>
    </div>
  );
}

function Main() {
  return (
    <div className='main'>
      <div className='content'>
        <h1 className='title'>Start Fresh in Faith</h1>
        <p className='subtitle'>Explore truth, light, and meaning—one verse at a time.</p>
        <form className='signupfields'>
          <input className='signUpInput' type='text' placeholder='Name' />
          <input className='signUpInput' type='text' placeholder='Email' />
          <input className='signUpInput' type='text' placeholder='Password' />
          <button className='OTPbutton' type='submit'>Get OTP</button>
        </form>
      </div>
    </div>
  );
}
