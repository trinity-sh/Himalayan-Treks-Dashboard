import React from 'react';
import SidePanel from './components/sidePanel';
import ContentDiv from './components/contentDiv';
import './styles/button-grad.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div id='sub-root-div'>
        <SidePanel />
        <ContentDiv />
      </div>
    </BrowserRouter>
  );
}

export default App;
