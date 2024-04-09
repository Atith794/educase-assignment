import { useState } from 'react';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import ProfilePage from './Components/ProfilePage';
import SignUpPage from './Components/SignUpPage';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>  
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App
