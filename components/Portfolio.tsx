import React from 'react';

interface Stat {
  value: string;
  label: string;
}

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
    <section id="portfolio" className="py-20 bg-transparent text-brand-light relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {translations.stats.map((stat, index) => (
            <div key={index} className="bg-brand-dark/50 border border-brand-border p-8 rounded-lg backdrop-blur-lg">
                <div className="text-5xl font-extrabold text-brand-accent mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-brand-light">{stat.label}</h3>
             </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-dark/50 border border-brand-border p-8 rounded-lg text-center backdrop-blur-lg">
            <blockquote className="text-xl italic text-brand-light mb-6">
              "{translations.testimonial.quote}"
            </blockquote>
            <cite className="block not-italic">
              <span className="font-bold text-brand-accent">{translations.testimonial.author}</span>
              <span className="text-sm text-brand-gray">, {translations.testimonial.position}</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;