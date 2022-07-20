import { useState,useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";


const useGetComment = () => {
    const [comment, setComment] = useState([]);
    // const dispatch = useDispatch()


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((result) => {
            setComment(result)
        })
        .catch((err) => console.log(err)) ;
    }, [comment])

    return comment
}

export default useGetComment