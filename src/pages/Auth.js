import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import logo from '../assets/logos/green-bg.png';
import whiteLogo from '../assets/logos/white-bg.png';

const LOGIN = 'login';
const SIGNUP = 'signup';

function Auth() {
  const [authType, setAuthType] = useState(LOGIN);

  const toggleAuthType = () => {
    authType === LOGIN ? setAuthType(SIGNUP) : setAuthType(LOGIN);
  };
  return (
    <div className='AuthBg'>
      <div className='AuthFormContainer'>
        <img src={whiteLogo} className='AuthPageMobLogo' alt='logo' />
        {authType === LOGIN ? (
          <LoginForm toggleAuthType={toggleAuthType} />
        ) : (
          <SignupForm toggleAuthType={toggleAuthType} />
        )}
      </div>
      <div className='LogoContainer'>
        <img src={logo} className='AuthPageLogo' alt='logo' />
      </div>
    </div>
  );
}

export default Auth;
