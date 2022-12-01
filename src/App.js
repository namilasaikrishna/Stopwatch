import { useState } from 'react';
import DisplayWatch from './components/showWatch';
import './App.css';

function App() {
  const [watch,setWatch] = useState({millis:0,secnds:0,mins:0,hrs:0})
  const [stopped,setStopped] = useState()
  const[status,setStatus] = useState(true)

  var updatedMillis = watch.millis;
  var updatedSecnds = watch.secnds;
  var updatedmins = watch.mins;
  var updatedHrs = watch.hrs

  const startHandler = () =>{
    run();
    setStopped(setInterval(run,10))
    setStatus(!status)
  }

  const stophandler = () =>{
    clearInterval(stopped)
  }

  const resetHandler = () =>{
    clearInterval(stopped)
    setWatch({millis:0,secnds:0,mins:0,hrs:0})
  }

  const run = () =>{
    if(updatedmins === 60){
      updatedHrs++
      updatedmins = 0
    }
    else if(updatedSecnds === 60){
      updatedmins++
      updatedSecnds = 0
    }
    else if(updatedMillis === 100){
      updatedSecnds++
      updatedMillis = 0
    }
    else if(updatedHrs === 24){
      updatedHrs = 0
    }
    updatedMillis++
    return setWatch({millis:updatedMillis,secnds:updatedSecnds,mins:updatedmins,hrs:updatedHrs})
  }

  return (
    <center>
    <DisplayWatch show={watch} start = {startHandler} stop={stophandler} reset = {resetHandler}/>
    </center>
  );
}

export default App;
