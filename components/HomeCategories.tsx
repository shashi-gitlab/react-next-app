import React from 'react'
import { Title } from './ui/text';
import Image from 'next/image';

interface Props{
  className?:string
}

export const HomeCategories = ({className }:Props) => {

  return (
    <div className='bg-white border border-shop-light-green/20 my-10 p-5 lg:p-7 rounded-md'>
        <Title className='border-b pb-3'>Popular Categories</Title>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {[...Array(6)]?.map((cate,index)=>(

          <div key={`cat`+ cate+index} className='bg-shop-light-bg p-4 flex  group items-center'>
            <Image src={"https://dummyjson.com/image/150"} alt='' 
            width={80}
            height={80} className='mr-3 bg-shop-light-text group-hover:scale-105'/>
            <div>
                <p>Category-{cate}</p>
                <p>(2) items Available</p>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
