import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-custom-gradient min-h-screen">
      <h1>Hello Developer</h1>
    </div>
    </>
  )
}

export default App
