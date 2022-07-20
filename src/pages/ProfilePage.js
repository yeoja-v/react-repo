import { useParams } from 'react-router-dom';
import UserCard from '../components/user/UserCard';
import useProfileUser from '../components/hooks/useProfileUser';
import useGetComment from '../components/hooks/useGetComments';

const ProfilePage = () => {
  const { userId } = useParams()
  const profileUser = useProfileUser(userId)
  const comments = useGetComment()

  console.log('comments', comments)
  return (
    <div className='container'>
      {profileUser && <UserCard user={profileUser} />}
      

    </div>
  )
}

export default ProfilePage