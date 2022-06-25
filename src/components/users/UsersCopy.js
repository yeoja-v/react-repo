import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function UsersCopy() {

    const [user, setUser] = useState([])
    const [userId, setUserId] = useState(0)
    const [loading, setLoading] = useState(true)

    // PROMISES using Async/await
    // works exactly the same as .then and .catch !

    // const getUsers = async () => { //arrow async function
    //     try {
    //         const results = await axios.get("https://jsonplaceholder.typicode.com/users")
    //         // try statement defines a code block to run (try)
    //         setUsers(results.data)
    //         setLoading(false)
    //     } catch (error) 
    //     // catch statement defines a code block to handle any error
    //     {
    //     console.log(error)
    //     setLoading(false)
    //     }
    // }

    async function getUser (userId) {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users${userId}`)
            setUser(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [userId])

    console.log("user id", userId)
    console.log('user', user)

    if (loading) {
        return <div>LOADING...</div>
    }

  return (
    <div>
        <input className="border border-black" value={userId} onChange={(event) => setUserId(event.target.value)} type= "text" />
        <h1>u</h1>
    </div>
  )
}

export default UsersCopy