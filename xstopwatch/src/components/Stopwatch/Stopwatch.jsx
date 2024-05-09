import { useEffect, useState } from "react";

const Stopwatch = () => {
    const[timeInsec, setTimeInsec] = useState(0);
    const[timeInminutes, setTimeInMinutes] = useState(0);
    const[timerFlag, setTimerFlag] = useState(true);

    const handleClick = () => {
        setTimerFlag((prevTimer) => !prevTimer);
    }

    useEffect(()=> {
        let timerId;
        if(!timerFlag){
            timerId = setInterval(()=> {
                setTimeInsec((prevTimer) => prevTimer +1);
            }, 1000);
        }else{
            console.log("clearing Interval");
            clearInterval(timerId);
        }
        
        return () => clearInterval(timerId);
    }, [timerFlag]);

    const handleReset = () => {
        setTimerFlag(true);
        setTimeInsec(0);
    }

    const minutes = Math.floor(timeInsec / 60);
    const  seconds = timeInsec% 60;


 
    return (
        <div>
            <h1>Stopwatch</h1>
            <div>
                Time: {minutes}:{seconds < 10 ? '0' + seconds : seconds}
            </div>
            <button onClick={handleClick}>{timerFlag  ? "Start" : "Stop"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch;