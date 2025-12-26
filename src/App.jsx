import react from 'react'
import './App.css'
import lock from './assets/lock.png'

function App() {
  return (
    <div className="App">
      <img src={lock} width="100" height="100"/>
      <h1>Password Generator</h1>
      <p>Generate secure passwords easily!</p>
      <div className='password-container'>
        <div className='password-display'>
          <input type="text" ></input>
          <button>⟳</button>
        </div>
        <button>Copy</button>
      </div>
      <div className='length'> 
        <label>Password Length</label>
      </div>
      <input type="range" min="6" max="100" />
      <label className='checkbox'>
      Uppercase<input type="checkbox" />
      </label>
      <label className='checkbox'>
      Lowercase<input type="checkbox" />
      </label>
      <label className='checkbox'>
      Numbers<input type="checkbox" />
      </label>
      <label className='checkbox'>
      Symbols<input type="checkbox" />
      </label>
  </div>
  )
}
export default App