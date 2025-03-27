import { useQuery } from "@tanstack/vue-query";
import { getAllPosts, QUERY_KEYS } from "~/common/api";

export function useGetAllPosts() {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: getAllPosts,
  });
  //   return useQuery({
  //     queryKey: ["posts"],
  //     queryFn: getAllPosts,
  //   });
}
