import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import UserShow from "./UserShow";
import PostList from "./PostList";
import PostShow from "./PostShow"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/userlist">User List</Link>
        <Link to="/postlist">Post List</Link>
        <Routes>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/userlist" element={<UserList/>}/>
          <Route exact path="/postlist" element={<PostList/>}/>
          <Route exact path="/users/:id" element={<UserShow/>}/>
          <Route exact path="/posts/:id" element={<PostShow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App