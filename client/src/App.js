import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';

function App() {

    const [mode, setMode] = useState("light"); 
    let toggleMode = () => {
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = 'rgb(88,75,161)';   
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = 'rgb(177 177 177)'; 
      }
    }
  
  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Card mode={mode} toggleMode={toggleMode} />
      

    </>
  );
}

export default App;
