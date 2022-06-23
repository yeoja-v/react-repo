import { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // promises using Async/await - with arrow function
    const getUsers = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // writing Async/await with normal function
    // async function getUsersNormalFunc () {
    //     try {
    //         const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    //         setUsers(result.data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        // handle promises with .then() & .catch() methods
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(result => setUsers(result.data))
        // .catch(error => console.log(error))
        console.log("making network request")
        getUsers()
        // getUsersNormalFunc()

    } , [])

    // useEffect(() => {}, [])

    // console.log("users from API: ", users)

    console.log("rendering my component")

    if (loading) {
        return <div>LOADING...</div>
    }

    return <ul>{users.map(user => {
        return (<li key={user.id}>{user.name}</li>)
    })}</ul>
}

export default User