import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])

    const getUser = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(result.data)
      // PROMISES using Async/await
      // works exactly the same as .then and .catch !
    }
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
        console.log("making network request")


        getUser()
    } , [])
    console.log("rendering my component")

    // // get method, returns a promise, then is a method we can chain on to a promise to handle that promise once a value has been fulfilled
// 
    // console.log("users from API: ", users)
  if (loading) {
    return <div>LOADING...</div>
  }
  
  return ( <ul>
    {users.map(user => {
      return (<li key={user.id}>{user.name}</li>)
    })}
  </ul>
  )
}

export default User