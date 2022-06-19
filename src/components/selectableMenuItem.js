import React from 'react';
import '../styles/selectable-menu.css';

function selectableMenuItem(props) {
  return (
    <div>
      <button id={props.id} className='selectable-menu-item' onClick={() => props.onClickCallback()}>
        <span id={`${props.id}-icon`} className='material-symbols-outlined selectable-menu-item-icon'>
          {props.icon}
        </span>
        <span id={`${props.id}-label`} className='selectable-menu-item-label'>
          &nbsp;&nbsp;{props.label}
        </span>
      </button>
    </div>
  );
}

export default selectableMenuItem;