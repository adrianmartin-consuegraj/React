import { useState } from 'react'

const WritenMessage = () => {

    const [message, setMessage] = useState("")

  return (
    <>
        <h3>■ useState usage</h3>
        <p>Introduce something:</p>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <p> → The writen message is: </p>
        <p>{message}</p>
    </>
  )
}

export default WritenMessage