import {useState} from "react";


function App() {
  const [Time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(null);


  const formatTime = (seconds) =>{
    const minutes =Math.floor(seconds/60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const startTimer = () =>{
    if(intervalTracker === null){
      const intervalId = setInterval(()=>{
        setTime((t)=>t+1);
      },4000 );
      setIntervalTracker(intervalId);
  
    }
  };

  const stopTimer =()=>{
    if(intervalTracker !== null){
      clearInterval(intervalTracker);
      
      setIntervalTracker(null);
  }
  };
  const resetTimer =() =>{
    if(intervalTracker !== null){
      clearInterval(intervalTracker);
      
      setIntervalTracker(null);
    }
    setTime(0);
  };
  return (
    <>
    <h1> Stopwatch</h1>
    <p>Time: {formatTime(Time)}</p>
    
    {intervalTracker === null ? ( < button onClick = {startTimer}>Start</button>):(
    <button onClick = {stopTimer}>Stop</button>  
    )}
    <button onClick = {resetTimer}>Reset</button>   
   
     </>
       
  );
}

export default App;
