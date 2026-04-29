
"use client";
import React from 'react'
import MVLoader from '@/components/MVLoader';
import NoProductAvailable from '@/components/NoProductAvailable';
import ProductCard from "@/components/ProductCard";
import { useMemo, useRef } from 'react';
import { useProducts } from '@/app/hooks/useProducts';
import { useInfiniteScroll } from '@/app/hooks/useInfiniteScroll';
import { useSearchParams } from "next/navigation";
import { useCategories } from '@/app/hooks/useCategories';

export const ShopGrid = () => {
    const searchParams = useSearchParams();
    const { data: categories = [] } = useCategories();
    const selectedTab = searchParams.get('category') || '';
    const categorySlug = selectedTab.toLowerCase() || categories?.[0]?.slug ;

    const categoryParam = searchParams.get('category') || '';
    const catArray = categoryParam ? categoryParam.split(',') : [];

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
        <>
            {isLoading ? (
                <MVLoader />
            ) : products.length > 0 ? (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-6">
                        {products.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>

                    {/* 👇 Observer trigger */}
                    <div ref={loadMoreRef} className="h-20 w-full flex items-center justify-center">
                        {isFetchingNextPage && <MVLoader />}
                    </div>
                </>
            ) : (
                <NoProductAvailable />
            )}
        </>
    )
}
