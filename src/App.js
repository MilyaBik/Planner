import React, { useState } from 'react';

import './App.scss';
import Container from 'react-bootstrap/Container';

import PlannerTop from './components/PlannerTop';
import PlannerBottom from './components/PlannerBottom';
import PlannerBack from './components/PlannerBack';

function App() {

  const [visibleBack, setVisibleBack] = useState(false);
  const  onClickBlock = () => setVisibleBack(!visibleBack);

  
  return (
    <Container>
      <div className='planner'>

        <div className='planner__front'>
          <PlannerTop onClickBlock={onClickBlock}/>
          <PlannerBottom/>
        </div>
        {visibleBack && (
        <PlannerBack onClickBlock={onClickBlock}/>
        )}
      </div>
    </Container>
  );
}

export default App;
