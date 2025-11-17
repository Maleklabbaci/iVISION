import React from 'react';

interface FooterProps {
    translations: {
        tagline: string;
        links: string[];
        copyright: string;
    }
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
  const year = new Date().getFullYear();
  const staticLinks = ['accueil', 'services', 'portfolio', 'a-propos', 'contact'];

  return (
    <footer className="bg-brand-dark border-t border-brand-border text-brand-gray">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
             <a href="#home" className="text-2xl font-bold text-brand-light tracking-tight">
                i<span className="text-brand-accent">V</span>ISION
             </a>
             <p className="max-w-xs mt-2 text-sm">{translations.tagline}</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-6 md:mb-0">
            {translations.links.map((link, index) => (
              <a key={link} href={`#${staticLinks[index]}`} className="hover:text-brand-accent transition-colors">{link}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-brand-border mt-8 pt-6 text-center text-sm">
          <p>&copy; {year} {translations.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;