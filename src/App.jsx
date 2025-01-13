import './App.css';
import NoSleep from 'nosleep.js';
import OnOffSwitch from './OnOffSwitch';
import React, {useState, useRef} from 'react';

function App() {
  // create a new NoSleep object
  let [isOn, setIsOn] = useState(false);
  const noSleep = useRef(new NoSleep());

  // toggle no sleep functionality based on the NoSleep object
  const toggleSleep = () => {
    if (!isOn) {
      noSleep.current.enable().then(() => setIsOn(true));
    } else {
      noSleep.current.disable();
      setIsOn(false)
    }
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoSleep Page</h1>
        <OnOffSwitch isOn={isOn} />

        {/* creates the switch box*/}
        <label className="switch">
          <input type="checkbox" onClick={toggleSleep}/>
          <span className="slider round"></span>
        </label>
      </header>
    </div>
  );
}

export default App;
