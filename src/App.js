import './App.css';
import PokeWall from './components/PokeWall/PokeWall';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  const [welcome, setWelcome] = useState(false);
  return <div className="App">{!welcome ? <WelcomePage setWelcome={setWelcome} /> : <PokeWall />}</div>;
}

export default App;
