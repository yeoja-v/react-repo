import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => setUsers(result))
    } , [])

    console.log("users from API: ", users)
  return (
    <div>user</div>
  )
}

export default User