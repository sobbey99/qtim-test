import axios from "axios";
import { ApiRoutes } from "./routes";
import type { Post } from "../types";

const SHOW_PER_PAGE = 8;

export const getAllPosts = async () => {
  try {
    const response = await axios.get<Post[]>(ApiRoutes.GET_ALL_POSTS);
    const posts = response.data;

    const chunkedPosts: Post[][] = [];
    for (let i = 0; i < posts.length; i += SHOW_PER_PAGE) {
      chunkedPosts.push(posts.slice(i, i + SHOW_PER_PAGE));
    }

    return chunkedPosts;
  } catch (error) {
    console.error(error);

    throw new Error("Failed to fetch all posts");
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await axios.get<Post>(ApiRoutes.GET_POST_BY_ID(id));
    return response.data;
  } catch (error) {
    console.error(error);

    throw new Error("Failed to fetch post");
  }
};
