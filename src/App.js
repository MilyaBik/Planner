import './App.scss';
import Inform from './components/Inform';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <div className='planner'>
        <div className='planner__title'>HEllo world!</div>
        <div className='planner__front'>
          <Inform />
          <div className='planner__bottom'>

          </div>
        </div>
        <div className='planner__back'>


        </div>
      </div>
    </Container>
  );
}

export default App;
