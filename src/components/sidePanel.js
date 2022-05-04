import React, { useEffect, useState } from 'react';
import ButtonGrad from '../components/buttonGrad';
import Separator from '../components/separator';
import SelectableMenu from '../components/selectableMenu';
import Logo from '../assets/logo.png';
import '../styles/side-panel.css';
import { useNavigate } from 'react-router-dom';

function sidePanel() {
  const navigate = useNavigate();
  const [sectBtn, setSectBtnState] = useState(() => {
    return { invoked: 'dash-btn' };
  });

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

  // default selection is 'dashboard/all-treks'
  useEffect(() => { onClickDashBtn(); navigate('/'); }, []);

  return (
    <div id='side-panel'>
      <div style={{ marginTop: '50px', marginBottom: '20px' }}>
        <img src={Logo} width='60%' alt='Himalayan backdrop' />
      </div>
      <div id='selectables'>
        <ButtonGrad id='dash-btn' icon_id='dash-btn-icon' label_id='dash-btn-label' icon='tune' label='Dashboard' onClickCallback={onClickDashBtn} />
        <ButtonGrad id='prof-btn' icon_id='prof-btn-icon' label_id='prof-btn-label' icon='badge' label='Profile settings' onClickCallback={onClickProfBtn} />
      </div>
      <Separator marginTop='20px' marginBottom='25px' msg='Menu items' />
      <SelectableMenu invoked={sectBtn.invoked} />
    </div>
  );
}

export default sidePanel;
