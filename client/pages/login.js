import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  console.log(username);
  const [password, setPassword] = useState('');
  console.log(password);

  //call the navigate function on top of functional component, otherwise I'm breaking the rules
  const navigate = useNavigate();

  async function submit(e) {
    console.log('inside submit function');
    e.preventDefault();

    try {
      console.log('axios call about to start');
      await axios
        .post('/api', { username, password })
        .then(function (response) {
          console.log(response.status);
          if (response.status === 200) {
            navigate('/home', { replace: true });
          }
        });
      setUsername('');
      setPassword('');
      console.log('axios done');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='login'>
      <h2>Login Page</h2>

      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to='/sign-up'>Sign Up!</Link>
    </div>
  );
};

export default Login;
