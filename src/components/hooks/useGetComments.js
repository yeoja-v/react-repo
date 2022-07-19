import { useState,useEffect } from "react";

const useGetComment = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((result) => setComment(result))
        .catch((err) => console.log(err)) ;
    },

    ['comment',comment])

    return (
        <div>
            
        </div>
    )
}

export default useGetComment