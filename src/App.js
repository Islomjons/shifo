import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Route } from 'react-router-dom';
import { Overlay } from './utils';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import AboutUs from './components/aboutUs/AboutUs';


function App() {
  const [isCartActive, setIsCartActive] = useState(false)
  const [isCartEnter, setIsCartEnter] = useState(false)
  return (
    <div>
        <Header setIsCartActive={setIsCartActive} setIsCartEnter={setIsCartEnter}/>
        <Route>
          <Sidebar isCartActive={isCartActive} setIsCartActive={setIsCartActive} isCartEnter={isCartEnter} setIsCartEnter={setIsCartEnter}/>
        </Route>
        <Hero />
        <Cards />
        <AboutUs />
        {
            isCartActive && <Overlay type="sidebar" state={isCartActive} callback={setIsCartActive}/>
        }
    </div>
  );
}

export default App;
