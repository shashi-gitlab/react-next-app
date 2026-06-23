// app/blog/[slug]/page.tsx
import { Container } from '@/components/Container';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';

const post = {
    title: "The Future of React Server Components ",
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
            <article className="pt-10 pb-10">
                <header className="text-center mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/blog" className="text-blue-600 font-bold text-sm inline-block">
                            ← Back
                        </Link>
                        <div className="flex justify-center items-center gap-3 text-slate-500 text-sm">
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                </header>
                <div className="grid grid-cols-12 gap-6 items-start">
                    <div className="col-span-12 md:col-span-8 space-y-6">
                        <article className="bg-red-500 p-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Article Title Here
                            </h1>
                            <p className="text-gray-700 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <img src="/news-500x280-1.jpg" alt="Article Image" className="w-full h-auto mb-4 rounded" />
                            <p className="text-gray-700 mb-4">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </article>


                    </div>

                    {/* SIDEBAR */}
                    <aside className="col-span-12 md:col-span-4">
                        <div className="space-y-3">
                            <h2 className="text-lg font-bold">
                                Hot Deal Section
                            </h2>

                            <div className='space-y-2'>

                                {[...Array(6)]?.map((cate, index) => (

                                    <div key={`cat` + cate + index} className='bg-white p-4 flex  group items-center'>
                                        <SafeImage src={"https://dummyjson.com/image/150"} alt=''
                                            width={80}
                                            height={80}
                                            className='mr-3 bg-light-text group-hover:scale-105'
                                        />
                                        <div>
                                            <h3 className='font-medium'>Category-{cate}</h3>
                                            <p className='text-sm text-muted-foreground'>(2) items Available</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </article>
        </Container>
    );
}