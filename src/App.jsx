import {useState} from "react";


function App() {
  const [time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(null);


  const formatTime = (seconds) =>{
    const minutes =Math.floor(seconds/60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const startTimer = () =>{
    if(intervalTracker === null){
      const intervalId = setInterval(()=>{
        setTime(t=>t+1);
      },1000 );
      setIntervalTracker(intervalId);
    }
  };

  const resetTimer =() =>{
    if(intervalTracker !== null){
      clearInterval(intervalTracker);
      
      setIntervalTracker(-1);
    }
    setTime(0);
  }
  return (
    <>
    <h1> StopWatch</h1>
    <p>Time : {formatTime(time)}</p>
    < button onClick = {startTimer}>Start</button>
    <button onClick = {resetTimer}>Reset</button>   
     <button onClick = {()=> {
      clearInterval(intervalTracker);
      setIntervalTracker(-1);
    }}>Stop</button>   
         </>
       
  )
}

export default App;