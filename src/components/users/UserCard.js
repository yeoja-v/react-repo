import React from 'react'

function UserCard({user: {name, username, email, phone, website }}) //destructuring property from user
 {
  return (
    <div className='border border-black rounded-md w-6/12 p-3'>
            <h1><strong>Name:</strong> {name}</h1>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> <a href={website}>{website}</a></p>
        </div>
  )
}

export default UserCard