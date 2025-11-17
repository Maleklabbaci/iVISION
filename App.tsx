import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import LanguageSelector from './components/LanguageSelector';
import { translations, Language } from './lib/translations';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language | null>(null);
  
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

  if (!language) {
    return <LanguageSelector onSelectLanguage={handleSelectLanguage} />;
  }
  
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Header translations={t.header} />
      <main className="flex-grow">
        <Hero translations={t.hero} />
        <Services translations={t.services} />
        <Portfolio translations={t.portfolio} />
        <Process translations={t.process} />
        <Blog translations={t.blog} />
        <Contact translations={t.contact} />
      </main>
      <LiveChat translations={t.liveChat} />
      <Footer translations={t.footer} />
    </div>
  );
};

export default App;