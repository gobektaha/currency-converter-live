import { useState } from 'react'
import './App.css'
import Döviz from './components/Döviz';

function App() {


  return (
   <div style={{display: 'flex' , flexDirection:'column',justifyItems:'center',alignItems:'center'}}>
     <Döviz/>
   </div>
  )
}

export default App
