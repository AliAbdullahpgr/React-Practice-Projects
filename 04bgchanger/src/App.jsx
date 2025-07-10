import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-16 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
          <button onClick={()=>setColor("red")}
          className="outline-none px-4 bg-red-600 py-1 rounded-full shadow-lg"
          >Red</button>
          <button onClick={()=>setColor("green")}
          className="outline-none px-4 bg-green-600 py-1 rounded-full shadow-lg"
          >Green</button>
          <button onClick={()=>setColor("blue")}
          className="outline-none px-4 bg-blue-600 py-1 rounded-full shadow-lg"
          >blue</button>
          <button onClick={()=>setColor("yellow")}
          className="outline-none px-4 bg-yellow-400 py-1 rounded-full shadow-lg"
          >yellow</button>
          <button onClick={()=>setColor("purple")}
          className="outline-none px-4 bg-purple-600 py-1 rounded-full shadow-lg"
          >Purple</button>
          <button onClick={()=>setColor("pink")}
          className="outline-none px-4 bg-pink-600 py-1 rounded-full shadow-lg"
          >Pink</button>
          <button onClick={()=>setColor("violet")}
          className="outline-none px-4 bg-violet-600 py-1 rounded-full shadow-lg"
          >Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
