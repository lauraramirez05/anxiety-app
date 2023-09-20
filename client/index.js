import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//TODO import css styles so webpack can bundle it

render(
  <App />,
  document.getElementById('root')
  )