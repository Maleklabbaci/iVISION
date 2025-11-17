import React from 'react';
import { Language } from '../lib/translations';

interface LanguageSelectorProps {
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  return (
    <div className="text-center bg-brand-dark/50 border border-brand-border rounded-lg p-8 md:p-12 shadow-2xl animate-blur-in backdrop-blur-xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        i<span className="text-brand-accent">V</span>ISION
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-gray">Choose your language</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => onSelectLanguage('fr')}
          className="text-lg font-bold py-3 px-12 bg-transparent border border-brand-border rounded-md hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300"
        >
          Français
        </button>
        <button
          onClick={() => onSelectLanguage('en')}
          className="text-lg font-bold py-3 px-12 bg-transparent border border-brand-border rounded-md hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300"
        >
          English
        </button>
        <button
          onClick={() => onSelectLanguage('ar')}
          className="text-lg font-bold py-3 px-12 bg-transparent border border-brand-border rounded-md hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300"
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;