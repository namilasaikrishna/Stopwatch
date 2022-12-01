import './showWatch.css'
import React from 'react'

const DisplayWatch = (props) => {
  return (
    <div className='watch'>
    <div className='spanElements'>
    <span>{(props.show.hrs >=10)?props.show.hrs:"0"+props.show.hrs} : </span>
    <span>{(props.show.mins >=10)?props.show.mins:"0"+props.show.mins} : </span>
    <span>{(props.show.secnds >=10)?props.show.secnds:"0"+props.show.secnds} : </span>
    <span>{(props.show.millis >=10)?props.show.millis:"0"+props.show.millis} </span>
    </div>
      <div className='buttons'>
      <button onClick={props.start} className="start">Start</button>
      <button onClick={props.stop} className="stop">Stop</button>
      <button onClick={props.reset} className="reset">Reset</button>
      </div>
    </div>
  )
}

export default DisplayWatch
