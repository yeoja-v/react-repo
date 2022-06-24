import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'

function User() {
    const [userId, setUserId] = useState(0)
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getUser (userId) {
      try { 
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

          // PROMISES using Async/await
      // works exactly the same as .then and .catch !

    //  catch (error) {
    //   console.log(error)
    // }

    // async function getUserNormalFunc() {
    //   try {
    //     const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    //       setUsers(result.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // axios method is GET, to get resources from JSONPLACEHOLDER
    // if delete users 15.. , replace GET with delete https://jsonplaceholder.typicode.com/users/15
  
    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(result => setUsers(result.data))
        // .catch(error => console.log(error))
        // getUserNormalFunc()


        getUser(userId) //fetches user and updates state, triggers re-render
    } , [userId])
    console.log("userId", userId)
    console.log("user", user)

    // // get method, returns a promise, then is a method we can chain on to a promise to handle that promise once a value has been fulfilled
// 
    // console.log("users from API: ", users)
  if (loading) {
    return <div>LOADING...</div>
  }
  
  return <div>
    <input className='border border-black' type="text" value={userId} onChange={(event) => setUserId(event.target.value)} />
    <h1>

    </h1>
  </div>

  // return ( <ul>
  //   {users.map(user => {
  //     return (<li key={user.id}>{user.name}</li>)
  //   })}
  // </ul>
  // )
}

export default User

