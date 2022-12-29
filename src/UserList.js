import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data)
            })
    },[])
    return (
        <div>
            <h3>Listing the Users - {users.length}</h3>
            <ul>
                {users.map(user=>
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default UserList