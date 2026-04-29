'use client';
import { useCategories } from '@/app/hooks/useCategories';
import { useRouter, useSearchParams } from 'next/navigation';
import EcommerceFilter from './EcommerceFilter';

export const ShopFilterBar = () => {
    const { data: categories = [] } = useCategories();
    const router = useRouter();
    const searchParams = useSearchParams();

    const activeCategory = searchParams.get('category') || 'all';
    const selected = searchParams.get('category')?.split(',') || [];

    // const toggleCategory = (slug: string) => {
    //     let updated: string[];
    //     if (selected.includes(slug)) {
    //         updated = selected.filter((c) => c !== slug);
    //     } else {
    //         updated = [...selected, slug];
    //     }

    //     const params = new URLSearchParams(searchParams.toString());

    //     if (updated.length > 0) {
    //         params.set('category', updated.join(','));
    //     } else {
    //         params.delete('category');
    //     }

    //     router.push(`/shop?${params.toString()}`);
    // };

    const handleClick = (slug: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (slug === 'all') {
            params.delete('category');
        } else {
            params.set('category', slug);
        }

        router.push(`/shop?${params.toString()}`);
    };

    return (
        <aside className="w-1/5 p-4 border-r bg-white md:sticky md:top-16 md:self-start ">
            <h2 className="font-semibold mb-4">Filters</h2>

            <ul className="space-y-2 md:max-h-screen md:overflow-y-auto">

                {categories && categories.map((cat: any) => {
                    const isActive = selected.includes(cat.slug);
                    return (
                        <li key={cat?.slug} className={`flex items-center gap-2 px-3 py-2 hover:bg-shop-dark-green hover:text-white cursor-pointer transition ${isActive && 'bg-shop-dark-green text-white'}`}
                            onClick={() => handleClick(cat.slug)}>
                            {/* <input
                                type="checkbox"
                                checked={isActive}
                                onChange={() => handleClick(cat.slug)}
                                className="w-4 h-4 accent-black cursor-pointer"
                            /> */}

                            <span
                                className={`cursor-pointer select-none`}
                            >
                                {cat?.name}
                            </span>
                        </li>)
                }
                )}
            </ul>
            {/* <EcommerceFilter /> */}
        </aside>
    )
}
