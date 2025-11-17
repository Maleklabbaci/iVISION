import React from 'react';

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepProps {
  step: Step;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step }) => (
    <div className="bg-brand-dark/50 border border-brand-border p-8 rounded-lg text-center backdrop-blur-lg">
        <div className="text-4xl font-bold text-brand-accent mb-4">{step.step}</div>
        <h3 className="text-xl font-bold text-brand-light mb-2">{step.title}</h3>
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
  return (
    <section id="a-propos" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{translations.title}</h2>
          <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">{translations.subtitle}</p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations.steps.map((step, index) => (
                <ProcessStep key={index} step={step} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;