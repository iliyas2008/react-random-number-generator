import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [inputVal1, setInputVal1] = useState("")
  const [inputVal2, setInputVal2] = useState("")
  const [result, setResult] = useState("")
  const [copySuccess, setCopySuccess] = useState('');
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)

  const handleChangeFrom = (e)=>{
      setInputVal1(e.target.value)
      setError1(false)
  }
  const handleChangeTo = (e)=>{
    setInputVal2(e.target.value)
    setError2(false)
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick=()=>{
    const fromInput = document.getElementById('fromValue');
    const toInput = document.getElementById('toValue');
    if(inputVal1==="" && inputVal2===""){
      setError1(true)
      setError2(true)
      fromInput.focus()
    }else if(inputVal1===""){
      setError1(true)
      setError2(false)
      fromInput.focus()
    }else if(inputVal2===""){
      setError2(true)
      setError1(false)
      toInput.focus()
    }else{
      setResult(getRandomIntInclusive(inputVal1, inputVal2))
      setInputVal1("")
      setInputVal2("")
      setCopySuccess('');
    }
  }

  const handleCopy=()=>{
      navigator.clipboard.writeText(result)

        const alert = document.querySelector('#myalert')
        const resultText = document.querySelector('#myresult')
        alert.className="d-block text-success m-3"
        setTimeout(function(){ 
            alert.className="d-none"
            resultText.className='d-none'
    
        }, 3000);
    
     
      setCopySuccess('Copied!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Random Number Generator</h1>
      </header>
      <section className="App-body">
      <h2 className="d-inline text-secondary">Result</h2>
        <div className='d-flex flex-row gap-4 align-items-center m-3'>
        <button id='myresult' className={
          result===""? 
          "d-none" : 
          "d-inline btn btn-outline-danger p-2 px-4 rounded my-2"}
          onClick={handleCopy}
          >{result}</button>
          {<p id="myalert" className='d-none'>{copySuccess}</p>}
        </div>
          <div className="myInputs d-flex flex-wrap justify-content-center">
            <FormInput 
            id={"fromValue"}
            prepend={"From"}
            type={"number"}
            placeholder={"Enter a start value ..."}
            onChange={handleChangeFrom}
            value={inputVal1}
            className={"customInput rounded"}
            error={error1?"Enter a value !":null}
            />

            <FormInput 
            id={"toValue"}
            prepend={"To"}
            type={"number"}
            placeholder={"Enter a end value ..."}
            onChange={handleChangeTo}
            value={inputVal2}
            className={"customInput rounded"}
            error={error2?"Enter a value !":null}
            />

          </div>
          <button 
          className='btnSubmit btn btn-outline-primary btn-lg' 
          type='submit'
          onClick={handleClick}
          >Generate</button>
      </section>
    </div>
  );
}

export default App;
