import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllTreks from '../components/allTreks';
import Blogs from '../components/blogs.js';
import Queries from '../components/queries.js';
import '../styles/content-div.css';

function contentDiv() {
  useEffect(() => {
    const adjustContentDivWidth = () => {
      // set panel and content div widths
      const w = document.getElementById('main-content-div');
      const sidePanelWidth = parseInt(
        window.getComputedStyle(document.getElementById('side-panel'), null)['width']
          .replace('px', '')
      );
      w.style.height = `${window.innerHeight}px`;
      w.style.width = `${window.innerWidth - sidePanelWidth}px`;
    };
    window.addEventListener('resize', adjustContentDivWidth);
    // initial rendering after DOM Loads
    adjustContentDivWidth();
  }, []);

  return (
    <div id='main-content-div'>
      <Routes>
        <Route path='/dashboard/all-treks' element={<AllTreks />} />
        <Route path='/dashboard/blogs' element={<Blogs />} />
        <Route path='/dashboard/queries' element={<Queries />} />
      </Routes>
    </div>
  );
}

export default contentDiv;