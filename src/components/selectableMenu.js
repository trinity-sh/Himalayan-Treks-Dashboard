import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SMenuItem from '../components/selectableMenuItem';
import '../styles/selectable-menu.css';

function SelectableMenu(props) {
  const [selectedMenu, setSelectedMenuState] = useState('edit-users-btn');

  // dashSelectables & dashSelectableItems must describe the same components
  const dashSelectablesList = ['all-treks-btn', 'discounted-treks-btn', 'blogs-btn', 'booking-btn'];
  const dashSelectables = () => <>
    <SMenuItem id='all-treks-btn' icon='landscape' label='Treks' isInvoked={selectedMenu === 'all-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('all-treks-btn')} />
    <SMenuItem id='discounted-treks-btn' icon='percent' label='Discounted treks' isInvoked={selectedMenu === 'discounted-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('discounted-treks-btn')} />
    <SMenuItem id='blogs-btn' icon='newspaper' label='Blogs' isInvoked={selectedMenu === 'blogs-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('blogs-btn')} />
    <SMenuItem id='booking-btn' icon='hotel' label='Bookings' isInvoked={selectedMenu === 'booking-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('booking-btn')} />
  </>;

  const profSelectablesList = ['edit-users-btn', 'ch-username-btn', 'ch-pwd-btn'];
  const profSelectables = () => <>
    <SMenuItem id='edit-users-btn' icon='lock' label='Edit users' isInvoked={selectedMenu === 'edit-users-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('edit-users-btn')} />
    <SMenuItem id='ch-username-btn' icon='lock' label='Change username' isInvoked={selectedMenu === 'ch-username-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-username-btn')} />
    <SMenuItem id='ch-pwd-btn' icon='lock' label='Change password' isInvoked={selectedMenu === 'ch-pwd-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-pwd-btn')} />
  </>;

  const navigate = useNavigate();
  const [selectableMenuVar, setSelectableMenuVarState] = useState((props.invoked === 'dash-btn') ? dashSelectables : profSelectables);
  useEffect(() => setSelectableMenuVarState((props.invoked === 'dash-btn') ? dashSelectables() : (props.invoked === 'prof-btn') ? profSelectables() : <></>), [props.invoked]);

  const onClickThisBtn = async (thisBtn) => {
    if (dashSelectablesList.includes(thisBtn)) {
      await setSelectableMenuVarState(<>
        <SMenuItem id='all-treks-btn' icon='landscape' label='Treks' isInvoked={thisBtn === 'all-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('all-treks-btn')} />
        <SMenuItem id='discounted-treks-btn' icon='percent' label='Discounted treks' isInvoked={thisBtn === 'discounted-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('discounted-treks-btn')} />
        <SMenuItem id='blogs-btn' icon='newspaper' label='Blogs' isInvoked={thisBtn === 'blogs-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('blogs-btn')} />
        <SMenuItem id='booking-btn' icon='hotel' label='Bookings' isInvoked={thisBtn === 'booking-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('booking-btn')} />
      </>);
      (thisBtn === 'all-treks-btn') ?
        (() => { navigate('/dashboard/all-treks'); setSelectedMenuState('all-treks-btn') })() :
        (thisBtn === 'discounted-treks-btn') ?
          (() => { navigate('/dashboard/discounted-treks'); setSelectedMenuState('discounted-treks-btn') })() :
          (thisBtn === 'blogs-btn') ?
            (() => { navigate('/dashboard/blogs'); setSelectedMenuState('blogs-btn'); })() :
            (thisBtn === 'booking-btn') ?
              (() => { navigate('/dashboard/bookings'); setSelectedMenuState('booking-btn'); })() :
              console.error('Invalid button: ', thisBtn);
    }
    else if (profSelectablesList.includes(thisBtn)) {
      await setSelectableMenuVarState(<>
        <SMenuItem id='edit-users-btn' icon='lock' label='Edit users' isInvoked={thisBtn === 'edit-users-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('edit-users-btn')} />
        <SMenuItem id='ch-username-btn' icon='lock' label='Change username' isInvoked={thisBtn === 'ch-username-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-username-btn')} />
        <SMenuItem id='ch-pwd-btn' icon='lock' label='Change password' isInvoked={thisBtn === 'ch-pwd-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-pwd-btn')} />
      </>);
      (thisBtn === 'edit-users-btn') ?
        (() => { navigate('/profile/edit-users'); setSelectedMenuState('edit-users-btn') })() :
        (thisBtn === 'ch-pwd-btn') ?
          (() => { navigate('/profile/change-password'); setSelectedMenuState('ch-pwd-btn'); })() :
          (thisBtn === 'ch-username-btn') ?
            (() => { navigate('/profile/change-username'); setSelectedMenuState('ch-username-btn'); })() :
            console.error('Invalid button: ', thisBtn);
    }
  };

  return (
    <div id='selectable-menu'>
      {selectableMenuVar}
    </div>
  );
}

export default SelectableMenu;