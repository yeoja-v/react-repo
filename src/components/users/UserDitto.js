import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import UserCardDitto from './UserCardDitto'

function UserDitto() {
    const [user, setUser] = useState([]) //contains all the data !
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState(0)

async function getUser (userId) {
    try { const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    setUser(result.data) // we set User to all the data collected from axios.get
    setLoading(false)
} catch (error) {
    console.log(error)
    setLoading(false)
}
}

useEffect (() => {
    getUser(userId)

 },
 [userId])

 console.log("user id", userId)
 console.log("user", user)



if (loading) {
    return <div> LOADING ... </div>
}

  return (

    <div>
        <h1>Search User</h1>
        <input type="text" value={userId} onChange={(event) => setUserId(event.target.value)} />
        {/* value={userId} sets to 0 / setUserId is the CHANGED event /  */}
        <div>
            <h1>Deconstruction</h1>
            <UserCardDitto user={user}/>
            <h2>Nondeconstruction</h2>
        Name: {user.name}
        <br />
        Email: {user.email}</div>
        
    </div>
  )
}

export default UserDitto