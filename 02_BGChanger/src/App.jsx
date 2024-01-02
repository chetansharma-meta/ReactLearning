import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")
  return (
    <>
      <div className='text-2xl w-full h-screen duration-200 text-center' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-5 py-1 rounded-full shadow-lg text-grey' style={{backgroundColor: "red"}} onClick={() => {setColor("red")}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "green"}} onClick={() => {setColor("green")}}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "blue"}} onClick={() => {setColor("blue")}}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "pink"}} onClick={() => {setColor("pink")}}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "olive"}} onClick={() => {setColor("olive")}}>Olive</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "lavender"}} onClick={() => {setColor("lavender")}}>Lavender</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "orange"}} onClick={() => {setColor("orange")}}>Orange</button>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
