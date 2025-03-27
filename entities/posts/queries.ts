import { useQuery } from "@tanstack/vue-query";
import { getAllPosts, getPostById, QUERY_KEYS } from "@/common/api";

export function useGetAllPosts() {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: getAllPosts,
  });
}

export function useGetPostById(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.POST(id),
    queryFn: () => getPostById(id),
  });
}
