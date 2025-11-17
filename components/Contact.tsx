import React from 'react';

interface ContactProps {
    translations: {
        title: string;
        subtitle: string;
        info: {
            contactDetails: string;
            followUs: string;
        }
    }
}

const IconLinkedIn = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const IconInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>;
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.218 3.82 4.65- .757.205-1.553.26-2.353.087.625 1.947 2.428 3.328 4.568 3.366-1.758 1.373-3.957 2.165-6.323 2.165-.41 0-.814-.024-1.21-.073 2.278 1.463 4.987 2.313 7.898 2.313 9.478 0 14.655-7.854 14.655-14.655 0-.224-.005-.448-.015-.672.98-.702 1.825-1.58 2.502-2.587z"/></svg>;

const Contact: React.FC<ContactProps> = ({ translations }) => {
  return (
    <section id="contact" className="py-20 bg-transparent text-brand-light">
      <div className="container mx-auto px-6 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>
        <div className="max-w-lg mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-brand-accent mb-2">{translations.info.contactDetails}</h4>
              <p className="text-brand-gray">Email: contact@ivision.agency</p>
              <p className="text-brand-gray">Téléphone: +33 1 23 45 67 89</p>
              <p className="text-brand-gray">Adresse: 123 Rue de Paris, 75001 Paris</p>
            </div>
            <div>
               <h4 className="text-xl font-semibold text-brand-accent mb-2">{translations.info.followUs}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors"><IconLinkedIn /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors"><IconInstagram /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors"><IconTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;