import React from 'react';
import { Language } from '../lib/translations';

interface LanguageSelectorProps {
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage }) => {
  return (
    <div className="fixed inset-0 bg-brand-dark flex flex-col items-center justify-center text-brand-light z-[100]">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          i<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-start to-brand-accent-end">V</span>ISION
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-gray">Choose your language</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => onSelectLanguage('fr')}
            className="text-lg font-bold py-3 px-12 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            Français
          </button>
          <button
            onClick={() => onSelectLanguage('en')}
            className="text-lg font-bold py-3 px-12 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            English
          </button>
          <button
            onClick={() => onSelectLanguage('ar')}
            className="text-lg font-bold py-3 px-12 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;