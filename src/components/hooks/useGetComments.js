import { useState,useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";


const useGetComment = (commentId) => {
    const [comment, setComment] = useState([]);


//if our block of code does not depend on any variable, no dependencies or else our useEffect will keep re-rendering.

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((response) => {
            response.json()
            .then(result => setComment(result))
        })
        .catch((err) => console.log(err)) ;
    }, [commentId])

    return comment
}

export default useGetComment