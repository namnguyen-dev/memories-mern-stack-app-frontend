import React from 'react';
import Post from './Post/Post.js';
import useStyle from './styles.js';

function posts() {
  const classes = useStyle;
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
}

export default posts;
