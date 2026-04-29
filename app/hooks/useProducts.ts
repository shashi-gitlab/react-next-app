import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProductsByCategory = async ({ pageParam = 0, queryKey }: { pageParam: number; queryKey: (string | undefined)[] }) => {
  const [, category] = queryKey;

  const res = await fetch(
    `/api/products/category/${category}?limit=10&skip=${pageParam}`
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export const useProducts = (category: string) => {
  return useInfiniteQuery({
    queryKey: ["products", category],
    queryFn: fetchProductsByCategory,
    initialPageParam: 0,
    enabled: !!category,

    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.length * 10;
      return lastPage?.products?.length ? loaded : undefined;
    },
  });
};