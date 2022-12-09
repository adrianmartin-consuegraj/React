import { useState, useEffect } from 'react'

const initXY = {
  x: 2,
  y: 3
}

const MousePosition = () => {

const [position, setPosition] = useState(initXY)

useEffect ( () => {
  window.addEventListener("mousemove", mousemoveHandle)
}, [])

const mousemoveHandle = (e) => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  })
}

  return (
    <>
      <h3>■ useEffect usage 3 </h3>
      <p> → Move your mouse! </p>
      <h5>X: {position.x} Y: {position.y}</h5>
    </>
  )
}

export default MousePosition