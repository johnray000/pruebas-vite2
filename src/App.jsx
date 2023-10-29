import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Carta from "./componentes/carta_con_ejem.jsx";
import LineChartVES from "./componentes/lineChartVES.jsx";
import LineChartARS from "./componentes/lineChartARS.jsx";

function App() {
  const [count, setCount] = useState(0)
  //console.log("probando"+miLinechart)
  return (
    <>
      {/* <Carta /> */}
      
      <LineChartVES /> 
      <LineChartARS /> 
    </>
  )
}

export default App
