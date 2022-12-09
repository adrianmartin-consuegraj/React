import { useState, useEffect } from 'react'


var born = false

const BornComponent = () => {

    const [growth, setGrowth] = useState(0)
    const [nirvana, setNirvana] = useState(false)

    const growHandle = () => {
        setGrowth(growth + 10)
    }

    // ↓ this [] means the useEffect is going to be executed only once when the page is loaded
    useEffect ( () => {
        console.log('I am born')
    }, [])

    // this useEffect is going to be executed every single time something change in the page (in this case the state of the const 'growth')
    useEffect ( () => {
        if(born){
            console.log("make mistake and learn")
        } else{
           born = true
        }

        if(growth > 90){
            setNirvana(true)
        }
    }, [growth])

    // 
    useEffect ( () => {
        if(nirvana){
            document.title = "nirvana attained"
        }
    }, [nirvana])
    
  return (
    <>
        <h3>■ useEffect usage</h3>
        <p> growth: {growth} </p>
        <button onClick={growHandle}> learn and grow </button>
        <p> → after age of 90, you go to Nirvana: you can see how the tab title of the page just changes </p>
    </>
  )
}

export default BornComponent