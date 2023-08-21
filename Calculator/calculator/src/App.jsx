import { useState } from 'react'
import './App.css'
import buttonsBoard from './_codux/boards/buttons.board'

function App() {
  const [Value, setValue] = useState(0)

  return (
    <div className="App">
      <h1 className='center'>Calculator</h1>
      <div>
        <buttonsBoard/>
      </div>
    </div>
  )
}

export default App
