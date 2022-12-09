import React, { useState } from 'react'

const GitHubAccount = () => {


    let url = 'https://api.github.com/users/'
    const [user, setUser] = useState('')

    // when the key "Enter" is pressed in the keyboard this function is called
    const getFollowers = (e) => {
        if(e.key === 'Enter'){
            alert('enter pressed')
            alert(e.currentTarget.value)
            alert(url+e.currentTarget.value)

           // here we call the arrow function which do the fetch into the GitHub API
            get(url+e.currentTarget.value)

        }
    }

    // we do the fetch with this arrow function
    const get = (url) => {
        return fetch(url)
            .then( (response) => response.json() )
            .then( (data) => {
              //? I still don't know how to catch this exception error 'null'
              if(data==null){
                alert("The username doesn't exist")
              } else{
                setUser(data.name)
              alert(data.name)
              }
              
            })
    }
    

  return (
    <>
      <h3>■ Custom Hook </h3>
      <p> Git ID: {user}</p>
      <input onKeyDown={getFollowers}></input>
    </>
  )
}

export default GitHubAccount