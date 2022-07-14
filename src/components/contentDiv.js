import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTreks from '../components/allTreks';
import DiscountedTreks from '../components/discountedTreks';
import Camping from '../components/camping';
import Blogs from '../components/blogs';
import Bookings from '../components/queries';
import '../styles/content-div.css';

function ContentDiv() {
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
    setTimeout(() => {
      adjustContentDivWidth();
    }, 1);
  }, []);

  return (
    <div id='main-content-div'>
      <Routes>
        <Route path='/all-treks' element={<AllTreks />} />
        <Route path='/discounted-treks' element={<DiscountedTreks />} />
        <Route path='/camping' element={<Camping />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/bookings' element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default ContentDiv;
