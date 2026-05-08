import React from 'react'
import { Title } from '../ui/text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/app/images';

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-linear-to-r from-purple to-pink text-white rounded-lg px-10 lg:px-24 flex items-center justify-between mt-1'>
        <div className='space-y-5'>
            <Title className='text-white'>
                Grab 50% Off On <br /> 
                Selected Headphone            
            </Title>
            <Link href={'/shop'} className='bg-white/90 text-purple/90 px-5 py-2 rounded-md font-semibold hover:bg-pink hover:text-white hoverEffect'>
                Buy Now
            </Link>
        </div>
        <div>
            <Image src={banner_1} alt='banner-1' className='hidden md:inline-flex w-96' />
        </div>
    </div>
  )
}

export default HomeBanner