import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//TODO import css styles so webpack can bundle it
import styles from './css/styles.css';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
