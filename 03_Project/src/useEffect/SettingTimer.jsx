import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function SettingTimer() {
    const[time,setTime] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(t=>t+1);
        },1000);

        return()=>{
            clearInterval(timer);
            console.log("Timer stopped");
            
        }
    },[])

    return <h2>Time Elapsed :{time} seconds</h2>
}
