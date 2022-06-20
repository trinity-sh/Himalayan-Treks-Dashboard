import React, { useEffect, useState } from 'react';
import SMenuItem from '../components/selectableMenuItem';
import '../styles/selectable-menu.css';

function selectableMenu(props) {
  function hi() {
    console.log(1);
  }
  // dashSelectables & dashSelectableItems must describe the same components
  const dashSelectablesList = ['all-treks-btn', 'blogs-btn'];
  const dashSelectables = <>
    <SMenuItem id='all-treks-btn' icon='landscape' label='All treks' isInvoked='true' onClickCallback={() => onClickThisBtn('all-treks-btn')} />
    <SMenuItem id='blogs-btn' icon='newspaper' label='Blogs' onClickCallback={() => onClickThisBtn('blogs-btn')} />
  </>;

  const profSelectablesList = ['edit-users-btn', 'ch-username-btn', 'ch-pwd-btn'];
  const profSelectables = <>
    <SMenuItem id='edit-users-btn' icon='group' label='Edit users' isInvoked='true' onClickCallback={() => onClickThisBtn('edit-users-btn')} />
    <SMenuItem id='ch-username-btn' icon='key' label='Change username' onClickCallback={() => onClickThisBtn('ch-username-btn')} />
    <SMenuItem id='ch-pwd-btn' icon='pin' label='Change password' onClickCallback={() => onClickThisBtn('ch-pwd-btn')} />
  </>;

  const [selectableMenuVar, setSelectableMenuVarState] = useState((props.invoked === 'dash-btn') ? dashSelectables : profSelectables);
  useEffect(() => setSelectableMenuVarState((props.invoked === 'dash-btn') ? dashSelectables : (props.invoked === 'prof-btn') ? profSelectables : <> </>), [props.invoked]);

  const onClickThisBtn = async (thisBtn) => {
    if (thisBtn in dashSelectablesList)
      await setSelectableMenuVarState(<>
        <SMenuItem id='all-treks-btn' icon='landscape' label='All treks' isInvoked={thisBtn === 'all-treks-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('all-treks-btn')} />
        <SMenuItem id='blogs-btn' icon='newspaper' label='Blogs' isInvoked={thisBtn === 'blogs-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('blogs-btn')} />
      </>);
    else if (thisBtn in profSelectablesList)
      await setSelectableMenuVarState(<>
        <SMenuItem id='edit-users-btn' icon='group' label='Edit users' isInvoked={thisBtn === 'edit-users-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('edit-users-btn')} />
        <SMenuItem id='ch-username-btn' icon='key' label='Change username' isInvoked={thisBtn === 'ch-username-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-username-btn')} />
        <SMenuItem id='ch-pwd-btn' icon='pin' label='Change password' isInvoked={thisBtn === 'ch-pwd-btn' ? 'true' : 'false'} onClickCallback={() => onClickThisBtn('ch-pwd-btn')} />
      </>);
    console.log(selectableMenuVar)
  };

  return (
    <div id='selectable-menu'>
      {selectableMenuVar}
    </div>
  );
}

export default selectableMenu;