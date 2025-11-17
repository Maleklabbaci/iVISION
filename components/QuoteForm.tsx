import React, { useState } from 'react';

interface ContactTranslations {
    form: {
        title: string;
        nameLabel: string;
        companyNameLabel: string;
        emailLabel: string;
        phoneLabel: string;
        serviceLabel: string;
        serviceLabelHint: string;
        budgetLabel: string;
        projectLabel: string;
        namePlaceholder: string;
        companyNamePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
        servicePlaceholder: string;
        serviceOptions: string[];
        budget: string;
        budgetOptions: string[];
        projectPlaceholder: string;
        cta: string;
        successTitle: string;
        successMessage: string;
        yourInfoTitle: string;
        projectInfoTitle: string;
    };
}

interface QuoteFormProps {
    translations: { form: ContactTranslations['form'] };
    onClose: () => void;
}

interface CheckboxGroupProps {
  label: string;
  hint: string;
  name: string;
  options: string[];
  selectedValues: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, hint, name, options, selectedValues, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-brand-gray mb-2">
      {label} <span className="text-xs opacity-75">{hint}</span>
    </label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => {
        const isSelected = selectedValues.includes(option);
        return (
          <label key={option} className={`cursor-pointer text-center p-3 border rounded-md transition-all duration-200 text-sm ${
            isSelected
              ? 'bg-brand-accent text-brand-dark border-brand-accent font-semibold'
              : 'bg-brand-dark/50 border-brand-border hover:border-brand-accent/50'
          }`}>
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={isSelected}
              onChange={onChange}
              className="sr-only"
            />
            {option}
          </label>
        );
      })}
    </div>
  </div>
);

interface RadioBoxGroupProps {
  label: string;
  name: string;
  options: string[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const RadioBoxGroup: React.FC<RadioBoxGroupProps> = ({ label, name, options, selectedValue, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-brand-gray mb-2">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <label key={option} className={`cursor-pointer text-center p-3 border rounded-md transition-all duration-200 text-sm ${
          selectedValue === option
            ? 'bg-brand-accent text-brand-dark border-brand-accent font-semibold'
            : 'bg-brand-dark/50 border-brand-border hover:border-brand-accent/50'
        }`}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={onChange}
            className="sr-only"
            required={required && !selectedValue}
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);


const QuoteForm: React.FC<QuoteFormProps> = ({ translations, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    services: [] as string[],
    budget: '',
    project: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
        if (checked) {
            return { ...prev, services: [...prev.services, value] };
        } else {
            return { ...prev, services: prev.services.filter(s => s !== value) };
        }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.services.length === 0) {
        // Simple validation example
        alert('Please select at least one service.');
        return;
    }
    setIsSubmitted(true);
  };

  return (
    <div 
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
    >
      <div
        className="relative bg-brand-dark/70 backdrop-blur-sm border border-brand-border text-brand-light p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-brand-gray hover:text-brand-light text-2xl z-10">&times;</button>
        
        {isSubmitted ? (
            <div className="text-center p-8">
                 <div className="mx-auto bg-brand-accent/20 text-brand-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                 </div>
                <h3 className="text-2xl font-bold mb-2 text-brand-light">{translations.form.successTitle}</h3>
                <p className="text-brand-gray">{translations.form.successMessage}</p>
            </div>
        ) : (
            <>
                <h3 className="text-2xl font-bold mb-8 text-center">{translations.form.title}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Left Column: User Info */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-semibold text-brand-light border-b border-brand-border pb-2">
                            {translations.form.yourInfoTitle}
                        </h4>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-1">{translations.form.nameLabel}</label>
                            <input id="name" type="text" name="name" placeholder={translations.form.namePlaceholder} value={formData.name} onChange={handleChange} className="w-full p-3 bg-brand-dark/50 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" required />
                        </div>
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-brand-gray mb-1">{translations.form.companyNameLabel}</label>
                            <input id="companyName" type="text" name="companyName" placeholder={translations.form.companyNamePlaceholder} value={formData.companyName} onChange={handleChange} className="w-full p-3 bg-brand-dark/50 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-1">{translations.form.emailLabel}</label>
                            <input id="email" type="email" name="email" placeholder={translations.form.emailPlaceholder} value={formData.email} onChange={handleChange} className="w-full p-3 bg-brand-dark/50 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-brand-gray mb-1">{translations.form.phoneLabel}</label>
                            <input id="phone" type="tel" name="phone" placeholder={translations.form.phonePlaceholder} value={formData.phone} onChange={handleChange} className="w-full p-3 bg-brand-dark/50 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                        </div>
                    </div>

                    {/* Right Column: Project Info */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-semibold text-brand-light border-b border-brand-border pb-2">
                           {translations.form.projectInfoTitle}
                        </h4>
                        <CheckboxGroup
                          label={translations.form.serviceLabel}
                          hint={translations.form.serviceLabelHint}
                          name="services"
                          options={translations.form.serviceOptions}
                          selectedValues={formData.services}
                          onChange={handleServiceChange}
                          required
                        />
                        <RadioBoxGroup
                          label={translations.form.budgetLabel}
                          name="budget"
                          options={translations.form.budgetOptions}
                          selectedValue={formData.budget}
                          onChange={handleChange}
                          required
                        />
                    </div>
                     {/* Project Description - Full Width */}
                    <div className="md:col-span-2">
                        <label htmlFor="project" className="block text-sm font-medium text-brand-gray mb-1">{translations.form.projectLabel}</label>
                        <textarea id="project" name="project" placeholder={translations.form.projectPlaceholder} value={formData.project} onChange={handleChange} rows={4} className="w-full p-3 bg-brand-dark/50 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" required></textarea>
                    </div>

                  </div>
                  <div className="mt-8 text-center">
                    <button type="submit" className="w-full md:w-auto bg-brand-accent text-brand-dark font-bold py-3 px-12 rounded-md hover:opacity-90 transition-opacity duration-300">
                        {translations.form.cta}
                    </button>
                  </div>
                </form>
            </>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;