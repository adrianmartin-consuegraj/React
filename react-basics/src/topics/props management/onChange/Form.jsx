import { useState, useEffect, useRef } from 'react'

const Form = () => {

    const nameRef = useRef()
    const incomeRef = useRef();
    const workingRef = useRef()
    const submitRef = useRef()

    useEffect( () => {
        nameRef.current.focus()
    }, [])

    const [name, setName]= useState("")
    const [income, setIncome]= useState("")
    const [working, setWorking] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleIncomeChange = (e) => {
        setIncome(e.target.value)
    }

    const handleWorking = (e) => {
        //console.dir(e.target.checked) //← this shows the value through console in the DOM
        setWorking(e.target.checked)
        
    }
    
    const submitHandle = () => {
        const message = "→ Name: " + name + "\n→ Income: " + income + "\n→ Working?: " + working
        alert(message)
    }

  return (
    <>
        <h3>■ Update data with onChange</h3>
        <p> → Fill up the form</p>
        <form onSubmit={submitHandle}>
            <div>
                <span>Name:</span>
                <input ref={nameRef} type="text" value={name} onChange={handleNameChange}></input>
            </div>

            <div>
                <span>Income:</span>
                <select ref={incomeRef} value={income} onChange={handleIncomeChange}>
                    <option value="high">High</option>
                    <option value="mid">Mid</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <div>
                <span>Working?</span>
                <input ref={workingRef} type="checkbox" onChange={handleWorking}></input>
            </div>

            <button ref={submitRef} type="submit">Submit!</button>
        </form>
    </>
  )
}

export default Form