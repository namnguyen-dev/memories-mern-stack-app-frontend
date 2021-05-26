export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      console.log(posts);
      return [...posts, action.payload];
    case 'CREATE':
      console.log(posts);
      return [...posts, action.payload];

    default:
      return posts;
  }
};
