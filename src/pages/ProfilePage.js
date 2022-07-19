import { useParams } from 'react-router-dom';
import UserCard from '../components/user/UserCard';
import useProfileUser from '../components/hooks/useProfileUser';

const ProfilePage = () => {
  const { userId } = useParams()
  const profileUser = useProfileUser(userId)

  return (
    <div className='container'>
      {profileUser && <UserCard user={profileUser} />}
      

    </div>
  )
}

export default ProfilePage