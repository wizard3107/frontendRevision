import React from 'react'

const Timer = () => {
    const [timerId, setTimerID] = React.useState()
    const [time, setTime] = React.useState(0)
    const Start = () => {
        if (!timerId){
            const id = setInterval(() => {
                setTime((prev)=>prev + 1);
            }, 1000);
            setTimerID(id)
        }
    }
    const PauseAt10=()=>{
        if(!timerId){
            const id = setInterval(()=>{
                setTime((prev)=>{
                    if(prev===10)
                    {
                        clearInterval(id)
                        return prev;
                    }
                    else
                   return prev+1
                })
            },1000)
        }
    }
    const Stop = () => {
        clearInterval(timerId);
        setTimerID(null)
        setTime(time);
    }
    const Reset =()=>{
        clearInterval(timerId);
        setTimerID(null);
        setTime(0);
    }
    return (
        <div>
            <h1>Stopwatch</h1>
            <div>
                Time : {time}
            </div>
            <div>
                <button onClick={() => Start()}>Start</button>
                <button onClick={() => Stop()}>Stop</button>
                <button onClick={()=>PauseAt10()}>Start and Pause At 10</button>
                <button onClick={()=>Reset()}>Reset</button>
            </div>
        </div>
    )
}

export default Timer
