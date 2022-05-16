import React, { useEffect } from 'react';
import LoginForm from './components/loginForm';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/dash';
import './styles/button-grad.css';
import './App.css';

function App() {
  return (
    <div id='sub-root-div'>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/profile/*' element={<Dashboard />} />
        <Route path='*' element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
