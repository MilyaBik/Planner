import './App.scss';
import InformTop from './components/Inform';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <div className='planner'>

        <div className='planner__front'>
          <InformTop />
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
