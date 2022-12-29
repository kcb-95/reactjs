import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function PostList(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res)=>{
                setPosts(res.data)
            })
    })
    return(
        <div>
            <h3>Listing the Posts - {posts.length}</h3>
            <ul>
                {posts.map(post=>
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default PostList