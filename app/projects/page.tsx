import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

// This would typically come from a CMS or API
const projects = [
  {
    id: 1,
    title: 'SaaS Website Design',
    category: 'Web Design',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-202-min.png',
    slug: 'saas-website-design'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'Mobile Design',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2011-min.png',
    slug: 'mobile-app-design'
  },
  {
    id: 3,
    title: 'Design System Creation',
    category: 'Design System',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2012-min.png',
    slug: 'design-system-creation'
  },
  {
    id: 4,
    title: 'Dashboard Design',
    category: 'Web App',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2013-min.png',
    slug: 'dashboard-design'
  }
];

export const metadata = {
  title: 'Projects | Portfolio Creator',
  description: 'Explore my latest design projects and case studies. See how I solve complex problems with clean, user-friendly design solutions.',
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I bring results. My clients are proof of that. Check out some of my recent projects and see for yourself.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                slug={project.slug}
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
