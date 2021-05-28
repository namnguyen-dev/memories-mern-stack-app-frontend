import React from 'react';
import Post from './Post/Post.js';
import useStyle from './styles.js';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);
  const classes = useStyle();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      className={classes.mainContainer}
      alignItems="stretch"
      spacing={3}
    >
      {posts.map(post => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
