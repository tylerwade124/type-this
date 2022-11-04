import { useEffect, useState } from 'react'

export default function Timer () {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)


    var timer=false

    useEffect(() => {
        timer=setInterval(()=>{
            setSeconds(seconds+1)

            if(seconds===59) {
                setMinutes(minutes+1)
                setSeconds(0)
            }
        }, 1000)
        return ()=> clearInterval(timer)

    })

    const restart=()=>{
        setSeconds(0)
        setMinutes(0)
    }

    const stop = () => {
        clearInterval(timer)
        }
    
    




    return (
        <div className="timer">
            <div className="container">
                <div className="timer_container">

                    <button 
                        className="timer-start"
                        onClick={restart}>
                    <h1>{minutes<10? ""+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
                    </button>
                    <button onClick={stop}>Stop</button>


                </div>
            </div>
        </div>
    )

}