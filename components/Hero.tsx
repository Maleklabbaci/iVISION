import React from 'react';

interface HeroProps {
  translations: {
    title: string;
    subtitle: string;
    cta: string;
  }
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ translations, onQuoteClick }) => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
        alt="A team of professionals collaborating on a digital project."
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-brand-dark/60 z-1"></div>
      
      {/* Gradient for smooth transition to the page content */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-2"></div>


      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down" dangerouslySetInnerHTML={{ __html: translations.title.replace('sur-mesure', `<span class="text-brand-accent">sur-mesure</span>`).replace('custom', `<span class="text-brand-accent">custom</span>`).replace('مخصصة', `<span class="text-brand-accent">مخصصة</span>`) }}>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-brand-gray animate-fade-in-up">
          {translations.subtitle}
        </p>
        <button 
          onClick={onQuoteClick}
          className="bg-brand-accent text-brand-dark font-bold py-4 px-10 rounded-md text-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 inline-block shadow-lg shadow-brand-accent/20"
        >
          {translations.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;