"use client";

import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";

const fetchBlogs = async (
  { pageParam = 0, queryKey }: QueryFunctionContext
) => {
  const [, fields, limit] = queryKey;

  const res = await fetch(
    `/api/blogs?limit=${limit}&skip=${pageParam}${
      fields ? `&select=${fields}` : ""
    }`
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");

  return res.json();
};

export const useBlogs = (fields?: string, limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: ["blogs", fields, limit],
    queryFn: fetchBlogs,
    initialPageParam: 0,
    enabled: !!fields,
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.length * 10;
      return lastPage?.posts?.length ? allPages.length * limit : undefined;
    },
  });
};