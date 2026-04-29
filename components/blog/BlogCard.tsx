"use client";
import { BlogPost } from "@/app/types/post";
import { Calendar, ImageOff, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Title } from "@/components/ui/text";

export default function BlogCard({ post }: { post: BlogPost }) {
    const [imgError, setImgError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setImgError(false);
    }, [post?.image]);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            {/* Image */}
            <div className="relative w-full h-40 flex flex-col items-center justify-center bg-shop-light-bg">
                {loading && post?.image && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <Loader2 className="animate-spin text-gray-400" size={26} />
                    </div>
                )}

                {post?.image && !imgError ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        onLoad={() => setLoading(false)}
                        onError={() => {
                            setImgError(true);
                            setLoading(false);
                        }}
                        className={`object-cover transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
                            } ${(post?.image) ? "group-hover:scale-105" : "opacity-50"
                            }`}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                        <ImageOff size={40} />
                        <span className="text-xs mt-1">No Image</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
                <div className="text-xs flex items-center gap-5 justify-between">
                    <div className="flex items-center gap-1 relative group cursor-pointer text-xs">
                        <p className="font-semibold text-shop-dark-green/50 tracking-wide group-hover:text-shop-light-green">{post?.category}</p>
                        <span className='absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-0.5 group-hover:bg-shop-light-green hoverEffect' />
                    </div>
                    <div className='relative group'>
                        <p className='flex items-center gap-1 cursor-pointer text-xs text-shop-dark-green/50 group-hover:text-shop-light-green tracking-wide'>
                            <Calendar size={15} />{" "}
                            {post?.date}
                        </p>
                        <span className='absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-0.5 group-hover:bg-shop-light-green hoverEffect' />
                    </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <Title className="text-md mt-2 line-clamp-1 hover:text-shop-light-green">
                        {post.title}
                    </Title>
                </Link>

                <p className="text-gray-600 text-sm line-clamp-1">
                    {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`} className="text-shop-light-green text-xs hover:underline text-right">
                    Read More →
                </Link>
            </div>
        </div>
    );
}