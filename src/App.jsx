import './App.css';
import NoSleep from 'nosleep.js';
import OnOffSwitch from './OnOffSwitch';
import React, {useState} from 'react';

function App() {
  // create a new NoSleep object
  let [isOn, setIsOn] = useState();
  var noSleep = new NoSleep();

  // toggle no sleep functionality based on the NoSleep object
  const toggleSleep = async () => {
    if (!isOn) {
      await noSleep.enable().then(setIsOn(true));
    } else {
      noSleep.disable();
      setIsOn(false);
    }
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoSleep Page</h1>
        <OnOffSwitch isOn={isOn} />
        {/* creates the switch box*/}
        <label class="switch">
          <input type="checkbox" onClick={() => toggleSleep()}/>
          <span class="slider round"></span>
        </label>
      </header>
    </div>
  );
}

export default App;
