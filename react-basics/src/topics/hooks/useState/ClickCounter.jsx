import { useState } from 'react'

const ClickCounter = () => {

    const [clicks, setClicks] = useState(0)
  
    function addingAClick () {
        setClicks(clicks+1)
    }
  
    return (
        <>
            <h3>■ Click Counter Component</h3>
            <button onClick={addingAClick}>Click here to add a click!</button>
            <p> → You've clicked {clicks} times</p>
        </>
  )
  
}

export default ClickCounter