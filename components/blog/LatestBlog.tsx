"use client";
import { useState } from 'react';
import MVLoader from '../MVLoader';
import { Title } from '../ui/text'
import BlogCard from './BlogCard';
import { posts } from '@/constants/data';

export const LatestBlog = () => {
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className='mb-10 lg:mb-15'>
            <Title className='pb-3'>Latest Blogs</Title>
            {isLoading ? <MVLoader /> : (
                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        posts.map((item) => (
                            <BlogCard post={item} key={item.id}/>
                        ))
                    }
                </div>
            )}
        </div>
    )
}
