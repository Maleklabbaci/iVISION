import React from 'react';

interface Post {
    title: string;
    excerpt: string;
}

interface BlogCardProps {
    imgSrc: string;
    post: Post;
    readMore: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, post, readMore }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:border-brand-accent-end/50 hover:bg-white/10">
    <div className="overflow-hidden">
      <img src={imgSrc} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-brand-light transition-colors">{post.title}</h3>
      <p className="text-brand-gray mb-4">{post.excerpt}</p>
      <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-brand-accent-start hover:text-brand-accent-end transition-colors">{readMore} &rarr;</a>
    </div>
  </div>
);

interface BlogProps {
    translations: {
        title: string;
        subtitle: string;
        posts: Post[];
        readMore: string;
        newsletter: {
            title: string;
            subtitle: string;
            placeholder: string;
            cta: string;
            subscribed_message: string;
        }
    }
}

const Blog: React.FC<BlogProps> = ({ translations }) => {
  const images = [
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
  ];
  
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    if (emailInput.value) {
      alert(translations.newsletter.subscribed_message);
      form.reset();
    }
  };


  return (
    <section id="blog" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent-start to-brand-accent-end mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {translations.posts.map((post, index) => (
            <BlogCard key={index} imgSrc={images[index]} post={post} readMore={translations.readMore} />
          ))}
        </div>
        <div className="text-center bg-white/5 border border-white/10 p-10 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-brand-light mb-2">{translations.newsletter.title}</h3>
          <p className="text-brand-gray mb-6">{translations.newsletter.subtitle}</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              name="email"
              placeholder={translations.newsletter.placeholder}
              className="w-full md:w-2/3 px-4 py-3 rounded-md md:rounded-r-none border border-white/20 bg-brand-dark text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent-start" 
              required 
            />
            <button 
              type="submit" 
              className="bg-gradient-to-r from-brand-accent-start to-brand-accent-end text-white font-bold py-3 px-6 rounded-md md:rounded-l-none mt-2 md:mt-0 hover:opacity-90 transition-opacity duration-300"
            >
              {translations.newsletter.cta}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;