import react from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <p1>Generate secure passwords easily!</p1>
      <div className='password-container'>
        <div className='password-display'>
          <input type="text" ></input>
          <button>⟳</button>
        </div>
        <button>Copy Password</button>
      </div>
        <label>Password Length</label>
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