import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FavoriteButton() {
  return (
    <Link href={'/favorite'} className='group relative'>
        <Heart className='w-5 h-5 text-purple/80 hover:text-purple hoverEffect'/>
        <span className='absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-xs bg-purple text-white flex items-center justify-center'>0</span>
    </Link>
  )
}
