import React, { useState, useEffect } from 'react'

// we're fetching the data from: https://api.github.com/users/adrianmartin-consuegraj

const initProfile = {
    name: null,
    location: null,
    publicRepos: null
}

const FetchData = () => {

    const [profile, setProfile]= useState(initProfile)

//! you have 2 options: 
    //! A) the first one is to create a "regular" function and add an async statement in order to only continue executing the code if the current line can get the data.
    //! B) the other one is to create an "arrow" function and write down some promises in order to only continue executing the code if everything's going well.

/* //* Option A)
    async function getProfile() {
      const reponse = await fetch('https://api.github.com/users/adrianmartin-consuegraj')
      const json = await reponse.json()

      setProfile({
        name: json.name,
        location: json.location,
        publicRepos: json.public_repos
      })
    }
*/

    //* Option B) → this seems to be a better option
    const getProfile = () => {
        return fetch('https://api.github.com/users/adrianmartin-consuegraj')
        .then( (reponse) => reponse.json() )
        .then( (data) => {

            setProfile({
                name: data.name,
                location: data.location,
                publicRepos: data.public_repos
              })
        } )
    }

    // with this "[]" we are indicating that we only want this useEffect to be executed once, exactly when the page is loaded
    useEffect ( () => {
        getProfile()
    }, [])

  return (
    <>
    <h3> ■ Fetch </h3>
        <h5> ++++++++++ THIS IS IMPORTANT! </h5>
        <p> → getting values from an API </p>
        <p> <b>Name:</b> {profile.name}</p>
        <p> <b>Location:</b> {profile.location}</p>
        <p> <b>Public Repos:</b> {profile.publicRepos}</p>
    </>
  )
}

export default FetchData