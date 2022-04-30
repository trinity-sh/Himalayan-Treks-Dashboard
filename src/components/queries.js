import React, { useEffect, useState } from 'react';
import ContentBar from './contentDivBar';
import '../styles/form-view.css';
import '../styles/content-div.css';

export default function (props) {
  const [formViewState, setFormViewState] = useState(false); // must be falsed
  var formViewDiv = <>
    <div id='form-root'>
      <div id='form-sub-root'>
        <div id='all-treks-form-flex'>
          <div style={{ position: 'absolute', top: '0px', right: '0px' }}><button className='db-button button-cancel' style={{ width: '8px' }} onClick={() => setFormViewState(false)}><b>X</b></button></div>
          <div style={{ textAlign: 'left' }}><span style={{ fontSize: '25px', fontFamily: 'Montserrat' }}><b>Queries</b> form view:</span></div>
          <br />
          <form>
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Index</span></div>
            <input type='text' name='index' style={{ width: '100%', marginTop: '3px', height: '20px' }} disabled /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Primary key</span></div>
            <input type='text' name='primary-key' style={{ width: '100%', marginTop: '3px', height: '20px' }} disabled /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Email</span></div>
            <input type='email' name='trek-title' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Name</span></div>
            <input type='text' name='height' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Contact No.</span></div>
            <input type='tel' name='tagline' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Message</span></div>
            <textarea name='gallery' style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '100px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div><button className='db-button button-cancel' onClick={() => setFormViewState(false)}><b>Cancel</b></button></div>
              <div style={{ flex: '1 1 auto' }} />
              <div><button className='db-button button-update' onClick={() => console.log('update')}><b>Update</b></button></div>
            </div>
          </form>
        </div>
      </div>
    </div >
  </>;

  useEffect(() => {
    const adjustContentDivWidth = () => {
      // set panel and content div widths
      const x = document.getElementById('content-div-bar');
      const y = document.getElementById('db-box');
      const sidePanelWidth = parseInt(
        window.getComputedStyle(document.getElementById('side-panel'), null)['width']
          .replace('px', '')
      );

      const contentBarHeight = parseInt(
        window.getComputedStyle(document.getElementById('content-div-bar'), null)['height']
          .replace('px', '')
      );
      x.style.width = `${window.innerWidth - sidePanelWidth - 2 * 40}px`;
      y.style.height = `${window.innerHeight - 120 - contentBarHeight}px`;
      y.style.marginTop = `${contentBarHeight + 60}px`
    };
    window.addEventListener('resize', adjustContentDivWidth);
    // initial rendering after DOM Loads
    adjustContentDivWidth();
  }, []);

  return (
    <>
      <div id='content-div-bar'>
        <ContentBar
          title='Queries'
          sub='An enumeration of all queries received from the website.'
        />
      </div>
      <div id='db-box' className='content-font-header-2 content-div-indent' style={{ borderRadius: '10px', backgroundColor: 'white', overflow: 'auto', border: '1px solid', borderColor: '#c6c6c6' }}>
        Database Entries:<br /><br />
        {
          /* list items to be added here */
          <>
            <div className='item-box'>
              <div className='table'>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Index:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>0</div>
                    </div>
                  </div>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Email:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>hi@hi.hi</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Name:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Jayanta Pandit</div>
                    </div>
                  </div>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Contact No.:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>+916969696969</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table'>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Message:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', minWidth: '800px' }}>
                <div style={{ flex: '1' }} />
                <button className="db-button" onClick={() => setFormViewState(true)}><span className='material-symbols-outlined' style={{ fontSize: '20px' }}>edit_note</span>&nbsp;<b>Edit</b></button>
                <button className="db-button"><span className='material-symbols-outlined' style={{ fontSize: '20px' }}>delete_forever</span>&nbsp;<b>Delete</b></button>
              </div>
            </div>
            <div style={{ height: '30px' }} />
          </>
        }
        &nbsp;
      </div>
      {formViewState ? formViewDiv : <> </>}
    </>
  );
}
