import './App.css'
import Popup from './components/Popup/popup';
import {useState} from 'react';

function App() {
  const [popupDisplay, setPopupDisplay] = useState('none');
  return (
    <div className="App">
      <header className="App-header">
        <p className="p">
          click on button to open onboarding page!
        </p>
        <button onClick={ () => {setPopupDisplay('block')}}>open onboarding</button>
        <Popup display={popupDisplay}/>
      </header>
    </div>
  );
}

export default App;
