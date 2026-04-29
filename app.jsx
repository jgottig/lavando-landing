/* global React, ReactDOM */
const { useState, useEffect, createContext, useContext } = React;

// ===== TRANSLATIONS =====
const T = {
  es: {
    nav: { how: 'Cómo funciona', pricing: 'Tarifas', location: 'Ubicación' },
    hero: {
      eyebrow: '◉ Lavandería automática · Rosario · 24 hs',
      line1pre: 'Tu ropa,', line1hi: 'limpia',
      line2pre: 'en', line2hi: '30 minutos',
      line3: 'Sin vueltas.',
      lede: 'Reservá la máquina desde el celular, pagás con un toque y entrás cuando quieras. Lavado y secado en pleno centro de Rosario.',
      cta1: 'Ver tarifas', cta2: 'Cómo funciona',
      meta1: 'Abierto ahora · 7 máquinas libres',
      meta2: '⏱ Lavado 30 min · Secado 25 min',
    },
    marquee: ['ABIERTO 24/7','★','PAGO DIGITAL','★','ROSARIO CENTRO','★',"LAVADO EN 30'",'★','WI-FI','★','MÁQUINAS HE','★','DETERGENTE INCLUIDO','★'],
    como: {
      eyebrow: '◉ EN 3 PASOS · SIN VUELTAS',
      h2a: 'Tan fácil como', h2b: 'poner una', h2c: 'moneda.', h2d: 'Pero sin moneda.',
      p: 'Todo desde tu celular. No hay fila, no hay efectivo, no hay esperar que alguien termine. Vos decidís cuándo.',
      s1t: 'Elegís el servicio', s1p: 'Consultá disponibilidad, elegís lavado o secado y pagás con MercadoPago o tarjeta. Te llega un código al instante.',
      s2t: 'Cargás el lavarropas', s2p: 'Venís al local, ponés la ropa, ingresás tu código y la máquina arranca sola. Detergente y suavizante incluidos.',
      s3t: 'Relajate', s3p: '30 minutos de lavado. Aire acondicionado y espacio cómodo disponible. Te avisamos cuando tu ropa está lista.',
    },
    tarifas: {
      eyebrow: '◉ PRECIOS CLAROS · SIN SORPRESAS',
      h2: 'Tarifas que se entienden.', p: 'Pagás por máquina, no por kilo. Detergente y suavizante siempre incluidos.',
      t1tag: 'Solo lavado', t1h: 'Lavarropas', t1li: ['30 minutos · Programa HE','Hasta 8 kilos','Detergente incluido'],
      t2tag: '★ El más elegido', t2h: 'Lavado + secado', t2li: ['Lavado HE de 30 minutos','Secado de 25 minutos','Detergente y suavizante'],
    },
    pausa: {
      eyebrow: '◉ MIENTRAS TANTO',
      h3a: 'No es solo', h3b: 'lavandería.', h3c: 'Es', h3d: 'tu pausa',
      p: 'Esos 30 minutos son tuyos. Relajate, respondé mensajes, leé un rato. Cuando llegue el aviso, tu ropa ya está lista.',
      amenity: 'Aire acondicionado',
      photoLabel: 'FOTO · LAVANDERÍA',
    },
    avail: {
      eyebrow: '◉ DISPONIBILIDAD EN TIEMPO REAL',
      h2: 'Sabés cuándo\nhay lugar.',
      p: 'Consultá el estado de las máquinas antes de venir. Mirá cuáles están libres y planificá tu visita sin sorpresas.',
      machinesLbl: 'Máquinas en vivo', live: '● EN VIVO', free: 'LIBRE', busy: 'OCUPADA',
      phoneGreeting: '◉ ROSARIO · CENTRO', phoneTitle: 'Hola, Sofi 👋', phoneTitle2: '¿qué lavamos hoy?',
    },
    ubi: {
      eyebrow: '◉ EN PLENO ROSARIO', h2a: 'Estamos a la vuelta', h2b: 'de tu casa.',
      liveTag: 'EN VIVO · 7 LIBRES', corner: 'CÓRDOBA & MORENO · CENTRO',
      h3a: 'Lavando', h3b: 'Rosario Centro',
      dirLbl: 'Dirección', dirVal1: 'Córdoba 1234', dirVal2: 'Rosario, Santa Fe',
      hoursLbl: 'Horario', hoursVal: '24 horas', hoursSub: 'Todos los días del año',
      wsLbl: 'Whatsapp', wsVal: '+54 341 555 0123', btn: 'Cómo llegar →',
    },
    faq: {
      eyebrow: '◉ DUDAS FRECUENTES', h2a: 'Todo lo que querés', h2b: 'saber.',
      items: [
        { q: '¿Tengo que llevar detergente?', a: 'No. El detergente, suavizante y todo lo necesario está incluido en el precio. Si tenés un producto preferido, también podés traer el tuyo.' },
        { q: '¿Cuánta ropa entra en una máquina?', a: 'Hasta 8 kilos por máquina, lo que equivale más o menos a dos cargas comunes de un lavarropas hogareño. Suficiente para una semana de ropa de una persona o un acolchado de plaza y media.' },
        { q: '¿Y si no estoy cuando termina el lavado?', a: 'Te avisamos cuando la ropa está lista. Si no llegás a tiempo, la ropa queda dentro hasta que vos vengas. Nadie la toca.' },
        { q: '¿Cómo pago?', a: 'Con MercadoPago, tarjeta de crédito, débito o billeteras virtuales. Todo digital, no aceptamos efectivo.' },
        { q: '¿Puedo lavar zapatillas o acolchados?', a: 'Sí. Las máquinas son industriales (HE) y soportan acolchados, mantas, almohadones y zapatillas.' },
        { q: '¿Tienen servicio a domicilio?', a: 'Sí, en zona céntrica. Pasamos a buscar tu ropa, la lavamos y secamos, y te la llevamos doblada en el día.' },
      ],
    },
    footer: {
      eyebrow: '◉ LAVANDO · ROSARIO', d1: 'Tu ropa,', d2: 'limpia', d3: "en 30'.",
      p: 'Lavandería automática 24 horas en pleno centro de Rosario. Máquinas que funcionan siempre.',
      c1t: 'Servicios', c1: ['Lavado','Secado','Acolchados','Domicilio','Plancha'],
      c2t: 'Ubicación', c2: ['Córdoba 1234','Rosario, Santa Fe','Abierto 24/7','Cómo llegar'],
      c3t: 'Seguinos', c3: ['@lavando.ar','instagram.com/lavando.ar','www.lavando.ar','+54 341 555 0123'],
      copy: '© 2026 LAVANDO · TODOS LOS DERECHOS RESERVADOS', made: 'HECHO EN ROSARIO ◆ ARGENTINA',
    },
  },
  pt: {
    nav: { how: 'Como funciona', pricing: 'Preços', location: 'Localização' },
    hero: {
      eyebrow: '◉ Lavanderia automática · Rosario · 24 h',
      line1pre: 'Sua roupa,', line1hi: 'limpa',
      line2pre: 'em', line2hi: '30 minutos',
      line3: 'Simples assim.',
      lede: 'Reserve a máquina pelo celular, pague com um toque e entre quando quiser. Lavagem e secagem no centro de Rosario.',
      cta1: 'Ver preços', cta2: 'Como funciona',
      meta1: 'Aberto agora · 7 máquinas livres',
      meta2: '⏱ Lavagem 30 min · Secagem 25 min',
    },
    marquee: ['ABERTO 24/7','★','PAGAMENTO DIGITAL','★','ROSARIO CENTRO','★',"LAVAGEM EM 30'",'★','WI-FI','★','MÁQUINAS HE','★','DETERGENTE INCLUÍDO','★'],
    como: {
      eyebrow: '◉ EM 3 PASSOS · SEM COMPLICAÇÃO',
      h2a: 'Simples como', h2b: 'colocar uma', h2c: 'moeda.', h2d: 'Mas sem moeda.',
      p: 'Tudo pelo celular. Sem fila, sem dinheiro, sem esperar. Você decide quando.',
      s1t: 'Escolhe o serviço', s1p: 'Consulta disponibilidade, escolhe lavagem ou secagem e paga com cartão ou Pix. Recebe um código na hora.',
      s2t: 'Carrega a máquina', s2p: 'Vai ao local, coloca a roupa, insere o código e a máquina começa sozinha. Sabão e amaciante incluídos.',
      s3t: 'Relaxa', s3p: '30 minutos de lavagem. Ar-condicionado e espaço confortável disponível. Te avisamos quando a roupa está pronta.',
    },
    tarifas: {
      eyebrow: '◉ PREÇOS CLAROS · SEM SURPRESAS',
      h2: 'Preços que se entendem.', p: 'Paga por máquina, não por quilo. Sabão e amaciante sempre incluídos.',
      t1tag: 'Só lavagem', t1h: 'Lavarroupas', t1li: ['30 minutos · Programa HE','Até 8 quilos','Sabão incluído'],
      t2tag: '★ O mais escolhido', t2h: 'Lavagem + secagem', t2li: ['Lavagem HE de 30 minutos','Secagem de 25 minutos','Sabão e amaciante'],
    },
    pausa: {
      eyebrow: '◉ ENQUANTO ISSO',
      h3a: 'Não é só', h3b: 'lavanderia.', h3c: 'É', h3d: 'sua pausa',
      p: 'Esses 30 minutos são seus. Relaxa, responde mensagens, lê um pouco. Quando chegar o aviso, sua roupa já está pronta.',
      amenity: 'Ar-condicionado',
      photoLabel: 'FOTO · LAVANDERIA',
    },
    avail: {
      eyebrow: '◉ DISPONIBILIDADE EM TEMPO REAL',
      h2: 'Sabes quando\ntem vaga.',
      p: 'Consulte o estado das máquinas antes de vir. Veja quais estão livres e planeje sua visita sem surpresas.',
      machinesLbl: 'Máquinas ao vivo', live: '● AO VIVO', free: 'LIVRE', busy: 'OCUPADA',
      phoneGreeting: '◉ ROSARIO · CENTRO', phoneTitle: 'Oi, Sofi 👋', phoneTitle2: 'o que lavamos hoje?',
    },
    ubi: {
      eyebrow: '◉ NO CENTRO DE ROSARIO', h2a: 'Estamos pertinho', h2b: 'de você.',
      liveTag: 'AO VIVO · 7 LIVRES', corner: 'CÓRDOBA & MORENO · CENTRO',
      h3a: 'Lavando', h3b: 'Rosario Centro',
      dirLbl: 'Endereço', dirVal1: 'Córdoba 1234', dirVal2: 'Rosario, Santa Fe',
      hoursLbl: 'Horário', hoursVal: '24 horas', hoursSub: 'Todos os dias do ano',
      wsLbl: 'Whatsapp', wsVal: '+54 341 555 0123', btn: 'Como chegar →',
    },
    faq: {
      eyebrow: '◉ DÚVIDAS FREQUENTES', h2a: 'Tudo que você quer', h2b: 'saber.',
      items: [
        { q: 'Preciso levar sabão?', a: 'Não. Sabão, amaciante e tudo o necessário está incluído no preço. Se preferir seu próprio produto, pode trazer.' },
        { q: 'Quanta roupa cabe numa máquina?', a: 'Até 8 quilos por máquina, o equivalente a duas cargas de uma lavadora doméstica. Suficiente para uma semana de roupas ou um edredom casal.' },
        { q: 'E se eu não estiver quando terminar?', a: 'Te avisamos quando a roupa está pronta. Se não chegar a tempo, a roupa fica dentro até você vir buscar. Ninguém toca.' },
        { q: 'Como faço o pagamento?', a: 'Com cartão de crédito, débito, Pix ou carteiras digitais. Tudo digital, não aceitamos dinheiro.' },
        { q: 'Posso lavar tênis ou edredons?', a: 'Sim. As máquinas são industriais (HE) e suportam edredons, mantas, travesseiros e tênis.' },
        { q: 'Têm serviço em domicílio?', a: 'Sim, na área central. Buscamos sua roupa, lavamos e secamos, e entregamos dobrada no mesmo dia.' },
      ],
    },
    footer: {
      eyebrow: '◉ LAVANDO · ROSARIO', d1: 'Sua roupa,', d2: 'limpa', d3: "em 30'.",
      p: 'Lavanderia automática 24 horas no centro de Rosario. Máquinas que funcionam sempre.',
      c1t: 'Serviços', c1: ['Lavagem','Secagem','Edredons','Domicílio','Passar roupa'],
      c2t: 'Localização', c2: ['Córdoba 1234','Rosario, Santa Fe','Aberto 24/7','Como chegar'],
      c3t: 'Siga-nos', c3: ['@lavando.ar','instagram.com/lavando.ar','www.lavando.ar','+54 341 555 0123'],
      copy: '© 2026 LAVANDO · TODOS OS DIREITOS RESERVADOS', made: 'FEITO EM ROSARIO ◆ ARGENTINA',
    },
  },
  en: {
    nav: { how: 'How it works', pricing: 'Pricing', location: 'Location' },
    hero: {
      eyebrow: '◉ Automated laundromat · Rosario · 24 h',
      line1pre: 'Your clothes,', line1hi: 'clean',
      line2pre: 'in', line2hi: '30 minutes',
      line3: 'No hassle.',
      lede: 'Book a machine from your phone, pay with a tap, and walk in whenever you want. Wash and dry in the heart of Rosario.',
      cta1: 'See pricing', cta2: 'How it works',
      meta1: 'Open now · 7 machines free',
      meta2: '⏱ Wash 30 min · Dry 25 min',
    },
    marquee: ['OPEN 24/7','★','DIGITAL PAYMENT','★','ROSARIO CENTRO','★',"WASH IN 30'",'★','WI-FI','★','HE MACHINES','★','DETERGENT INCLUDED','★'],
    como: {
      eyebrow: '◉ 3 STEPS · NO HASSLE',
      h2a: 'As easy as', h2b: 'putting in a', h2c: 'coin.', h2d: 'But without a coin.',
      p: 'Everything from your phone. No lines, no cash, no waiting. You decide when.',
      s1t: 'Choose your service', s1p: 'Check availability, choose wash or dry, pay with card or digital wallet. Your code arrives instantly.',
      s2t: 'Load the machine', s2p: 'Come to the store, load your clothes, enter your code and the machine starts on its own. Detergent and softener included.',
      s3t: 'Kick back', s3p: '30 minutes of washing. Air conditioning and comfortable space available. We notify you when your clothes are ready.',
    },
    tarifas: {
      eyebrow: '◉ CLEAR PRICES · NO SURPRISES',
      h2: 'Pricing you can understand.', p: 'You pay per machine, not per kilo. Detergent and softener always included.',
      t1tag: 'Wash only', t1h: 'Washer', t1li: ['30 minutes · HE program','Up to 8 kg','Detergent included'],
      t2tag: '★ Most popular', t2h: 'Wash + dry', t2li: ['30-min HE wash','25-min dry','Detergent & softener'],
    },
    pausa: {
      eyebrow: '◉ MEANWHILE',
      h3a: "It's not just", h3b: 'a laundromat.', h3c: "It's", h3d: 'your break',
      p: 'Those 30 minutes are yours. Relax, catch up on messages, read for a bit. When the notification arrives, your clothes are ready.',
      amenity: 'Air conditioning',
      photoLabel: 'PHOTO · LAUNDROMAT',
    },
    avail: {
      eyebrow: '◉ LIVE AVAILABILITY',
      h2: 'Know when\nthere\'s space.',
      p: 'Check machine status before you come. See which ones are free and plan your visit without surprises.',
      machinesLbl: 'Machines live', live: '● LIVE', free: 'FREE', busy: 'BUSY',
      phoneGreeting: '◉ ROSARIO · CENTRO', phoneTitle: 'Hey, Sofi 👋', phoneTitle2: 'what are we washing?',
    },
    ubi: {
      eyebrow: '◉ RIGHT IN ROSARIO', h2a: "We're around", h2b: 'the corner.',
      liveTag: 'LIVE · 7 FREE', corner: 'CÓRDOBA & MORENO · CENTRO',
      h3a: 'Lavando', h3b: 'Rosario Centro',
      dirLbl: 'Address', dirVal1: 'Córdoba 1234', dirVal2: 'Rosario, Santa Fe',
      hoursLbl: 'Hours', hoursVal: '24 hours', hoursSub: 'Every day of the year',
      wsLbl: 'Whatsapp', wsVal: '+54 341 555 0123', btn: 'Get directions →',
    },
    faq: {
      eyebrow: '◉ FREQUENTLY ASKED', h2a: 'Everything you want', h2b: 'to know.',
      items: [
        { q: 'Do I need to bring detergent?', a: 'No. Detergent, softener, and everything needed is included in the price. If you prefer your own product, you can bring it.' },
        { q: 'How much clothes fit in one machine?', a: "Up to 8 kg per machine, roughly two standard home laundry loads. Enough for a week's clothes for one person or a queen-size duvet." },
        { q: "What if I'm not there when it finishes?", a: "We notify you when your clothes are ready. If you're late, your clothes stay inside until you come. Nobody touches them." },
        { q: 'How do I pay?', a: 'With credit card, debit card, or digital wallets. Everything digital — no cash accepted.' },
        { q: 'Can I wash sneakers or duvets?', a: 'Yes. The machines are industrial (HE) and handle duvets, blankets, pillows, and sneakers.' },
        { q: 'Do you offer home pickup?', a: 'Yes, in the downtown area. We pick up your clothes, wash and dry them, and deliver them folded the same day.' },
      ],
    },
    footer: {
      eyebrow: '◉ LAVANDO · ROSARIO', d1: 'Your clothes,', d2: 'clean', d3: "in 30'.",
      p: '24-hour automated laundromat in the heart of Rosario. Machines that always work.',
      c1t: 'Services', c1: ['Wash','Dry','Duvets','Home delivery','Ironing'],
      c2t: 'Location', c2: ['Córdoba 1234','Rosario, Santa Fe','Open 24/7','Get directions'],
      c3t: 'Follow us', c3: ['@lavando.ar','instagram.com/lavando.ar','www.lavando.ar','+54 341 555 0123'],
      copy: '© 2026 LAVANDO · ALL RIGHTS RESERVED', made: 'MADE IN ROSARIO ◆ ARGENTINA',
    },
  },
};

// ===== CONTEXT =====
const LangContext = createContext({ lang: 'es', setLang: () => {} });

// ===== APP =====
function App() {
  const [lang, setLang] = useState('es');
  const [machineState, setMachineState] = useState({
    M01: { status: 'free', time: null },
    M02: { status: 'busy', time: 18 },
    M03: { status: 'free', time: null },
    M04: { status: 'busy', time: 7 },
  });

  useEffect(() => {
    const t = setInterval(() => {
      setMachineState((s) => {
        const out = { ...s };
        for (const k in out) {
          if (out[k].status === 'busy' && out[k].time > 0) {
            out[k] = { ...out[k], time: out[k].time - 1 };
            if (out[k].time === 0) out[k] = { status: 'free', time: null };
          }
        }
        return out;
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Nav />
      <Hero />
      <Marquee />
      <ComoFunciona />
      <Tarifas />
      <PausaSection />
      <AvailSection machines={machineState} />
      <Ubicacion />
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
            <span className="dot"></span>
            Lavando
          </a>
        </div>
        <div className="nav-links">
          <a href="#como">{t.how}</a>
          <a href="#tarifas">{t.pricing}</a>
          <a href="#ubicacion">{t.location}</a>
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
            <div className="hero-meta">
              <div className="meta"><span className="pulse"></span>{t.meta1}</div>
              <div className="meta">{t.meta2}</div>
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
              <div><div className="num">30</div></div>
              <div className="lbl">MINUTOS<br />ROPA LISTA</div>
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
            <div className="price"><span className="currency">$</span>12.000<span className="unit">/ ciclo</span></div>
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

// ===== PAUSA (antes CafeEspera) =====
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

// ===== DISPONIBILIDAD (antes AppSection) =====
function AvailSection({ machines }) {
  const { lang } = useContext(LangContext);
  const t = T[lang].avail;
  const [h2line1, h2line2] = t.h2.split('\n');
  return (
    <section className="section app-section" id="app">
      <div className="container">
        <div className="app-grid">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="display" style={{ color: 'var(--tinta)' }}>
              {h2line1}<br />
              <span style={{ color: 'var(--magenta)' }}>{h2line2}</span>
            </h2>
            <p style={{ fontSize: 19, maxWidth: 480 }}>{t.p}</p>
          </div>
          <PhoneMock machines={machines} t={t} />
        </div>
      </div>
    </section>
  );
}

function PhoneMock({ machines, t }) {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span>●●● 100%</span>
          </div>
          <div className="phone-content">
            <div>
              <div className="phone-greeting">{t.phoneGreeting}</div>
              <h4 className="phone-title" style={{ marginTop: 8 }}>
                {t.phoneTitle}<br />{t.phoneTitle2}
              </h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tinta-soft)' }}>
                {t.machinesLbl}
              </span>
              <span style={{ background: 'var(--lima)', border: '1.5px solid var(--tinta)', borderRadius: 999, padding: '3px 9px', fontSize: 10, fontWeight: 700 }}>
                {t.live}
              </span>
            </div>
            <div className="phone-machines">
              {Object.entries(machines).map(([id, m]) => (
                <div key={id} className={'phone-machine ' + m.status}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700, fontSize: 11 }}>{id}</span>
                    <span className="stat"><span className="dot"></span>{m.status === 'free' ? t.free : t.busy}</span>
                  </div>
                  <div className="mid">{m.status === 'busy' ? `${m.time}'` : 'OK'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== UBICACION =====
function Ubicacion() {
  const { lang } = useContext(LangContext);
  const t = T[lang].ubi;
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
              <div><div className="lbl">{t.wsLbl}</div><div className="val">{t.wsVal}</div></div>
            </div>
            <a href="#" className="btn" style={{ background: 'var(--lima)', color: 'var(--tinta)', marginTop: 8, boxShadow: '4px 4px 0 0 var(--tinta)' }}>{t.btn}</a>
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

// ===== FOOTER =====
function Footer() {
  const { lang } = useContext(LangContext);
  const t = T[lang].footer;
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
              <li><a href="#">{t.c2[3]}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.c3t}</h4>
            <ul>{t.c3.map((item, i) => <li key={i}><a href="#">{item}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.copy}</span>
          <span>{t.made}</span>
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
