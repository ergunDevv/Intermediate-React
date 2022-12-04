import logo from './logo.svg';
import './App.css';
import './index.css'
import Tab from './components/Tab';
import React from 'react';
import Button from './components/Button';
import './tailwind.css'
function App() {
  return (
    <div  >

      <div style={{padding:20}}>
        <Tab>
          <Tab.Panel title="Profile">1. tab</Tab.Panel>
          <Tab.Panel title="About">2. tab</Tab.Panel>
          <Tab.Panel title="Settings">3. tab</Tab.Panel>
        </Tab>
      </div>

      <Button text="merhaba buton" variant="default">Button Example</Button>
      <Button text="merhaba buton" variant="danger"></Button>
      <Button text="merhaba buton" variant="success"></Button>
      <Button text="merhaba buton" variant="warning"></Button>


    </div>
    
  );
}

export default App;
