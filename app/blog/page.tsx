import BlogCard from '@/components/blog/BlogCard';
import { Container } from '@/components/Container';
import { Title } from '@/components/ui/text';
import { posts } from '@/constants/data';

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read my latest articles on software development.',
};

export default function BlogListing() {

  return (
    <Container className='my-10'>
      <Title className='pb-8'>Our Blogs</Title>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}