import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
  const res = await fetch("/api/categories");
  return res.json();
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 60,
  });
};