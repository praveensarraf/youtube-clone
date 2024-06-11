import './App.css';
import './css/Navbar.css'
import './css/HomeBody.css'
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import { useState } from 'react';


function App() {

  let [isChecked, setIsChecked] = useState(false);

  let checkboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>

      <Navbar isChecked={isChecked} onCheckboxChange={checkboxChange} />
      <HomeBody isChecked={isChecked} />


    </>
  );
}

export default App;
