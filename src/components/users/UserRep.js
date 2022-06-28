import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios'

function UserRep() {
    const [user, setUser] = useState([])
    const [userId, setUserId] = useState(0)
    const [loading, setLoading] = useState(true)

async function getUser () {
    try { const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    setUser(result.data)
    setLoading(false)
    } catch(error) {
        console.log(error)
        setLoading(false)
    }
}

useEffect(() => {
    getUser()
}, [userId])

console.log("user", user)
console.log("user Id", userId)

if (loading)
return <div>
    LOADING...
</div>

  return (
    <div>
        <h1>Search</h1>
         <label><h1>User Id:</h1><input type="text" value={userId} onChange={(event) => setUserId(event.target.value)} /></label>
         {user && 
         <h1><strong>Name:</strong> {user.name}</h1>}

        
    </div>
  )
}

export default UserRep