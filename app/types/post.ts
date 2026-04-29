export type BlogPost = {
    id:number;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    date: string;
    readTime?: number;
    category: string;
    author?: string
};