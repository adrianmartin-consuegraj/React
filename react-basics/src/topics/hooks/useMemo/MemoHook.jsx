import { useState, useMemo } from 'react'
import MemoChild from './MemoChild';


const MemoHook = () => {

  const [i, setI] = useState(7);

  const onClickHandle = () => {
    setI(i + 1)
  }

  // with the 'useMemo' Hook we can store values in memory and recover them when we want
  // this Hook is basically used to keep expensive, resource intensive functions from needlessly running
  useMemo( () => {
    return <MemoChild />
  }, [])

  return (
    <> 
        <h3>■ useMemo usage </h3>
        <button onClick={onClickHandle}>Increment I</button>
        <p> MemoChild render:</p>
        <MemoChild />
    </>
  )
}

export default MemoHook