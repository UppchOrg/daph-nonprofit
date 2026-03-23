/**
 * DAPH Nonprofit — main.js
 * Handles: sticky nav, hamburger, mobile dropdowns, scroll animations, i18n
 */

// ─────────────────────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      about: "About", who: "Who We Are", history: "Our History",
      board: "Board of Directors", contact: "Contact",
      work: "Our Work", programs: "Programs", campaigns: "Campaigns", initiatives: "Initiatives",
      resources: "Resources", updates: "Latest Updates", press: "Press Releases", reports: "Reports",
      action: "Take Action", volunteer: "Volunteer", signup: "Sign Up", donate: "Donate",
    },
    hero: {
      eyebrow: "Disability Advocacy & Public Health",
      heading: "Together, we rise.",
      heading2: "Organized, we thrive.",
      sub: "We invite every individual, no matter how isolated or powerless they feel, to be part of a transformative journey toward equity and justice.",
      btnWork: "Our Work", btnInvolved: "Get Involved",
    },
    crisis: {
      heading: "We face a triple crisis",
      sub: "People across the country face compounding challenges that demand urgent, coordinated action from our communities.",
      card1: { title: "Health Inequity", body: "Millions lack access to adequate healthcare, especially people with disabilities and low-income families living in underserved communities." },
      card2: { title: "Housing Insecurity", body: "Rising costs and systemic barriers push vulnerable populations out of safe, accessible housing — threatening stability and dignity." },
      card3: { title: "Social Isolation", body: "Disconnection and despair weaken civic life. People feel unheard, unseen, and left behind by institutions that should serve them." },
    },
    about: {
      label: "About Us", heading: "Building power for those left behind",
      body1: 'DAPH builds the power of people with disabilities and under-resourced communities in urban, rural, and suburban areas to win change through issue fights and elections. We are a coalition of grassroots organizers united in the work of building a bigger "we."',
      body2: "Since our founding, we have won material improvements for millions — including expanded healthcare access, accessible housing protections, and stronger community mental health programs.",
      btn: "Learn More About Us",
    },
    campaigns: {
      label: "How We Fight", heading: "Our Campaigns",
      sub: "These are our core campaigns driving the change we aim for.",
      card1: { title: "Disability Rights Now", body: "Fighting for full inclusion, accessibility, and equal opportunity for people with disabilities." },
      card2: { title: "Health Care for All", body: "Advocating for universal, affordable healthcare that leaves no one behind." },
      card3: { title: "Housing Justice", body: "Ensuring safe, accessible, and affordable housing is a right — not a privilege." },
      card4: { title: "Community Wellness", body: "Building mental health resources, social connection, and civic infrastructure." },
      view: "View Campaign →",
    },
    news: {
      label: "Things you don't want to miss", heading: "Latest Updates",
      tag1: "Press Release", tag2: "Updates", tag3: "In The News",
      story1: { title: "DAPH Launches Statewide Accessibility Audit Initiative", body: "Our new program will assess accessibility gaps in public buildings across 12 counties, pushing local governments to act." },
      story2: { title: "Community Listening Sessions Begin This Spring", body: "Join us as we bring our team into 10 neighborhoods to hear directly from residents about their most pressing needs." },
      story3: { title: "DAPH Members Testify Before City Council on Housing Accessibility", body: "Advocates brought powerful personal stories to city hall, demanding enforcement of fair housing codes." },
      readMore: "Read more →", viewAll: "View All Updates",
    },
    cta: { heading: "Ready to make a difference?", sub: "Join thousands of advocates working toward a more just and accessible world.", join: "Join Us", signUp: "Sign Up for Updates" },
    footer: {
      brand: "DAPH builds the power of people with disabilities and under-resourced communities to win change through issue campaigns and elections.",
      careers: "Careers", projects: "Projects",
      copy: "©2026 DAPH — Disability Advocacy & Public Health",
      privacy: "Privacy Policy", terms: "Terms", financials: "Financials",
    },
  },

  es: {
    nav: {
      about: "Nosotros", who: "Quiénes Somos", history: "Nuestra Historia",
      board: "Junta Directiva", contact: "Contacto",
      work: "Nuestro Trabajo", programs: "Programas", campaigns: "Campañas", initiatives: "Iniciativas",
      resources: "Recursos", updates: "Últimas Noticias", press: "Comunicados de Prensa", reports: "Informes",
      action: "Actúa", volunteer: "Voluntariado", signup: "Regístrate", donate: "Donar",
    },
    hero: {
      eyebrow: "Defensa de la Discapacidad y Salud Pública",
      heading: "Juntos, nos levantamos.",
      heading2: "Organizados, prosperamos.",
      sub: "Invitamos a cada individuo, sin importar cuán aislado o impotente se sienta, a ser parte de un viaje transformador hacia la equidad y la justicia.",
      btnWork: "Nuestro Trabajo", btnInvolved: "Involúcrate",
    },
    crisis: {
      heading: "Enfrentamos una triple crisis",
      sub: "Las personas en todo el país enfrentan desafíos compuestos que exigen una acción urgente y coordinada de nuestras comunidades.",
      card1: { title: "Desigualdad en Salud", body: "Millones carecen de acceso a atención médica adecuada, especialmente personas con discapacidades y familias de bajos ingresos en comunidades desatendidas." },
      card2: { title: "Inseguridad en la Vivienda", body: "El aumento de costos y las barreras sistémicas empujan a las poblaciones vulnerables fuera de viviendas seguras y accesibles." },
      card3: { title: "Aislamiento Social", body: "La desconexión y la desesperanza debilitan la vida cívica. Las personas se sienten ignoradas y abandonadas por las instituciones." },
    },
    about: {
      label: "Sobre Nosotros", heading: "Construyendo poder para los olvidados",
      body1: 'DAPH construye el poder de las personas con discapacidades y comunidades con pocos recursos en áreas urbanas, rurales y suburbanas para ganar cambios. Somos una coalición de organizadores de base unidos en el trabajo de construir un "nosotros" más grande.',
      body2: "Desde nuestra fundación, hemos ganado mejoras materiales para millones — incluyendo mayor acceso a atención médica, protecciones de vivienda accesible y programas de salud mental comunitaria más sólidos.",
      btn: "Conócenos Mejor",
    },
    campaigns: {
      label: "Cómo Luchamos", heading: "Nuestras Campañas",
      sub: "Estas son nuestras campañas principales que impulsan el cambio que buscamos.",
      card1: { title: "Derechos de Discapacidad Ya", body: "Luchando por la inclusión total, accesibilidad e igualdad de oportunidades para las personas con discapacidades." },
      card2: { title: "Salud para Todos", body: "Abogando por atención médica universal y asequible que no deje a nadie atrás." },
      card3: { title: "Justicia en la Vivienda", body: "Garantizando que la vivienda segura, accesible y asequible sea un derecho, no un privilegio." },
      card4: { title: "Bienestar Comunitario", body: "Construyendo recursos de salud mental, conexión social e infraestructura cívica." },
      view: "Ver Campaña →",
    },
    news: {
      label: "Cosas que no querrás perderte", heading: "Últimas Noticias",
      tag1: "Comunicado de Prensa", tag2: "Actualizaciones", tag3: "En Las Noticias",
      story1: { title: "DAPH Lanza Iniciativa Estatal de Auditoría de Accesibilidad", body: "Nuestro nuevo programa evaluará las brechas de accesibilidad en edificios públicos en 12 condados." },
      story2: { title: "Sesiones de Escucha Comunitaria Comienzan Esta Primavera", body: "Únase a nosotros mientras llevamos nuestro equipo a 10 vecindarios para escuchar directamente a los residentes." },
      story3: { title: "Miembros de DAPH Testifican ante el Concejo Municipal", body: "Los defensores llevaron poderosas historias personales al ayuntamiento, exigiendo el cumplimiento de los códigos de vivienda justa." },
      readMore: "Leer más →", viewAll: "Ver Todas las Actualizaciones",
    },
    cta: { heading: "¿Listo para hacer una diferencia?", sub: "Únete a miles de defensores trabajando hacia un mundo más justo y accesible.", join: "Únete", signUp: "Regístrate para Actualizaciones" },
    footer: {
      brand: "DAPH construye el poder de las personas con discapacidades y comunidades con pocos recursos para ganar cambios a través de campañas.",
      careers: "Empleos", projects: "Proyectos",
      copy: "©2026 DAPH — Defensa de la Discapacidad y Salud Pública",
      privacy: "Política de Privacidad", terms: "Términos", financials: "Finanzas",
    },
  },

  fr: {
    nav: {
      about: "À Propos", who: "Qui Sommes-Nous", history: "Notre Histoire",
      board: "Conseil d'Administration", contact: "Contact",
      work: "Notre Travail", programs: "Programmes", campaigns: "Campagnes", initiatives: "Initiatives",
      resources: "Ressources", updates: "Dernières Nouvelles", press: "Communiqués de Presse", reports: "Rapports",
      action: "Agir", volunteer: "Bénévolat", signup: "S'inscrire", donate: "Faire un Don",
    },
    hero: {
      eyebrow: "Défense du Handicap et Santé Publique",
      heading: "Ensemble, nous nous levons.",
      heading2: "Organisés, nous prospérons.",
      sub: "Nous invitons chaque individu, peu importe à quel point il se sent isolé ou impuissant, à faire partie d'un voyage transformateur vers l'équité et la justice.",
      btnWork: "Notre Travail", btnInvolved: "S'Impliquer",
    },
    crisis: {
      heading: "Nous faisons face à une triple crise",
      sub: "Les personnes à travers le pays font face à des défis composés qui demandent une action urgente et coordonnée de nos communautés.",
      card1: { title: "Inégalité en Santé", body: "Des millions n'ont pas accès à des soins de santé adéquats, surtout les personnes handicapées et les familles à faibles revenus." },
      card2: { title: "Insécurité du Logement", body: "La hausse des coûts et les barrières systémiques poussent les populations vulnérables hors de logements sûrs et accessibles." },
      card3: { title: "Isolement Social", body: "La déconnexion et le désespoir affaiblissent la vie civique. Les gens se sentent ignorés et abandonnés par les institutions." },
    },
    about: {
      label: "À Propos de Nous", heading: "Construire le pouvoir pour les oubliés",
      body1: "DAPH construit le pouvoir des personnes handicapées et des communautés sous-financées dans les zones urbaines, rurales et suburbaines pour gagner des changements. Nous sommes une coalition d'organisateurs de base.",
      body2: "Depuis notre fondation, nous avons obtenu des améliorations matérielles pour des millions — incluant un meilleur accès aux soins, des protections de logement accessible et des programmes de santé mentale communautaire.",
      btn: "En Savoir Plus",
    },
    campaigns: {
      label: "Comment Nous Combattons", heading: "Nos Campagnes",
      sub: "Voici nos campagnes principales qui font avancer le changement que nous visons.",
      card1: { title: "Droits au Handicap Maintenant", body: "Lutter pour l'inclusion totale, l'accessibilité et l'égalité des chances pour les personnes handicapées." },
      card2: { title: "Santé pour Tous", body: "Plaider pour des soins de santé universels et abordables qui ne laissent personne de côté." },
      card3: { title: "Justice du Logement", body: "Garantir que le logement sûr, accessible et abordable est un droit — pas un privilège." },
      card4: { title: "Bien-être Communautaire", body: "Construire des ressources en santé mentale, des liens sociaux et des infrastructures civiques." },
      view: "Voir la Campagne →",
    },
    news: {
      label: "Des choses à ne pas manquer", heading: "Dernières Nouvelles",
      tag1: "Communiqué de Presse", tag2: "Mises à Jour", tag3: "Dans les Médias",
      story1: { title: "DAPH Lance une Initiative d'Audit d'Accessibilité", body: "Notre nouveau programme évaluera les lacunes d'accessibilité dans les bâtiments publics de 12 comtés." },
      story2: { title: "Sessions d'Écoute Communautaire ce Printemps", body: "Rejoignez-nous dans 10 quartiers pour entendre directement les résidents sur leurs besoins les plus pressants." },
      story3: { title: "Membres de DAPH Témoignent devant le Conseil Municipal", body: "Des défenseurs ont apporté des témoignages puissants à l'hôtel de ville, exigeant l'application des codes de logement équitable." },
      readMore: "Lire la suite →", viewAll: "Voir Toutes les Nouvelles",
    },
    cta: { heading: "Prêt à faire une différence?", sub: "Rejoignez des milliers de défenseurs travaillant vers un monde plus juste et accessible.", join: "Nous Rejoindre", signUp: "S'inscrire aux Nouvelles" },
    footer: {
      brand: "DAPH construit le pouvoir des personnes handicapées et des communautés sous-financées pour gagner des changements à travers des campagnes.",
      careers: "Carrières", projects: "Projets",
      copy: "©2026 DAPH — Défense du Handicap et Santé Publique",
      privacy: "Politique de Confidentialité", terms: "Conditions", financials: "Finances",
    },
  },

  ht: {
    nav: {
      about: "Sou Nou", who: "Ki Nou Ye", history: "Istwa Nou",
      board: "Konsèy Administrasyon", contact: "Kontakte Nou",
      work: "Travay Nou", programs: "Pwogram", campaigns: "Kanpay", initiatives: "Inisyativ",
      resources: "Resous", updates: "Dènye Nouvèl", press: "Kominik Pou Laprès", reports: "Rapò",
      action: "Pran Aksyon", volunteer: "Volontè", signup: "Enskri", donate: "Fè don",
    },
    hero: {
      eyebrow: "Defans Andikap & Sante Piblik",
      heading: "Ansanm, nou leve.",
      heading2: "Òganize, nou pwospere.",
      sub: "Nou envite chak moun, kèlkeswa jan yo santi yo izole oswa san pouvwa, pou yo fè pati yon vwayaj transfòmatè vè ekite ak jistis.",
      btnWork: "Travay Nou", btnInvolved: "Patisipe",
    },
    crisis: {
      heading: "Nou fè fas a yon twa kriz",
      sub: "Moun atravè peyi a fè fas a defi konplèks ki mande aksyon ijan ak kowòdone nan kominote nou yo.",
      card1: { title: "Inegalite nan Sante", body: "Dè milyon moun pa gen aksè a swen sante adekwa, espesyalman moun andikape ak fanmi ki gen ti revni." },
      card2: { title: "Ensekurite Lojman", body: "Ogmantasyon pri ak baryè sistematik pouse popilasyon vilnerab yo deyò kay ki an sekirite ak aksesib." },
      card3: { title: "Izolasyon Sosyal", body: "Dekoneksyon ak dezespwa afebli vi sivik. Moun santi yo pa tande, pa wè, abandone pa enstitisyon ki ta dwe sèvi yo." },
    },
    about: {
      label: "Sou Nou", heading: "Konstwi pouvwa pou moun ki bliye",
      body1: 'DAPH konstwi pouvwa moun andikape ak kominote ki manke resous nan zòn iben, riral, ak sibèbèn pou genyen chanjman. Nou se yon koalisyon òganizatè baz ki ini nan travay konstwi yon "nou" ki pi gran.',
      body2: "Depi nou te fonde, nou te genyen amelyorasyon materyèl pou dè milyon moun — ki gen ladan pi bon aksè a swen sante, pwoteksyon lojman aksesib, ak pwogram sante mantal kominotè.",
      btn: "Aprann Plis Sou Nou",
    },
    campaigns: {
      label: "Kijan Nou Goumen", heading: "Kanpay Nou",
      sub: "Sa yo se kanpay prensipal nou yo ki pouse chanjman nou vize a.",
      card1: { title: "Dwa Andikap Kounye a", body: "Goumen pou enklizyon total, aksesibilite, ak egal opòtinite pou moun andikape." },
      card2: { title: "Swen Sante Pou Tout Moun", body: "Defann swen sante inivèsèl ak abòdab ki pa kite pèsòn dèyè." },
      card3: { title: "Jistis Lojman", body: "Asire lojman ki an sekirite, aksesib, ak abòdab se yon dwa — pa yon privilèj." },
      card4: { title: "Byennèt Kominotè", body: "Konstwi resous sante mantal, koneksyon sosyal, ak enfrastrikti sivik." },
      view: "Wè Kanpay →",
    },
    news: {
      label: "Bagay ou pa vle rate", heading: "Dènye Nouvèl",
      tag1: "Kominik Pou Laprès", tag2: "Mizajou", tag3: "Nan Nouvèl",
      story1: { title: "DAPH Lance Inisyativ Odi Aksesibilite Eta", body: "Nouvo pwogram nou an pral evalye mank aksesibilite nan bilding piblik nan 12 konte." },
      story2: { title: "Sesyon Koute Kominotè Kòmanse Prentan Sa a", body: "Rantre avèk nou pandan nou mennen ekip nou nan 10 katye pou tande dirèkteman rezidan yo." },
      story3: { title: "Manm DAPH Temwaye Devan Konsèy Minisipal", body: "Defansè yo te pote istwa pèsonèl pwisan nan mairie a, egzije aplike kòd lojman ki jis." },
      readMore: "Li plis →", viewAll: "Wè Tout Nouvèl",
    },
    cta: { heading: "Pare pou fè yon diferans?", sub: "Rantre nan dè milye defansè k ap travay vè yon mond ki pi jis ak aksesib.", join: "Rantre Avèk Nou", signUp: "Enskri pou Nouvèl" },
    footer: {
      brand: "DAPH konstwi pouvwa moun andikape ak kominote ki manke resous pou genyen chanjman atravè kanpay.",
      careers: "Djòb", projects: "Pwojè",
      copy: "©2026 DAPH — Defans Andikap & Sante Piblik",
      privacy: "Politik Konfidansyalite", terms: "Tèm", financials: "Finans",
    },
  },
};

// ─────────────────────────────────────────────────────────────
// TRANSLATION ENGINE
// ─────────────────────────────────────────────────────────────
const LANG_LABELS = { en: 'EN', es: 'ES', fr: 'FR', ht: 'HT' };

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value) el.textContent = value;
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update the current language label in the button
  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = LANG_LABELS[lang];

  // Update active state in dropdown
  document.querySelectorAll('#langDropdown button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Persist choice
  localStorage.setItem('daph-lang', lang);
}

// ─────────────────────────────────────────────────────────────
// DOM READY
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ── Apply saved or browser language on load ──────────────────
  const saved = localStorage.getItem('daph-lang');
  const browserLang = navigator.language.slice(0, 2);
  const supported = Object.keys(translations);
  const initialLang = supported.includes(saved) ? saved
                    : supported.includes(browserLang) ? browserLang
                    : 'en';
  applyLanguage(initialLang);

  // ── Language Switcher toggle ──────────────────────────────────
  const langSwitcher = document.getElementById('langSwitcher');
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
  });

  langDropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
      langSwitcher.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('open');
    }
  });

  // ── Sticky Navbar ─────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Hamburger / Mobile Menu ───────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('mainNav');
  const navCta    = document.querySelector('.navbar__cta');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mainNav.classList.toggle('open', isOpen);
    if (navCta) navCta.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
      if (navCta) navCta.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (hamburger.classList.contains('open') && !mainNav.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
      if (navCta) navCta.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ── Mobile: tap to toggle dropdowns ──────────────────────────
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.querySelector(':scope > a').addEventListener('click', (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('open'));
        item.classList.toggle('open', !wasOpen);
      }
    });
  });

  // ── Scroll Reveal ─────────────────────────────────────────────
  const revealEls = document.querySelectorAll(
    '.crisis__card, .campaign-card, .news-card, .about__text, .about__image, .cta-band__inner > *'
  );

  const revealStyle = document.createElement('style');
  revealStyle.textContent = `
    .crisis__card, .campaign-card, .news-card,
    .about__text, .about__image, .cta-band__inner > * {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .revealed { opacity: 1 !important; transform: translateY(0) !important; }
  `;
  document.head.appendChild(revealStyle);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        entry.target.style.transitionDelay = `${siblings.indexOf(entry.target) * 80}ms`;
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  // ── Active Nav Link on Scroll ─────────────────────────────────
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('.nav-item > a').forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--color-text)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

});
