import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function clearInput() {
    console.log('hello');
    setFirstName('');
    setEmail('');
    setUsername('');
    setPassword('');
  }

  async function submit(e) {
    console.log('submit firts');
    e.preventDefault();

    try {
      console.log('axios call');
      await axios
        .post('/api/sign-up', {
          firstName,
          email,
          username,
          password,
        })
        .then(function (response) {
          if (response.status === 200) {
            navigate('/home', { replace: true });
          }
        });
      setFirstName('');
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='signup'>
      <h2>Sign Up Page</h2>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to='/'>Login!</Link>
    </div>
  );
};

export default SignUp;
