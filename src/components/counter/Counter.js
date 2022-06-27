import { useState } from "react";
import React from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const incrementBy1 = () => {
        setCounter(counter + 1)
    }

const incrementBy15 = () => {
    for (let i = 0; i < 15; i++) { 
        // for loop will run 15x until function ends
        // we want the most upto date value, instead of counter + 1..
        // we must use callback function!
        
        setCounter((prevCounter) => prevCounter + 1)
        console.log("for loop is working, iteration:", i+1)

        // setCounter(counter + 15)
    }
}

const reset = () => {
    setCounter(0)
}

console.log(counter)

return <div className='space-y-5 border-black border'>
        <h1 className='text-lg font-bold'>{counter}</h1>
        <button className='border-black border' onClick={incrementBy1}>incrementBy1</button>
        <br />
        <button className='border-black border' onClick={incrementBy15}>incrementBy15</button>
        <br />
        <button className='border-black border' onClick={reset}>Reset</button>
    </div>
}

export default Counter