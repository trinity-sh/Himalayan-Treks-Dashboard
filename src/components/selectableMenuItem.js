import React, { useEffect, useState } from 'react';
import '../styles/selectable-menu.css';

function selectableMenuItem(props) {
  const [isInvoked, setIsInvokedState] = useState(props.isInvoked);
  useEffect(() => setIsInvokedState(props.isInvoked), [props.isInvoked]);

  return (
    <div>
      <button id={props.id} className='selectable-menu-item' onClick={() => props.onClickCallback()}>
        <span
          id={`${props.id}-icon`}
          className={`material-symbols-outlined ${isInvoked === 'true' ? 'selectable-menu-item-active-icon' : 'selectable-menu-item-icon'}`}
        >
          {props.icon}
        </span>
        <span
          id={`${props.id}-label`}
          className={`${isInvoked === 'true' ? 'selectable-menu-item-active-label' : 'selectable-menu-item-label'}`}
        >
          &nbsp;&nbsp;{props.label}
        </span>
      </button>
    </div>
  );
}

export default selectableMenuItem;