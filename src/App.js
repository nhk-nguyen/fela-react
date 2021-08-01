import './App.css';
import HelloWorld from './components/HelloWorld'


function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <HelloWorld style1={false}/>
    </div>
  );
}

export default App;
