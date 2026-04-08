/* ============================================================
   BARAKA REMODELING — MAIN JAVASCRIPT
   ============================================================ */

'use strict';

/* === TRANSLATIONS === */
const translations = {
  en: {
    /* NAV */
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.gallery':  'Gallery',
    'nav.faq':      'FAQ',
    'nav.contact':  'Contact',
    'nav.book':     'Book a Consultation',

    /* HOME HERO */
    'hero.label':   'Interior Design & Remodeling · Orlando, FL',
    'hero.h1':      'Transforming Spaces,\nElevating Homes.',
    'hero.sub':     'Premium interior remodeling and design services crafted around your vision, your lifestyle, and your home.',
    'hero.cta1':    'Book a Consultation',
    'hero.cta2':    'View Our Work',
    'hero.scroll':  'Scroll',

    /* DIFF SECTION */
    'diff.label':   'Why Apex Home Design',
    'diff.h2':      'What Sets Us Apart',
    'diff.1.title': 'Personalized Attention',
    'diff.1.text':  'Every project begins with a listening session. We design around your life, not ours.',
    'diff.2.title': 'Premium Quality',
    'diff.2.text':  'We work exclusively with vetted materials and trusted craftsmen to ensure results that last.',
    'diff.3.title': 'On-Time Delivery',
    'diff.3.text':  'Your time matters. We commit to clear timelines and honor every milestone, every time.',

    /* SERVICES SECTION HOME */
    'services.label':      'What We Do',
    'services.h2':         'Our Specialties',
    'services.link':       'Learn more',

    /* APPROACH */
    'approach.label':  'Our Philosophy',
    'approach.h2':     'Design with intention.\nBuilt with care.',
    'approach.lead':   'We believe your home should be a reflection of who you are. Not just a space — a feeling.',
    'approach.p1':     'Every project is a collaboration. We listen, we plan, and we execute with precision. From the first consultation to the final reveal, you are part of every decision.',
    'approach.p2':     'Apex Home Design brings together artisan craftsmanship and modern design sensibility to create interiors that are both beautiful and deeply functional.',
    'approach.cta':    'About Apex Home Design',

    /* GALLERY */
    'gallery.label':   'Our Portfolio',
    'gallery.h2':      'Recent Projects',
    'gallery.cta':     'View All Projects',

    /* PROCESS */
    'process.label':   'How We Work',
    'process.h2':      'A Clear Process,\nA Beautiful Result',
    'process.sub':     'Every detail is considered from the very first conversation.',
    'process.1.title': 'Initial Consultation',
    'process.1.text':  'We meet, listen, and understand your vision, space, and budget.',
    'process.2.title': 'Design Proposal',
    'process.2.text':  'We present a curated design plan with materials, finishes, and timeline.',
    'process.3.title': 'Expert Execution',
    'process.3.text':  'Our team handles every detail with precision and craftsmanship.',
    'process.4.title': 'Final Delivery',
    'process.4.text':  'We walk you through the finished space and ensure your complete satisfaction.',

    /* TESTIMONIALS */
    'testimonials.label': 'Client Stories',
    'testimonials.h2':    'Trusted by Homeowners\nAcross Orlando',
    'testimonials.1.q':   'Apex Home Design completely transformed our kitchen. The attention to detail, the communication throughout — everything was outstanding.',
    'testimonials.1.name': 'Maria Rodriguez',
    'testimonials.1.loc':  'Orlando, FL',
    'testimonials.2.q':   'We were nervous about the renovation, but the team put us at ease from day one. The result exceeded every expectation.',
    'testimonials.2.name': 'James & Lisa Moran',
    'testimonials.2.loc':  'Winter Park, FL',
    'testimonials.3.q':   'Professional, punctual, and truly talented. Our master bathroom is now the crown jewel of our home.',
    'testimonials.3.name': 'Ana Beatriz Santos',
    'testimonials.3.loc':  'Dr. Phillips, Orlando',

    /* CTA SECTION */
    'cta.label':   'Ready to Begin?',
    'cta.h2':      'Let\'s Design Your Dream Space.',
    'cta.lead':    'Schedule a free initial consultation and discover what Apex Home Design can do for your home.',
    'cta.btn1':    'Book a Consultation',
    'cta.btn2':    'WhatsApp Us',

    /* STATS */
    'stats.1.num':   '8+',
    'stats.1.label': 'Years of Experience',
    'stats.2.num':   '250+',
    'stats.2.label': 'Projects Completed',
    'stats.3.num':   '98%',
    'stats.3.label': 'Client Satisfaction',
    'stats.4.num':   '40+',
    'stats.4.label': 'Design Partners',

    /* FOOTER */
    'footer.desc':  'Premium interior remodeling and design services for discerning homeowners in Orlando and the surrounding areas.',
    'footer.links': 'Navigation',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms':   'Terms of Service',
    'footer.contact': 'Contact',
    'footer.phone':   '+1 (407) 555-0198',
    'footer.email':   'hello@barakaremodeling.com',
    'footer.address': '4750 Millenia Blvd, Suite 214\nOrlando, FL 32839',
    'footer.hours':   'Mon–Fri: 9am – 6pm',
    'footer.copy':    '© 2026 Apex Home Design. All rights reserved.',
    'footer.loc':     'Orlando, FL',

    /* ABOUT PAGE */
    'about.label':     'Our Story',
    'about.h1':        'Built on Trust,\nDesigned for Living.',
    'about.hero.label':'About Us',
    'about.p1':        'Apex Home Design was founded with a simple but powerful belief: every home deserves to be beautiful, functional, and deeply personal.',
    'about.p2':        'Based in Orlando, Florida, we specialize in residential interior remodeling and design — bringing together skilled craftsmanship, premium materials, and a genuine commitment to our clients.',
    'about.p3':        'From a kitchen renovation that changes the rhythm of your mornings, to a master bathroom that becomes your personal retreat — we design with intention and build with care.',
    'about.mission.label': 'Mission',
    'about.mission.h2':   'We don\'t just remodel spaces.\nWe transform lives at home.',
    'about.mission.lead': 'Our mission is to help homeowners create spaces that feel as good as they look — designed around real life, built to last.',
    'about.values.label': 'Our Values',
    'about.values.h2':    'The Principles That\nGuide Every Project',
    'about.v1.title': 'Personalized Service',
    'about.v1.text':  'No two homes are alike. No two clients are alike. We approach every project fresh, with full attention and care.',
    'about.v2.title': 'Transparency',
    'about.v2.text':  'Clear communication, honest budgets, and realistic timelines. We keep you informed at every step.',
    'about.v3.title': 'Craft Excellence',
    'about.v3.text':  'We hold ourselves and our partners to the highest standards of quality, from materials to execution.',
    'about.v4.title': 'Commitment',
    'about.v4.text':  'A project is complete only when you are 100% satisfied. We follow through, always.',

    /* SERVICES PAGE */
    'services.hero.label': 'What We Offer',
    'services.h1':         'Our Services',
    'services.intro.label':'Full Scope',
    'services.intro.h2':   'From Concept to Completion',
    'services.intro.lead': 'We offer a comprehensive range of interior remodeling and design services for residential spaces in Orlando and surrounding areas.',
    's1.label': 'Transformation',
    's1.title': 'Interior Remodeling',
    's1.lead':  'Complete renovation of your living spaces — walls, floors, ceilings, and everything in between.',
    's1.p':     'Whether you\'re updating a single room or transforming your entire home, our team manages every aspect of the remodeling process with precision and skill.',
    's1.l1': 'Living room & bedroom renovations',
    's1.l2': 'Flooring installation & refinishing',
    's1.l3': 'Custom millwork and built-ins',
    's1.l4': 'Lighting design and installation',
    's2.label': 'Design',
    's2.title': 'Interior Design',
    's2.lead':  'A refined design vision that brings harmony, beauty, and intention to every corner of your home.',
    's2.p':     'Our design process starts with you. We listen to your lifestyle, your tastes, and your goals — then craft a design that is uniquely yours.',
    's2.l1': 'Full room concept development',
    's2.l2': 'Color palette & material selection',
    's2.l3': 'Furniture curation and layout planning',
    's2.l4': 'Mood boards and 3D visualization',
    's3.label': 'Kitchens',
    's3.title': 'Kitchen Renovation',
    's3.lead':  'The heart of every home, reimagined. Beautiful, functional kitchens designed around how you live.',
    's3.p':     'From custom cabinetry to premium countertops and statement fixtures, we design kitchens that are both stunning and practical.',
    's3.l1': 'Custom cabinetry design',
    's3.l2': 'Countertop selection and installation',
    's3.l3': 'Backsplash and tile work',
    's3.l4': 'Full kitchen layout redesign',
    's4.label': 'Bathrooms',
    's4.title': 'Bathroom Remodeling',
    's4.lead':  'Your personal sanctuary, elevated. Luxury bath spaces designed for comfort and elegance.',
    's4.p':     'We transform ordinary bathrooms into spa-like retreats with premium finishes, smart layouts, and artisan details.',
    's4.l1': 'Master bath & ensuite design',
    's4.l2': 'Walk-in shower and soaking tub installation',
    's4.l3': 'Tile, stone, and mosaic work',
    's4.l4': 'Vanity and fixture selection',
    's5.label': 'Consultation',
    's5.title': 'Design Consultation',
    's5.lead':  'Not ready for a full renovation? A focused design consultation can transform your space with targeted changes.',
    's5.p':     'Our consultations provide clarity, direction, and actionable recommendations for your home — without the full renovation commitment.',
    's5.l1': 'Space planning and layout review',
    's5.l2': 'Material & finish guidance',
    's5.l3': 'Color and lighting recommendations',
    's5.l4': 'Shopping list and budget guidance',

    /* GALLERY PAGE */
    'gallery.hero.label': 'Portfolio',
    'gallery.h1':         'Our Work',
    'gallery.intro':      'A curated selection of residential projects across Orlando, showcasing our design range and quality of craft.',
    'gallery.all':        'All',
    'gallery.living':     'Living Rooms',
    'gallery.kitchens':   'Kitchens',
    'gallery.bathrooms':  'Bathrooms',
    'gallery.bedrooms':   'Bedrooms',
    'gallery.details':    'Details',

    /* FAQ PAGE */
    'faq.hero.label': 'Support',
    'faq.h1':         'Frequently Asked Questions',
    'faq.intro':      'Everything you need to know about working with Apex Home Design.',
    'faq.q1': 'Do you work only in Orlando?',
    'faq.a1': 'Our primary service area is Orlando and the surrounding communities, including Winter Park, Dr. Phillips, Lake Nona, Windermere, Oviedo, and more. We occasionally take on projects in other Central Florida areas — contact us to discuss your location.',
    'faq.q2': 'How does the initial consultation work?',
    'faq.a2': 'The first consultation is free and commitment-free. We visit your space, listen to your vision, assess the scope of work, and discuss your budget and timeline. After that, we present a formal proposal with our approach and investment.',
    'faq.q3': 'Can you help with both design and remodeling?',
    'faq.a3': 'Absolutely. Apex Home Design is a full-service studio — we handle interior design, material sourcing, and the physical remodeling work. You work with one team, one vision, from start to finish.',
    'faq.q4': 'Do I need an appointment for a consultation?',
    'faq.a4': 'Yes, we work by appointment to ensure dedicated time and attention for every client. You can book directly through our website, via Calendly, or by contacting us on WhatsApp.',
    'faq.q5': 'How long does a typical project take?',
    'faq.a5': 'It depends on the scope. A bathroom renovation typically takes 2–4 weeks. A full kitchen remodel can take 4–8 weeks. Larger whole-home renovations vary. We always provide a clear timeline in our proposal and keep you updated throughout.',
    'faq.q6': 'Can I schedule through WhatsApp?',
    'faq.a6': 'Yes! WhatsApp is one of our preferred communication channels. You can reach us to ask questions, schedule a consultation, or get quick project updates. Our team typically responds within a few hours during business hours.',
    'faq.q7': 'Do you offer financing or payment plans?',
    'faq.a7': 'We offer flexible payment structures for larger projects. Details are discussed during the proposal phase and are tailored to each project\'s scope and timeline.',
    'faq.q8': 'What areas of the home do you remodel?',
    'faq.a8': 'We work throughout the home — kitchens, bathrooms, living rooms, bedrooms, offices, and full home renovations. We also offer targeted design consultations for spaces that just need a refresh.',
    'faq.cta.label': 'Still have questions?',
    'faq.cta.h2':    'We\'re happy to help.',
    'faq.cta.lead':  'Reach out via WhatsApp or schedule a free consultation. We respond fast.',

    /* CONTACT PAGE */
    'contact.hero.label': 'Get in Touch',
    'contact.h1':         'Let\'s Talk About\nYour Home.',
    'contact.info.label': 'Contact Information',
    'contact.info.h2':    'We\'d love to hear\nfrom you.',
    'contact.info.lead':  'Whether you have a clear vision or are just beginning to explore, we\'re here to guide you.',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    'contact.address.label': 'Location',
    'contact.hours.label': 'Hours',
    'contact.hours.val':   'Monday – Friday, 9am to 6pm',
    'contact.form.label':  'Send Us a Message',
    'contact.form.fname':  'First Name',
    'contact.form.lname':  'Last Name',
    'contact.form.email':  'Email Address',
    'contact.form.phone':  'Phone Number',
    'contact.form.service':'Service of Interest',
    'contact.form.s0':     'Select a service…',
    'contact.form.s1':     'Interior Remodeling',
    'contact.form.s2':     'Interior Design',
    'contact.form.s3':     'Kitchen Renovation',
    'contact.form.s4':     'Bathroom Remodeling',
    'contact.form.s5':     'Design Consultation',
    'contact.form.msg':    'Tell us about your project',
    'contact.form.send':   'Send Message',
    'contact.form.ok':     'Thank you! We\'ll be in touch within 24 hours.',
    'contact.calendly.label': 'Schedule Online',
    'contact.calendly.h3':    'Book a Free Consultation',
    'contact.calendly.lead':  'Choose a time that works for you. The consultation is free and without obligation.',
    'contact.calendly.placeholder': 'Calendly scheduling widget will appear here',

    /* CHATBOT */
    'chat.welcome.en': 'Hi! I\'m Apex Home Design\'s virtual assistant. I can help you explore our services or schedule a consultation.',
    'chat.chip1': 'Services',
    'chat.chip2': 'Schedule',
    'chat.chip3': 'Contact',
    'chat.chip4': 'Pricing',
    'chat.r.services': 'We offer Interior Remodeling, Kitchen & Bathroom Renovation, Interior Design, and Design Consultations. Would you like to know more about any of these?',
    'chat.r.schedule': 'You can book a free consultation on our Contact page, or reach us directly on WhatsApp. Would you like the link?',
    'chat.r.contact':  'You can call us at +1 (407) 555-0198, email hello@barakaremodeling.com, or message us on WhatsApp anytime!',
    'chat.r.pricing':  'Pricing depends on the scope of your project. We provide a detailed proposal after the initial consultation — which is always free!',
    'chat.r.default':  'Great question! For more details, I\'d recommend scheduling a free consultation or reaching out on WhatsApp. We\'re happy to help.',
    'chat.placeholder': 'Type a message…',
  },

  es: {
    /* NAV */
    'nav.home':     'Inicio',
    'nav.about':    'Nosotros',
    'nav.services': 'Servicios',
    'nav.gallery':  'Galería',
    'nav.faq':      'Preguntas',
    'nav.contact':  'Contacto',
    'nav.book':     'Agendar Cita',

    /* HOME HERO */
    'hero.label':   'Remodelación e Interiorismo · Orlando, FL',
    'hero.h1':      'Transformamos Espacios,\nElevamos Hogares.',
    'hero.sub':     'Servicios de remodelación e interiorismo premium, diseñados alrededor de tu visión, tu estilo y tu hogar.',
    'hero.cta1':    'Agendar Consulta',
    'hero.cta2':    'Ver Nuestros Proyectos',
    'hero.scroll':  'Descubrir',

    /* DIFF SECTION */
    'diff.label':   'Por Qué Apex Home Design',
    'diff.h2':      'Lo Que Nos Distingue',
    'diff.1.title': 'Atención Personalizada',
    'diff.1.text':  'Cada proyecto comienza escuchándote. Diseñamos alrededor de tu vida, no de la nuestra.',
    'diff.2.title': 'Calidad Premium',
    'diff.2.text':  'Trabajamos exclusivamente con materiales verificados y artesanos de confianza para resultados duraderos.',
    'diff.3.title': 'Entrega Puntual',
    'diff.3.text':  'Tu tiempo es valioso. Nos comprometemos con tiempos claros y cumplimos cada etapa, siempre.',

    /* SERVICES SECTION HOME */
    'services.label':      'Lo Que Hacemos',
    'services.h2':         'Nuestras Especialidades',
    'services.link':       'Ver más',

    /* APPROACH */
    'approach.label':  'Nuestra Filosofía',
    'approach.h2':     'Diseño con intención.\nEjecución con cuidado.',
    'approach.lead':   'Creemos que tu hogar debe reflejar quién eres. No solo un espacio — una sensación.',
    'approach.p1':     'Cada proyecto es una colaboración. Escuchamos, planificamos y ejecutamos con precisión. Desde la primera consulta hasta la entrega final, formas parte de cada decisión.',
    'approach.p2':     'Apex Home Design une artesanía y sensibilidad de diseño moderno para crear interiores que son bellos y profundamente funcionales.',
    'approach.cta':    'Conoce a Apex Home Design',

    /* GALLERY */
    'gallery.label':   'Nuestro Portafolio',
    'gallery.h2':      'Proyectos Recientes',
    'gallery.cta':     'Ver Todos los Proyectos',

    /* PROCESS */
    'process.label':   'Cómo Trabajamos',
    'process.h2':      'Un Proceso Claro,\nUn Resultado Bello',
    'process.sub':     'Cada detalle se considera desde la primera conversación.',
    'process.1.title': 'Consulta Inicial',
    'process.1.text':  'Nos reunimos, escuchamos y entendemos tu visión, espacio y presupuesto.',
    'process.2.title': 'Propuesta de Diseño',
    'process.2.text':  'Presentamos un plan de diseño detallado con materiales, acabados y cronograma.',
    'process.3.title': 'Ejecución Experta',
    'process.3.text':  'Nuestro equipo maneja cada detalle con precisión y artesanía.',
    'process.4.title': 'Entrega Final',
    'process.4.text':  'Recorremos contigo el espacio terminado y nos aseguramos de tu entera satisfacción.',

    /* TESTIMONIALS */
    'testimonials.label': 'Historias de Clientes',
    'testimonials.h2':    'La Confianza de Propietarios\nen Todo Orlando',
    'testimonials.1.q':   'Apex Home Design transformó completamente nuestra cocina. La atención al detalle, la comunicación durante todo el proceso — todo fue excepcional.',
    'testimonials.1.name': 'María Rodríguez',
    'testimonials.1.loc':  'Orlando, FL',
    'testimonials.2.q':   'Estábamos nerviosos con la remodelación, pero el equipo nos dio confianza desde el primer día. El resultado superó todas nuestras expectativas.',
    'testimonials.2.name': 'James y Lisa Morán',
    'testimonials.2.loc':  'Winter Park, FL',
    'testimonials.3.q':   'Profesionales, puntuales y verdaderamente talentosos. Nuestro baño principal es ahora la joya de nuestra casa.',
    'testimonials.3.name': 'Ana Beatriz Santos',
    'testimonials.3.loc':  'Dr. Phillips, Orlando',

    /* CTA SECTION */
    'cta.label':   '¿Listo para Comenzar?',
    'cta.h2':      'Diseñemos el Espacio de tus Sueños.',
    'cta.lead':    'Agenda una consulta inicial gratuita y descubre lo que Apex Home Design puede hacer por tu hogar.',
    'cta.btn1':    'Agendar Consulta',
    'cta.btn2':    'Escríbenos por WhatsApp',

    /* STATS */
    'stats.1.num':   '8+',
    'stats.1.label': 'Años de Experiencia',
    'stats.2.num':   '250+',
    'stats.2.label': 'Proyectos Completados',
    'stats.3.num':   '98%',
    'stats.3.label': 'Satisfacción del Cliente',
    'stats.4.num':   '40+',
    'stats.4.label': 'Socios de Diseño',

    /* FOOTER */
    'footer.desc':  'Servicios premium de remodelación e interiorismo residencial para propietarios exigentes en Orlando y sus alrededores.',
    'footer.links': 'Navegación',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms':   'Términos de Servicio',
    'footer.contact': 'Contacto',
    'footer.phone':   '+1 (407) 555-0198',
    'footer.email':   'hello@barakaremodeling.com',
    'footer.address': '4750 Millenia Blvd, Suite 214\nOrlando, FL 32839',
    'footer.hours':   'Lun–Vie: 9am – 6pm',
    'footer.copy':    '© 2026 Apex Home Design. Todos los derechos reservados.',
    'footer.loc':     'Orlando, FL',

    /* ABOUT PAGE */
    'about.label':     'Nuestra Historia',
    'about.h1':        'Construido en Confianza,\nDiseñado para Vivir.',
    'about.hero.label':'Nosotros',
    'about.p1':        'Apex Home Design nació con una creencia simple pero poderosa: cada hogar merece ser bello, funcional y profundamente personal.',
    'about.p2':        'Con base en Orlando, Florida, nos especializamos en remodelación e interiorismo residencial — uniendo artesanía de calidad, materiales premium y un compromiso genuino con nuestros clientes.',
    'about.p3':        'Desde una renovación de cocina que cambia el ritmo de tus mañanas, hasta un baño principal que se convierte en tu retiro personal — diseñamos con intención y construimos con cuidado.',
    'about.mission.label': 'Misión',
    'about.mission.h2':   'No solo remodelamos espacios.\nTransformamos la vida en el hogar.',
    'about.mission.lead': 'Nuestra misión es ayudar a los propietarios a crear espacios que se sientan tan bien como se ven — diseñados alrededor de la vida real, construidos para durar.',
    'about.values.label': 'Nuestros Valores',
    'about.values.h2':    'Los Principios Que\nGuían Cada Proyecto',
    'about.v1.title': 'Servicio Personalizado',
    'about.v1.text':  'No hay dos hogares iguales. No hay dos clientes iguales. Abordamos cada proyecto con atención y cuidado plenos.',
    'about.v2.title': 'Transparencia',
    'about.v2.text':  'Comunicación clara, presupuestos honestos y cronogramas realistas. Te mantenemos informado en cada paso.',
    'about.v3.title': 'Excelencia Artesanal',
    'about.v3.text':  'Nos exigimos a nosotros mismos y a nuestros socios los más altos estándares de calidad, de los materiales a la ejecución.',
    'about.v4.title': 'Compromiso',
    'about.v4.text':  'Un proyecto está completo solo cuando tú estás 100% satisfecho. Siempre cumplimos.',

    /* SERVICES PAGE */
    'services.hero.label': 'Lo Que Ofrecemos',
    'services.h1':         'Nuestros Servicios',
    'services.intro.label':'Alcance Completo',
    'services.intro.h2':   'Del Concepto a la Realidad',
    'services.intro.lead': 'Ofrecemos una gama completa de servicios de remodelación e interiorismo para espacios residenciales en Orlando y sus alrededores.',
    's1.label': 'Transformación',
    's1.title': 'Remodelación de Interiores',
    's1.lead':  'Renovación completa de tus espacios — paredes, pisos, techos y todo lo que hay en medio.',
    's1.p':     'Ya sea que estés actualizando una habitación o transformando toda tu casa, nuestro equipo maneja cada aspecto del proceso de remodelación con precisión y habilidad.',
    's1.l1': 'Renovación de salas y recámaras',
    's1.l2': 'Instalación y restauración de pisos',
    's1.l3': 'Ebanistería personalizada y empotrados',
    's1.l4': 'Diseño e instalación de iluminación',
    's2.label': 'Diseño',
    's2.title': 'Diseño de Interiores',
    's2.lead':  'Una visión de diseño refinada que aporta armonía, belleza e intención a cada rincón de tu hogar.',
    's2.p':     'Nuestro proceso de diseño comienza contigo. Escuchamos tu estilo de vida, tus gustos y tus objetivos — y creamos un diseño que es únicamente tuyo.',
    's2.l1': 'Desarrollo completo del concepto de espacio',
    's2.l2': 'Paleta de colores y selección de materiales',
    's2.l3': 'Curaduría de mobiliario y planificación de distribución',
    's2.l4': 'Tableros de inspiración y visualización 3D',
    's3.label': 'Cocinas',
    's3.title': 'Renovación de Cocinas',
    's3.lead':  'El corazón de cada hogar, reinventado. Cocinas bellas y funcionales diseñadas alrededor de cómo vives.',
    's3.p':     'Desde gabinetes personalizados hasta encimeras premium y herrajes de lujo, diseñamos cocinas impresionantes y prácticas.',
    's3.l1': 'Diseño de gabinetes personalizados',
    's3.l2': 'Selección e instalación de encimeras',
    's3.l3': 'Trabajo de azulejos y salpicaderos',
    's3.l4': 'Rediseño completo del layout de cocina',
    's4.label': 'Baños',
    's4.title': 'Remodelación de Baños',
    's4.lead':  'Tu santuario personal, elevado. Espacios de baño de lujo diseñados para el confort y la elegancia.',
    's4.p':     'Transformamos baños ordinarios en retiros tipo spa con acabados premium, distribuciones inteligentes y detalles artesanales.',
    's4.l1': 'Diseño de baño principal y ensuite',
    's4.l2': 'Instalación de ducha walk-in y tina',
    's4.l3': 'Trabajo en azulejo, piedra y mosaico',
    's4.l4': 'Selección de vanidades y accesorios',
    's5.label': 'Consultoría',
    's5.title': 'Consulta de Diseño',
    's5.lead':  '¿No estás listo para una renovación completa? Una consulta de diseño enfocada puede transformar tu espacio con cambios precisos.',
    's5.p':     'Nuestras consultas aportan claridad, dirección y recomendaciones accionables para tu hogar — sin el compromiso de una renovación completa.',
    's5.l1': 'Planificación de espacios y revisión de distribución',
    's5.l2': 'Guía de materiales y acabados',
    's5.l3': 'Recomendaciones de color e iluminación',
    's5.l4': 'Lista de compras y orientación de presupuesto',

    /* GALLERY PAGE */
    'gallery.hero.label': 'Portafolio',
    'gallery.h1':         'Nuestros Proyectos',
    'gallery.intro':      'Una selección curada de proyectos residenciales en Orlando, que muestra nuestro rango de diseño y calidad artesanal.',
    'gallery.all':        'Todos',
    'gallery.living':     'Salas',
    'gallery.kitchens':   'Cocinas',
    'gallery.bathrooms':  'Baños',
    'gallery.bedrooms':   'Recámaras',
    'gallery.details':    'Detalles',

    /* FAQ PAGE */
    'faq.hero.label': 'Soporte',
    'faq.h1':         'Preguntas Frecuentes',
    'faq.intro':      'Todo lo que necesitas saber sobre trabajar con Apex Home Design.',
    'faq.q1': '¿Trabajan solo en Orlando?',
    'faq.a1': 'Nuestra área principal de servicio es Orlando y las comunidades cercanas, incluyendo Winter Park, Dr. Phillips, Lake Nona, Windermere, Oviedo y más. Ocasionalmente aceptamos proyectos en otras áreas del centro de Florida — contáctanos para hablar sobre tu ubicación.',
    'faq.q2': '¿Cómo funciona la consulta inicial?',
    'faq.a2': 'La primera consulta es gratuita y sin compromiso. Visitamos tu espacio, escuchamos tu visión, evaluamos el alcance del trabajo y conversamos sobre tu presupuesto y cronograma. Después de eso, te presentamos una propuesta formal con nuestro enfoque e inversión.',
    'faq.q3': '¿Pueden ayudar tanto con el diseño como con la remodelación?',
    'faq.a3': 'Absolutamente. Apex Home Design es un estudio de servicio completo — manejamos el diseño de interiores, la selección de materiales y el trabajo físico de remodelación. Trabajas con un solo equipo, una sola visión, de principio a fin.',
    'faq.q4': '¿Necesito cita para una consulta?',
    'faq.a4': 'Sí, trabajamos con cita para garantizar tiempo y atención dedicados a cada cliente. Puedes agendar directamente desde nuestro sitio web, vía Calendly, o contactándonos por WhatsApp.',
    'faq.q5': '¿Cuánto tiempo toma un proyecto típico?',
    'faq.a5': 'Depende del alcance. Una remodelación de baño suele tomar 2–4 semanas. Una remodelación completa de cocina puede tomar 4–8 semanas. Las renovaciones más grandes varían. Siempre proporcionamos un cronograma claro en nuestra propuesta y te mantenemos informado durante todo el proceso.',
    'faq.q6': '¿Puedo agendar por WhatsApp?',
    'faq.a6': '¡Sí! WhatsApp es uno de nuestros canales de comunicación preferidos. Puedes contactarnos para hacer preguntas, agendar una consulta o recibir actualizaciones rápidas sobre tu proyecto. Nuestro equipo generalmente responde en pocas horas durante el horario de atención.',
    'faq.q7': '¿Ofrecen financiamiento o planes de pago?',
    'faq.a7': 'Ofrecemos estructuras de pago flexibles para proyectos de mayor envergadura. Los detalles se discuten durante la fase de propuesta y se adaptan al alcance y cronograma de cada proyecto.',
    'faq.q8': '¿Qué áreas del hogar remodelan?',
    'faq.a8': 'Trabajamos en toda la casa — cocinas, baños, salas, recámaras, oficinas y renovaciones de hogar completo. También ofrecemos consultas de diseño específicas para espacios que solo necesitan una actualización.',
    'faq.cta.label': '¿Tienes más preguntas?',
    'faq.cta.h2':    'Con gusto te ayudamos.',
    'faq.cta.lead':  'Contáctanos por WhatsApp o agenda una consulta gratuita. Respondemos rápido.',

    /* CONTACT PAGE */
    'contact.hero.label': 'Contáctanos',
    'contact.h1':         'Hablemos Sobre\nTu Hogar.',
    'contact.info.label': 'Información de Contacto',
    'contact.info.h2':    'Nos encantaría\nescucharte.',
    'contact.info.lead':  'Ya sea que tengas una visión clara o estés comenzando a explorar, estamos aquí para orientarte.',
    'contact.phone.label': 'Teléfono',
    'contact.email.label': 'Correo',
    'contact.address.label': 'Ubicación',
    'contact.hours.label': 'Horario',
    'contact.hours.val':   'Lunes – Viernes, 9am a 6pm',
    'contact.form.label':  'Envíanos un Mensaje',
    'contact.form.fname':  'Nombre',
    'contact.form.lname':  'Apellido',
    'contact.form.email':  'Correo Electrónico',
    'contact.form.phone':  'Teléfono',
    'contact.form.service':'Servicio de Interés',
    'contact.form.s0':     'Selecciona un servicio…',
    'contact.form.s1':     'Remodelación de Interiores',
    'contact.form.s2':     'Diseño de Interiores',
    'contact.form.s3':     'Renovación de Cocinas',
    'contact.form.s4':     'Remodelación de Baños',
    'contact.form.s5':     'Consulta de Diseño',
    'contact.form.msg':    'Cuéntanos sobre tu proyecto',
    'contact.form.send':   'Enviar Mensaje',
    'contact.form.ok':     '¡Gracias! Nos pondremos en contacto contigo en menos de 24 horas.',
    'contact.calendly.label': 'Agenda en Línea',
    'contact.calendly.h3':    'Reserva una Consulta Gratuita',
    'contact.calendly.lead':  'Elige el horario que mejor te convenga. La consulta es gratuita y sin compromiso.',
    'contact.calendly.placeholder': 'El widget de Calendly aparecerá aquí',

    /* CHATBOT */
    'chat.welcome.es': 'Hola, soy el asistente virtual de Apex Home Design. Puedo ayudarte a conocer nuestros servicios o agendar una cita.',
    'chat.chip1': 'Servicios',
    'chat.chip2': 'Agendar',
    'chat.chip3': 'Contacto',
    'chat.chip4': 'Precios',
    'chat.r.services': 'Ofrecemos Remodelación de Interiores, Renovación de Cocinas y Baños, Diseño de Interiores y Consultas de Diseño. ¿Te gustaría saber más sobre alguno?',
    'chat.r.schedule': 'Puedes agendar una consulta gratuita en nuestra página de Contacto, o escribirnos directamente por WhatsApp. ¿Te envío el enlace?',
    'chat.r.contact':  '¡Claro! Llámanos al +1 (407) 555-0198, escríbenos a hello@barakaremodeling.com o mándanos un mensaje por WhatsApp cuando gustes.',
    'chat.r.pricing':  'El precio depende del alcance de tu proyecto. Después de la consulta inicial — que siempre es gratuita — te entregamos una propuesta detallada.',
    'chat.r.default':  '¡Buena pregunta! Para más detalles, te recomendamos agendar una consulta gratuita o escribirnos por WhatsApp. Con gusto te ayudamos.',
    'chat.placeholder': 'Escribe un mensaje…',
  }
};

/* === LANGUAGE MANAGER === */
let currentLang = localStorage.getItem('baraka-lang') || 'es';

function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (el.tagName === 'OPTION') {
      el.textContent = text;
    } else {
      // Support \n as line break
      el.innerHTML = text.replace(/\n/g, '<br>');
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;

  // Update chatbot welcome if open
  updateChatWelcome();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('baraka-lang', lang);
  applyTranslations();
}

/* === NAVBAR === */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const isTransparent = navbar.classList.contains('transparent');

  function onScroll() {
    if (isTransparent) {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* === HERO IMAGE LOAD ANIMATION === */
function initHeroBg() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  setTimeout(() => heroBg.classList.add('loaded'), 100);
}

/* === SCROLL ANIMATIONS === */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* === FAQ ACCORDION === */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item   = question.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').classList.remove('open');
      });

      // Open clicked if was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
}

/* === GALLERY FILTERS === */
function initGalleryFilters() {
  const filters = document.querySelectorAll('.filter-btn');
  const items   = document.querySelectorAll('.gallery-masonry-item');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');

      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* === LIGHTBOX === */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg   = lightbox.querySelector('.lightbox-img');
  const lbClose = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-masonry-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLB() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
}

/* === CONTACT FORM === */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = '…';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) { success.classList.add('show'); }
    }, 1200);
  });
}

/* === CHATBOT === */
let chatInitialized = false;

function updateChatWelcome() {
  const msgs = document.querySelector('.chat-messages');
  if (!msgs || !chatInitialized) return;
  const welcomeEl = msgs.querySelector('[data-welcome]');
  if (welcomeEl) {
    const key = `chat.welcome.${currentLang}`;
    welcomeEl.textContent = t(key) || t('chat.welcome.en');
  }
}

function initChatbot() {
  const toggleBtn  = document.querySelector('.chat-toggle-btn');
  const chatWindow = document.querySelector('.chat-window');
  if (!toggleBtn || !chatWindow) return;

  const msgs     = chatWindow.querySelector('.chat-messages');
  const input    = chatWindow.querySelector('.chat-input');
  const sendBtn  = chatWindow.querySelector('.chat-send');
  const chips    = chatWindow.querySelectorAll('.chat-chip');

  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');

    if (chatWindow.classList.contains('open') && !chatInitialized) {
      chatInitialized = true;
      appendMessage('bot', t(`chat.welcome.${currentLang}`) || t('chat.welcome.en'), true);
    }
  });

  function appendMessage(role, text, isWelcome = false) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = text;
    if (isWelcome) bubble.setAttribute('data-welcome', '1');
    div.appendChild(bubble);
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function handleInput(text) {
    if (!text.trim()) return;
    appendMessage('user', text);
    input.value = '';

    setTimeout(() => {
      const lower = text.toLowerCase();
      let response;
      if (lower.includes('servic') || lower.includes('offer') || lower.includes('ofrec')) {
        response = t('chat.r.services');
      } else if (lower.includes('schedul') || lower.includes('book') || lower.includes('agenda') || lower.includes('cita')) {
        response = t('chat.r.schedule');
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('teléf') || lower.includes('correo')) {
        response = t('chat.r.contact');
      } else if (lower.includes('pric') || lower.includes('cost') || lower.includes('precio') || lower.includes('costo') || lower.includes('presup')) {
        response = t('chat.r.pricing');
      } else {
        response = t('chat.r.default');
      }
      appendMessage('bot', response);
    }, 700);
  }

  sendBtn.addEventListener('click', () => handleInput(input.value));
  input.addEventListener('keypress', e => { if (e.key === 'Enter') handleInput(input.value); });

  chips.forEach((chip, i) => {
    chip.addEventListener('click', () => {
      const chipKeys = ['chat.chip1','chat.chip2','chat.chip3','chat.chip4'];
      const chipResponses = ['chat.r.services','chat.r.schedule','chat.r.contact','chat.r.pricing'];
      const chipText = t(chipKeys[i]) || chip.textContent;
      appendMessage('user', chipText);
      setTimeout(() => appendMessage('bot', t(chipResponses[i])), 600);
    });
  });
}

/* === COUNTER ANIMATION === */
function initCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el   = entry.target;
        const text = el.getAttribute('data-i18n');
        const val  = translations[currentLang][text] || el.textContent;
        // Just animate opacity for static numbers
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease';
        setTimeout(() => { el.style.opacity = '1'; }, 100);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observer.observe(el));
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  initNavbar();
  initHeroBg();
  initScrollAnimations();
  initFAQ();
  initGalleryFilters();
  initLightbox();
  initContactForm();
  initChatbot();
  initCounters();

  // Apply translations on load
  applyTranslations();

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
