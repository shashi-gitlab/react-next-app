"use client";

import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '@/app/hooks';

export default function FavoriteButton() {
  const count = useAppSelector((state) => state.wishlist.items.length);

  return (
    <Link href={'/favorite'} className='group relative'>
        <Heart className='w-5 h-5 text-purple/80 hover:text-primary-color hoverEffect'/>
        <span className='absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-xs bg-purple text-white flex items-center justify-center'>
          {count}
        </span>
    </Link>
  )
}
