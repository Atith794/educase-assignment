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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
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
