export type Language = 'fr' | 'en' | 'ar';

const textContent = {
  header: {
    links: {
      fr: ['Accueil', 'Services', 'Portfolio', 'Blog', 'À propos', 'Contact'],
      en: ['Home', 'Services', 'Portfolio', 'Blog', 'About', 'Contact'],
      ar: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'المدونة', 'من نحن', 'اتصل بنا'],
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
    stats: {
      fr: [
        { value: '+350%', label: 'Augmentation du ROI', description: 'Pour un leader de la mode en ligne via nos campagnes Meta Ads ciblées.' },
        { value: '+200%', label: 'Taux de Conversion', description: 'Optimisation du parcours client et A/B testing pour une marque de cosmétiques.' },
        { value: 'Top 3', label: 'Classement Google', description: 'Stratégie SEO complète qui a propulsé un de nos clients sur des mots-clés stratégiques.' },
      ],
      en: [
        { value: '+350%', label: 'ROI Increase', description: 'For an online fashion leader via our targeted Meta Ads campaigns.' },
        { value: '+200%', label: 'Conversion Rate', description: 'Customer journey optimization and A/B testing for a cosmetics brand.' },
        { value: 'Top 3', label: 'Google Ranking', description: 'A comprehensive SEO strategy that propelled one of our clients on strategic keywords.' },
      ],
      ar: [
        { value: '+350%', label: 'زيادة في عائد الاستثمار', description: 'لشركة رائدة في مجال الأزياء عبر الإنترنت من خلال حملاتنا المستهدفة على Meta Ads.' },
        { value: '+200%', label: 'معدل التحويل', description: 'تحسين رحلة العميل واختبار A/B لعلامة تجارية لمستحضرات التجميل.' },
        { value: 'أعلى 3', label: 'ترتيب جوجل', description: 'استراتيجية SEO شاملة دفعت بأحد عملائنا إلى كلمات مفتاحية استراتيجية.' },
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
  blog: {
    title: {
      fr: 'Notre Blog',
      en: 'Our Blog',
      ar: 'مدونتنا',
    },
    subtitle: {
      fr: 'Conseils, tendances et études de cas sur le marketing digital.',
      en: 'Tips, trends, and case studies on digital marketing.',
      ar: 'نصائح واتجاهات ودراسات حالة حول التسويق الرقمي.',
    },
    posts: {
      fr: [
        { title: 'Les 5 tendances e-commerce à suivre en 2024', excerpt: 'Découvrez les stratégies qui vont façonner l\'avenir de la vente en ligne.' },
        { title: 'Meta Ads vs Google Ads : Que choisir ?', excerpt: 'Une analyse complète pour vous aider à allouer votre budget publicitaire.' },
        { title: 'Comment le SEO peut doubler votre trafic', excerpt: 'Étude de cas sur l\'un de nos clients qui a vu son trafic exploser.' },
      ],
      en: [
        { title: 'The 5 e-commerce trends to watch in 2024', excerpt: 'Discover the strategies that will shape the future of online sales.' },
        { title: 'Meta Ads vs Google Ads: Which to choose?', excerpt: 'A complete analysis to help you allocate your advertising budget.' },
        { title: 'How SEO can double your traffic', excerpt: 'Case study on one of our clients who saw their traffic explode.' },
      ],
      ar: [
        { title: 'أهم 5 اتجاهات للتجارة الإلكترونية في 2024', excerpt: 'اكتشف الاستراتيجيات التي ستشكل مستقبل المبيعات عبر الإنترنت.' },
        { title: 'إعلانات Meta أم إعلانات Google: أيهما تختار؟', excerpt: 'تحليل كامل لمساعدتك في تخصيص ميزانية إعلاناتك.' },
        { title: 'كيف يمكن لتحسين محركات البحث مضاعفة زوارك', excerpt: 'دراسة حالة لأحد عملائنا الذي شهد انفجارًا في عدد زوار موقعه.' },
      ],
    },
    readMore: {
      fr: 'Lire la suite',
      en: 'Read more',
      ar: 'اقرأ المزيد',
    },
    newsletter: {
      title: {
        fr: 'Rejoignez notre newsletter',
        en: 'Join our newsletter',
        ar: 'انضم إلى نشرتنا الإخبارية',
      },
      subtitle: {
        fr: 'Recevez nos meilleurs conseils directement dans votre boîte mail.',
        en: 'Get our best tips directly in your inbox.',
        ar: 'احصل على أفضل نصائحنا مباشرة في بريدك الوارد.',
      },
      placeholder: {
        fr: 'Votre adresse email',
        en: 'Your email address',
        ar: 'بريدك الإلكتروني',
      },
      cta: {
        fr: "S'inscrire",
        en: 'Subscribe',
        ar: 'اشتراك',
      },
      subscribed_message: {
        fr: 'Merci pour votre inscription !',
        en: 'Thank you for subscribing!',
        ar: 'شكرا لاشتراكك!',
      }
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
      namePlaceholder: {
        fr: 'Votre nom',
        en: 'Your name',
        ar: 'اسمك',
      },
      emailPlaceholder: {
        fr: 'Votre email',
        en: 'Your email',
        ar: 'بريدك الإلكتروني',
      },
      budget: {
        fr: 'Votre budget',
        en: 'Your budget',
        ar: 'ميزانيتك',
      },
      budgetOptions: {
        fr: ['Moins de 5 000 €', '5 000 € - 10 000 €', '10 000 € - 25 000 €', 'Plus de 25 000 €'],
        en: ['Less than €5,000', '€5,000 - €10,000', '€10,000 - €25,000', 'More than €25,000'],
        ar: ['أقل من 5,000 يورو', '5,000 - 10,000 يورو', '10,000 - 25,000 يورو', 'أكثر من 25,000 يورو'],
      },
      projectPlaceholder: {
        fr: 'Décrivez votre projet',
        en: 'Describe your project',
        ar: 'صف مشروعك',
      },
      cta: {
        fr: 'Envoyer la demande',
        en: 'Send request',
        ar: 'إرسال الطلب',
      },
    },
    info: {
      contactDetails: {
        fr: 'Coordonnées',
        en: 'Contact Details',
        ar: 'معلومات الاتصال',
      },
      followUs: {
        fr: 'Suivez-nous',
        en: 'Follow us',
        ar: 'تابعنا',
      },
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
        stats: textContent.portfolio.stats[lang],
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
    blog: {
        title: textContent.blog.title[lang],
        subtitle: textContent.blog.subtitle[lang],
        posts: textContent.blog.posts[lang],
        readMore: textContent.blog.readMore[lang],
        newsletter: {
            title: textContent.blog.newsletter.title[lang],
            subtitle: textContent.blog.newsletter.subtitle[lang],
            placeholder: textContent.blog.newsletter.placeholder[lang],
            cta: textContent.blog.newsletter.cta[lang],
            subscribed_message: textContent.blog.newsletter.subscribed_message[lang],
        }
    },
    contact: {
        title: textContent.contact.title[lang],
        subtitle: textContent.contact.subtitle[lang],
        form: {
            title: textContent.contact.form.title[lang],
            namePlaceholder: textContent.contact.form.namePlaceholder[lang],
            emailPlaceholder: textContent.contact.form.emailPlaceholder[lang],
            budget: textContent.contact.form.budget[lang],
            budgetOptions: textContent.contact.form.budgetOptions[lang],
            projectPlaceholder: textContent.contact.form.projectPlaceholder[lang],
            cta: textContent.contact.form.cta[lang],
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