// app/blog/[slug]/page.tsx
import { Container } from '@/components/Container';
import SmartImage from '@/components/SmartImage';
import Image from 'next/image';
import Link from 'next/link';

const post = {
    title: "The Future of React Server Components",
    date: "April 28, 2026",
    author: "Jane Doe",
    readingTime: "6 min read",
    category: "Development",
    image: "/blog-hero.jpg",
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
    //   const post = await getPost(params.slug);
    return {
        title: post.title,
        openGraph: {
            images: [post.image],
        },
    };
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
    // In a real app, fetch your post data here based on params.slug


    return (
        <Container>
            <article className="pt-20 pb-16">
                {/* 1. Header Section */}
                <header className="px-6 text-center mb-12">
                    <Link href="/blog" className="text-blue-600 font-medium text-sm mb-4 inline-block">
                        ← Back to all posts
                    </Link>
                    <div className="flex justify-center items-center gap-3 text-slate-500 text-sm mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                </header>

                {/* 2. Featured Image */}
                <div className="px-6 mb-12">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        {/* <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            className="object-cover"
                        /> */}
                        <SmartImage  src={post.image}
                            alt={post.title}/>
                    </div>
                </div>

                {/* 3. Article Content */}
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p>
                            The landscape of web development is shifting. With the advent of Server Components,
                            we are moving back to a world where the server does the heavy lifting...
                        </p>
                        <h2>Why Performance Matters</h2>
                        <p>
                            Statistical data suggests that every 100ms of latency can cost up to 1% in conversions.
                            By shipping zero-bundle-size components, we bridge that gap.
                        </p>
                        {/* Content ends here */}
                    </div>

                    {/* 4. Tags & Sharing */}
                    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
                        {['NextJS', 'React', 'WebDev'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </Container>
    );
}