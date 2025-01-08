import './App.css';
import NoSleep from 'nosleep.js';

function App() {
  var noSleep = new NoSleep();

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
        <label class="switch">
          <input type="checkbox" onClick={toggleSleep}/>
          <span class="slider round"></span>
        </label>
      </header>
    </div>
  );
}

export default App;
