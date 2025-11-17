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
import AnimatedBackground from './components/AnimatedBackground';
import QuoteForm from './components/QuoteForm';
import ClientLogos from './components/ClientLogos';

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
      <AnimatedBackground />
      
      {!language || !t ? (
        <div key="lang-selector" className="min-h-screen flex items-center justify-center p-6">
            <LanguageSelector onSelectLanguage={handleSelectLanguage} />
        </div>
      ) : (
        <div key="main-content" className="relative z-10 flex flex-col min-h-screen animate-blur-in">
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