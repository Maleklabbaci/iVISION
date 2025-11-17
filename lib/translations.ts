export type Language = 'fr' | 'en' | 'ar';

const textContent = {
  header: {
    links: {
      fr: ['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact'],
      en: ['Home', 'Services', 'Portfolio', 'About', 'Contact'],
      ar: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'من نحن', 'اتصل بنا'],
    },
    cta: {
      fr: 'Devis Gratuit',
      en: 'Free Quote',
      ar: 'عرض سعر مجاني',
    },
  },
  hero: {
    title: {
      fr: 'Boostez vos ventes en ligne avec une stratégie digitale sur-mesure',
      en: 'Boost your online sales with a custom digital strategy',
      ar: 'عزز مبيعاتك عبر الإنترنت باستراتيجية رقمية مخصصة',
    },
    subtitle: {
      fr: 'Nous transformons votre vision e-commerce en résultats concrets.',
      en: 'We turn your e-commerce vision into tangible results.',
      ar: 'نحن نحول رؤيتك في التجارة الإلكترونية إلى نتائج ملموسة.',
    },
    cta: {
      fr: 'Demandez une consultation gratuite',
      en: 'Request a free consultation',
      ar: 'اطلب استشارة مجانية',
    },
  },
  services: {
    title: {
      fr: 'Nos Services',
      en: 'Our Services',
      ar: 'خدماتنا',
    },
    subtitle: {
      fr: 'Des solutions complètes pour propulser votre e-commerce.',
      en: 'Comprehensive solutions to boost your e-commerce.',
      ar: 'حلول شاملة لدفع تجارتك الإلكترونية.',
    },
    items: {
      fr: [
        { title: 'Marketing digital complet', description: 'Stratégie digitale 360° pour booster votre présence et vos ventes en ligne.' },
        { title: 'Création de contenu (design & vidéo)', description: 'Contenus visuels et vidéos qui attirent et convertissent.' },
        { title: 'Sponsoring Meta Ads', description: 'Campagnes Meta Ads optimisées pour maximiser votre ROI.' },
        { title: 'Website e-commerce', description: 'Sites e-commerce modernes, responsive et performants.' },
      ],
      en: [
        { title: 'Complete Digital Marketing', description: '360° digital strategy to boost your online presence and sales.' },
        { title: 'Content Creation (design & video)', description: 'Visual and video content that attracts and converts.' },
        { title: 'Meta Ads Sponsoring', description: 'Optimized Meta Ads campaigns to maximize your ROI.' },
        { title: 'E-commerce Website', description: 'Modern, responsive, and high-performance e-commerce sites.' },
      ],
      ar: [
        { title: 'التسويق الرقمي المتكامل', description: 'استراتيجية رقمية 360 درجة لتعزيز وجودك ومبيعاتك عبر الإنترنت.' },
        { title: 'إنشاء المحتوى (تصميم وفيديو)', description: 'محتوى مرئي وفيديوهات تجذب وتحول الزوار إلى عملاء.' },
        { title: 'إعلانات ميتا الممولة', description: 'حملات إعلانية محسّنة على منصات ميتا لزيادة عائد الاستثمار.' },
        { title: 'مواقع التجارة الإلكترونية', description: 'مواقع تجارة إلكترونية عصرية، متجاوبة، وعالية الأداء.' },
      ],
    },
  },
  portfolio: {
    title: {
      fr: 'Nos Réalisations',
      en: 'Our Achievements',
      ar: 'إنجازاتنا',
    },
    subtitle: {
      fr: 'Des résultats qui parlent d\'eux-mêmes.',
      en: 'Results that speak for themselves.',
      ar: 'نتائج تتحدث عن نفسها.',
    },
    projects: {
      fr: [
        { 
          client: 'Client E-commerce Mode', 
          title: 'Campagne Meta Ads Explosive',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+350%', label: 'Augmentation du ROI' },
            { value: '+200%', label: 'Taux de Conversion' },
          ],
          cta: 'Discuter de votre projet'
        },
        { 
          client: 'Marque de Cosmétiques', 
          title: 'Lancement de Produit Viral',
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+5M', label: 'Impressions en 1 mois' },
            { value: 'Top 1', label: 'Tendance sur les réseaux' },
          ],
          cta: 'Discuter de votre projet'
        },
        { 
          client: 'Startup Tech', 
          title: 'Création Visuelle',
          image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92b34?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+400%', label: 'Trafic Organique' },
            { value: 'Top 3', label: 'Classement Google' },
          ],
          cta: 'Discuter de votre projet'
        },
      ],
      en: [
        { 
          client: 'Fashion E-commerce Client', 
          title: 'Explosive Meta Ads Campaign',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+350%', label: 'ROI Increase' },
            { value: '+200%', label: 'Conversion Rate' },
          ],
          cta: 'Discuss your project'
        },
        { 
          client: 'Cosmetics Brand', 
          title: 'Viral Product Launch',
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+5M', label: 'Impressions in 1 month' },
            { value: 'Top 1', label: 'Trending on social media' },
          ],
          cta: 'Discuss your project'
        },
        { 
          client: 'Tech Startup', 
          title: 'Visual Creation',
          image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92b34?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+400%', label: 'Organic Traffic' },
            { value: 'Top 3', label: 'Google Ranking' },
          ],
          cta: 'Discuss your project'
        },
      ],
      ar: [
        { 
          client: 'عميل في تجارة الأزياء', 
          title: 'حملة إعلانات ميتا ناجحة',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+350%', label: 'زيادة في عائد الاستثمار' },
            { value: '+200%', label: 'معدل التحويل' },
          ],
          cta: 'ناقش مشروعك'
        },
        { 
          client: 'علامة تجارية لمستحضرات التجميل', 
          title: 'إطلاق منتج واسع الانتشار',
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+5 مليون', label: 'ظهور في شهر واحد' },
            { value: 'المرتبة الأولى', label: 'في الترند على الشبكات' },
          ],
          cta: 'ناقش مشروعك'
        },
        { 
          client: 'شركة تقنية ناشئة', 
          title: 'إنشاء بصري',
          image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92b34?q=80&w=800&auto=format&fit=crop',
          results: [
            { value: '+400%', label: 'زيارات عضوية' },
            { value: 'أعلى 3', label: 'ترتيب جوجل' },
          ],
          cta: 'ناقش مشروعك'
        },
      ],
    },
    testimonial: {
      quote: {
        fr: "L'équipe d'iVISION a complètement transformé notre approche du marketing digital. Notre chiffre d'affaires a explosé en seulement 6 mois. Une collaboration exceptionnelle !",
        en: "The iVISION team completely transformed our approach to digital marketing. Our revenue exploded in just 6 months. An exceptional collaboration!",
        ar: "لقد غيّر فريق iVISION نهجنا في التسويق الرقمي تمامًا. ارتفعت إيراداتنا بشكل كبير في 6 أشهر فقط. تعاون استثنائي!",
      },
      author: {
        fr: 'Jean Dupont',
        en: 'John Smith',
        ar: 'جون سميث',
      },
      position: {
        fr: 'CEO, E-commerce Mode',
        en: 'CEO, Fashion E-commerce',
        ar: 'الرئيس التنفيذي، تجارة أزياء إلكترونية',
      },
    },
  },
  process: {
    title: {
      fr: 'Notre Processus',
      en: 'Our Process',
      ar: 'نهجنا',
    },
    subtitle: {
      fr: 'Une méthode de travail claire pour des résultats optimaux.',
      en: 'A clear working method for optimal results.',
      ar: 'طريقة عمل واضحة لنتائج مثلى.',
    },
    steps: {
      fr: [
        { step: '01', title: 'Audit & Stratégie', description: 'Nous analysons votre marché, vos concurrents et vos objectifs pour bâtir une stratégie sur-mesure.' },
        { step: '02', title: 'Mise en place & Optimisation', description: 'Lancement des campagnes, optimisation continue et tests A/B pour maximiser les performances.' },
        { step: '03', title: 'Analyse & Scaling', description: "Reporting détaillé et identification des leviers de croissance pour passer à l'échelle supérieure." },
      ],
      en: [
        { step: '01', title: 'Audit & Strategy', description: 'We analyze your market, competitors, and goals to build a custom strategy.' },
        { step: '02', title: 'Implementation & Optimization', description: 'Campaign launch, continuous optimization, and A/B testing to maximize performance.' },
        { step: '03', title: 'Analysis & Scaling', description: 'Detailed reporting and identification of growth levers to scale up.' },
      ],
      ar: [
        { step: '01', title: 'التدقيق والاستراتيجية', description: 'نقوم بتحليل سوقك ومنافسيك وأهدافك لبناء استراتيجية مخصصة.' },
        { step: '02', title: 'التنفيذ والتحسين', description: 'إطلاق الحملات، والتحسين المستمر، واختبارات A/B لتعظيم الأداء.' },
        { step: '03', title: 'التحليل والتوسع', description: 'تقارير مفصلة وتحديد روافع النمو للانتقال إلى المستوى التالي.' },
      ],
    },
  },
  contact: {
    title: {
      fr: 'Contactez-nous',
      en: 'Contact Us',
      ar: 'اتصل بنا',
    },
    subtitle: {
      fr: 'Prêt à démarrer un projet avec nous ?',
      en: 'Ready to start a project with us?',
      ar: 'هل أنت مستعد لبدء مشروع معنا؟',
    },
    form: {
      title: {
        fr: 'Demande de devis rapide',
        en: 'Quick quote request',
        ar: 'طلب عرض سعر سريع',
      },
      yourInfoTitle: { fr: 'Vos informations', en: 'Your Information', ar: 'معلوماتك الشخصية' },
      projectInfoTitle: { fr: 'Informations sur le projet', en: 'Project Information', ar: 'معلومات المشروع' },
      nameLabel: { fr: 'Nom complet', en: 'Full Name', ar: 'الاسم الكامل' },
      companyNameLabel: { fr: "Nom de l'entreprise", en: 'Company Name', ar: 'اسم الشركة' },
      emailLabel: { fr: 'Adresse e-mail', en: 'Email Address', ar: 'البريد الإلكتروني' },
      phoneLabel: { fr: 'Numéro de téléphone', en: 'Phone Number', ar: 'رقم الهاتف' },
      serviceLabel: { fr: 'Service souhaité', en: 'Service Needed', ar: 'الخدمة المطلوبة' },
      serviceLabelHint: { fr: '(choix multiple)', en: '(multiple choice)', ar: '(اختيار متعدد)' },
      budgetLabel: { fr: 'Budget estimé (DZD)', en: 'Estimated Budget (DZD)', ar: 'الميزانية التقديرية (دينار جزائري)' },
      projectLabel: { fr: 'Description du projet', en: 'Project Description', ar: 'وصف المشروع' },
      namePlaceholder: { fr: 'Votre nom', en: 'Your name', ar: 'اسمك' },
      companyNamePlaceholder: { fr: 'Votre entreprise', en: 'Your company', ar: 'شركتك' },
      emailPlaceholder: { fr: 'Votre email', en: 'Your email', ar: 'بريدك الإلكتروني' },
      phonePlaceholder: { fr: 'Votre numéro de téléphone', en: 'Your phone number', ar: 'رقم هاتفك' },
      servicePlaceholder: { fr: 'Choisir un service', en: 'Choose a service', ar: 'اختر خدمة' },
      serviceOptions: {
          fr: ['Marketing digital complet', 'Création de contenu', 'Sponsoring Meta Ads', 'Website e-commerce', 'Autre'],
          en: ['Complete Digital Marketing', 'Content Creation', 'Meta Ads Sponsoring', 'E-commerce Website', 'Other'],
          ar: ['التسويق الرقمي المتكامل', 'إنشاء المحتوى', 'إعلانات ميتا الممولة', 'موقع تجارة إلكتروني', 'أخرى'],
      },
      budget: { fr: 'Choisir un budget', en: 'Choose a budget', ar: 'اختر ميزانية' },
      budgetOptions: {
        fr: ['Moins de 100 000 DZD', '100 000 - 250 000 DZD', '250 000 - 500 000 DZD', 'Plus de 500 000 DZD'],
        en: ['Less than 100,000 DZD', '100,000 - 250,000 DZD', '250,000 - 500,000 DZD', 'More than 500,000 DZD'],
        ar: ['أقل من 100,000 دج', '100,000 - 250,000 دج', '250,000 - 500,000 دج', 'أكثر من 500,000 دج'],
      },
      projectPlaceholder: { fr: 'Décrivez votre projet', en: 'Describe your project', ar: 'صف مشروعك' },
      cta: { fr: 'Envoyer la demande', en: 'Send request', ar: 'إرسال الطلب' },
      successTitle: { fr: 'Merci !', en: 'Thank you!', ar: 'شكراً لك!' },
      successMessage: { fr: 'Votre demande a bien été envoyée. Nous reviendrons vers vous très prochainement.', en: 'Your request has been sent successfully. We will get back to you very soon.', ar: 'تم إرسال طلبك بنجاح. سنتواصل معك قريبًا جدًا.' },
    },
    info: {
      contactDetails: { fr: 'Coordonnées', en: 'Contact Details', ar: 'معلومات الاتصال' },
      followUs: { fr: 'Suivez-nous', en: 'Follow us', ar: 'تابعنا' },
    },
  },
  liveChat: {
    title: {
      fr: 'Discutez avec nous !',
      en: 'Chat with us!',
      ar: 'تحدث معنا!',
    },
    greeting: {
      fr: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
      en: 'Hello! How can I help you today?',
      ar: 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
    },
    placeholder: {
      fr: 'Tapez votre message...',
      en: 'Type your message...',
      ar: 'اكتب رسالتك...',
    },
    agent_reply: {
        fr: 'Merci pour votre message. Un agent vous répondra bientôt.',
        en: 'Thank you for your message. An agent will get back to you shortly.',
        ar: 'شكراً لرسالتكم. سيعود إليكم أحد وكلائنا قريباً.',
    }
  },
  footer: {
    tagline: {
      fr: 'Votre partenaire de croissance e-commerce.',
      en: 'Your e-commerce growth partner.',
      ar: 'شريكك في نمو التجارة الإلكترونية.',
    },
    copyright: {
      fr: 'iVISION Agency. Tous droits réservés.',
      en: 'iVISION Agency. All rights reserved.',
      ar: 'وكالة iVISION. جميع الحقوق محفوظة.',
    },
  },
};

const processTranslations = (lang: Language) => ({
    header: {
        links: textContent.header.links[lang],
        cta: textContent.header.cta[lang],
    },
    hero: {
        title: textContent.hero.title[lang],
        subtitle: textContent.hero.subtitle[lang],
        cta: textContent.hero.cta[lang],
    },
    services: {
        title: textContent.services.title[lang],
        subtitle: textContent.services.subtitle[lang],
        items: textContent.services.items[lang],
    },
    portfolio: {
        title: textContent.portfolio.title[lang],
        subtitle: textContent.portfolio.subtitle[lang],
        projects: textContent.portfolio.projects[lang],
        testimonial: {
            quote: textContent.portfolio.testimonial.quote[lang],
            author: textContent.portfolio.testimonial.author[lang],
            position: textContent.portfolio.testimonial.position[lang],
        }
    },
    process: {
        title: textContent.process.title[lang],
        subtitle: textContent.process.subtitle[lang],
        steps: textContent.process.steps[lang],
    },
    contact: {
        title: textContent.contact.title[lang],
        subtitle: textContent.contact.subtitle[lang],
        form: {
            title: textContent.contact.form.title[lang],
            yourInfoTitle: textContent.contact.form.yourInfoTitle[lang],
            projectInfoTitle: textContent.contact.form.projectInfoTitle[lang],
            nameLabel: textContent.contact.form.nameLabel[lang],
            companyNameLabel: textContent.contact.form.companyNameLabel[lang],
            emailLabel: textContent.contact.form.emailLabel[lang],
            phoneLabel: textContent.contact.form.phoneLabel[lang],
            serviceLabel: textContent.contact.form.serviceLabel[lang],
            serviceLabelHint: textContent.contact.form.serviceLabelHint[lang],
            budgetLabel: textContent.contact.form.budgetLabel[lang],
            projectLabel: textContent.contact.form.projectLabel[lang],
            namePlaceholder: textContent.contact.form.namePlaceholder[lang],
            companyNamePlaceholder: textContent.contact.form.companyNamePlaceholder[lang],
            emailPlaceholder: textContent.contact.form.emailPlaceholder[lang],
            phonePlaceholder: textContent.contact.form.phonePlaceholder[lang],
            servicePlaceholder: textContent.contact.form.servicePlaceholder[lang],
            serviceOptions: textContent.contact.form.serviceOptions[lang],
            budget: textContent.contact.form.budget[lang],
            budgetOptions: textContent.contact.form.budgetOptions[lang],
            projectPlaceholder: textContent.contact.form.projectPlaceholder[lang],
            cta: textContent.contact.form.cta[lang],
            successTitle: textContent.contact.form.successTitle[lang],
            successMessage: textContent.contact.form.successMessage[lang],
        },
        info: {
            contactDetails: textContent.contact.info.contactDetails[lang],
            followUs: textContent.contact.info.followUs[lang],
        }
    },
    liveChat: {
        title: textContent.liveChat.title[lang],
        greeting: textContent.liveChat.greeting[lang],
        placeholder: textContent.liveChat.placeholder[lang],
        agent_reply: textContent.liveChat.agent_reply[lang],
    },
    footer: {
        tagline: textContent.footer.tagline[lang],
        links: textContent.header.links[lang],
        copyright: textContent.footer.copyright[lang],
    }
});


export const translations = {
    fr: processTranslations('fr'),
    en: processTranslations('en'),
    ar: processTranslations('ar'),
};