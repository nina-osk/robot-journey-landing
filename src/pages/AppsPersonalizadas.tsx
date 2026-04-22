import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, CheckCircle, Zap, Brain, Smartphone,
  Globe, BarChart3, MessageSquare, Rocket, Code2,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const TYPED_WORDS = ['tu restaurante', 'tu tienda online', 'tu clínica', 'tu academia', 'tu negocio'];

const APP_TYPES = [
  { Icon: Smartphone, color: '#667eea', title: 'App Móvil Personalizada',    desc: 'iOS y Android. Tu marca, tu lógica. Con panel de gestión incluido desde el primer día.',   tags: ['iOS', 'Android', 'Panel admin'] },
  { Icon: Globe,       color: '#764ba2', title: 'Plataforma Web a Medida',     desc: 'Portales, marketplaces, intranets o dashboards. Escalables desde el primer día.',           tags: ['React', 'Next.js', 'API REST'] },
  { Icon: MessageSquare, color: '#f093fb', title: 'Chatbot IA para Clientes', desc: 'Atiende, vende y responde 24/7. Integrado en WhatsApp, web o tu propia app.',               tags: ['WhatsApp', 'Web', 'GPT-4'] },
  { Icon: BarChart3,   color: '#4facfe', title: 'Dashboard de Gestión',        desc: 'Visualiza ventas, stock, reservas o métricas en tiempo real desde cualquier dispositivo.',  tags: ['Tiempo real', 'KPIs', 'Alertas'] },
  { Icon: Rocket,      color: '#43e97b', title: 'App de Pedidos y Reservas',   desc: 'Tu propio sistema sin comisiones de terceros. Pedidos, reservas, pagos y fidelización.',   tags: ['Pedidos', 'Pagos', 'Fidelización'] },
  { Icon: Brain,       color: '#fa709a', title: 'Automatización con IA',       desc: 'Flujos automáticos: emails, notificaciones, análisis de datos, predicciones de demanda.', tags: ['n8n', 'Claude AI', 'Automatización'] },
];

const AI_FEATURES = [
  { icon: '🧠', title: 'Recomendaciones inteligentes',  desc: 'Sugiere productos, franjas horarias o acciones basadas en el historial real del negocio.' },
  { icon: '💬', title: 'Atención 24/7 automatizada',    desc: 'Responde preguntas, gestiona reservas y toma pedidos sin intervención humana.' },
  { icon: '📊', title: 'Predicciones de demanda',       desc: 'Anticipa picos de trabajo, niveles de stock o comportamiento de clientes.' },
  { icon: '⚡', title: 'Automatización de flujos',      desc: 'Emails, notificaciones, facturas y reportes que se generan solos.' },
];

const STEPS = [
  { num: '01', icon: '🔍', title: 'Análisis de tu negocio',     desc: 'Entendemos tus procesos, equipo y objetivos antes de escribir una línea de código.' },
  { num: '02', icon: '🎨', title: 'Diseño y prototipo',          desc: 'Wireframes y mockups interactivos para validar la app antes de desarrollarla.' },
  { num: '03', icon: '⚙️', title: 'Desarrollo con IA integrada', desc: 'Construimos con las tecnologías más actuales, con IA donde realmente aporta valor.' },
  { num: '04', icon: '🚀', title: 'Lanzamiento y soporte',       desc: 'Publicamos en App Store / Play Store o tu dominio y te acompañamos con soporte.' },
];

const TECH = ['React Native', 'Next.js', 'Node.js', 'Python', 'Claude AI', 'n8n', 'PostgreSQL', 'Stripe', 'Firebase', 'AWS'];

const SHOWCASES = [
  {
    title: 'App Restaurante', color: '#667eea', domain: 'myrestaurant.app',
    metrics: [{ l: 'Mesa 4', v: '3 pedidos' }, { l: 'Espera', v: '8 min' }, { l: 'Ticket', v: '€28' }],
    features: ['Carta digital QR', 'Pedidos en mesa', 'TPV integrado', 'IA de sugerencias'],
  },
  {
    title: 'App de Reservas', color: '#f093fb', domain: 'mybooking.app',
    metrics: [{ l: 'Hoy', v: '24 citas' }, { l: 'Recordatorios', v: '0 faltas' }, { l: 'Ocupación', v: '95%' }],
    features: ['Reservas online 24/7', 'Recordatorios SMS', 'Gestión de agenda', 'Pagos anticipados'],
  },
  {
    title: 'App de Gestión', color: '#43e97b', domain: 'mydashboard.app',
    metrics: [{ l: 'Ventas', v: '€2.4K' }, { l: 'Pedidos', v: '86 activos' }, { l: 'Stock', v: '2 alertas' }],
    features: ['Dashboard en tiempo real', 'Alertas automáticas', 'Multi-local', 'Exportar reportes'],
  },
];

const PLANS = [
  {
    name: 'App Starter', sub: 'Para empezar a digitalizar', color: '#667eea', badge: null,
    price: '3.500 €', monthly: '+ 99 €/mes mantenimiento',
    features: ['App web o móvil básica', 'Panel de administración', '3 funcionalidades clave', 'Diseño personalizado', 'Formación incluida', 'Soporte 1 mes'],
  },
  {
    name: 'App Business', sub: 'El más solicitado', color: '#f093fb', badge: '⭐ Más popular',
    price: '7.500 €', monthly: '+ 199 €/mes mantenimiento',
    features: ['App iOS + Android + Web', 'IA integrada', 'Automatizaciones', 'Pagos y notificaciones', 'Análisis y reportes', 'Soporte 3 meses', 'Actualizaciones incluidas'],
  },
  {
    name: 'App Enterprise', sub: 'Para crecer sin límites', color: '#43e97b', badge: null,
    price: 'A medida', monthly: null,
    features: ['Multi-local / multi-usuario', 'IA avanzada personalizada', 'Integraciones complejas', 'SLA garantizado', 'Equipo dedicado', 'Soporte continuo'],
  },
];

// ─── Counter hook ────────────────────────────────────────────────────────────

const useCounter = (target: number, ms = 1800, active = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / ms, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, ms]);
  return val;
};

// ─── Component ───────────────────────────────────────────────────────────────

const AppsPersonalizadas = () => {
  const [wordIdx, setWordIdx]     = useState(0);
  const [typed, setTyped]         = useState('');
  const [statsOn, setStatsOn]     = useState(false);
  const [inView, setInView]       = useState<Set<string>>(new Set());
  const [hoveredApp, setHoveredApp] = useState<number | null>(null);

  // Typing effect
  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let i = 0;
    setTyped('');
    const iv = setInterval(() => {
      i++;
      setTyped(word.slice(0, i));
      if (i >= word.length) { clearInterval(iv); setTimeout(() => setWordIdx(p => (p + 1) % TYPED_WORDS.length), 1800); }
    }, 70);
    return () => clearInterval(iv);
  }, [wordIdx]);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && e.target.id) {
          setInView(prev => { const s = new Set(prev); s.add(e.target.id); return s; });
          if (e.target.id === 'stats-row') setStatsOn(true);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-anim]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const c50   = useCounter(50,  1800, statsOn);
  const c30   = useCounter(30,  1800, statsOn);
  const c98   = useCounter(98,  1800, statsOn);

  const vis = (id: string) => inView.has(id);

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Helmet>
        <title>Apps con IA Personalizadas para Negocios | RobotsConsultant Agency</title>
        <meta name="description" content="Desarrollamos apps personalizadas con inteligencia artificial para tu negocio: apps móviles, dashboards, chatbots, automatizaciones y más. Tecnología a medida sin complicaciones." />
        <link rel="canonical" href="https://robotsconsultant.net/apps-personalizadas" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Apps Personalizadas con IA",
          "provider": { "@type": "Organization", "name": "RobotsConsultant Agency" },
          "description": "Desarrollo de apps personalizadas con inteligencia artificial: apps móviles, dashboards, chatbots y automatizaciones para negocios.",
          "areaServed": "ES"
        })}</script>
      </Helmet>
      <style>{`
        @keyframes fadeUp   { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeLeft { from { opacity:0; transform:translateX(-36px) } to { opacity:1; transform:translateX(0) } }
        @keyframes fadeRight{ from { opacity:0; transform:translateX(36px) } to { opacity:1; transform:translateX(0) } }
        @keyframes floatY   { 0%,100%{ transform:translateY(0) rotate(0deg) } 50%{ transform:translateY(-14px) rotate(2deg) } }
        @keyframes floatSlow{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-22px) } }
        @keyframes pulseShadow { 0%,100%{ box-shadow:0 0 20px rgba(102,126,234,.35) } 50%{ box-shadow:0 0 55px rgba(102,126,234,.75),0 0 90px rgba(118,75,162,.35) } }
        @keyframes pulseRing { 0%{ transform:scale(1); opacity:.5 } 100%{ transform:scale(2.4); opacity:0 } }
        @keyframes scanLine  { 0%{ top:-2px; opacity:.8 } 100%{ top:100%; opacity:0 } }
        @keyframes gradMove  { 0%{ background-position:0% 50% } 50%{ background-position:100% 50% } 100%{ background-position:0% 50% } }
        @keyframes cursor    { 0%,100%{ border-color:#667eea } 50%{ border-color:transparent } }
        @keyframes drift     { 0%{ transform:translateY(0) rotate(0deg); opacity:.55 } 100%{ transform:translateY(-360px) translateX(var(--dx,0px)) rotate(360deg); opacity:0 } }
        @keyframes borderPulse { 0%,100%{ border-color:rgba(102,126,234,.15) } 50%{ border-color:rgba(102,126,234,.5) } }
        @keyframes progressLine { from{ width:0 } to{ width:100% } }
        @keyframes countIn   { from{ opacity:0; transform:translateY(16px) } to{ opacity:1; transform:translateY(0) } }
        @keyframes techFloat { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-8px) } }
        @keyframes bgOrb     { 0%,100%{ transform:scale(1) translate(0,0) } 50%{ transform:scale(1.2) translate(20px,-20px) } }

        .cursor-blink  { border-right:2px solid #667eea; padding-right:3px; animation:cursor .75s ease-in-out infinite; }
        .card-lift     { transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease; }
        .card-lift:hover{ transform:translateY(-8px) scale(1.015); }
        .float-slow    { animation:floatSlow 5s ease-in-out infinite; }
        .phone-glow    { animation:pulseShadow 3s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4  w-[520px] h-[520px] bg-[#667eea]/8  rounded-full blur-[110px]" style={{ animation:'bgOrb 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-[#764ba2]/8 rounded-full blur-[100px]" style={{ animation:'bgOrb 10s 2s ease-in-out infinite reverse' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f093fb]/4 rounded-full blur-[130px]" />
        </div>

        {/* Drifting code particles */}
        {['const ai = new Model()', 'fetch("/api/orders")', 'await predict(data)', '<YourApp />', 'npm run deploy', 'SELECT revenue FROM...', 'if (client.isPro)'].map((c, i) => (
          <div key={i} className="absolute text-[#667eea]/18 font-mono text-xs pointer-events-none select-none"
            style={{ left:`${7 + i*13}%`, top:`${8+(i%3)*24}%`, animation:`drift ${9+i*1.8}s ${i*1.1}s ease-in-out infinite`, '--dx':`${(i%3-1)*28}px` } as React.CSSProperties}>
            {c}
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left ── */}
            <div style={{ animation:'fadeLeft .8s ease-out both' }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#667eea]/15 to-[#764ba2]/15 border border-[#667eea]/25 text-[#667eea] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Apps personalizadas · IA incluida · Para tu negocio
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.07]">
                La app que necesita
                <br />
                <span className="bg-gradient-to-r from-[#667eea] via-[#f093fb] to-[#764ba2] bg-clip-text text-transparent"
                  style={{ backgroundSize:'200%', animation:'gradMove 4s ease infinite' }}>
                  <span className="cursor-blink">{typed}</span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                Desarrollamos apps móviles, plataformas web y sistemas de gestión completamente a medida,
                con <span className="text-[#667eea] font-semibold">inteligencia artificial integrada</span> desde el primer día.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button size="lg"
                  className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-2xl hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-8 py-6 text-base font-semibold group"
                  asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Solicitar presupuesto gratis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base">
                  Ver ejemplos
                </Button>
              </div>

              {/* Stats row */}
              <div id="stats-row" data-anim className="grid grid-cols-3 gap-4">
                {[
                  { n: c50,  s: '+', label: 'Apps entregadas' },
                  { n: c30,  s: '+', label: 'Clientes activos' },
                  { n: c98,  s: '%', label: 'Satisfacción' },
                ].map((st, i) => (
                  <div key={i}
                    className="text-center p-4 bg-white/[0.04] rounded-xl border border-white/[0.08] hover:border-[#667eea]/30 transition-colors"
                    style={{ animation: statsOn ? `countIn .5s ${i*.15}s ease-out both` : 'none' }}>
                    <p className="text-2xl md:text-3xl font-extrabold text-white">
                      {st.n}<span className="text-[#667eea]">{st.s}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Phone mockup ── */}
            <div className="relative flex justify-center items-center" style={{ animation:'fadeRight .8s .25s ease-out both' }}>
              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[0,1,2].map(i => (
                  <div key={i} className="absolute w-56 h-56 rounded-full border border-[#667eea]/20"
                    style={{ animation:`pulseRing 3.5s ${i*.9}s ease-out infinite` }} />
                ))}
              </div>

              <div className="relative z-10 float-slow">
                {/* Phone shell */}
                <div className="phone-glow bg-gradient-to-b from-[#1c1c2e] to-[#0e0e1a] rounded-[40px] p-2.5 border border-white/[0.12] shadow-2xl w-56">
                  {/* Top notch */}
                  <div className="w-16 h-4 bg-[#0e0e1a] rounded-full mx-auto mb-1" />
                  {/* Screen */}
                  <div className="bg-[#0d0d18] rounded-[30px] overflow-hidden relative" style={{ height:'360px' }}>
                    {/* Scan line */}
                    <div className="absolute left-0 right-0 h-[1px] z-20 pointer-events-none"
                      style={{ background:'linear-gradient(90deg,transparent,#667eea,#fff,#764ba2,transparent)', animation:'scanLine 3.5s linear infinite', boxShadow:'0 0 8px #667eea' }} />
                    <div className="p-3 h-full flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between mb-2">
                        <span className="text-[7px] text-gray-500">9:41</span>
                        <div className="flex gap-0.5">{[1,2,3].map(i=><div key={i} className="w-1 h-1 rounded-full bg-gray-500"/>)}</div>
                      </div>
                      {/* App header */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                          <Code2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[9px] font-bold text-white">Mi Negocio App</span>
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      </div>
                      {/* Metric cards */}
                      <div className="grid grid-cols-2 gap-1.5 mb-3">
                        {[
                          { l:'Pedidos', v:'47',    c:'#667eea' },
                          { l:'Ventas',  v:'€1.2K', c:'#764ba2' },
                          { l:'Clientes',v:'238',   c:'#4facfe' },
                          { l:'Stock',   v:'99%',   c:'#43e97b' },
                        ].map((m,i)=>(
                          <div key={i} className="rounded-lg p-2 bg-white/[0.05]" style={{borderLeft:`2px solid ${m.c}`}}>
                            <p className="text-[7px] text-gray-500">{m.l}</p>
                            <p className="text-[11px] font-bold text-white">{m.v}</p>
                          </div>
                        ))}
                      </div>
                      {/* AI bubble */}
                      <div className="bg-[#667eea]/10 border border-[#667eea]/20 rounded-xl p-2 mb-3">
                        <p className="text-[7px] font-semibold text-[#667eea] mb-1">🤖 IA Asistente</p>
                        <p className="text-[7px] text-gray-300 leading-tight">Hoy se esperan 20% más pedidos. Recomiendo preparar stock extra.</p>
                      </div>
                      {/* Mini chart */}
                      <div className="mt-auto">
                        <p className="text-[7px] text-gray-500 mb-1">Ventas 7 días</p>
                        <div className="flex items-end gap-1 h-10">
                          {[30,55,40,72,50,88,65].map((h,i)=>(
                            <div key={i} className="flex-1 rounded-t" style={{ height:`${h}%`, background:`linear-gradient(to top,#667eea,#764ba2)`, opacity:.5+i*.07 }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Home bar */}
                  <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-2" />
                </div>

                {/* Floating badges */}
                {[
                  { text:'IA integrada',    color:'#667eea', cls:'-left-20 top-10' },
                  { text:'Tiempo real',     color:'#43e97b', cls:'-right-20 top-16' },
                  { text:'iOS & Android',   color:'#f093fb', cls:'-left-24 bottom-20' },
                  { text:'Sin comisiones',  color:'#4facfe', cls:'-right-20 bottom-28' },
                ].map((b,i)=>(
                  <div key={i} className={`absolute ${b.cls} bg-[#111] border rounded-full px-3 py-1.5 text-[10px] font-semibold whitespace-nowrap`}
                    style={{ borderColor:b.color+'40', color:b.color, animation:`floatY ${3+i*.8}s ${i*.6}s ease-in-out infinite` }}>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TIPOS DE APPS ══════════════════════ */}
      <section className="py-24 px-4 bg-white/[0.02]" id="tipos" data-anim>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" style={{ animation: vis('tipos') ? 'fadeUp .6s ease-out both' : 'none' }}>
            <span className="text-[#667eea] font-semibold text-sm tracking-widest uppercase mb-3 block">¿Qué construimos?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Tu app, exactamente como la necesitas</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Nada genérico. Todo diseñado para tu sector, tus clientes y tu forma de trabajar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APP_TYPES.map(({ Icon, color, title, desc, tags }, i) => (
              <div key={i}
                className="card-lift relative group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 cursor-default overflow-hidden"
                style={{ animation: vis('tipos') ? `fadeUp .6s ${i*.1}s ease-out both` : 'none', borderColor: hoveredApp===i ? color+'40' : undefined }}
                onMouseEnter={() => setHoveredApp(i)}
                onMouseLeave={() => setHoveredApp(null)}>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background:`radial-gradient(circle at 50% 0%,${color}18,transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background:color+'1a', border:`1px solid ${color}30` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                        style={{ background:color+'18', color, border:`1px solid ${color}28` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ IA INTEGRADA ══════════════════════ */}
      <section className="py-24 px-4" id="ia-sec" data-anim>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Neural visual */}
            <div className="relative flex justify-center items-center"
              style={{ animation: vis('ia-sec') ? 'fadeLeft .7s ease-out both' : 'none' }}>
              <div className="relative w-80 h-80">
                {/* Center brain */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer glow rings */}
                  {[1,2,3].map(i => (
                    <div key={i} className="absolute rounded-full border border-[#667eea]/15"
                      style={{ width: 80+i*50, height: 80+i*50, animation:`pulseRing ${4+i}s ${i*.8}s ease-out infinite` }} />
                  ))}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-2xl z-10"
                    style={{ animation:'pulseShadow 3s ease-in-out infinite' }}>
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
                {/* Tech badges orbiting (fixed positions + float animation) */}
                {TECH.map((tech, i) => {
                  const angle = (i / TECH.length) * Math.PI * 2 - Math.PI/2;
                  const r = i % 2 === 0 ? 108 : 142;
                  return (
                    <div key={i} className="absolute"
                      style={{
                        left: `calc(50% + ${Math.cos(angle)*r}px)`,
                        top:  `calc(50% + ${Math.sin(angle)*r}px)`,
                        transform: 'translate(-50%,-50%)',
                        animation: `techFloat ${3+i*.4}s ${i*.3}s ease-in-out infinite`,
                      }}>
                      <span className="bg-[#111] border border-white/10 rounded-full px-2.5 py-1 text-[9px] font-mono text-[#667eea] whitespace-nowrap shadow-lg">
                        {tech}
                      </span>
                    </div>
                  );
                })}
                {/* SVG connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity:.12 }}>
                  {Array.from({length:8},(_,i)=>{
                    const a = (i/8)*Math.PI*2;
                    return <line key={i} x1={160+Math.cos(a)*48} y1={160+Math.sin(a)*48} x2={160+Math.cos(a)*105} y2={160+Math.sin(a)*105} stroke="#667eea" strokeWidth="1"/>;
                  })}
                </svg>
              </div>
            </div>

            {/* Features */}
            <div style={{ animation: vis('ia-sec') ? 'fadeRight .7s .2s ease-out both' : 'none' }}>
              <span className="text-[#667eea] font-semibold text-sm tracking-widest uppercase mb-3 block">
                IA real, no de marketing
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Tu app aprende y mejora con el tiempo
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                No integramos IA porque está de moda. La usamos donde reduce trabajo,
                aumenta ventas y mejora la experiencia del cliente.
              </p>
              <div className="space-y-4">
                {AI_FEATURES.map((f, i) => (
                  <div key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.07] hover:border-[#667eea]/25 transition-all duration-300"
                    style={{ animation: vis('ia-sec') ? `fadeUp .5s ${.3+i*.1}s ease-out both` : 'none' }}>
                    <span className="text-2xl mt-0.5">{f.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">{f.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROCESO ══════════════════════ */}
      <section className="py-24 px-4 bg-white/[0.02]" id="proceso" data-anim>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" style={{ animation: vis('proceso') ? 'fadeUp .6s ease-out both' : 'none' }}>
            <span className="text-[#667eea] font-semibold text-sm tracking-widest uppercase mb-3 block">Cómo trabajamos</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">De la idea a producción</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Sin jerga técnica, sin sorpresas. Un proceso claro.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Animated progress line */}
            {vis('proceso') && (
              <div className="hidden md:block absolute top-10 left-[14%] right-[14%] h-px bg-gradient-to-r from-[#667eea] to-[#764ba2] opacity-30"
                style={{ animation:'progressLine 1.5s .4s ease-out both' }} />
            )}
            {STEPS.map((step, i) => (
              <div key={i} className="relative text-center"
                style={{ animation: vis('proceso') ? `fadeUp .6s ${i*.15}s ease-out both` : 'none' }}>
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-5 mx-auto transition-transform duration-300 hover:scale-110"
                  style={{ background:'linear-gradient(135deg,rgba(102,126,234,.15),rgba(118,75,162,.15))', border:'1px solid rgba(102,126,234,.25)', animation:`borderPulse 3s ${i*.5}s ease-in-out infinite` }}>
                  <span className="text-3xl">{step.icon}</span>
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg">
                    <span className="text-[9px] font-bold text-white">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SHOWCASE ══════════════════════ */}
      <section className="py-24 px-4" id="showcase" data-anim>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" style={{ animation: vis('showcase') ? 'fadeUp .6s ease-out both' : 'none' }}>
            <span className="text-[#667eea] font-semibold text-sm tracking-widest uppercase mb-3 block">Ejemplos reales</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Apps que ya están funcionando</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Soluciones que hemos construido para negocios como el tuyo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SHOWCASES.map((app, i) => (
              <div key={i} className="card-lift rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]"
                style={{ animation: vis('showcase') ? `fadeUp .6s ${i*.15}s ease-out both` : 'none' }}>
                {/* Fake browser top */}
                <div className="relative p-4 bg-[#0d0d18]" style={{ borderBottom:`1px solid ${app.color}28` }}>
                  <div className="flex items-center gap-1.5 mb-3">
                    {['#ff5f57','#febc2e','#28c840'].map((c,j)=>(
                      <div key={j} className="w-2.5 h-2.5 rounded-full" style={{ background:c }} />
                    ))}
                    <div className="flex-1 h-4 bg-white/[0.05] rounded ml-2 flex items-center justify-center">
                      <span className="text-[8px] text-gray-600 font-mono">{app.domain}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {app.metrics.map((m,j)=>(
                      <div key={j} className="rounded-lg p-2 text-center" style={{ background:app.color+'14', border:`1px solid ${app.color}25` }}>
                        <p className="text-[7px] text-gray-500">{m.l}</p>
                        <p className="text-[11px] font-bold text-white mt-0.5">{m.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-base mb-3">{app.title}</h3>
                  <div className="space-y-2">
                    {app.features.map((f,j)=>(
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color:app.color }} />
                        <span className="text-gray-400 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRICING ══════════════════════ */}
      <section className="py-24 px-4 bg-white/[0.02]" id="pricing" data-anim>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" style={{ animation: vis('pricing') ? 'fadeUp .6s ease-out both' : 'none' }}>
            <span className="text-[#667eea] font-semibold text-sm tracking-widest uppercase mb-3 block">Inversión</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Planes según tu negocio</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Cada proyecto es distinto. Estos son puntos de partida. El presupuesto final es personalizado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan, i) => (
              <div key={i}
                className={`card-lift relative rounded-2xl p-7 border bg-white/[0.04] ${plan.badge ? 'border-[#f093fb]/35' : 'border-white/10'}`}
                style={{ animation: vis('pricing') ? `fadeUp .6s ${i*.12}s ease-out both` : 'none' }}>
                {plan.badge && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">{plan.badge}</span>
                  </div>
                )}
                <div className="mb-5 mt-3">
                  <span className="inline-block w-3 h-3 rounded-full mb-3" style={{ background:plan.color }} />
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{plan.sub}</p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl font-extrabold text-white">{plan.price}</p>
                  {plan.monthly && <p className="text-gray-500 text-xs mt-1">{plan.monthly}</p>}
                </div>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f,j)=>(
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color:plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full font-semibold ${plan.badge ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-xl hover:shadow-[#667eea]/30 text-white border-0' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}
                  asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Solicitar info {plan.badge && <ArrowRight className="ml-2 h-4 w-4" />}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA FINAL ══════════════════════ */}
      <section className="py-28 px-4 relative overflow-hidden" id="cta" data-anim>
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse at 50% 50%,rgba(102,126,234,.12),transparent 68%)' }} />
          {Array.from({length:8},(_,i)=>(
            <div key={i} className="absolute rounded-full"
              style={{
                width:5+(i%3)*5, height:5+(i%3)*5,
                background: i%2 ? '#667eea' : '#764ba2',
                left:`${10+i*11}%`, top:`${15+(i%3)*25}%`,
                opacity:.35,
                animation:`floatY ${4+i}s ${i*.7}s ease-in-out infinite`,
              }} />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center"
          style={{ animation: vis('cta') ? 'fadeUp .8s ease-out both' : 'none' }}>
          <div className="inline-flex items-center gap-2 bg-[#667eea]/10 border border-[#667eea]/25 text-[#667eea] px-4 py-2 rounded-full text-sm font-semibold mb-7">
            <Zap className="w-4 h-4" />
            Presupuesto en 24h · Sin compromiso
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            ¿Tienes una idea?<br />
            <span className="bg-gradient-to-r from-[#667eea] via-[#f093fb] to-[#764ba2] bg-clip-text text-transparent"
              style={{ backgroundSize:'200%', animation:'gradMove 4s ease infinite' }}>
              Vamos a construirla.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos qué necesitas. Te enviamos un presupuesto detallado en menos de 24 horas,
            sin rodeos y sin letra pequeña.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg"
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-2xl hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-10 py-7 text-lg font-bold group"
              asChild>
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                📲 Hablar por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg"
              asChild>
              <a href="mailto:info@robotsconsultant.net">✉️ Enviar email</a>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-8">
            O llámanos directamente:{' '}
            <a href="tel:+34654942720" className="text-[#667eea] hover:underline">+34 654 94 27 20</a>
          </p>
        </div>
      </section>

      {/* ══════════════════════ SOBRE MÍ ══════════════════════ */}
      <section className="py-24 px-4 bg-white/[0.02] border-t border-white/[0.06]" id="sobre-mi" data-anim>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="relative flex justify-center"
              style={{ animation: vis('sobre-mi') ? 'fadeLeft .8s ease-out both' : 'none' }}>
              <div className="relative">
                {/* Decorative gradient ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#667eea] via-[#f093fb] to-[#764ba2] opacity-60 blur-sm" />
                <div className="absolute -inset-[3px] rounded-3xl bg-[#0a0a0a]" />
                {/* Photo */}
                <div className="relative rounded-3xl overflow-hidden w-80 h-[420px]">
                  <img
                    src="/fotomia.png"
                    alt="Oscarina Hernández — Robots Consultant"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                </div>
                {/* Floating badge on photo */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xl whitespace-nowrap"
                  style={{ animation:'floatY 3s ease-in-out infinite' }}>
                  ⚡ Ing. Oscarina Hernández
                </div>
                {/* Side decoration */}
                <div className="absolute -right-6 top-16 w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/30 flex items-center justify-center"
                  style={{ animation:'floatY 4s .5s ease-in-out infinite' }}>
                  <Brain className="w-6 h-6 text-[#667eea]" />
                </div>
                <div className="absolute -left-6 bottom-24 w-12 h-12 rounded-xl bg-gradient-to-br from-[#f093fb]/20 to-[#764ba2]/20 border border-[#f093fb]/30 flex items-center justify-center"
                  style={{ animation:'floatY 3.5s 1s ease-in-out infinite' }}>
                  <Code2 className="w-6 h-6 text-[#f093fb]" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div style={{ animation: vis('sobre-mi') ? 'fadeRight .8s .2s ease-out both' : 'none' }}>
              <span className="text-[#667eea] font-semibold text-sm tracking-widest uppercase mb-3 block">
                Quién hay detrás
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Hola, soy Oscarina.
                <br />
                <span className="bg-gradient-to-r from-[#667eea] to-[#f093fb] bg-clip-text text-transparent">
                  Construyo tecnología para negocios reales.
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                <p>
                  Soy Ingeniera especialista en robótica, automatización e inteligencia artificial,
                  con más de 10 años ayudando a empresas a dejar de trabajar <em className="text-white">para</em> su negocio
                  y empezar a trabajar <em className="text-white">con</em> él.
                </p>
                <p>
                  Combino experiencia técnica con visión de negocio real. Cada app, cada automatización
                  y cada sistema que construyo tiene un único objetivo: que <span className="text-white font-medium">tu negocio funcione mejor
                  con menos esfuerzo tuyo</span>.
                </p>
                <p>
                  Directora de <span className="text-[#667eea] font-medium">Robots Consultant Agency</span>,
                  creadora de contenido sobre IA y tecnología, y apasionada de llevar la innovación
                  a negocios que la merecen.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: '🎓', text: 'Ing. en Robótica Industrial' },
                  { icon: '🤖', text: 'Especialista en IA & Automatización' },
                  { icon: '🏆', text: 'Partner Oficial Odoo' },
                  { icon: '📺', text: 'Canal educativo YouTube' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]"
                    style={{ animation: vis('sobre-mi') ? `fadeUp .5s ${.4+i*.08}s ease-out both` : 'none' }}>
                    <span className="text-lg">{c.icon}</span>
                    <span className="text-gray-300 text-xs font-medium">{c.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg"
                  className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-xl hover:shadow-[#667eea]/30 text-white border-0 rounded-full px-7 py-5 font-semibold group"
                  asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Hablemos de tu proyecto
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-7 py-5"
                  asChild>
                  <a href="https://www.linkedin.com/in/ing-oscarina-hernandez/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppsPersonalizadas;
