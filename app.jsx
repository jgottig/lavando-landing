/* global React, ReactDOM */
const { useState, useEffect, createContext, useContext } = React;

// ===== TRANSLATIONS =====
const T = {
  es: {
    nav: { how: 'Cómo funciona', pricing: 'Tarifas', location: 'Ubicación', franchise: 'Franquicia' },
    hero: {
      eyebrow: '◉ Lavandería automática · Rosario · 24 hs',
      line1pre: 'Tu ropa,', line1hi: 'limpia',
      line2pre: 'en', line2hi: 'minutos',
      line3: 'Sin vueltas.',
      lede: 'Vení cuando quieras, pagás con tarjeta o MercadoPago y tu ropa queda lista en minutos. Lavado y secado en pleno centro de Rosario.',
      cta1: 'Ver tarifas', cta2: 'Cómo funciona',
    },
    marquee: ['ABIERTO 24/7','★','PAGO DIGITAL','★','ROSARIO CENTRO','★','LAVADO RÁPIDO','★','WI-FI','★','MÁQUINAS INDUSTRIALES','★','DETERGENTE INCLUIDO','★'],
    como: {
      eyebrow: '◉ EN 3 PASOS · SIN VUELTAS',
      h2a: 'Tan fácil como', h2b: 'poner una', h2c: 'moneda.', h2d: 'Pero sin moneda.',
      p: 'Sin fila, sin efectivo, sin espera. Vos decidís cuándo venir.',
      s1t: 'Elegís el servicio', s1p: 'Elegís lavado o secado, pagás con MercadoPago o tarjeta y te damos el código para arrancar al instante.',
      s2t: 'Cargás el lavarropas', s2p: 'Venís al local, ponés la ropa, ingresás tu código y la máquina arranca sola. Detergente y suavizante incluidos.',
      s3t: 'Relajate', s3p: 'En minutos tu ropa queda lista. Aire acondicionado y espacio cómodo disponible.',
    },
    tarifas: {
      eyebrow: '◉ PRECIOS CLAROS · SIN SORPRESAS',
      h2: 'Tarifas que se entienden.', p: 'Pagás por máquina, no por kilo. Detergente y suavizante siempre incluidos.',
      t1tag: 'Solo lavado', t1h: 'Lavarropas', t1li: ['Programa','Por Canastos','Detergente incluido'],
      t2tag: '★ El más elegido', t2h: 'Lavado + secado', t2li: ['Lavado','Secado completo','Detergente y suavizante'],
    },
    pausa: {
      eyebrow: '◉ MIENTRAS TANTO',
      h3a: 'No es solo', h3b: 'lavandería.', h3c: 'Es', h3d: 'tu pausa',
      p: 'Ese rato es tuyo. Relajate, respondé mensajes, leé un rato. Cuando tu ropa esté lista, te avisamos.',
      amenity: 'Aire acondicionado',
      photoLabel: 'FOTO · LAVANDERÍA',
    },
    ubi: {
      eyebrow: '◉ EN PLENO ROSARIO', h2a: 'Estamos a la vuelta', h2b: 'de tu casa.',
      liveTag: 'EN VIVO · CENTRO', corner: 'ZEBALLOS 1530 · CENTRO',
      h3a: 'Lavando', h3b: 'Rosario Centro',
      dirLbl: 'Dirección', dirVal1: 'Zeballos 1530', dirVal2: 'Rosario, Santa Fe',
      hoursLbl: 'Horario', hoursVal: '24 horas', hoursSub: 'Todos los días del año',
      wsLbl: 'Whatsapp', wsVal: '+54 341 274-5374', btn: 'Cómo llegar →',
    },
    faq: {
      eyebrow: '◉ DUDAS FRECUENTES', h2a: 'Todo lo que querés', h2b: 'saber.',
      items: [
        { q: '¿Tengo que llevar detergente?', a: 'No. El detergente, suavizante y todo lo necesario está incluido en el precio.' },
        { q: '¿Cuánta ropa entra en una máquina?', a: 'La cantidad es por Canastos, para obtener un lavado preciso' },
        { q: '¿Y si no estoy cuando termina el lavado?', a: 'La ropa queda dentro hasta que vos vengas. Nadie la toca.' },
        { q: '¿Cómo pago?', a: 'Con MercadoPago, tarjeta de crédito, débito o billeteras virtuales. Todo digital, no aceptamos efectivo.' },
        { q: '¿Puedo lavar zapatillas o acolchados?', a: 'Sí. Las máquinas son industriales y soportan acolchados, mantas, almohadones, etc.' },
        { q: '¿Tienen servicio a domicilio?', a: 'No por el momento, estamos evaluando incorporarlo a futuro.' },
      ],
    },
    franquicia: {
      eyebrow: '◉ OPORTUNIDAD DE NEGOCIO',
      h2a: 'Sumá Lavando', h2b: 'a tu ciudad.',
      p: 'Lavando es una lavandería automática self-service que funciona 24/7 sin personal fijo. Máquinas industriales, pago digital y un modelo probado que ya está en marcha en Rosario.',
      cards: [
        { stat: '24/7', title: 'Sin personal', desc: 'El local opera solo, sin empleados en turno.' },
        { stat: '100%', title: 'Pago digital', desc: 'Sin manejo de efectivo ni cajas registradoras.' },
        { stat: '✓', title: 'Modelo probado', desc: 'Tecnología, marca y soporte desde el primer día.' },
      ],
      btn: '💬 Contactanos para más información',
    },
    footer: {
      eyebrow: '◉ LAVANDO · ROSARIO', d1: 'Tu ropa,', d2: 'limpia', d3: 'en minutos.',
      p: 'Lavandería automática 24 horas en pleno centro de Rosario. Máquinas que funcionan siempre.',
      c1t: 'Servicios', c1: ['Lavado','Secado','Acolchados','Domicilio'],
      c2t: 'Ubicación', c2: ['Zeballos 1530','Rosario, Santa Fe','Abierto 24/7','Cómo llegar'],
      c3t: 'Seguinos', c3: ['@lavando.ar','instagram.com/lavando.ar','www.lavando.ar','+54 341 274-5374'],
      copy: '© 2026 LAVANDO · TODOS LOS DERECHOS RESERVADOS', made: 'HECHO EN ROSARIO ◆ ARGENTINA',
    },
  },
  pt: {
    nav: { how: 'Como funciona', pricing: 'Preços', location: 'Localização', franchise: 'Franquia' },
    hero: {
      eyebrow: '◉ Lavanderia automática · Rosario · 24 h',
      line1pre: 'Sua roupa,', line1hi: 'limpa',
      line2pre: 'em', line2hi: 'minutos',
      line3: 'Simples assim.',
      lede: 'Venha quando quiser, pague com cartão ou Pix e sua roupa fica pronta em minutos. Lavagem e secagem no centro de Rosario.',
      cta1: 'Ver preços', cta2: 'Como funciona',
    },
    marquee: ['ABERTO 24/7','★','PAGAMENTO DIGITAL','★','ROSARIO CENTRO','★','LAVAGEM RÁPIDA','★','WI-FI','★','MÁQUINAS INDUSTRIALES','★','DETERGENTE INCLUÍDO','★'],
    como: {
      eyebrow: '◉ EM 3 PASSOS · SEM COMPLICAÇÃO',
      h2a: 'Simples como', h2b: 'colocar uma', h2c: 'moeda.', h2d: 'Mas sem moeda.',
      p: 'Sem fila, sem dinheiro, sem esperar. Você decide quando vir.',
      s1t: 'Escolhe o serviço', s1p: 'Escolhe lavagem ou secagem, paga com cartão ou Pix e recebe o código para começar na hora.',
      s2t: 'Carrega a máquina', s2p: 'Vai ao local, coloca a roupa, insere o código e a máquina começa sozinha. Sabão e amaciante incluídos.',
      s3t: 'Relaxa', s3p: 'Em minutos sua roupa fica pronta. Ar-condicionado e espaço confortável disponível.',
    },
    tarifas: {
      eyebrow: '◉ PREÇOS CLAROS · SEM SURPRESAS',
      h2: 'Preços que se entendem.', p: 'Paga por máquina, não por quilo. Sabão e amaciante sempre incluídos.',
      t1tag: 'Só lavagem', t1h: 'Lavarroupas', t1li: ['Programa HE','Até 8 quilos','Sabão incluído'],
      t2tag: '★ O mais escolhido', t2h: 'Lavagem + secagem', t2li: ['Lavagem HE','Secagem completa','Sabão e amaciante'],
    },
    pausa: {
      eyebrow: '◉ ENQUANTO ISSO',
      h3a: 'Não é só', h3b: 'lavanderia.', h3c: 'É', h3d: 'sua pausa',
      p: 'Esse tempo é seu. Relaxa, responde mensagens, lê um pouco. Quando sua roupa estiver pronta, te avisamos.',
      amenity: 'Ar-condicionado',
      photoLabel: 'FOTO · LAVANDERIA',
    },
    ubi: {
      eyebrow: '◉ NO CENTRO DE ROSARIO', h2a: 'Estamos pertinho', h2b: 'de você.',
      liveTag: 'AO VIVO · CENTRO', corner: 'ZEBALLOS 1530 · CENTRO',
      h3a: 'Lavando', h3b: 'Rosario Centro',
      dirLbl: 'Endereço', dirVal1: 'Zeballos 1530', dirVal2: 'Rosario, Santa Fe',
      hoursLbl: 'Horário', hoursVal: '24 horas', hoursSub: 'Todos os dias do ano',
      wsLbl: 'Whatsapp', wsVal: '+54 341 274-5374', btn: 'Como chegar →',
    },
    faq: {
      eyebrow: '◉ DÚVIDAS FREQUENTES', h2a: 'Tudo que você quer', h2b: 'saber.',
      items: [
        { q: 'Preciso levar sabão?', a: 'Não. Sabão, amaciante e tudo o necessário está incluído no preço. Se preferir seu próprio produto, pode trazer.' },
        { q: 'Quanta roupa cabe numa máquina?', a: 'Até 8 quilos por máquina, o equivalente a duas cargas de uma lavadora doméstica.' },
        { q: 'E se eu não estiver quando terminar?', a: 'A roupa fica dentro até você vir buscar. Ninguém toca.' },
        { q: 'Como faço o pagamento?', a: 'Com cartão de crédito, débito, Pix ou carteiras digitais. Tudo digital, não aceitamos dinheiro.' },
        { q: 'Posso lavar tênis ou edredons?', a: 'Sim. As máquinas são industriais (HE) e suportam edredons, mantas, travesseiros e tênis.' },
        { q: 'Têm serviço em domicílio?', a: 'Sim, na área central. Buscamos sua roupa, lavamos e secamos, e entregamos dobrada no mesmo dia.' },
      ],
    },
    franquicia: {
      eyebrow: '◉ OPORTUNIDADE DE NEGÓCIO',
      h2a: 'Traga Lavando', h2b: 'para sua cidade.',
      p: 'Lavando é uma lavanderia automática self-service que funciona 24/7 sem pessoal fixo. Máquinas industriais, pagamento digital e um modelo comprovado já em operação em Rosario.',
      cards: [
        { stat: '24/7', title: 'Sem pessoal', desc: 'O local opera sozinho, sem funcionários em turno.' },
        { stat: '100%', title: 'Pagamento digital', desc: 'Sem manejo de dinheiro ou caixas registradoras.' },
        { stat: '✓', title: 'Modelo comprovado', desc: 'Tecnologia, marca e suporte desde o primeiro dia.' },
      ],
      btn: '💬 Fale conosco para mais informação',
    },
    footer: {
      eyebrow: '◉ LAVANDO · ROSARIO', d1: 'Sua roupa,', d2: 'limpa', d3: 'em minutos.',
      p: 'Lavanderia automática 24 horas no centro de Rosario. Máquinas que funcionam sempre.',
      c1t: 'Serviços', c1: ['Lavagem','Secagem','Edredons','Domicílio'],
      c2t: 'Localização', c2: ['Zeballos 1530','Rosario, Santa Fe','Aberto 24/7','Como chegar'],
      c3t: 'Siga-nos', c3: ['@lavando.ar','instagram.com/lavando.ar','www.lavando.ar','+54 341 274-5374'],
      copy: '© 2026 LAVANDO · TODOS OS DIREITOS RESERVADOS', made: 'FEITO EM ROSARIO ◆ ARGENTINA',
    },
  },
  en: {
    nav: { how: 'How it works', pricing: 'Pricing', location: 'Location', franchise: 'Franchise' },
    hero: {
      eyebrow: '◉ Automated laundromat · Rosario · 24 h',
      line1pre: 'Your clothes,', line1hi: 'clean',
      line2pre: 'in', line2hi: 'minutes',
      line3: 'No hassle.',
      lede: 'Walk in whenever you want, pay with card and your clothes are ready in minutes. Wash and dry in the heart of Rosario.',
      cta1: 'See pricing', cta2: 'How it works',
    },
    marquee: ['OPEN 24/7','★','DIGITAL PAYMENT','★','ROSARIO CENTRO','★','FAST WASH','★','WI-FI','★','HE MACHINES','★','DETERGENT INCLUDED','★'],
    como: {
      eyebrow: '◉ 3 STEPS · NO HASSLE',
      h2a: 'As easy as', h2b: 'putting in a', h2c: 'coin.', h2d: 'But without a coin.',
      p: 'No lines, no cash, no waiting. You decide when to come.',
      s1t: 'Choose your service', s1p: 'Choose wash or dry, pay with card or digital wallet, and get your code to start instantly.',
      s2t: 'Load the machine', s2p: 'Come to the store, load your clothes, enter your code and the machine starts on its own. Detergent and softener included.',
      s3t: 'Kick back', s3p: 'Your clothes are ready in minutes. Air conditioning and comfortable space available.',
    },
    tarifas: {
      eyebrow: '◉ CLEAR PRICES · NO SURPRISES',
      h2: 'Pricing you can understand.', p: 'You pay per machine, not per kilo. Detergent and softener always included.',
      t1tag: 'Wash only', t1h: 'Washer', t1li: ['HE program','Up to 8 kg','Detergent included'],
      t2tag: '★ Most popular', t2h: 'Wash + dry', t2li: ['HE wash','Full dry','Detergent & softener'],
    },
    pausa: {
      eyebrow: '◉ MEANWHILE',
      h3a: "It's not just", h3b: 'a laundromat.', h3c: "It's", h3d: 'your break',
      p: 'That time is yours. Relax, catch up on messages, read for a bit. We notify you when your clothes are ready.',
      amenity: 'Air conditioning',
      photoLabel: 'PHOTO · LAUNDROMAT',
    },
    ubi: {
      eyebrow: '◉ RIGHT IN ROSARIO', h2a: "We're around", h2b: 'the corner.',
      liveTag: 'LIVE · CENTRO', corner: 'ZEBALLOS 1530 · CENTRO',
      h3a: 'Lavando', h3b: 'Rosario Centro',
      dirLbl: 'Address', dirVal1: 'Zeballos 1530', dirVal2: 'Rosario, Santa Fe',
      hoursLbl: 'Hours', hoursVal: '24 hours', hoursSub: 'Every day of the year',
      wsLbl: 'Whatsapp', wsVal: '+54 341 274-5374', btn: 'Get directions →',
    },
    faq: {
      eyebrow: '◉ FREQUENTLY ASKED', h2a: 'Everything you want', h2b: 'to know.',
      items: [
        { q: 'Do I need to bring detergent?', a: 'No. Detergent, softener, and everything needed is included in the price. If you prefer your own product, you can bring it.' },
        { q: 'How much clothes fit in one machine?', a: "Up to 8 kg per machine, roughly two standard home laundry loads." },
        { q: "What if I'm not there when it finishes?", a: "Your clothes stay inside until you come. Nobody touches them." },
        { q: 'How do I pay?', a: 'With credit card, debit card, or digital wallets. Everything digital — no cash accepted.' },
        { q: 'Can I wash sneakers or duvets?', a: 'Yes. The machines are industrial (HE) and handle duvets, blankets, pillows, and sneakers.' },
        { q: 'Do you offer home pickup?', a: 'Yes, in the downtown area. We pick up your clothes, wash and dry them, and deliver them folded the same day.' },
      ],
    },
    franquicia: {
      eyebrow: '◉ BUSINESS OPPORTUNITY',
      h2a: 'Bring Lavando', h2b: 'to your city.',
      p: 'Lavando is a self-service automated laundromat running 24/7 with no fixed staff. Industrial machines, digital payments, and a proven model already operating in Rosario.',
      cards: [
        { stat: '24/7', title: 'No staff needed', desc: 'The store runs itself, no employees on shift.' },
        { stat: '100%', title: 'Digital payments', desc: 'No cash handling or cash registers.' },
        { stat: '✓', title: 'Proven model', desc: 'Technology, brand, and support from day one.' },
      ],
      btn: '💬 Contact us for more information',
    },
    footer: {
      eyebrow: '◉ LAVANDO · ROSARIO', d1: 'Your clothes,', d2: 'clean', d3: 'in minutes.',
      p: '24-hour automated laundromat in the heart of Rosario. Machines that always work.',
      c1t: 'Services', c1: ['Wash','Dry','Duvets','Home delivery'],
      c2t: 'Location', c2: ['Zeballos 1530','Rosario, Santa Fe','Open 24/7','Get directions'],
      c3t: 'Follow us', c3: ['@lavando.ar','instagram.com/lavando.ar','www.lavando.ar','+54 341 274-5374'],
      copy: '© 2026 LAVANDO · ALL RIGHTS RESERVED', made: 'MADE IN ROSARIO ◆ ARGENTINA',
    },
  },
};

// ===== CONTEXT =====
const LangContext = createContext({ lang: 'es', setLang: () => {} });

// ===== APP =====
function App() {
  const [lang, setLang] = useState('es');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Nav />
      <Hero />
      <Marquee />
      <ComoFunciona />
      <Tarifas />
      <PausaSection />
      <Ubicacion />
      <Franquicia />
      <FAQ />
      <Footer />
      <Tweaks />
    </LangContext.Provider>
  );
}

// ===== FLAG SVGS =====
const FlagAR = () => (
  <svg width="26" height="18" viewBox="0 0 26 18" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', borderRadius: 3 }}>
    <rect width="26" height="18" fill="#74ACDF"/>
    <rect y="6" width="26" height="6" fill="white"/>
    <circle cx="13" cy="9" r="2.2" fill="#F6B40E" stroke="#85340A" strokeWidth="0.4"/>
    <g fill="#F6B40E">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => (
        <line key={i} x1="13" y1="9"
          x2={13 + Math.cos(deg*Math.PI/180)*3.4}
          y2={9 + Math.sin(deg*Math.PI/180)*3.4}
          strokeWidth="0.7" stroke="#F6B40E"
        />
      ))}
    </g>
  </svg>
);

const FlagBR = () => (
  <svg width="26" height="18" viewBox="0 0 26 18" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', borderRadius: 3 }}>
    <rect width="26" height="18" fill="#009C3B"/>
    <polygon points="13,2 24,9 13,16 2,9" fill="#FEDF00"/>
    <circle cx="13" cy="9" r="3.5" fill="#002776"/>
    <path d="M9.8,7.6 Q13,6.2 16.2,7.6" stroke="white" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
  </svg>
);

const FlagUS = () => (
  <svg width="26" height="18" viewBox="0 0 26 18" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', borderRadius: 3 }}>
    {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
      <rect key={i} y={i*1.385} width="26" height="1.385" fill={i%2===0 ? '#BF0A30' : 'white'}/>
    ))}
    <rect width="10.4" height="9.7" fill="#002868"/>
    {[0,1,2,3,4].map(row => [0,1,2,3].map(col => (
      <circle key={`${row}-${col}`}
        cx={1.3 + col*2.4 + (row%2)*1.2}
        cy={1.2 + row*1.8}
        r="0.55" fill="white"
      />
    )))}
  </svg>
);

const FLAG_COMPONENTS = { es: FlagAR, pt: FlagBR, en: FlagUS };

// ===== LANG SWITCHER =====
function LangSwitcher() {
  const { lang, setLang } = useContext(LangContext);
  const opts = [
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
  ];
  return (
    <div className="lang-switcher">
      {opts.map(({ code, label }) => {
        const Flag = FLAG_COMPONENTS[code];
        return (
          <button
            key={code}
            className={'lang-btn' + (lang === code ? ' active' : '')}
            onClick={() => setLang(code)}
            title={label}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
}

// ===== NAV =====
function Nav() {
  const { lang } = useContext(LangContext);
  const t = T[lang].nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <button
            className={'hamburger' + (menuOpen ? ' open' : '')}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
          <a href="#" className="nav-logo" onClick={close}>
            <img src="assets/logo-lavando.jpeg" alt="Lavando" style={{ height: 46, width: 'auto', display: 'block' }} />
          </a>
        </div>
        <div className="nav-links">
          <a href="#como">{t.how}</a>
          <a href="#tarifas">{t.pricing}</a>
          <a href="#ubicacion">{t.location}</a>
          <a href="#franquicia">{t.franchise}</a>
        </div>
        <div className="nav-right">
          <LangSwitcher />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#como" onClick={close}>{t.how}</a>
          <a href="#tarifas" onClick={close}>{t.pricing}</a>
          <a href="#ubicacion" onClick={close}>{t.location}</a>
          <a href="#franquicia" onClick={close}>{t.franchise}</a>
        </div>
      )}
    </nav>
  );
}

// ===== HERO =====
function Hero() {
  const { lang } = useContext(LangContext);
  const t = T[lang].hero;
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--magenta)' }}>{t.eyebrow}</div>
            <h1 className="display">
              {t.line1pre} <span className="magenta">{t.line1hi}</span>
              <br />
              {t.line2pre} <span className="azul underline">{t.line2hi}</span>.
              <br />
              <span style={{ color: 'var(--lima)' }}>{t.line3}</span>
            </h1>
            <p className="lede">{t.lede}</p>
            <div className="hero-ctas">
              <a href="#tarifas" className="btn btn-primary btn-lg">{t.cta1}</a>
              <a href="#como" className="btn btn-ghost btn-lg">{t.cta2}</a>
            </div>
          </div>

          <div className="hero-visual">
            <span className="bubble b1 float-1"></span>
            <span className="bubble b2 float-2"></span>
            <span className="bubble b3 float-3"></span>
            <span className="bubble b4 float-4"></span>
            <div className="washer">
              <div className="washer-window">
                <img src="assets/mascota-feliz.png" alt="Lavando mascota" className="mascot" />
              </div>
            </div>
            <div className="timer-chip">
              <div className="lbl">✓ ROPA<br />EN MINUTOS</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ===== MARQUEE =====
function Marquee() {
  const { lang } = useContext(LangContext);
  const items = T[lang].marquee;
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>
          {items.concat(items).map((it, i) => (
            <span key={i} className={it === '★' ? 'star' : ''}>{it}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

// ===== COMO FUNCIONA =====
function ComoFunciona() {
  const { lang } = useContext(LangContext);
  const t = T[lang].como;
  return (
    <section className="section" id="como">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--magenta)' }}>{t.eyebrow}</div>
          <h2 className="display">
            {t.h2a}<br />
            <span style={{ color: 'var(--magenta)' }}>{t.h2b}</span> {t.h2c}<br />
            {t.h2d}
          </h2>
          <p>{t.p}</p>
        </div>
        <div className="steps">
          <div className="step s1">
            <div className="num">01</div>
            <h3>{t.s1t}</h3>
            <p>{t.s1p}</p>
            <div className="step-art"><img src="assets/mascota-celu.png" alt="" /></div>
          </div>
          <div className="step s2">
            <div className="num">02</div>
            <h3>{t.s2t}</h3>
            <p>{t.s2p}</p>
            <div className="step-art"><img src="assets/mascota-uno.png" alt="" /></div>
          </div>
          <div className="step s3">
            <div className="num">03</div>
            <h3>{t.s3t}</h3>
            <p>{t.s3p}</p>
            <div className="step-art"><img src="assets/mascota-feliz.png" alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TARIFAS =====
function Tarifas() {
  const { lang } = useContext(LangContext);
  const t = T[lang].tarifas;
  return (
    <section className="section tarifas-section" id="tarifas">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="display">{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <div className="tarifas tarifas-2col">
          <div className="tarifa">
            <span className="tag">{t.t1tag}</span>
            <h3>{t.t1h}</h3>
            <div className="price"><span className="currency">$</span>8.000<span className="unit">/ ciclo</span></div>
            <ul>{t.t1li.map((li, i) => <li key={i}>{li}</li>)}</ul>
          </div>
          <div className="tarifa featured">
            <span className="tag">{t.t2tag}</span>
            <h3>{t.t2h}</h3>
            <div className="price"><span className="currency">$</span>16.000<span className="unit">/ combo</span></div>
            <ul>{t.t2li.map((li, i) => <li key={i}>{li}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== PAUSA =====
function PausaSection() {
  const { lang } = useContext(LangContext);
  const t = T[lang].pausa;
  return (
    <section className="section cafe-section">
      <div className="container">
        <div className="cafe-grid">
          <div className="cafe-photo">
            <div className="placeholder-stripes"></div>
            <img src="assets/mascota-burbuja.png" alt="" style={{ position: 'relative' }} />
            <div className="placeholder-label" style={{ position: 'absolute', bottom: 24, left: 24 }}>
              {t.photoLabel}
            </div>
          </div>
          <div className="cafe-card">
            <div className="eyebrow" style={{ color: 'var(--lima)' }}>◉ {t.eyebrow.replace('◉ ','')}</div>
            <h3>
              {t.h3a}<br />{t.h3b}<br />{t.h3c} <span className="accent">{t.h3d}</span>.
            </h3>
            <p>{t.p}</p>
            <div className="cafe-amenities" style={{ gridTemplateColumns: '1fr' }}>
              <div className="amenity">
                <span className="icn">❄</span> {t.amenity}
              </div>
            </div>
            <svg className="squiggle" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="3">
              <circle cx="40" cy="40" r="30" />
              <circle cx="120" cy="80" r="20" />
              <circle cx="80" cy="140" r="25" />
              <circle cx="160" cy="150" r="15" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== UBICACION =====
function Ubicacion() {
  const { lang } = useContext(LangContext);
  const t = T[lang].ubi;
  const mapsUrl = 'https://maps.google.com/?q=Zeballos+1530+Rosario+Santa+Fe+Argentina';
  return (
    <section className="section ubicacion-section" id="ubicacion">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--magenta)' }}>{t.eyebrow}</div>
          <h2 className="display">{t.h2a}<br />{t.h2b}</h2>
        </div>
        <div className="ubi-grid">
          <div className="map-card">
            <div className="map-grid"></div>
            <div className="river"></div>
            <div className="road r1"></div>
            <div className="road r2"></div>
            <div className="road r3"></div>
            <div className="park" style={{ width: 110, height: 80, top: '12%', left: '55%' }}></div>
            <div className="park" style={{ width: 70, height: 70, bottom: '12%', left: '12%' }}></div>
            <div className="map-tag"><span className="live"></span>{t.liveTag}</div>
            <div className="map-pin"><div className="pin-marker"></div><div className="pin-shadow"></div></div>
            <div style={{ position: 'absolute', bottom: 24, right: 24, background: 'var(--crema)', border: '2px solid var(--tinta)', borderRadius: 18, padding: '10px 14px', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ color: 'var(--magenta)' }}>◉</span>{t.corner}
            </div>
          </div>
          <div className="info-card">
            <h3>{t.h3a}<br />{t.h3b}</h3>
            <div className="row">
              <div className="icn">📍</div>
              <div><div className="lbl">{t.dirLbl}</div><div className="val">{t.dirVal1}<br />{t.dirVal2}</div></div>
            </div>
            <div className="row">
              <div className="icn">⏱</div>
              <div><div className="lbl">{t.hoursLbl}</div><div className="val big">{t.hoursVal}</div><div style={{ fontSize: 13, opacity: 0.85 }}>{t.hoursSub}</div></div>
            </div>
            <div className="row">
              <div className="icn">📱</div>
              <div>
                <div className="lbl">{t.wsLbl}</div>
                <div className="val">
                  <a href="https://wa.me/543412745374" target="_blank" rel="noopener" style={{ color: 'white', textDecoration: 'none' }}>{t.wsVal}</a>
                </div>
              </div>
            </div>
            <a href={mapsUrl} target="_blank" rel="noopener" className="btn" style={{ background: 'var(--lima)', color: 'var(--tinta)', marginTop: 8, boxShadow: '4px 4px 0 0 var(--tinta)' }}>{t.btn}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ() {
  const { lang } = useContext(LangContext);
  const t = T[lang].faq;
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--magenta)' }}>{t.eyebrow}</div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', marginTop: 16 }}>
              {t.h2a}<br />{t.h2b}
            </h2>
            <img src="assets/mascota-hola.png" alt="" style={{ width: 220, marginTop: 32 }} />
          </div>
          <div className="faq-list">
            {t.items.map((it, i) => (
              <details key={lang + '-' + i} className="faq-item" open={i === 0}>
                <summary>{it.q}<span className="plus">+</span></summary>
                <p>{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FRANQUICIA =====
function Franquicia() {
  const { lang } = useContext(LangContext);
  const t = T[lang].franquicia;
  const statColors = ['var(--lima)', 'var(--magenta)', 'var(--celeste)'];
  const waUrl = `https://wa.me/543412745374?text=${encodeURIComponent('Hola! Quiero información sobre la franquicia Lavando.')}`;
  return (
    <section className="section franquicia-section" id="franquicia">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--lima)' }}>{t.eyebrow}</div>
          <h2 className="display" style={{ color: 'white', margin: '16px 0 16px' }}>
            {t.h2a}<br /><span style={{ color: 'var(--magenta)' }}>{t.h2b}</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 19, maxWidth: 620, margin: 0 }}>{t.p}</p>
        </div>
        <div className="franquicia-cards">
          {t.cards.map((card, i) => (
            <div key={i} className="franquicia-card">
              <div className="franquicia-stat" style={{ color: statColors[i] }}>{card.stat}</div>
              <div className="franquicia-title">{card.title}</div>
              <p className="franquicia-desc">{card.desc}</p>
            </div>
          ))}
        </div>
        <a href={waUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
          {t.btn}
        </a>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer() {
  const { lang } = useContext(LangContext);
  const t = T[lang].footer;
  const mapsUrl = 'https://maps.google.com/?q=Zeballos+1530+Rosario+Santa+Fe+Argentina';
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="eyebrow" style={{ color: 'var(--lima)' }}>{t.eyebrow}</div>
            <div className="display">
              {t.d1}<br /><span style={{ color: 'var(--magenta)' }}>{t.d2}</span><br />{t.d3}
            </div>
            <p>{t.p}</p>
          </div>
          <div>
            <h4>{t.c1t}</h4>
            <ul>{t.c1.map((item, i) => <li key={i}><a href="#tarifas">{item}</a></li>)}</ul>
          </div>
          <div>
            <h4>{t.c2t}</h4>
            <ul>
              {t.c2.slice(0,3).map((item, i) => <li key={i}>{item}</li>)}
              <li><a href={mapsUrl} target="_blank" rel="noopener">{t.c2[3]}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.c3t}</h4>
            <ul>{t.c3.map((item, i) => <li key={i}><a href="#">{item}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Zeballos 1530, Rosario, Santa Fe · +54 341 274-5374</span>
          <span>{t.copy}</span>
        </div>
      </div>
    </footer>
  );
}

// ===== TWEAKS =====
function Tweaks() {
  const { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor } = window;
  if (!TweaksPanel) return null;

  const [tweaks, setTweak] = useTweaks({
    "primary": "#EB038A",
    "accent": "#90C63C",
    "heroBg": "Crema",
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--magenta', tweaks.primary);
    document.documentElement.style.setProperty('--lima', tweaks.accent);
    document.body.style.background = {
      'Crema': '#FBF7F4', 'Celeste suave': '#EAF6FB', 'Negro': '#14132B',
    }[tweaks.heroBg] || '#FBF7F4';
    document.body.style.color = tweaks.heroBg === 'Negro' ? '#FBF7F4' : '#14132B';
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks" defaultOpen={false}>
      <TweakSection title="Color de marca">
        <TweakColor label="Magenta principal" value={tweaks.primary} onChange={(v) => setTweak('primary', v)} />
        <TweakColor label="Acento (verde lima)" value={tweaks.accent} onChange={(v) => setTweak('accent', v)} />
      </TweakSection>
      <TweakSection title="Fondo de la página">
        <TweakRadio value={tweaks.heroBg} options={['Crema', 'Celeste suave', 'Negro']} onChange={(v) => setTweak('heroBg', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
