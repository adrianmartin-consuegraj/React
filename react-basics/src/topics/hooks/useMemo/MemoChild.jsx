import { useEffect } from 'react'

let count = 0

const MemoChild = () => {

    useEffect( () => {
        count++
    })
    
  return (
    <div>
       {count}
    </div>
  )
}

export default MemoChild