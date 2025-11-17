import React from 'react';

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => (
  <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 h-full flex flex-col">
    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-start to-brand-accent-end mb-2">
      {stat.value}
    </div>
    <h3 className="text-xl font-bold text-brand-light mb-3">{stat.label}</h3>
    <p className="text-brand-gray">{stat.description}</p>
  </div>
);

interface PortfolioProps {
  translations: {
    title: string;
    subtitle: string;
    stats: Stat[];
    testimonial: {
      quote: string;
      author: string;
      position: string;
    }
  }
}

const Portfolio: React.FC<PortfolioProps> = ({ translations }) => {
  return (
    <section id="portfolio" className="py-20 bg-brand-dark text-brand-light relative overflow-hidden">
      <div className="absolute bg-brand-accent-end/10 rounded-full w-[40vw] h-[40vw] top-0 -right-1/4 blur-3xl -z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent-start to-brand-accent-end mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {translations.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg relative border border-white/20">
            <svg className="absolute top-4 left-4 h-8 w-8 text-brand-accent-start opacity-50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h-6v-12h9l-3 12zM28.667 22.667h-6v-12h9l-3 12z"></path></svg>
            <blockquote className="text-xl italic text-center text-brand-light">
              "{translations.testimonial.quote}"
            </blockquote>
            <cite className="block text-right mt-6 not-italic">
              <span className="font-bold text-brand-accent-end">{translations.testimonial.author}</span><br />
              <span className="text-sm text-brand-gray">{translations.testimonial.position}</span>
            </cite>
             <svg className="absolute bottom-4 right-4 h-8 w-8 text-brand-accent-start opacity-50 transform rotate-180" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h-6v-12h9l-3 12zM28.667 22.667h-6v-12h9l-3 12z"></path></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;