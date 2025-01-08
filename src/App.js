import './App.css';
import NoSleep from 'nosleep.js';

function App() {
  // create a new NoSleep object
  var noSleep = new NoSleep();

  // toggle no sleep functionality based on the NoSleep object
  const toggleSleep = () => {
    if (!noSleep.enabled) {
      noSleep.enable();
    } else {
      noSleep.disable()
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoSleep Page</h1>
        {/* creates the switch box*/}
        <label class="switch">
          <input type="checkbox" onClick={toggleSleep}/>
          <span class="slider round"></span>
        </label>
      </header>
    </div>
  );
}

export default App;
