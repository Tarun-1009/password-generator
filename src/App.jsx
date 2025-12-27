import './App.css'
import lock from './assets/lock.png'
import { useState, useCallback, useEffect,useRef } from 'react'


function App() {
  const [password,setPassowd]= useState('')
  const [length,setLength]= useState(8)
  const [uppercase,setuppercase]=useState(false)
  const [lowercase,setlowercase]=useState(true)
  const [numbers,setnumbers]=useState(false)
  const [symbols,setsymbols]=useState(false)
  const passwordRef= useRef(null)


  const generatePassword= useCallback(() => {
    if(!uppercase && !lowercase && !numbers && !symbols){
      setPassowd('')
      return
    }
    let str=''
    if(uppercase) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(lowercase) str += 'abcdefghijklmnopqrstuvwxyz'
    if(numbers) str += '0123456789'
    if(symbols) str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    let password=''
    for(let i=0;i<length;i++){
      const index= Math.floor(Math.random()* str.length)
      password += str[index]
    }
    setPassowd(password)
  },[length,uppercase,lowercase,numbers,symbols])



  useEffect(() => {
    generatePassword();
  }, [length,uppercase,lowercase,numbers,symbols])


  const copyPassword = useCallback (() => {
    passwordRef.current.select();
    document.Clipboard.writeText(password);
  },[])

  return (
    <div className="App">
      <img src={lock} width="100" height="100"/>
      <h1>Password Generator</h1>
      <p>Generate secure passwords easily!</p>
      <div className='password-container'>
        <div className='password-display'>
          <input type="text" value={password} ref={passwordRef}></input>
          <button className="reload" onClick={generatePassword}>⟳</button>
        </div>
        <button className="copy-button" onClick={copyPassword}>Copy</button>
      </div>
      <div className='length'> 
        <label>Password Length : {length}</label>
      </div>
      <input type="range" min="6" max="100" value={length} onChange={(e) => setLength(e.target.value)} />
      <label className='checkbox'>
    Uppercase<input type="checkbox" checked={uppercase} onChange = {() => setuppercase(!uppercase)}/>
      </label>
      <label className='checkbox'>
      Lowercase<input type="checkbox" checked={lowercase}  onChange = {() => setlowercase(!lowercase)}/>
      </label>
      <label className='checkbox'>
      Numbers<input type="checkbox" checked={numbers}  onChange = {() => setnumbers(!numbers)}/>
      </label>
      <label className='checkbox'>
      Symbols<input type="checkbox" checked={symbols} onChange = {() => setsymbols(!symbols)}/>
      </label>
  </div>
  )
}
export default App