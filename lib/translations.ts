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
  clientLogos: {
    title: {
      fr: 'Pourquoi Nous Choisir ?',
      en: 'Why Choose Us?',
      ar: 'لماذا تختارنا؟',
    },
    subtitle: {
      fr: 'Nous ne sommes pas juste une autre agence. Nous sommes votre équipe dédiée à la croissance.',
      en: 'We are not just another agency. We are your dedicated growth team.',
      ar: 'نحن لسنا مجرد وكالة أخرى. نحن فريقك المخصص للنمو.',
    },
    points: {
      fr: [
        { title: 'Expertise Ciblée', description: 'Nous vivons et respirons l\'e-commerce. Notre spécialisation nous permet de créer des stratégies qui frappent juste.' },
        { title: 'Approche Partenaire', description: 'Votre succès est notre succès. Nous nous intégrons à votre équipe pour atteindre des objectifs communs.' },
        { title: 'Stratégie Basée sur la Data', description: 'Chaque décision est guidée par des données concrètes, assurant une optimisation continue et un ROI maximal.' },
        { title: 'Résultats Concrets', description: 'Nous nous concentrons sur des métriques qui comptent vraiment : augmentation des ventes et croissance durable.' },
      ],
      en: [
        { title: 'Targeted Expertise', description: 'We live and breathe e-commerce. Our specialization allows us to create strategies that hit the mark.' },
        { title: 'Partnership Approach', description: 'Your success is our success. We integrate with your team to achieve common goals.' },
        { title: 'Data-Driven Strategy', description: 'Every decision is guided by concrete data, ensuring continuous optimization and maximum ROI.' },
        { title: 'Tangible Results', description: 'We focus on metrics that truly matter: increased sales and sustainable growth.' },
      ],
      ar: [
        { title: 'خبرة مستهدفة', description: 'نحن نعيش ونتنفس التجارة الإلكترونية. تخصصنا يسمح لنا بإنشاء استراتيجيات تصيب الهدف.' },
        { title: 'نهج الشراكة', description: 'نجاحك هو نجاحنا. نحن نندمج مع فريقك لتحقيق الأهداف المشتركة.' },
        { title: 'استراتيجية تعتمد على البيانات', description: 'كل قرار يسترشد ببيانات ملموسة، مما يضمن التحسين المستمر وأقصى عائد على الاستثمار.' },
        { title: 'نتائج ملموسة', description: 'نحن نركز على المقاييس التي تهم حقًا: زيادة المبيعات والنمو المستدام.' },
      ]
    }
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
          image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop',
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
          image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop',
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
          image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop',
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
  faq: {
    title: {
      fr: 'Questions Fréquemment Posées',
      en: 'Frequently Asked Questions',
      ar: 'الأسئلة الشائعة',
    },
    subtitle: {
      fr: 'Trouvez ici les réponses à vos questions les plus courantes.',
      en: 'Find answers to your most common questions here.',
      ar: 'تجد هنا إجابات على أسئلتك الأكثر شيوعًا.',
    },
    faqs: {
      fr: [
        { question: 'Quels types d\'entreprises aidez-vous ?', answer: 'Nous nous spécialisons dans l\'aide aux entreprises e-commerce, des startups aux marques établies, pour augmenter leur visibilité en ligne et leurs ventes.' },
        { question: 'Combien de temps faut-il pour voir des résultats ?', answer: 'Les résultats peuvent varier, mais vous pouvez généralement vous attendre à voir des améliorations significatives dans les métriques clés en 3 à 6 mois, en fonction de la stratégie et des services choisis.' },
        { question: 'Comment mesurez-vous le succès d\'une campagne ?', answer: 'Nous mesurons le succès à l\'aide d\'indicateurs de performance clés (KPI) tels que le retour sur investissement publicitaire (ROAS), le coût par acquisition (CPA), le taux de conversion et la croissance globale du trafic et des revenus.' },
        { question: 'Proposez-vous des contrats à long terme ?', answer: 'Nous proposons des options flexibles, y compris des projets uniques et des contrats de service mensuels. Notre objectif est de construire un partenariat qui correspond à vos besoins et à vos objectifs.' },
      ],
      en: [
        { question: 'What types of businesses do you help?', answer: 'We specialize in helping e-commerce businesses, from startups to established brands, increase their online visibility and sales.' },
        { question: 'How long does it take to see results?', answer: 'Results can vary, but you can typically expect to see significant improvements in key metrics within 3 to 6 months, depending on the strategy and services chosen.' },
        { question: 'How do you measure the success of a campaign?', answer: 'We measure success using key performance indicators (KPIs) such as Return On Ad Spend (ROAS), Cost Per Acquisition (CPA), conversion rate, and overall growth in traffic and revenue.' },
        { question: 'Do you offer long-term contracts?', answer: 'We offer flexible options, including one-time projects and monthly retainers. Our goal is to build a partnership that fits your needs and objectives.' },
      ],
      ar: [
        { question: 'ما أنواع الشركات التي تساعدونها؟', answer: 'نحن متخصصون في مساعدة شركات التجارة الإلكترونية، من الشركات الناشئة إلى العلامات التجارية الراسخة، على زيادة ظهورها ومبيعاتها عبر الإنترنت.' },
        { question: 'كم من الوقت يستغرق رؤية النتائج؟', answer: 'يمكن أن تختلف النتائج، ولكن يمكنك عادةً توقع رؤية تحسينات كبيرة في المقاييس الرئيسية في غضون 3 إلى 6 أشهر، اعتمادًا على الاستراتيجية والخدمات المختارة.' },
        { question: 'كيف تقيسون نجاح الحملة؟', answer: 'نقيس النجاح باستخدام مؤشرات الأداء الرئيسية (KPIs) مثل العائد على الإنفاق الإعلاني (ROAS)، وتكلفة الاستحواذ (CPA)، ومعدل التحويل، والنمو الإجمالي في حركة المرور والإيرادات.' },
        { question: 'هل تقدمون عقودًا طويلة الأجل؟', answer: 'نحن نقدم خيارات مرنة، بما في ذلك المشاريع لمرة واحدة والعقود الشهرية. هدفنا هو بناء شراكة تناسب احتياجاتك وأهدافك.' },
      ],
    }
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
    clientLogos: {
        title: textContent.clientLogos.title[lang],
        subtitle: textContent.clientLogos.subtitle[lang],
        points: textContent.clientLogos.points[lang],
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
    faq: {
        title: textContent.faq.title[lang],
        subtitle: textContent.faq.subtitle[lang],
        faqs: textContent.faq.faqs[lang],
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