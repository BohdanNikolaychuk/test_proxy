export const pathKeys = {
  root: '/',
  main() {
    return pathKeys.root;
  },
  posts: {
    root() {
      return pathKeys.root.concat('posts/');
    },
    bySlug({ slug }) {
      return pathKeys.posts.root().concat(slug, '/');
    },
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
};
