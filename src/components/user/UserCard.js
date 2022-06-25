

function UserCard({user: {name, username, email, phone, website }}) {
    
    return (
        <div className='border border-black rounded-md w-5/12 mx-auto p-3'>
            <h1><strong>Name:</strong> {name}</h1>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p>
                <strong>Website:</strong> <a href={website}>{website}</a>
            </p>
        </div>
    )
}

export default UserCard