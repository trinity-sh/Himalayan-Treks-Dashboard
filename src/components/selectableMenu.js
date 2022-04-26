import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SMenuItem from '../components/selectableMenuItem';
import '../styles/selectable-menu.css';

function selectableMenu(props) {
  const [selectedMenu, setSelectedMenuState] = useState('edit-users-btn');

  // dashSelectables & dashSelectableItems must describe the same components
  const dashSelectablesList = ['all-treks-btn', 'blogs-btn', 'queries-btn'];
  const dashSelectables = () => <>
    <SMenuItem id='all-treks-btn' icon='landscape' label='All treks' isInvoked={selectedMenu === 'all-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('all-treks-btn')} />
    <SMenuItem id='blogs-btn' icon='newspaper' label='Blogs' isInvoked={selectedMenu === 'blogs-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('blogs-btn')} />
    <SMenuItem id='queries-btn' icon='help' label='Queries' isInvoked={selectedMenu === 'queries-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('queries-btn')} />
  </>;

  const profSelectablesList = ['edit-users-btn', 'ch-username-btn', 'ch-pwd-btn'];
  const profSelectables = () => <>
    <SMenuItem id='edit-users-btn' icon='group' label='Edit users' isInvoked={selectedMenu === 'edit-users-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('edit-users-btn')} />
    <SMenuItem id='ch-username-btn' icon='key' label='Change username' isInvoked={selectedMenu === 'ch-username-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-username-btn')} />
    <SMenuItem id='ch-pwd-btn' icon='pin' label='Change password' isInvoked={selectedMenu === 'ch-pwd-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-pwd-btn')} />
  </>;

  const navigate = useNavigate();
  const [selectableMenuVar, setSelectableMenuVarState] = useState((props.invoked === 'dash-btn') ? dashSelectables : profSelectables);
  useEffect(() => setSelectableMenuVarState((props.invoked === 'dash-btn') ? dashSelectables() : (props.invoked === 'prof-btn') ? profSelectables() : <></>), [props.invoked]);

  const onClickThisBtn = async (thisBtn) => {
    if (dashSelectablesList.includes(thisBtn)) {
      await setSelectableMenuVarState(<>
        <SMenuItem id='all-treks-btn' icon='landscape' label='All treks' isInvoked={thisBtn === 'all-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('all-treks-btn')} />
        <SMenuItem id='blogs-btn' icon='newspaper' label='Blogs' isInvoked={thisBtn === 'blogs-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('blogs-btn')} />
        <SMenuItem id='queries-btn' icon='help' label='Queries' isInvoked={thisBtn === 'queries-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('queries-btn')} />
      </>);
      (thisBtn === 'all-treks-btn') ?
        (() => { navigate('/dashboard/all-treks'); setSelectedMenuState('all-treks-btn') })() :
        (thisBtn === 'blogs-btn') ?
          (() => { navigate('/dashboard/blogs'); setSelectedMenuState('blogs-btn'); })() :
          (thisBtn === 'queries-btn') ?
            (() => { navigate('/dashboard/queries'); setSelectedMenuState('queries-btn'); })() :
            console.error('Invalid button: ', thisBtn);
    }
    else if (profSelectablesList.includes(thisBtn)) {
      await setSelectableMenuVarState(<>
        <SMenuItem id='edit-users-btn' icon='group' label='Edit users' isInvoked={thisBtn === 'edit-users-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('edit-users-btn')} />
        <SMenuItem id='ch-username-btn' icon='key' label='Change username' isInvoked={thisBtn === 'ch-username-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-username-btn')} />
        <SMenuItem id='ch-pwd-btn' icon='pin' label='Change password' isInvoked={thisBtn === 'ch-pwd-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-pwd-btn')} />
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

export default selectableMenu;