import { createBrowserHistory } from 'history'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../components/user/UserCard';
import { useDispatch, useSelector } from 'react-redux';

const ProfilePage = () => {
  const history = createBrowserHistory();
  const location = useLocation();
  const { userId } = useParams()
  const [user, setUser] = useState(null)

const dispatch = useDispatch()
const profileUser = useSelector(state => state.profileUser)

  console.log('location', location)
  console.log('history', history)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(({ data }) => dispatch(setUser(data)))
    .catch(err => console.log(err))
  }, [userId])

  console.log('user', user)

  return (
    <div className='container'>
      {user && <UserCard user={profileUser} />}
      

    </div>
  )
}

export default ProfilePage