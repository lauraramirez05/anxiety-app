import React, { useState } from 'react';
import axios from 'axios';
import Entry from '../components/Entry';

const Home = () => {
  const [anxietyLevel, setAnxietyLevel] = useState('');
  const [trigger, setTrigger] = useState('');
  const [log, setLog] = useState('');
  const [entries, setEntries] = useState([]);

  async function handleClick(e) {
    e.preventDefault();

    try {
      await axios.post('/api/home', {
        anxietyLevel,
        trigger,
        log,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='log-container'>
      <div className='welcome'>
        <h2>Welcome Back ...</h2>
      </div>

      <form>
        <label>
          What is your anxiety level today?
          <select
            defaultValue='none'
            onChange={(e) => setAnxietyLevel(e.target.value)}
          >
            <option value='mild'>Low Anxiety</option>
            <option value='moderate'>Moderate Anxiety</option>
            <option value='high'>High Anxiety</option>
          </select>
        </label>

        <label htmlFor='trigger'>What was your trigger today?</label>
        <input
          id='trigger'
          onChange={(e) => setTrigger(e.target.value)}
        ></input>

        <label htmlFor='log'>Log about your day:</label>
        <input id='log' onChange={(e) => setLog(e.target.value)}></input>

        <button className='btn' onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
