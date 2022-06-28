import React from "react"
import { Fragment, useState, useEffect } from "react"
import axios from 'axios'

const SearchUser = ({setUser}) => {

    const [userId, setUserId] = useState(0)

    async function getUser (userId) {
        try { 
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        setUser(result.data)
        console.log(result.data)
        } catch (error) {
            console.log(error)
            
        }
    } 

    useEffect(() => {
        getUser(userId)
    
    }, [userId])
    
    console.log("user id", userId)

    return (
    <Fragment>
    <h1>Search</h1>
    <label>
        User Id: <input className='border border-black' onChange={(event) => setUserId(event.target.value)} value={userId} type="text" />
    </label>
    </Fragment>
    )
}

export default SearchUser 