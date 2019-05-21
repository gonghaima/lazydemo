import React from "react";
import logo from "./logo.svg";
import data from "./data";

const Post = ({ id, title, body }) => (
  <div className="post">
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <h2>LazyLoad Demo</h2>
    <div className="post-container">
      {data.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  </div>
);

export default App;
