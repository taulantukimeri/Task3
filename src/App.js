import Popup from './components/Popup';
import './App.css';
import { useState } from 'react';

function App() {
  const [button, setButton] = useState(true)
  return (
    <div className="App">
        <div className='show-popup'>
          <h1 onClick={() => setButton(true)}>Show popup</h1>
        </div>
        <Popup trigger={button} setTrigger ={setButton}>
        </Popup>
    </div>
  );
}

export default App;
