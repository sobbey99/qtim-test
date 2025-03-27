export const QUERY_KEYS = {
  POSTS: ["posts"],
  POST: (id: string) => [QUERY_KEYS.POSTS, id],
};
