import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
// import Test from './test';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './home';
import SignUp from './user/signup';
import SignIn from './user/signin';
import Header from './header';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </div>
  
);
