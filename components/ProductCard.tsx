"use client";
import { Flame, ImageOff, Loader2, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { WishlistButton } from './WishlistButton';
import { Product } from '@/app/types/product';
import { Title } from './ui/text';
import { PriceView } from './PriceView';
import { AddToCartButton } from './AddToCartButton';


const ProductCard = ({ product }: { product: Product }) => {
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setImgError(false);
  }, [product?.images]);

  return (
    <div className='text-sm border border-gray-200 rounded-lg bg-white group'>

      {/* Image */}
      <div className="relative w-full h-64 bg-shop-light-bg overflow-hidden rounded-t-lg flex items-center justify-center">

        {/* Loader (lightweight) */}
        {loading && product?.images && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <Loader2 className="animate-spin text-gray-400" size={26} />
          </div>
        )}

        {/* Image */}
        {product?.images && !imgError ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            onLoad={() => setLoading(false)}
            onError={() => {
              setImgError(true);
              setLoading(false);
            }}
            className={`object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
              } ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"
              }`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <ImageOff size={40} />
            <span className="text-xs mt-1.5">No Image</span>
          </div>
        )}
        <WishlistButton product={product} className='' />
        {
          product?.status === "sale" && (
            <div className='absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 py-0.5 rounded-full group-hover:border-shop-light-green group-hover:text-shop-light-green hoverEffect'>Sale</div>
          )
        }
        {
          product?.status === "new" && (
            <div className='absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 py-0.5 rounded-full group-hover:border-shop-light-green group-hover:text-shop-light-green hoverEffect'>New Arrival</div>
          )
        }
        {
          product?.status === "hot" && (
            <Link href="/deal" className='absolute top-2 left-2 z-10 text-xs border border-shop-orange/50 p-1 rounded-full group-hover:border-shop-orange group-hover:text-shop-dark-green hoverEffect'>
              <Flame
                size={18}
                className='text-shop-orange/50 group-hover:text-shop-orange hoverEffect' />
            </Link>
          )
        }
      </div>

      {/* Info */}
      <div className='p-3 flex flex-col gap-2'>
        <p className='uppercase line-clamp-1 text-xs text-shop-light-text'>{product?.category}</p>
        
        <Title className='text-sm line-clamp-1 '>{product?.title}</Title>
        
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-0.5'>
            {
                [...Array(5)].map((_,index)=>(
                    <StarIcon 
                      key={index}
                      size={12}
                      className={
                      index < 4 ? "text-shop-light-green":"text-shop-light-text"
                      } 
                      fill={index < 4 ? "text-shop-light-green":"bg-white"}
                    />
                ))
              }
          </div>
          <p className='text-shop-light-text text-xs tracking-wide'>5 Reviews</p>
        </div>
        <div className='flex items-center gap-2.5'>
            <p className='font-medium'>In Stocks</p>
            <p className={`${product?.stock === 0 ? "text-red-600" : "text-shop-light-green/80"} font-semibold`}>{ (product?.stock as number) > 0 ? product?.stock : "unavailable"}</p>
        </div>
        <PriceView 
          price={product?.price}
          discount={product?.discountPercentage}
          className="text-sm"
        />

        <AddToCartButton product={product} className={"py-5 rounded-full "} />
      </div>
    </div>
  );
};

export default ProductCard;