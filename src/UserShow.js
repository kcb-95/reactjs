import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function UserShow() {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                setUser(res.data)
            })
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => {
                const userPosts = res.data.filter(post=>post.userId==id)
                setPosts(userPosts)
            })
    }, [])

    return (
        <div>
            <h3>User Details of UserID: {id}</h3>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <h3>Posts Written - {posts.length}</h3>
            {posts.map(post=><li key={post.id}>{post.title}</li>)}
            {/* {posts.filter(post=>post.userId==id).map(post=><li key={post.id}>{post.title}</li>)} */}
        </div>
    )
}

export default UserShow