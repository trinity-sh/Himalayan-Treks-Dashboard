import React, { useState } from 'react';
import SMenuItem from '../components/selectableMenuItem';
import '../styles/selectable-menu.css';

function selectableMenu(props) {
  const onClickDeselectOthers = (thisBtn) => {
    var children = document.getElementById('selectable-menu').getElementsByTagName('div');
    // deselect all but the element btn
    for (var i = 0; i < children.length; i++)
      if (children[i].getElementsByTagName('button')[0].id !== thisBtn) {
        children[i].getElementsByTagName('button')[0].className = 'selectable-menu-item';
        var buttonSpans = children[i].getElementsByTagName('button')[0].getElementsByTagName('span');
        buttonSpans[0].className = 'material-symbols-outlined selectable-menu-item-icon';
        buttonSpans[1].className = 'selectable-menu-item-label';
      }
  };

  const onClickThisBtn = (thisBtn) => {
    onClickDeselectOthers(`${thisBtn}-btn`);
    document.getElementById(`${thisBtn}-btn`).className = `selectable-menu-item-active`;
    document.getElementById(`${thisBtn}-btn-icon`).className = `material-symbols-outlined selectable-menu-item-active-icon`;
    document.getElementById(`${thisBtn}-btn-label`).className = `selectable-menu-item-active-label`;
  };

  const dashSelectables = <>
    <SMenuItem id='all-treks-btn' icon_id='all-treks-btn-icon' label_id='all-treks-btn-label' icon='landscape' label='All treks' onClickCallback={() => onClickThisBtn('all-treks')} />
    <SMenuItem id='blogs-btn' icon_id='blogs-btn-icon' label_id='blogs-btn-label' icon='newspaper' label='Blogs' onClickCallback={() => onClickThisBtn('blogs')} />
  </>;

  const profSelectables = <>
    <SMenuItem id='ch-username-btn' icon='key' label='Change username' onClickCallback={() => onClickThisBtn('ch-username')} />
    <SMenuItem id='ch-pwd-btn' icon='pin' label='Change password' onClickCallback={() => onClickThisBtn('ch-pwd')} />
    <SMenuItem id='edit-users-btn' icon='group' label='Edit users' onClickCallback={() => onClickThisBtn('edit-users')} />
  </>;

  return (
    <div id='selectable-menu'>
      {(() => {
        if (props.invoked === 'prof-btn')
          return profSelectables;
        else if (props.invoked === 'dash-btn')
          return dashSelectables;
        else return '';
      })()}
    </div>
  );
}

export default selectableMenu;