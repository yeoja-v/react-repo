import {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const incrementBy1 = () => {
        setCounter(counter + 1)
    }

    const incrementBy15 = () => {
        for (let i = 0; i < 15; i++) {
            setCounter(prevCounter => prevCounter + 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    const myDemoFunc = () => <div>DEMO JSX</div>

    const myDemoComponent = myDemoFunc()
    

    return <div className='space-y-5 border-black border'>
        <h1 className='text-lg font-bold'>{counter}</h1>
        <button className='border-black border' onClick={incrementBy1}>incrementBy1</button>
        <br />
        <button className='border-black border' onClick={incrementBy15}>incrementBy15</button>
        <br />
        <button className='border-black border' onClick={reset}>Reset</button>

        <br />
        { myDemoComponent }
    </div>
}

export default Counter