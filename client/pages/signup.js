import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post('/sign-up', {
        firstName,
        email,
        username,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='signup'>
      <h1>Sign Up Page</h1>
      <form action='POST'>
        <input
          type='text'
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type='submit' onClick={submit}></input>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to='/'>Login!</Link>
    </div>
  );
};

export default SignUp;
