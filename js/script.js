/* ========================================
   BEIRA MAR PRAIA HOTEL — JavaScript
   Versão: 1.0
   ======================================== */

'use strict';

/* ----------------------------------------
   CONFIGURAÇÕES — edite aqui
   ---------------------------------------- */
const CONFIG = {
  whatsapp:   '5573998400500',   // 55 + DDD + número (sem traços/parênteses)
  whatsappMsg: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20hotel.',
  phone:      '(73) 3018-4492',
  email:      'reservas@beiramarpraiahotel.com.br',
  slideInterval: 5000,           // intervalo do slideshow em ms
  omnibeesId: '18760',           // ID do hotel no motor de reservas Omnibees
};

/* ----------------------------------------
   TRADUÇÕES — pt (padrão) / en / es
   ---------------------------------------- */
const I18N = {
  pt: {
    capacidade_template: 'Capacidade: {n} pessoas',
  },
  en: {
    phone: 'Phone: +55 73 3018-4492',
    nav_reserve: 'Book Now',
    nav_hotel: 'The Hotel',
    nav_acomodacoes: 'Accommodations',
    nav_fotos: 'Photos',
    nav_contato: 'Contact',
    nav_localizacao: 'Location',
    booking_label_html: 'ONLINE<br>BOOKING',
    booking_checkin: 'Check-in',
    booking_checkout: 'Check-out',
    booking_adultos: 'Adults',
    booking_criancas: 'Children',
    booking_pesquisar: 'Search',
    footer_faleconosco: 'Contact Us',
    footer_cartoes: 'Pay with Cards',
    footer_seguro: '100% secure payment',
    footer_protegidos: 'Protected data',
    footer_desc: 'Located on the stunning Taperapuan Beach, in Porto Seguro, Bahia. Where the ocean is our backyard!',
    footer_hours_html: 'Check-in: 1 PM &nbsp;|&nbsp; Check-out: 11 AM',
    footer_credit: 'Developed by',
    footer_rights: '© 2026 Beira Mar Praia Hotel. All rights reserved.',
    wa_tip: 'Get your quote',

    slide_title: 'Where the Ocean is Our Backyard',
    slide_cta: 'View Accommodations',
    sobre_title: 'Beira Mar Praia Hotel will surprise you! Come in and feel at home.',
    sobre_p1: 'Combining excellent facilities and service, we offer 24-hour reception, breakfast included every day, and daily room service.',
    sobre_p2: "The facilities are new and comfortable, featuring pools (adult and children's), a mini playground, a pool table, wi-fi internet access, and private parking.",
    feature_recepcao: '24-hour reception',
    feature_cafe: 'Breakfast Included',
    feature_piscina: 'Adult & Kids Pool',
    feature_wifi: 'Free Wi-Fi',
    feature_estacionamento: 'Private Parking',
    feature_praia: 'Beach Access',
    feature_ev: 'Electric Car Charger',
    sobre_cta: 'Discover the Hotel',
    acomodacoes_title: 'Our Accommodations',
    acomodacoes_subtitle: 'Discover beachfront tranquility',
    acc1_name: 'Luxury Suite',
    acc1_desc: 'Queen box bed, mini fridge, split air conditioning, 32" Smart TV, and private bathroom.',
    tag_ar: 'Air conditioning',
    tag_tvsmart: 'Smart TV',
    tag_frigobar: 'Mini fridge',
    acc_verdetalhes: 'View Details',
    acc_reservar: 'Book',
    vertodas: 'View All Accommodations',

    chamada_hotel_title: 'Where the ocean is our backyard!',
    chamada_hotel_subtitle: "You'll love our hotel",
    hotel_desc_text: 'Combining excellent facilities and service, we offer 24-hour reception, breakfast included every day, and the option to add half-board (lunch or dinner) to your stay — for more information, contact our WhatsApp service.',
    hotel_desc_text2: 'The facilities are new and comfortable, featuring pools (adult and children\'s, with water toys), a mini playground, a pool table, wi-fi internet access, private parking, and an electric car charger.',
    acomodacoes_section_title: 'ACCOMMODATIONS',
    accH_desc: 'Queen box bed, mini fridge, split air conditioning, 32" Smart TV, and private bathroom.',
    tag_banheiro: 'Private bathroom',
    maisdetalhes: 'More details →',
    reservaragora: 'Book Now',
    conheca_acomodacoes: 'Discover the Accommodations',

    acom_chamada_subtitle: 'Our accommodations were designed to offer maximum comfort and style, providing you with a memorable beachfront stay.',
    acc_luxo_desc: 'Queen box bed, mini fridge, split air conditioning, 32" Smart TV, and private bathroom. Spacious and elegant environment.',
    capacidade_template: 'Capacity: {n} guests',

    fotos_chamada_title: 'See what awaits you',
    fotos_chamada_subtitle: 'You and your family will enjoy all of this!',
    memorias_title: 'Made to create unforgettable memories.',
    memorias_text: 'Beira Mar Praia Hotel has an adult pool and a children\'s pool with a waterfall, a pool table, and a large green area. Enjoy the serenity of this place while savoring a refreshing drink by the pool.',
    solicite_cotacao: 'Request a quote today',

    contact_intro_html: "Contact us, we'll be<br>delighted to assist you.",
    form_title: 'Contact us',
    form_nome: 'Name',
    form_email: 'Email',
    form_mensagem: 'Message',
    form_enviar: 'Send',
    contact_telefone_label: 'Phone:',
    contact_email_label: 'Email:',
  },
  es: {
    phone: 'Tel: +55 73 3018-4492',
    nav_reserve: 'Reserva Ya',
    nav_hotel: 'El Hotel',
    nav_acomodacoes: 'Alojamientos',
    nav_fotos: 'Fotos',
    nav_contato: 'Contacto',
    nav_localizacao: 'Ubicación',
    booking_label_html: 'RESERVA<br>ONLINE',
    booking_checkin: 'Entrada',
    booking_checkout: 'Salida',
    booking_adultos: 'Adultos',
    booking_criancas: 'Niños',
    booking_pesquisar: 'Buscar',
    footer_faleconosco: 'Contáctenos',
    footer_cartoes: 'Pague con Tarjetas',
    footer_seguro: 'Pago 100% seguro',
    footer_protegidos: 'Datos protegidos',
    footer_desc: 'Ubicado en la deslumbrante Playa de Taperapuan, en Porto Seguro, Bahía. ¡Donde el océano es nuestro patio trasero!',
    footer_hours_html: 'Entrada: 13h &nbsp;|&nbsp; Salida: 11h',
    footer_credit: 'Desarrollado por',
    footer_rights: '© 2026 Beira Mar Praia Hotel. Todos los derechos reservados.',
    wa_tip: 'Solicite su cotización',

    slide_title: 'Donde el Océano es Nuestro Patio Trasero',
    slide_cta: 'Ver Alojamientos',
    sobre_title: '¡El Beira Mar Praia Hotel te sorprenderá! Entra y siéntete como en casa.',
    sobre_p1: 'Combinando excelente estructura y servicio, contamos con recepción las 24 horas, desayuno incluido todos los días y servicio a la habitación diario.',
    sobre_p2: 'Las instalaciones son nuevas y cómodas, con piscinas (para adultos y niños), mini parque infantil, mesa de billar, acceso a internet wi-fi y estacionamiento privado.',
    feature_recepcao: 'Recepción 24 horas',
    feature_cafe: 'Desayuno Incluido',
    feature_piscina: 'Piscina para Adultos y Niños',
    feature_wifi: 'Wi-Fi Gratis',
    feature_estacionamento: 'Estacionamiento Privado',
    feature_praia: 'Acceso a la Playa',
    feature_ev: 'Cargador para Auto Eléctrico',
    sobre_cta: 'Conoce el Hotel',
    acomodacoes_title: 'Nuestros Alojamientos',
    acomodacoes_subtitle: 'Descubre la tranquilidad junto al mar',
    acc1_name: 'Suite de Lujo',
    acc1_desc: 'Cama Box de pareja, frigobar, aire acondicionado split, TV Smart de 32" y baño privado.',
    tag_ar: 'Aire acondicionado',
    tag_tvsmart: 'TV Smart',
    tag_frigobar: 'Frigobar',
    acc_verdetalhes: 'Ver Detalles',
    acc_reservar: 'Reservar',
    vertodas: 'Ver Todos los Alojamientos',

    chamada_hotel_title: '¡Donde el océano es nuestro patio trasero!',
    chamada_hotel_subtitle: 'Te va a encantar nuestro hotel',
    hotel_desc_text: 'Combinando excelente estructura y servicio, contamos con recepción las 24 horas, desayuno incluido todos los días y la opción de agregar media pensión (almuerzo o cena) a su estadía — más información a través de nuestra central de atención por WhatsApp.',
    hotel_desc_text2: 'Las instalaciones son nuevas y cómodas, con piscinas (para adultos y niños, con juguetes acuáticos), mini parque infantil, mesa de billar, acceso a internet wi-fi, estacionamiento privado y cargador para auto eléctrico.',
    acomodacoes_section_title: 'ALOJAMIENTOS',
    accH_desc: 'Cama Box, frigobar, aire acondicionado split, TV Smart de 32" y baño privado.',
    tag_banheiro: 'Baño privado',
    maisdetalhes: 'Más detalles →',
    reservaragora: 'Reservar Ahora',
    conheca_acomodacoes: 'Conoce los Alojamientos',

    acom_chamada_subtitle: 'Nuestros alojamientos fueron diseñados para ofrecer el máximo confort y estilo, brindándote una estadía memorable junto al mar.',
    acc_luxo_desc: 'Cama Box de pareja, frigobar, aire acondicionado split, TV Smart de 32" y baño privado. Ambiente amplio y elegante.',
    capacidade_template: 'Capacidad: {n} personas',

    fotos_chamada_title: 'Mira lo que te espera',
    fotos_chamada_subtitle: '¡Tú y tu familia disfrutarán de todo esto!',
    memorias_title: 'Hecho para crear recuerdos inolvidables.',
    memorias_text: 'El Beira Mar Praia Hotel cuenta con piscina para adultos y piscina infantil con cascada, mesa de billar y amplia área verde. Disfruta de la serenidad de este lugar mientras saboreas una bebida refrescante junto a la piscina.',
    solicite_cotacao: 'Solicite hoy mismo una cotización',

    contact_intro_html: 'Contáctanos, será un<br>placer atenderte.',
    form_title: 'Contáctanos',
    form_nome: 'Nombre',
    form_email: 'Correo electrónico',
    form_mensagem: 'Mensaje',
    form_enviar: 'Enviar',
    contact_telefone_label: 'Teléfono:',
    contact_email_label: 'Correo:',
  },
};

let currentLang = localStorage.getItem('bm_lang') || 'pt';

function applyI18n(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'es' ? 'es' : 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const dict = I18N[lang];
    if (dict && dict[key]) el.textContent = dict[key];
    else if (el.dataset.i18nOrig) el.textContent = el.dataset.i18nOrig;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const dict = I18N[lang];
    if (dict && dict[key]) el.innerHTML = dict[key];
    else if (el.dataset.i18nOrig) el.innerHTML = el.dataset.i18nOrig;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const dict = I18N[lang];
    if (dict && dict[key]) el.setAttribute('placeholder', dict[key]);
    else if (el.dataset.i18nOrig) el.setAttribute('placeholder', el.dataset.i18nOrig);
  });

  // Templates com {n} — ex: "Capacidade: {n} pessoas"
  document.querySelectorAll('[data-i18n-template]').forEach(el => {
    const key = el.getAttribute('data-i18n-template');
    const n = el.getAttribute('data-n') || '';
    const dict = I18N[lang];
    const template = (dict && dict[key]) || I18N.pt?.[key];
    if (template) el.textContent = template.replace('{n}', n);
  });

  document.querySelectorAll('a[data-lang]').forEach(a => {
    a.classList.toggle('active', a.dataset.lang === lang);
  });

  localStorage.setItem('bm_lang', lang);
}

function initI18n() {
  // Guarda o texto original em pt antes da primeira troca
  document.querySelectorAll('[data-i18n]').forEach(el => { el.dataset.i18nOrig = el.textContent; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.dataset.i18nOrig = el.innerHTML; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.dataset.i18nOrig = el.getAttribute('placeholder'); });

  document.querySelectorAll('a[data-lang]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      applyI18n(a.dataset.lang);
    });
  });

  applyI18n(currentLang);
}

/* ----------------------------------------
   DOM PRONTO
   ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  setActivePage();
  initHamburger();
  initReserveToggle();
  initBookingDates();
  initBookingButtons();
  initSlideshow();
  initGallery();
  initReveal();
  initAcomodacoes();
  initWAButton();
  initContactForm();
  initI18n();
});

/* ========================================
   CABEÇALHO — efeito scroll + altura real
   ======================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial

  // Mede a altura real do cabeçalho (varia por página/breakpoint) e expõe
  // como variável CSS, para o hero interno reservar exatamente o espaço certo.
  const syncHeaderVars = () => {
    document.documentElement.style.setProperty('--header-total', `${header.offsetHeight}px`);
  };
  syncHeaderVars();
  window.addEventListener('resize', syncHeaderVars);
  document.fonts?.ready.then(syncHeaderVars);
}

/* ----------------------------------------
   Marca o link ativo conforme a página atual
   ---------------------------------------- */
function setActivePage() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });
}

/* ========================================
   MENU HAMBURGUER (mobile)
   ======================================== */
function initHamburger() {
  const btn  = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;

  const toggle = () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', open);
    if (open) closeReserveToggle(); // não deixa os dois painéis abertos ao mesmo tempo
    document.body.style.overflow = open ? 'hidden' : '';
  };

  btn.addEventListener('click', toggle);

  // Fecha ao clicar fora
  document.addEventListener('click', e => {
    if (menu.classList.contains('open') && !btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    }
  });

  // Fecha ao clicar num link
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ========================================
   ÍCONE DE RESERVA (mobile) — abre a barra de reserva
   ======================================== */
function closeReserveToggle() {
  const bar = document.querySelector('.booking-bar');
  const btn = document.querySelector('.reserve-toggle');
  bar?.classList.remove('open');
  btn?.classList.remove('active');
  btn?.setAttribute('aria-expanded', false);
}

function initReserveToggle() {
  const btn = document.querySelector('.reserve-toggle');
  const bar = document.querySelector('.booking-bar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (!btn || !bar) return;

  const toggle = () => {
    const open = bar.classList.toggle('open');
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', open);
    if (open) { // não deixa os dois painéis abertos ao mesmo tempo
      navMenu?.classList.remove('open');
      hamburger?.classList.remove('active');
      hamburger?.setAttribute('aria-expanded', false);
    }
    document.body.style.overflow = open ? 'hidden' : '';
  };

  btn.addEventListener('click', toggle);

  // Fecha ao clicar fora
  document.addEventListener('click', e => {
    if (bar.classList.contains('open') && !btn.contains(e.target) && !bar.contains(e.target)) {
      closeReserveToggle();
      document.body.style.overflow = '';
    }
  });
}

/* ========================================
   FORMULÁRIO DE RESERVA — datas
   ======================================== */
function initBookingDates() {
  const fmt = d => d.toISOString().split('T')[0];

  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Aplica valores padrão em todos os formulários de reserva da página
  document.querySelectorAll('.booking-checkin').forEach(el => {
    el.value = fmt(today);
    el.min   = fmt(today);
    el.addEventListener('change', () => {
      const nextDay = new Date(el.value);
      nextDay.setDate(nextDay.getDate() + 1);
      document.querySelectorAll('.booking-checkout').forEach(co => {
        co.min = fmt(nextDay);
        if (!co.value || co.value <= el.value) co.value = fmt(nextDay);
      });
    });
  });

  document.querySelectorAll('.booking-checkout').forEach(el => {
    el.value = fmt(tomorrow);
    el.min   = fmt(tomorrow);
  });
}

/* ----------------------------------------
   Botão Pesquisar — gera o link do Omnibees com as datas/hóspedes escolhidos
   ---------------------------------------- */
function initBookingButtons() {
  // YYYY-MM-DD (valor nativo do <input type="date">) -> DDMMYYYY (formato do Omnibees)
  const toOmnibeesDate = iso => iso.split('-').reverse().join('');

  // Delegação de evento no document: funciona também para botões criados
  // depois pelo JS (ex: card de acomodações em acomodacoes.html), não só
  // os que já existem no HTML quando a página carrega.
  document.addEventListener('click', e => {
    const searchBtn = e.target.closest('.btn-search');
    if (searchBtn) {
      e.preventDefault();

      const bar = searchBtn.closest('.booking-bar');
      const checkin  = bar?.querySelector('.booking-checkin')?.value;
      const checkout = bar?.querySelector('.booking-checkout')?.value;
      const adults   = bar?.querySelector('.booking-adults')?.value || '2';
      const children = bar?.querySelector('.booking-children')?.value || '0';

      if (!checkin || !checkout) {
        showToast('⚠️ Selecione as datas de check-in e check-out.');
        return;
      }

      const url = `https://book.omnibees.com/hotelresults`
        + `?q=${CONFIG.omnibeesId}`
        + `&lang=pt-PT`
        + `&CheckIn=${toOmnibeesDate(checkin)}`
        + `&CheckOut=${toOmnibeesDate(checkout)}`
        + `&ad=${adults}`
        + `&ch=${children}`
        + `&ag=`;

      window.open(url, '_blank', 'noopener');
      return;
    }

    // "Reserve Já", "Reservar" e "Reservar Agora" — leva direto para a
    // página do hotel no Omnibees.
    const reserveBtn = e.target.closest('.btn-reserve, [data-reserva]');
    if (reserveBtn) {
      e.preventDefault();
      window.open(`https://book.omnibees.com/hotel/${CONFIG.omnibeesId}`, '_blank', 'noopener');
    }
  });
}

/* ========================================
   SLIDESHOW PRINCIPAL (index.html)
   ======================================== */
function initSlideshow() {
  const slides  = document.querySelectorAll('.slide');
  const dots    = document.querySelectorAll('.ss-dot');
  const prevBtn = document.querySelector('.ss-btn.prev');
  const nextBtn = document.querySelector('.ss-btn.next');
  const wrap    = document.querySelector('.slideshow-section');

  if (!slides.length) return;

  let current  = 0;
  let timer    = null;

  function go(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');

    current = ((idx % slides.length) + slides.length) % slides.length;

    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function start() { timer = setInterval(() => go(current + 1), CONFIG.slideInterval); }
  function reset()  { clearInterval(timer); start(); }

  prevBtn?.addEventListener('click', () => { go(current - 1); reset(); });
  nextBtn?.addEventListener('click', () => { go(current + 1); reset(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); reset(); }));

  // Swipe em touch
  if (wrap) {
    let tx = 0;
    wrap.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener('touchend',   e => {
      const dx = tx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 45) { go(dx > 0 ? current + 1 : current - 1); reset(); }
    }, { passive: true });
  }

  // Pausa ao hover (desktop)
  wrap?.addEventListener('mouseenter', () => clearInterval(timer));
  wrap?.addEventListener('mouseleave', start);

  go(0);
  start();
}

/* ========================================
   GALERIA CAROUSEL (hotel.html)
   ======================================== */
function initGallery() {
  const track   = document.querySelector('.gallery-track');
  const items   = document.querySelectorAll('.gallery-item');
  const prevBtn = document.querySelector('.gal-btn.prev');
  const nextBtn = document.querySelector('.gal-btn.next');
  const dots    = document.querySelectorAll('.gal-dot');
  const thumbs  = document.querySelectorAll('.gal-thumb');

  if (!track || !items.length) return;

  let cur = 0;

  function go(idx) {
    cur = ((idx % items.length) + items.length) % items.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i)  => d.classList.toggle('active',  i === cur));
    thumbs.forEach((t, i) => t.classList.toggle('active', i === cur));
  }

  prevBtn?.addEventListener('click', () => go(cur - 1));
  nextBtn?.addEventListener('click', () => go(cur + 1));
  dots.forEach((d, i)  => d.addEventListener('click',  () => go(i)));
  thumbs.forEach((t, i) => t.addEventListener('click', () => go(i)));

  // Auto-play
  setInterval(() => go(cur + 1), 4000);
  go(0);
}

/* ========================================
   ANIMAÇÕES DE REVEAL (scroll)
   ======================================== */
function initReveal() {
  observeReveal();
}

function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ========================================
   ACOMODAÇÕES (acomodacoes.html)
   ======================================== */
function initAcomodacoes() {
  const grid = document.getElementById('acomodacoes-lista');
  if (!grid) return;

  // Dataset — gerenciamento completo (adicionar/remover) fica para a futura página de admin
  const dataset = [
    {
      id: 1,
      nome: 'Suíte Luxo',
      tipo: 'Suíte Luxo',
      descricao: 'Cama Box casal, Frigobar, Ar Condicionado Split, TV Smart 32" e banheiro privativo. Ambiente espaçoso e elegante.',
      capacidade: 4,
      features: ['Ar-condicionado', 'TV Smart', 'Frigobar', 'Banheiro privativo'],
      img: 'images/acomodacoes/2.jpg',
    },
  ];

  function renderCards() {
    grid.innerHTML = dataset.map(a => `
      <article class="acc-card reveal" data-id="${a.id}">
        <div class="acc-img">
          <img src="${a.img}" alt="${a.nome}"
               onerror="this.style.display='none'">
          <span class="acc-badge" data-i18n="acc1_name">${a.tipo}</span>
        </div>
        <div class="acc-body">
          <h3 data-i18n="acc1_name">${a.nome}</h3>
          <p data-i18n="acc_luxo_desc">${a.descricao}</p>
          <div class="acc-tags">
            ${a.features.map(f => `<span class="acc-tag"><i class="fas ${featureIcon(f)}"></i><span data-i18n="${featureI18nKey(f)}">${f}</span></span>`).join('')}
          </div>
          <p class="acc-cap" style="font-size:.8rem;color:var(--gray-light);margin-bottom:.85rem">
            <i class="fas fa-users" style="color:var(--gold-vivid);margin-right:4px"></i>
            <span data-i18n-template="capacidade_template" data-n="${a.capacidade}">Capacidade: ${a.capacidade} pessoa${a.capacidade > 1 ? 's' : ''}</span>
          </p>
          <div class="acc-actions">
            <button class="btn btn-primary" data-reserva data-i18n="reservaragora">Reservar Agora</button>
          </div>
        </div>
      </article>
    `).join('') || '<p style="grid-column:1/-1;text-align:center;color:var(--gray)">Nenhuma acomodação cadastrada ainda.</p>';

    observeReveal(); // anima os novos cards
    if (typeof applyI18n === 'function') applyI18n(currentLang); // traduz os cards recém-renderizados
  }

  function featureIcon(name) {
    const map = {
      'ar-condicionado': 'fa-snowflake', 'tv smart': 'fa-tv', 'tv': 'fa-tv',
      'frigobar': 'fa-wine-bottle', 'wi-fi': 'fa-wifi', 'wifi': 'fa-wifi',
      'varanda': 'fa-door-open', 'banheiro privativo': 'fa-bath',
      'piscina': 'fa-swimming-pool', 'café da manhã': 'fa-coffee', 'café': 'fa-coffee',
    };
    return map[name.toLowerCase()] || 'fa-check-circle';
  }

  function featureI18nKey(name) {
    const map = {
      'ar-condicionado': 'tag_ar', 'tv smart': 'tag_tvsmart', 'tv': 'tag_tv',
      'frigobar': 'tag_frigobar', 'wi-fi': 'tag_wifi', 'wifi': 'tag_wifi',
      'varanda': 'tag_varanda', 'banheiro privativo': 'tag_banheiro',
    };
    return map[name.toLowerCase()] || '';
  }

  renderCards();
}

/* ========================================
   BOTÃO WHATSAPP — link dinâmico
   ======================================== */
function initWAButton() {
  document.querySelectorAll('.wa-btn').forEach(el => {
    el.setAttribute('href', `https://wa.me/${CONFIG.whatsapp}?text=${CONFIG.whatsappMsg}`);
  });
}

/* ========================================
   FORMULÁRIO DE CONTATO (contato.html)
   ======================================== */
function initContactForm() {
  const form = document.getElementById('form-contato');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome     = form.querySelector('#c-nome').value.trim();
    const email    = form.querySelector('#c-email').value.trim();
    const whats    = form.querySelector('#c-whatsapp').value.trim();
    const mensagem = form.querySelector('#c-mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      showToast('⚠️ Preencha nome, e-mail e mensagem.');
      return;
    }

    const assunto = encodeURIComponent(`Contato pelo site — ${nome}`);
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nWhatsapp: ${whats || 'não informado'}\n\nMensagem:\n${mensagem}`
    );

    window.location.href = `mailto:${CONFIG.email}?subject=${assunto}&body=${corpo}`;
    showToast('📧 Abrindo seu aplicativo de e-mail para enviar a mensagem...');
  });
}

/* ========================================
   TOAST — notificação não invasiva
   ======================================== */
window.showToast = function(msg, duration = 4500) {
  document.querySelectorAll('.toast').forEach(t => t.remove()); // limpa toast anterior

  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);

  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 450); }, duration);
};
