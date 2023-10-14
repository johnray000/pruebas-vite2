import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Michart from "./lineChart.jsx";
import Carta from "./carta_con_ejem.jsx";

function App() {
  const [count, setCount] = useState(0)
  //console.log("probando"+miLinechart)
  return (
    <>
      <Carta />     
      <Michart />     
        
    </>
  )
}

export default App
