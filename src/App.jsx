import './App.css';
import NoSleep from 'nosleep.js';
import OnOffSwitch from './OnOffSwitch';
import React, {useState} from 'react';

function App() {
  // create a new NoSleep object
  let [isOn, setIsOn] = useState();
  const noSleep = new NoSleep();

  // toggle no sleep functionality based on the NoSleep object
  const toggleSleep = () => {
    if (!noSleep.enabled) {
      noSleep.enable();
    } else {
      noSleep.disable();
    }
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoSleep Page</h1>
        <OnOffSwitch isOn={noSleep.enabled} />

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
