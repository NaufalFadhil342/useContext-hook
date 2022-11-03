import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../helper/context';

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(Context);
  let navigate = useNavigate();

  const loginHandler = () => {
    setLoggedIn(true);

    navigate('/profile');
  };

  const logoutHandler = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>THIS IS LOGIN PAGE</h1>
      {loggedIn ? <button onClick={logoutHandler}>Logout</button> : <button onClick={loginHandler}>Login</button>}
      {loggedIn ? <h3 style={{ color: 'green' }}>You are Logged In</h3> : <h3 style={{ color: 'red' }}>You are not logged in</h3>}
    </div>
  );
};

export default Login;
