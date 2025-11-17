import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface Project {
  client: string;
  title: string;
  image: string;
  results: Stat[];
  cta: string;
}

interface PortfolioProps {
  translations: {
    title: string;
    subtitle: string;
    projects: Project[];
    testimonial: {
      quote: string;
      author: string;
      position: string;
    }
  }
}

// Icons for stats
const IconTrendingUp = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const IconTarget = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const IconTrophy = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4h.01M17 17v4m-2-2h4M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>;

const statIcons = [<IconTrendingUp />, <IconTarget />, <IconTrophy />];

const Portfolio: React.FC<PortfolioProps> = ({ translations }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-transparent text-brand-light relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {translations.projects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-brand-dark/50 border border-brand-border rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="overflow-hidden h-56">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-gray mb-1">{project.client}</p>
                <h3 className="text-xl font-bold text-brand-light mb-4">{project.title}</h3>
                <div className="space-y-3 mb-6">
                    {project.results.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center bg-brand-dark/50 border border-brand-border rounded-md px-4 py-2">
                           {statIcons[statIndex % statIcons.length]}
                           <span className="font-semibold text-brand-light">{stat.value}</span>
                           <span className="text-sm text-brand-gray ml-2">{stat.label}</span>
                        </div>
                    ))}
                </div>
                <a href="#contact" className="font-semibold text-brand-accent hover:underline">
                  {project.cta} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-dark/50 border border-brand-border p-8 md:p-12 rounded-lg text-center relative overflow-hidden">
            <div className="absolute top-4 left-4 text-brand-accent/20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 2.908-2.352 5.261-5.261 5.261h-1.722v4.348h1.722c5.082 0 9.217-4.135 9.217-9.217v-7.391h-3.956zm14.017 0v7.391c0 2.908-2.352 5.261-5.261 5.261h-1.722v4.348h1.722c5.082 0 9.217-4.135 9.217-9.217v-7.391h-3.956z"/></svg>
            </div>
            <blockquote className="text-xl md:text-2xl italic text-brand-light mb-6 relative z-10">
              "{translations.testimonial.quote}"
            </blockquote>
            <cite className="block not-italic">
              <span className="font-bold text-brand-accent text-lg">{translations.testimonial.author}</span>
              <span className="text-brand-gray">, {translations.testimonial.position}</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;