import react from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <p1>Generate secure passwords easily!</p1>
      <div>
        <div>
          <input type="text" ></input>
          <button>⟳</button>
        </div>
        <button>Copy Password</button>
      </div>
      <div>
        <label>Password Length</label>
        <input type="number" min="4" max="20" />
      </div>
      <input type="slider" min="6" max="100" />
      <input type="checkbox" />Uppercase
      <input type="checkbox" />Lowercase
      <input type="checkbox" />Numbers
      <input type="checkbox" />Symbols
    </div>
  )
}
export default App