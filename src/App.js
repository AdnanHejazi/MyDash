import calender from './calender.svg';
import Form from './components/Form';
import './css/App.css';

function App() {
  return (
    <div className='Home-page'>
      <div className='Container'>
        <img src={calender} alt='logo' className='Calender'></img>
        <Form/>
      </div>
    </div>
  );
}

export default App;
