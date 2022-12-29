import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostShow() {
    const [users, setUsers] = useState([])
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPost(res.data)
            })
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data)
            })
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                const comments = res.data.filter(comment => comment.postId == id)
                setComments(comments)
            })
    }, [])

    return (
        <div>
            <h3>Post Details</h3>
            <h5>Title: {post.title}</h5>
            <p>Body: {post.body}</p>
            <p>User Name: {users?.filter(user=>user.id==post.userId)[0]?.name}</p>
            <p>Comments:</p>
            {comments.map(comment => <li>{comment.name}</li>)}
        </div>
    )
}

export default PostShow