import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";


export default function Timer({title,playerTimer})
{

  const [timeRemaining , setTimeRemaining] = useState(playerTimer*1000);

    const dialog = useRef();
    const timer = useRef();
     
    const isStarted = timeRemaining > 0 && timeRemaining < playerTimer*1000 ;

    function startTimer()
    {
        timer.current = setInterval(()=> {
            setTimeRemaining((prevRemainingTime)=>prevRemainingTime-10);
         },10);
        
    }
    if(timeRemaining <= 0)
    {
        dialog.current.open();
        clearInterval(timer.current);
    }
    function stopTimer()
    {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleRestart()
    {
        setTimeRemaining(playerTimer*1000);
    }

    return (
        <>
        <ResultModal ref = {dialog} timer={playerTimer} remainingtime = {timeRemaining} onRestart = {handleRestart}/>
        <section className = "challenge">
            
        <h2 >{title}</h2>
        
        <p className="challenge-time">{playerTimer} second{playerTimer >1 ? 's':''}</p>
        <button onClick = {isStarted ? stopTimer : startTimer}>{isStarted ? 'Stop' : 'Start'}</button>
        <p className={isStarted ? 'active':''}>{isStarted ? 'Timer is running' : 'Timer is inactive'}</p>
        </section>
        </>
    );
}