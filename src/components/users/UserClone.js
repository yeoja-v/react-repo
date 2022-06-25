import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import SearchUser from './SearchUser'

function UserClone() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState(0)

    

async function getUser (userId) {
    try { 
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    setUser(result.data)
    console.log(result.data)
    setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

useEffect(() => {
    getUser(userId)

}, [userId])

console.log("user id", userId)

if (loading) {
    return <div>LOADING...</div>
}

  return (
    <div className='space-y-10'>
        <SearchUser userId={userId} setUserId={setUserId} />
        {user && 
            <UserCard user={user} /> //pass in user as props
        }
    </div>
  )

    // if user exists && then, render ! false, render nothing.
}

export default UserClone