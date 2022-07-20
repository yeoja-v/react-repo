import { useParams } from 'react-router-dom';
import UserCard from '../components/user/UserCard';
import useProfileUser from '../components/hooks/useProfileUser';
import { useEffect } from 'react';



const ProfilePage = () => {
  const { userId } = useParams()
  const profileUser = useProfileUser(userId)

  // timeout in milliseconds, 2000ms = 2s
  useEffect(() => {
    console.log('useEffect is running')

    setTimeout(() => {
      console.log('a message from the past - 5 seconds ago')
    }, 5000)

    return function cleanUp() {
      console.log('sweeping in process')
      clearTimeout(timerId)
    }
  },[])

  if (!profileUser) {
    return <div>Checking for User</div>
  }

  return (

    <div className='container'>
      {profileUser && <UserCard user={profileUser} />}
      

    </div>
  )
}

export default ProfilePage