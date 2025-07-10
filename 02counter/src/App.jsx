import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [count,setCount] = useState(0);
  function addValue(){
    setCount(count + 1);
  }
  function removeValue(){
   if(count) setCount(count - 1 );
  }
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={addValue}>Add Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value</button>
  </>
  )
}
export default App;