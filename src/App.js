import React, {useState} from 'react'
import './App.css';
import HelloWorld from './components/HelloWorld'


function App() {
  const [size, setSize] = useState(50)
  function handleInput(e) {
    setSize(parseFloat(e.target.value))
  }

  return (
    <div className="App">
      <HelloWorld/>
      <input type="number" onInput={handleInput} defaultValue={size} />
      <HelloWorld style1={false} fontSize={size}/>
    </div>
  );
}

export default App;
