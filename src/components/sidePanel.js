import React, { useEffect, useState } from 'react';
import ButtonGrad from '../components/buttonGrad';
import Separator from '../components/separator';
import SelectableMenu from '../components/selectableMenu';
import Logo from '../assets/logo.png';
import '../styles/content-div.css';
import '../styles/side-panel.css';

function SidePanel() {
  const [sectBtn, setSectBtnState] = useState(() => {
    return { invoked: 'dash-btn' };
  });

  const [panelIsOpen, setPanelIsOpen] = useState(true);
  const [secondPanelIsOpen, setSecondPanelIsOpen] = useState(false);

  const onClickDeselectOthers = (thisBtn) => {
    var children = document.getElementById('selectables').getElementsByTagName('div');
    // deselect all but the element btn
    for (var i = 0; i < children.length; i++)
      if (children[i].getElementsByTagName('button')[0].id !== thisBtn) {
        children[i].getElementsByTagName('button')[0].className = 'btn-grad';
        var buttonSpans = children[i].getElementsByTagName('button')[0].getElementsByTagName('span');
        buttonSpans[0].className = 'material-symbols-outlined btn-grad-icon';
        buttonSpans[1].className = 'btn-grad-label';
      }
  };

  const onClickDashBtn = () => {
    onClickDeselectOthers('dash-btn');
    setSectBtnState({ invoked: 'dash-btn' });
    document.getElementById('dash-btn').className = 'btn-grad-active';
    document.getElementById('dash-btn-icon').className = 'material-symbols-outlined btn-grade-active-icon'
    document.getElementById('dash-btn-label').className = 'btn-grad-active-label';
  };

  const onClickProfBtn = () => {
    onClickDeselectOthers('prof-btn');
    setSectBtnState({ invoked: 'prof-btn' });
    document.getElementById('prof-btn').className = 'btn-grad-active';
    document.getElementById('prof-btn-icon').className = 'material-symbols-outlined btn-grade-active-icon'
    document.getElementById('prof-btn-label').className = 'btn-grad-active-label';
  };

  const regulateSidePanel = () => {
    let sidePanel = document.getElementById('side-panel');
    let floatingBtn = document.getElementById('floating-btn');
    if (!panelIsOpen) {
      floatingBtn.style.visibility = 'visible';
      sidePanel.style.visibility = 'hidden';
      sidePanel.style.minWidth = '0px';
      sidePanel.style.width = '0%';
    } else {
      floatingBtn.style.visibility = 'hidden';
      sidePanel.style.visibility = 'visible';
      sidePanel.style.width = '15%';
      sidePanel.style.minWidth = '260px';
    }
  };

  const regulateSecondSidePanel = () => {
    let secondSidePanel = document.getElementById('second-side-panel');
    if (!secondPanelIsOpen) {
      secondSidePanel.style.visibility = 'hidden';
      secondSidePanel.style.width = '0%';
      secondSidePanel.style.minWidth = '0px';
    } else {
      secondSidePanel.style.visibility = 'visible';
      secondSidePanel.style.width = '15%';
      secondSidePanel.style.minWidth = '260px';
    }
  };

  useEffect(() => regulateSidePanel(), [panelIsOpen]);
  useEffect(() => regulateSecondSidePanel(), [secondPanelIsOpen]);

  // default selection is 'dashboard/all-treks'
  useEffect(() => { onClickDashBtn(); }, []);

  useEffect(() => {
    const adjustSidePanelWidth = () => {
      if (secondPanelIsOpen)
        setSecondPanelIsOpen(false);
      if (window.innerWidth < 800) {
        setPanelIsOpen(false);
      } else {
        setPanelIsOpen(true);
      }
    };
    window.addEventListener('resize', adjustSidePanelWidth);
    // initial rendering after DOM Loads
    adjustSidePanelWidth();
  }, []);

  return (
    <>
      <div id='side-panel'>
        <div style={{ marginTop: '50px', marginBottom: '20px' }}>
          <img src={Logo} width='60%' alt='Himalayan backdrop' />
        </div>
        <div id='selectables'>
          <ButtonGrad id='dash-btn' icon_id='dash-btn-icon' label_id='dash-btn-label' icon='tune' label='Dashboard' onClickCallback={onClickDashBtn} />
          {/* <ButtonGrad id='prof-btn' icon_id='prof-btn-icon' label_id='prof-btn-label' icon='badge' label='Profile settings' onClickCallback={onClickProfBtn} /> */}
        </div>
        <Separator marginTop='20px' marginBottom='25px' msg='Menu items' />
        <SelectableMenu invoked={sectBtn.invoked} />
      </div>
      <>
        <button id='floating-btn' className='button-update' onClick={() => setSecondPanelIsOpen(!secondPanelIsOpen)}>{secondPanelIsOpen ? '<' : '>'}</button>
        <div id='second-side-panel' className='side-panel'>
          <div style={{ marginTop: '50px', marginBottom: '20px' }}>
            <img src={Logo} width='60%' alt='Himalayan backdrop' />
          </div>
          <div id='selectables'>
            <ButtonGrad id='dash-btn' icon_id='dash-btn-icon' label_id='dash-btn-label' icon='tune' label='Dashboard' onClickCallback={onClickDashBtn} />
            {/* <ButtonGrad id='prof-btn' icon_id='prof-btn-icon' label_id='prof-btn-label' icon='badge' label='Profile settings' onClickCallback={onClickProfBtn} /> */}
          </div>
          <Separator marginTop='20px' marginBottom='25px' msg='Menu items' />
          <SelectableMenu invoked={sectBtn.invoked} />
        </div>
      </>
    </>
  );
}

export default SidePanel;
