import React from "react"
import { Fragment } from "react"

const SearchUser = ({userId, setUserId}) => {

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