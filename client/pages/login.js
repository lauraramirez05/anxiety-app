import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  console.log(username);
  const [password, setPassword] = useState('');
  console.log(password);

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post('/api', { username, password });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='login'>
      <h1>Login Page</h1>

      <form action='POST'>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type='password'
          placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input type='submit' onClick={submit}></input>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to='/sign-up'>Sign Up!</Link>
    </div>
  );
};

export default Login;
