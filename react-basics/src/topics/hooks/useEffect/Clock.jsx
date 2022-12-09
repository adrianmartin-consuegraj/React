import { useState, useEffect } from 'react'

const Clock = () => {

    const [time, setTime] = useState(Date)

    useEffect ( () => {
        let handle = setInterval( () =>{
            setTime(Date)
        }, 1000)

        return () => {
            clearInterval(handle)
        }
    })

  return (
    <>
        <h3>■ useEffect usage 2 </h3>
        <p> Clock: {time} </p>
    </>
  )
}

export default Clock