import React from 'react'
import { Title } from './ui/text'
import Image from 'next/image'
import { BadgeCheck, GitCompareArrows, Headphones, RotateCcw, TruckIcon } from 'lucide-react'
import { ProductService } from './ProductService'

export const HomeBrands = () => {
    return (
        <div className='bg-shop-light-bg border border-shop-light-green/20 my-10 p-5 lg:p-7 rounded-md'>
            <Title className='border-b pb-3'>Shop By Brands</Title>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-3'>
                {
                    [...Array(8)].map((brand, index) => (
                        <div key={index} className='bg-white w-36 h-24 flex  justify-center relative rounded-md group p-5 hover:shadow-lg shadow-shop-dark-green/20'>
                            <Image src={"https://dummyjson.com/image/60"} alt=''
                                width={60}
                                height={60} className='' />
                        </div>
                    ))
                }

            </div>
            <ProductService />
        </div>
    )
}
