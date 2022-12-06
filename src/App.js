import logo from './logo.svg';
import './App.css';
import './index.css'
import Tab from './components/Tab';
import React,{useRef} from 'react';
import Button from './components/Button';
import './tailwind.css'

import Test from './components/Test';


function App() {
  
 const inputRef=useRef();
 const focusInput=()=>{
  inputRef.current.focus()
 }

  return (
    <div  >

      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>

      {/* <div style={{padding:20}}>
        <Tab activeTab={1}>
          <Tab.Panel title="Profile">1. tab</Tab.Panel>
          <Tab.Panel title="About">2. tab</Tab.Panel>
          <Tab.Panel title="Settings">3. tab</Tab.Panel>
        </Tab>
      </div> */}

      {/* <Test/> */}

      {/* <Button text="merhaba buton" variant="default">Button Example</Button>
      <Button text="merhaba buton" variant="danger"></Button>
      <Button text="merhaba buton" variant="success"></Button>
      <Button text="merhaba buton" variant="warning"></Button> */}


    </div>
    
  );
}

export default App;
