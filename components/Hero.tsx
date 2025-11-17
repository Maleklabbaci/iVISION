import React, { useState, useEffect } from 'react';

interface HeroProps {
  translations: {
    title: string;
    subtitle: string;
    cta: string;
  }
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute bg-brand-accent-start/20 rounded-full w-[50vw] h-[50vw] -top-1/4 -left-1/4 blur-3xl animate-pulse-slow transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bg-brand-accent-end/20 rounded-full w-[40vw] h-[40vw] -bottom-1/4 -right-1/4 blur-3xl animate-pulse-slower transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        ></div>
      </div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down" dangerouslySetInnerHTML={{ __html: translations.title.replace('sur-mesure', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-start to-brand-accent-end">sur-mesure</span>').replace('custom', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-start to-brand-accent-end">custom</span>').replace('مخصصة', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-start to-brand-accent-end">مخصصة</span>') }}>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-brand-gray animate-fade-in-up">
          {translations.subtitle}
        </p>
        <a 
          href="#contact" 
          className="bg-gradient-to-r from-brand-accent-start to-brand-accent-end text-white font-bold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 inline-block shadow-lg shadow-brand-accent-start/30"
        >
          {translations.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;