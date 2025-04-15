import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'How to Design a User-Friendly Interface',
    date: 'April 16, 2023',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2013-min.png',
    slug: 'how-to-design-user-friendly-interface'
  },
  {
    id: 2,
    title: 'The Importance of User Research in Design',
    date: 'March 22, 2023',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2012-min.png',
    slug: 'importance-of-user-research'
  },
  {
    id: 3,
    title: 'Design Systems: Why Every Company Needs One',
    date: 'February 10, 2023',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2011-min.png',
    slug: 'design-systems-why-every-company-needs-one'
  },
  {
    id: 4,
    title: 'Mobile-First Design: Best Practices',
    date: 'January 5, 2023',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-202-min.png',
    slug: 'mobile-first-design-best-practices'
  }
];

export const metadata = {
  title: 'Blog | Portfolio Creator',
  description: 'Read my latest thoughts, ideas, and insights about design, user experience, and product development.',
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I write about design, user experience, and product development. Check out my latest articles below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={post.id}
                title={post.title}
                date={post.date}
                imageSrc={post.imageSrc}
                slug={post.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
