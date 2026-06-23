"use client";

import Link from 'next/link';
import { Container } from '@/components/Container';
import { PriceFormatter } from '@/components/PriceFormatter';
import { Button } from '@/components/ui/button';
import { SubText, SubTitle, Title } from '@/components/ui/text';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { removeFromWishlist } from '@/app/store/wishlistSlice';
import { HeartOff } from 'lucide-react';

export default function FavoritePage() {
  const wishlist = useAppSelector((state) => state.wishlist.items);
  const dispatch = useAppDispatch();

  return (
    <Container className="py-12">
      <div className="space-y-10">
        <section className="rounded-[32px] bg-linear-to-r from-purple/10 via-white to-pink/10 border border-purple/10 p-10 shadow-sm">
          <Title className="text-4xl text-dark-green">Your Wishlist</Title>
          <SubText className="mt-4 text-gray-600 max-w-3xl">
            Items you have saved for later are stored here. Review your favorites, remove anything you no longer want, or move a product to your cart when you’re ready.
          </SubText>
        </section>

        {wishlist.length === 0 ? (
          <div className="rounded-[32px] border border-purple/10 bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">No saved items yet</h2>
            <p className="mt-4 text-gray-600">Add products to your wishlist while browsing the store and they will appear here.</p>
            <Link href="/shop">
              <Button className="mt-8 bg-purple/80 text-white hover:bg-purple">Browse products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="grid gap-4 rounded-[32px] border border-purple/10 bg-white p-6 shadow-sm sm:grid-cols-[120px_1fr_180px]">
                <div className="h-32 w-full overflow-hidden rounded-3xl bg-slate-100">
                  {product.images?.[0] ? (
                    <img src={product.images[0]} alt={product.title} className="h-full w-full object-cover" />
                  ) : product.thumbnail ? (
                    <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">No image</div>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-purple/70">Wishlist item</p>
                    <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                    <p className="text-sm text-slate-500">{product.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-purple/10 px-3 py-1 text-sm text-purple">In stock: {product.stock}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{product.discountPercentage ? `${product.discountPercentage}% off` : 'No discount'}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 sm:items-end">
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Price</p>
                    <p className="text-2xl font-black text-purple"><PriceFormatter amount={product.price} /></p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/product/${product.id}`}>
                      <Button variant="outline" className="rounded-full">View</Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="rounded-full text-red-600 hover:bg-red-50"
                      onClick={() => dispatch(removeFromWishlist(product.id))}
                    >
                      <HeartOff size={16} />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
