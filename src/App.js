import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Signin from './Signin' 
import Language from './Language'
import Download from './Download'


export default function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Language" element={<Language/>}/>
        <Route path="/Download" element={<Download/>}/>
        
      </Routes>
    </Router>
      
    </div>
  )
}
