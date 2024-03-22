import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeaderCards from './Components/HeaderCards';
import Overview from './Components/Overview';

function App() {
  return (
    <div>
      <div className='bg-lightMode-veryPaleBlueTop dark:bg-darkMode-veryDarkBlueBgTop w-full h-72 absolute z-0 rounded-lg'></div>
    <div className='bg-lightMode-whiteBg dark:bg-darkMode-veryDarkBlueBg h-full z-10'>
      <Header/>
      <HeaderCards/>
      <Overview/>
    </div>
    </div>
  );
}

export default App;
