import React from 'react';
import '../App.css';
import SidePanel from './sidePanel';
import ContentDiv from './contentDiv';

function dashboard() {
  return (<>
    <SidePanel />
    <ContentDiv />
  </>);
}

export default dashboard;