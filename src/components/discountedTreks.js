import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentBar from './contentDivBar';
import '../styles/form-view.css';
import '../styles/content-div.css';

function DiscountedTreks(props) {
  const [isLoadingState, setIsLoadingState] = useState();
  const [trekDataState, setTrekDataState] = useState([]);

  const reload = async () => {
    setIsLoadingState(true);
    const res = await axios({
      url: 'https://himalyan-explorations.herokuapp.com/api/discountList',
      method: 'get'
    });
    setIsLoadingState(false);
    setTrekDataState(res.data);
  };

  const deleteTrek = async (id) => {
    if (window.confirm('Are you sure you want to delete this item from the database?')) {
      await fetch(`https://himalyan-explorations.herokuapp.com/api/discountDelete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      reload();
    }
  };

  const [newFormState, setNewFormState] = useState({});
  const [updateFormState, setUpdateFormState] = useState({});
  const [newFormViewState, setNewFormViewState] = useState(false);
  const [updateFormViewState, setUpdateFormViewState] = useState(false);

  const handleUpdateFormChange = (event) => {
    setUpdateFormState({
      ...updateFormState,
      [event.target.name]: event.target.value
    });
  };

  const updateFormSave = async () => {
    try {
      await axios({
        url: `https://himalyan-explorations.herokuapp.com/api/updateDiscount/${updateFormState.id}`,
        method: 'put',
        data: updateFormState,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      reload();
    } catch {
      alert('Update failed :(');
    }
  };

  var updateFormViewDiv = (item) => <>
    <div id='form-root'>
      <div id='form-sub-root'>
        <div id='all-treks-form-flex'>
          <div style={{ position: 'absolute', top: '0px', right: '0px' }}><button className='db-button button-cancel' style={{ width: '8px' }} onClick={() => setUpdateFormViewState(false)}><b>X</b></button></div>
          <div style={{ textAlign: 'left' }}><span style={{ fontSize: '25px', fontFamily: 'Montserrat' }}><b>All Treks</b> form view:</span></div>
          <br />
          <form>
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>ID</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='id' value={item.id} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} disabled /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Trek title</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='title' value={item.title} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Days</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='days' value={item.days} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Height</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='height' value={item.height} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Header image</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='img' value={item.img} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Price</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='price' value={item.price} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Camp location</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='camp_location' value={item.camp_location} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Region</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='location' value={item.location} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #1</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='gallery_img1' value={item.gallery_img1} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #2</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='gallery_img2' value={item.gallery_img2} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #3</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='gallery_img3' value={item.gallery_img3} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #4</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='gallery_img4' value={item.gallery_img4} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #5</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='gallery_img5' value={item.gallery_img5} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #6</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='gallery_img6' value={item.gallery_img6} style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Header image description</span></div>
            <input type='text' onChange={handleUpdateFormChange} name='img_desp' value={item.img_desp} style={{ width: '100%', marginTop: '3px', height: '30px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Trek description</span></div>
            <textarea name='desp' onChange={handleUpdateFormChange} value={item.desp} style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '300px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Itinerary</span></div>
            <textarea name='iternery' onChange={handleUpdateFormChange} value={item.iternery} style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '200px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div><button className='db-button button-cancel' onClick={() => { setUpdateFormViewState(false); setUpdateFormState({}); }}><b>Cancel</b></button></div>
              <div style={{ flex: '1 1 auto' }} />
              <div><button className='db-button button-update' onClick={() => { updateFormSave(); setUpdateFormViewState(false); reload(); }}><b>Save</b></button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>;

  const handleNewFormChange = (event) => {
    setNewFormState({
      ...newFormState,
      [event.target.name]: event.target.value
    });
  };

  const newFormSave = async () => {
    const form = new FormData();
    for (const key in newFormState)
      form.append(key, newFormState[key]);

    await axios({
      url: 'https://himalyan-explorations.herokuapp.com/api/discountForm',
      method: 'post',
      data: form
    });
    reload();
  };

  var newFormViewDiv = <>
    <div id='form-root'>
      <div id='form-sub-root'>
        <div id='all-treks-form-flex'>
          <div style={{ position: 'absolute', top: '0px', right: '0px' }}><button className='db-button button-cancel' style={{ width: '8px' }} onClick={() => { setNewFormViewState(false); }}><b>X</b></button></div>
          <div style={{ textAlign: 'left' }}><span style={{ fontSize: '25px', fontFamily: 'Montserrat' }}><b>Discounted Treks</b> form view:</span></div>
          <br />
          <form>
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Trek title</span></div>
            <input type='text' onChange={handleNewFormChange} name='title' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Days</span></div>
            <input type='text' onChange={handleNewFormChange} name='days' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Height</span></div>
            <input type='text' onChange={handleNewFormChange} name='height' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Header image</span></div>
            <input type='text' onChange={handleNewFormChange} name='img' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Price</span></div>
            <input type='text' onChange={handleNewFormChange} name='price' style={{ width: '100%', marginTop: '3px', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Trek location</span></div>
            <input type='text' onChange={handleNewFormChange} name='camp_location' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Region</span></div>
            <input type='text' onChange={handleNewFormChange} name='location' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #1</span></div>
            <input type='text' onChange={handleNewFormChange} name='gallery_img1' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #2</span></div>
            <input type='text' onChange={handleNewFormChange} name='gallery_img2' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #3</span></div>
            <input type='text' onChange={handleNewFormChange} name='gallery_img3' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #4</span></div>
            <input type='text' onChange={handleNewFormChange} name='gallery_img4' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #5</span></div>
            <input type='text' onChange={handleNewFormChange} name='gallery_img5' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Gallery image #6</span></div>
            <input type='text' onChange={handleNewFormChange} name='gallery_img6' style={{ width: '100%', marginTop: '3px', resize: 'vertical', height: '20px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Header image description</span></div>
            <input type='text' onChange={handleNewFormChange} name='img_desp' style={{ width: '100%', marginTop: '3px', height: '30px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Trek description</span></div>
            <textarea name='desp' onChange={handleNewFormChange} style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '300px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ textAlign: 'left' }}><span style={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500' }}>Itinerary</span></div>
            <textarea name='iternery' onChange={handleNewFormChange} style={{ width: '100%', marginTop: '3px', resize: 'vertical', minHeight: '200px', fontFamily: 'Fira Mono' }} /><br /><br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div><button className='db-button button-cancel' onClick={() => { setNewFormViewState(false); setNewFormState({}); }}><b>Cancel</b></button></div>
              <div style={{ flex: '1 1 auto' }} />
              <div><button className='db-button button-update' onClick={() => { newFormSave(); setNewFormViewState(false); reload(); }}><b>Save</b></button></div>
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

  useEffect(() => {
    (async () => {
      setIsLoadingState(true);
      const res = await axios({
        url: 'https://himalyan-explorations.herokuapp.com/api/discountList',
        method: 'get'
      });
      setIsLoadingState(false);
      setTrekDataState(res.data);
    })();
  }, []);

  return (
    <>
      <div id='content-div-bar'>
        <ContentBar
          title='Discounted Treks'
          sub='An enumeration of all mountain treks with discounts listed in the website.'
        />
        <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
          <button className="db-button" onClick={() => setNewFormViewState(true)}><span className='material-symbols-outlined' style={{ fontSize: '20px' }}>add</span>&nbsp;<b>New Trek</b></button>
        </div>
      </div>
      <div id='db-box' className='content-font-header-2 content-div-indent' style={{ borderRadius: '10px', backgroundColor: 'white', overflow: 'auto', border: '1px solid', borderColor: '#c6c6c6' }}>
        Database Entries: ({isLoadingState ? 'Loading...' : trekDataState.length})<br /><br />
        {trekDataState.map((item) => <>
          <div className='item-box'>
            <div className='table'>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>ID:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.id}</div>
                  </div>
                </div>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Title:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.title}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Days:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.days}</div>
                  </div>
                </div>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Height:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.height}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Header Image:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.img}</div>
                  </div>
                </div>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Price:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.price}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Trek location:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.camp_location}</div>
                  </div>
                </div>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Region:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.location}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='table'>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Gallery image 1:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.gallery_img1}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Gallery image 2:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.gallery_img2}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Gallery image 3:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.gallery_img3}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Gallery image 4:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.gallery_img4}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Gallery image 5:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.gallery_img5}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Gallery image 6:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.gallery_img6}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell' style={{ minWidth: '800px' }}>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Header Image Description:&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.img_desp}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Trek Description:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.desp}</div>
                  </div>
                </div>
              </div>
              <div className='table-row'>
                <div className='table-cell'>
                  <div className='item-box-flex-row-item'>
                    <div className='content-font-header-2'>Itinerary:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div className='content-font-sub-2-mono'>{item.iternery}</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', minWidth: '800px' }}>
              <div style={{ flex: '1' }} />
              <button className="db-button" onClick={() => { setUpdateFormViewState(true); setUpdateFormState(item); }}><span className='material-symbols-outlined' style={{ fontSize: '20px' }}>edit_note</span>&nbsp;<b>Edit</b></button>
              <button className="db-button" onClick={() => deleteTrek(item.id)}><span className='material-symbols-outlined' style={{ fontSize: '20px' }}>delete_forever</span>&nbsp;<b>Delete</b></button>
            </div>
          </div>
          <div style={{ height: '30px' }} />
        </>)
        }
        &nbsp;
      </div>
      {updateFormViewState ? updateFormViewDiv(updateFormState) : <> </>}
      {newFormViewState ? newFormViewDiv : <> </>}
    </>
  );
}

export default DiscountedTreks;