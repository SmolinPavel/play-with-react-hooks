import React, { useState, useEffect } from 'react';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(result => setPosts(result));
  });

  return (
    <>
        <h1>You have the following posts to check...</h1>
        <ol>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </ol>
    </>
  );
};

export default PostsList;