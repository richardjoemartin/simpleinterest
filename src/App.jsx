import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)

  const [interest,setInterest]=useState(0)

  console.log(amount,year,rate)
   const calculate=(e)=>{ 
    const output=amount*year*rate/100;
    console.log(output);
    setInterest(output)
  }
const reset=(e)=>{
setAmount(0)
setYear(0)
setRate(0)
setInterest(0)
}

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <h1>Simple Interest calculator</h1>
          <p>Calculate your simple interest with us</p>

        </div>
        <div className='total'>
            <h2> &#8377; {interest}</h2>
            <p>Your total interest</p>
        </div>
        <form>
          <div className="input">
              <TextField  id="outlined-basic" label="Amount" variant="outlined" value={amount||""} onChange={(e)=>setAmount(e.target.value)}/>
              <TextField id="filled-basic" label="Year" variant="outlined" value={year||""} onChange={(e)=>setYear(e.target.value)}/>
              <TextField id="standard-basic" label="Rate" variant="outlined" value={rate||""} onChange={(e)=>setRate(e.target.value)}/>
              <div className="button">
                <br />
              <Button variant="outlined" onClick={e=>calculate(e)}>Calculate</Button> &nbsp;
              <Button variant="contained" onClick={e=>reset(e)}>Reset</Button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
