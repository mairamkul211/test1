import React, { useEffect }  from 'react';
import './App.css';
import { useState } from 'react';
import isoPhoto from './photo_2022-05-19_00-13-42.jpg'

function App() {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) ||false 
  }

  const[theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={theme ? "theme-dark": ""}>

      <div className='content-bg-color main-content' >
      <div className='dos'>
        <h1>Dark Mode is</h1>
      <input type='checkbox' onChange={() => setTheme(!theme)} checked={theme ? "true": ""}/>
      </div>
      <div className='block'>
        <img className='iso' src={isoPhoto} alt=""photo/>
        <h3>nasirovv_i</h3>
      <a src="https://www.instagram.com/nasirovv_i/"><button className='a'>нажми меня</button></a>
      </div>
   
      </div>
    </div>
  );
}

export default App;
