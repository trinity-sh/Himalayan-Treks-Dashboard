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
          <div style={{ textAlign: 'left' }}><span style={{ fontSize: '25px', fontFamily: 'Montserrat' }}><b>All Treks</b> form view:</span></div>
          <br />
          <form>
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Index</span></div>
            <input type='text' name='index' style={{ width: '100%', marginTop: '3px', height: '20px' }} disabled /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Trek title</span></div>
            <input type='text' name='trek-title' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Height (in ft)</span></div>
            <input type='number' name='height' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Tagline</span></div>
            <input type='text' name='tagline' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Fee (in INR)</span></div>
            <input type='number' name='fee' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Discount (in %)</span></div>
            <input type='text' name='primary-key' style={{ width: '100%', marginTop: '3px', height: '20px' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Region</span></div>
            <input type='text' name='region' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Base camp</span></div>
            <input type='text' name='base-camp' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Duration (in days)</span></div>
            <input type='number' name='duration' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Thumbnail (URL)</span></div>
            <input type='file' accept='image/*' name='thumbnail' style={{ width: '100%', marginTop: '3px', height: '30px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Description</span></div>
            <textarea name='description' style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '300px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Short itinerary</span></div>
            <textarea name='short-itinerary' style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '200px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Departure</span></div>
            <input type='text' name='departure' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery</span></div>
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
          title='All Treks'
          sub='An enumeration of all mountain treks listed in the website. Edit the objects to make changes reflect post a refresh.'
        />
        <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
          <button className="db-button"><span className='material-symbols-outlined' style={{ fontSize: '20px' }}>add</span>&nbsp;<b>New Trek</b></button>
        </div>
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
                      <div className='content-font-header-2'>Discount:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>30 %</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Trek Title:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Kedarnath Trek</div>
                    </div>
                  </div>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Height:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>6900 ft</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Tag line:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Bum bhole!</div>
                    </div>
                  </div>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Fee:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Rs 69000</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Region:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Uttarakhand</div>
                    </div>
                  </div>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Base Camp:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Meow Point</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Duration:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>9 days</div>
                    </div>
                  </div>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'></div>
                      <div className='content-font-sub-2-mono'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table'>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Thumbnail:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>https://i.pinimg.com/550x/4e/96/d8/4e96d8687d433609e8c72b0ed36f0918.jpg</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell' style={{ minWidth: '800px' }}>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Description:&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Short Itinerary:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Departure:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>['APRIL 2069', 'MARCH 6969']</div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='table-cell'>
                    <div className='item-box-flex-row-item'>
                      <div className='content-font-header-2'>Gallery:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <div className='content-font-sub-2-mono'>['https://i.pinimg.com/550x/4e/96/d8/4e96d8687d433609e8c72b0ed36f0918.jpg', 'https://i.pinimg.com/550x/4e/96/d8/4e96d8687d433609e8c72b0ed36f0918.jpg', 'https://i.pinimg.com/550x/4e/96/d8/4e96d8687d433609e8c72b0ed36f0918.jpg', 'https://i.pinimg.com/550x/4e/96/d8/4e96d8687d433609e8c72b0ed36f0918.jpg']</div>
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
