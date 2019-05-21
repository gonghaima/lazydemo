import React from "react";
import data from "./data";
import LazyLoad from "react-lazyload";

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);
/**Lazy loading text */

// const Post = ({ id, title, body }) => (
//   <div className="post">
//     <div className="post-body">
//       <h4>{title}</h4>
//       <p>{body}</p>
//     </div>
//   </div>
// );

/** Lazy loading images */
// const Post = ({ id, title, body }) => (
//   <div className="post">
//     <LazyLoad>
//       <div className="post-img">
//         <img src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
//       </div>
//     </LazyLoad>
//     <div className="post-body">
//       <h4>{title}</h4>
//       <p>{body}</p>
//     </div>
//   </div>
// );

/** Lazy loading images with placeholder */
const Post = ({ id, title, body }) => (
  <div className="post">
    <LazyLoad
      once={true}
      placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />}
    >
      <div className="post-img">
        <img src={`https://picsum.photos/id/${id}/1000/1000`} alt="..." />
      </div>
    </LazyLoad>
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
        <LazyLoad key={post.id} placeholder={<Loading />}>
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>
  </div>
);

export default App;
