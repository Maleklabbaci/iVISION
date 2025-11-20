import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import LanguageSelector from './components/LanguageSelector';
import { translations, Language } from './lib/translations';
import QuoteForm from './components/QuoteForm';
import SplashScreen from './components/SplashScreen';
import ScrollToTopButton from './components/ScrollToTopButton';
import Process from './components/Process';

const StaticBackground: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-brand-dark">
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.1) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(56, 189, 248, 0.1) 0%, transparent 40%)',
        backgroundSize: '100% 100%',
      }}
    ></div>
  </div>
);


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language | null>(null);
  const [showLangSelector, setShowLangSelector] = useState(true);
  const [isExitingLangSelector, setIsExitingLangSelector] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const handleSelectLanguage = (selectedLanguage: Language) => {
    setIsExitingLangSelector(true);
    setTimeout(() => {
      setLanguage(selectedLanguage);
      setShowLangSelector(false);
    }, 500); // Duration matches animate-fade-out in tailwind.config
  };

  const handleOpenQuoteForm = () => setIsQuoteFormOpen(true);
  const handleCloseQuoteForm = () => setIsQuoteFormOpen(false);
  
  const t = language ? translations[language] : null;

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen relative">
      <StaticBackground />
      
      {showLangSelector && (
        <div 
          key="lang-selector" 
          className={`min-h-screen flex items-center justify-center p-6 bg-brand-dark/30 backdrop-blur-xl ${isExitingLangSelector ? 'animate-fade-out' : 'animate-blur-in'}`}
        >
            <LanguageSelector onSelectLanguage={handleSelectLanguage} />
        </div>
      )}
      
      {t && (
        <div key="main-content" className="relative z-10 flex flex-col min-h-screen animate-blur-in bg-brand-dark/30 backdrop-blur-xl">
          <Header translations={t.header} onQuoteClick={handleOpenQuoteForm} />
          <main className="flex-grow">
            <Hero translations={t.hero} onQuoteClick={handleOpenQuoteForm} />
            <ClientLogos translations={t.clientLogos} />
            <Services translations={t.services} />
            <Process translations={t.process} />
            <Portfolio translations={t.portfolio} onQuoteClick={handleOpenQuoteForm} />
            <Testimonials translations={t.testimonials} />
            <FAQ translations={t.faq} />
          </main>
          <LiveChat translations={t.liveChat} />
          <ScrollToTopButton />
          <Footer translations={t.footer} />
        </div>
      )}

      {isQuoteFormOpen && t && (
        <QuoteForm translations={t.contact} onClose={handleCloseQuoteForm} />
      )}
    </div>
  );
};

export default App;