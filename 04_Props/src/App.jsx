import './App.css'
import { CardTwo } from './Components/Card'

function App() {

  return (
    <>
      <h1 className='text-center font-bold text-3xl'>Hello World</h1>

      <div className=' h-full flex justify-center mt-5 gap-10'>
      <CardTwo  username="Chetan"/>
      <CardTwo  username="dev"/>
      </div>
    </>
  )
}

export default App
