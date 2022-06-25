import { Fragment } from "react"


const SearchUser = ({userId, setUserId}) => {
    return (
        <Fragment>
            <h1>Search User</h1>
            <label>
                User Id: <input className='border border-black' type="text" value={userId} onChange={(event) => setUserId(event.target.value)} />
            </label>
        </Fragment>
    )

}

export default SearchUser