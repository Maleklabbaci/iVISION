import React from 'react';

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepProps {
  step: Step;
  stepLabel: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, stepLabel }) => (
  <div className="relative ps-8 md:ps-12">
    <div className="absolute start-0 top-0 flex items-center">
      <div className="w-5 h-5 rounded-full bg-brand-accent-start ring-4 ring-brand-accent-start/20"></div>
      <div className="w-8 md:w-12 h-0.5 bg-white/20"></div>
    </div>
    <div className="mb-1">
      <span className="text-sm font-semibold text-brand-accent-end">{stepLabel} {step.step}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-brand-light">{step.title}</h3>
    <p className="text-brand-gray">{step.description}</p>
  </div>
);

interface ProcessProps {
  translations: {
    title: string;
    subtitle: string;
    steps: Step[];
  }
}

const Process: React.FC<ProcessProps> = ({ translations }) => {
  const stepLabel = document.documentElement.lang === 'fr' ? 'Étape' : document.documentElement.lang === 'en' ? 'Step' : 'الخطوة';
  return (
    <section id="process" className="py-20 bg-brand-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent-start to-brand-accent-end mx-auto mt-4"></div>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute start-2.5 top-0 h-full w-0.5 bg-white/20"></div>
          <div className="space-y-12">
            {translations.steps.map((step, index) => (
              <ProcessStep 
                key={index}
                step={step}
                stepLabel={stepLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;