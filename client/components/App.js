import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//TODO import app.css
//TODO import all pages
import SignUp from '../pages/signup';
import Login from '../pages/login';
import Home from '../pages/home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route index path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     (<div>HELLOOOOOOO</div>),
//   //   (
//   //     <Router>
//   //       <Routes>
//   //         <Route path='/sign-up' element={<SignUp />}></Route>
//   //       </Routes>
//   //     </Router>
//   //   )
//     )
// }

export default App;
