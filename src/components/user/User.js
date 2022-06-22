import { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => setUsers(result.data))
    } , [])

    console.log("users from API: ", users)

    return <div>User</div>
}

export default User