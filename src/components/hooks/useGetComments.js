import { useState,useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";


const useGetComment = () => {
    const [comment, setComment] = useState([]);
    // const dispatch = useDispatch()

//if our block of code does not depend on any variable, no dependencies or else our useEffect will keep re-rendering.

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((result) => {
            console.log('result', result)
            // setComment(result)
        })
        .catch((err) => console.log(err)) ;
    }, [])

    return comment
}

export default useGetComment