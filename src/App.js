
import './App.css';
import React, {useState} from 'react'
import Navbar from './component/Navbar';
import About from './component/About';
import Text from './component/Text';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
const [mode,setMode]=useState('light')

const toggle=()=>{
  if(mode==='dark'){
    setMode('light')

    document.body.style.backgroundColor="white"
  }else{
    setMode('dark')
    document.body.style.backgroundColor="#141619"
  }
  
  }
  
  
  
   
  return (
    <>
    
  <Router>
   <Navbar  title="TextEditor" name="About" mode={mode} toggleMode={toggle}/>
  <div className="container my-3">
   <Routes>
     <Route path="/About" element={<About/>}/>
         
     <Route path="/" element={ <Text  heading="Enter your text below :  " mode={mode}/>}/>
         
     
     </Routes>
  </div> 
  </Router>
  
    {/* <div className='container my-3' >
      <About />
    </div> */}
    </>
                                          
  );
}

export default App;