"use client";

import { useRef, useState, useMemo } from "react";
import HomeTabBar from "./home/HomeTabBar";
import ProductCard from "./ProductCard";
import MVLoader from "./MVLoader";
import NoProductAvailable from "./NoProductAvailable";
import { useProducts } from "@/app/hooks/useProducts";
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll";
import { useCategories } from "@/app/hooks/useCategories";


const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const { data: categories = [] } = useCategories();

  const categorySlug = selectedTab.toLowerCase() || categories?.[0]?.slug || "";

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts(categorySlug);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll(
    loadMoreRef as React.RefObject<HTMLElement>,
    () => {
      if (hasNextPage) fetchNextPage();
    },
    isFetchingNextPage
  );

  const products = useMemo(() => {
    return data?.pages?.flatMap((page) => page.products) || [];
  }, [data]);

  return (
    <div>
      <HomeTabBar
        selectedTab={selectedTab || categories?.[0]?.slug}
        onSelectTab={setSelectedTab}
        categories={categories}
        loading={!categories.length}
      />

      {isLoading ? (
        <MVLoader />
      ) : products.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* 👇 Observer trigger */}
          <div ref={loadMoreRef} className="h-10" />

          {isFetchingNextPage && <MVLoader />}
        </>
      ) : (
        <NoProductAvailable />
      )}
    </div>
  );
};

export default ProductGrid;