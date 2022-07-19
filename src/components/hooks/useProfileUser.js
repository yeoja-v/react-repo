
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/profileUser/profileUserActions'
import axios from 'axios'

// keyword use is the custom hook naming convention

const useProfileUser = (userId) => {
    const dispatch = useDispatch()
    const profileUser = useSelector(state => state.profileUser)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(({ data }) => dispatch(setUser(data)))
        .catch(err => console.log(err))
      }, [userId, dispatch, setUser])

      return profileUser
}

export default useProfileUser