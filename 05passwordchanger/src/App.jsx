import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  let [numAllowed,setNumAllowed] = useState(false);
  let [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState()
  const passwordGenerator= useCallback(()=>{
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed)str+="012345678"
    if(charAllowed)str+=`!@#$%^&*()-_=+[]{}|;:'",.<>?/~\``;
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass +=str[char]
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numAllowed,passwordGenerator]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,1);
    window.navigator.clipboard.writeText(password)
  },[password]);

  //Ref hook
  const passwordRef = useRef(null)
  return (
    <>
      <div className='w-full max-w-md mx-auto py-2 shadow-md rounded-lg px-4 my-8 
      text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded-l-lg'
          placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPassword} className='outline-none bg-blue-600 text-white px-2 py-0.5 shrink-0 rounded-r-lg'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}} 
              className='cursor-pointer' /><label>Lenght:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>{
              setNumAllowed((prev)=>!prev)
            }} /><label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='numberInput' onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }} /><label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
