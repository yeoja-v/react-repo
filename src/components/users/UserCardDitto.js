import React from 'react'

function UserCardDitto({user: { name, email, website}}) {
  return (
    <div>
        <h1><strong>Name:</strong> {name}</h1>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Website:</strong> {website}</p>
        

    </div>
  )
}

export default UserCardDitto