import { useState, useReducer } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='Calculator'>
      <div className='Display'>
        <div className='previous-output'>{previousOperand} {operation}</div>
        <div className='current-output'>{currentOperand}</div>
      </div>
      <div className='Keypad'>
        <div className='left-panel'>
          <button>sin</button>
          <button>ln</button>
          <button>cos</button>
          <button>log</button>
          <button>tan</button>
          <button>e</button>
          <button>pi</button>
          <button>pow</button>
          <button>!</button>
          <button>sqrt</button>
        </div>

        <div className='main-panel'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button>.</button>
          <button>DEL</button>
        </div>

        <div className='right-panel'>
          <button>÷</button>
          <button>(</button>
          <button>×</button>
          <button>)</button>
          <button>-</button>
          <button>=</button>
          <button>+</button>
        </div>

      </div>
    </div>
  )
}

export default App
