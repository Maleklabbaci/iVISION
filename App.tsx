import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import LanguageSelector from './components/LanguageSelector';
import { translations, Language } from './lib/translations';
import QuoteForm from './components/QuoteForm';
import ClientLogos from './components/ClientLogos';

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
  const [language, setLanguage] = useState<Language | null>(null);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  
  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
      if (language === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  }, [language]);

  const handleSelectLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  const handleOpenQuoteForm = () => setIsQuoteFormOpen(true);
  const handleCloseQuoteForm = () => setIsQuoteFormOpen(false);
  
  const t = language ? translations[language] : null;

  return (
    <div className="min-h-screen relative">
      <StaticBackground />
      
      {!language || !t ? (
        <div key="lang-selector" className="min-h-screen flex items-center justify-center p-6 bg-brand-dark/30 backdrop-blur-xl">
            <LanguageSelector onSelectLanguage={handleSelectLanguage} />
        </div>
      ) : (
        <div key="main-content" className="relative z-10 flex flex-col min-h-screen animate-blur-in bg-brand-dark/30 backdrop-blur-xl">
          <Header translations={t.header} onQuoteClick={handleOpenQuoteForm} />
          <main className="flex-grow">
            <Hero translations={t.hero} onQuoteClick={handleOpenQuoteForm} />
            <ClientLogos translations={t.clientLogos} />
            <Services translations={t.services} />
            <Portfolio translations={t.portfolio} onQuoteClick={handleOpenQuoteForm} />
            <Process translations={t.process} />
            <FAQ translations={t.faq} />
            <Contact translations={t.contact} />
          </main>
          <LiveChat translations={t.liveChat} />
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