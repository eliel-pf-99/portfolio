import { useRef, useState } from 'react';

import './App.css';
import Backend from './components/backend';
import Contact from './components/contact';
import Frontend from './components/frontend';
import Intro from './components/intro';
import Github from './components/utils/Github';
import Navbar from './components/utils/Navbar';
import NavScreen from './components/utils/Navbar/Navscreen';

function App() {
  
  const [theme, setTheme] = useState('black');
  const [section, setSection] = useState('home');
  const [navScreen, setNavScreen] = useState('closed');
  let AppRef = useRef(null);

  const toggle_colors = (section: string, theme: string) => {
    setTheme(theme);
    setSection(section);
  }

  const open_nav = () => setNavScreen((navScreen == 'closed' ? 'show' : 'closed'));

  return (
    <div ref={AppRef} className="App relative">
      
        <Navbar  indicate_name={section} theme={theme} show={navScreen} run={open_nav}/>
        
          <Intro nav={toggle_colors} />
        
          <Frontend  nav={toggle_colors} />
        
      
      <Backend nav={toggle_colors}/>
      <Contact />
      <NavScreen show={navScreen} run={open_nav} />
      <div>
        <Github />
      </div>
    </div>
  )
}

export default App
