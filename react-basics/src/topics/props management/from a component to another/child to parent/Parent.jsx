//import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    ////const [name, setName] = useState('void');

    

  return (
    <>
        <h3>■ Props Management: from Child to Parent </h3>
        <p> → The value is sent from Child.jsx to Parent.jsx</p>

        <Child /> 
    </>
  )
}

export default Parent