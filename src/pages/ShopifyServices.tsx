import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle, Zap, Code, Palette, ShoppingBag, Bot, Sparkles, ArrowRight, TrendingUp, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FLOATING_PRODUCTS = [
  { name: 'Sneaker Pro', price: '€129', emoji: '👟', color: '#667eea' },
  { name: 'Luxury Watch', price: '€890', emoji: '⌚', color: '#764ba2' },
  { name: 'Handmade Bag', price: '€245', emoji: '👜', color: '#f093fb' },
  { name: 'Smart Lamp', price: '€79', emoji: '💡', color: '#4facfe' },
];

const ShopifyServices = () => {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    // Scroll-reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.animationDelay = (el.dataset.delay ?? '0') + 'ms';
          el.classList.add('sh-visible');
          // also keep slide-in-section support
          el.classList.add('visible');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-sh], .slide-in-section').forEach(el => obs.observe(el));

    // Stats counter
    const statsEl = document.getElementById('sh-stats');
    if (statsEl) {
      const sObs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { setCounted(true); sObs.disconnect(); }
      }, { threshold: 0.5 });
      sObs.observe(statsEl);
      return () => { obs.disconnect(); sObs.disconnect(); };
    }
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>Desarrollo Shopify: Temas y Apps Personalizadas | RobotsConsultant</title>
        <meta name="description" content="Desarrollamos temas y apps personalizadas para Shopify con IA integrada. Tiendas de alto rendimiento, integraciones avanzadas y automatización de ventas. Consulta gratuita." />
        <link rel="canonical" href="https://robotsconsultant.net/shopify" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Desarrollo Shopify: Temas y Apps",
          "provider": { "@type": "Organization", "name": "RobotsConsultant Agency" },
          "description": "Desarrollo de temas Shopify y apps personalizadas con IA para tiendas online de alto rendimiento.",
          "areaServed": "ES"
        })}</script>
      </Helmet>
      <Navbar />

      <style>{`
        /* ── Scroll-reveal ── */
        [data-sh], .slide-in-section { opacity:0; transform:translateY(26px); }
        .sh-visible, .slide-in-section.visible { animation: shFadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        [data-sh="left"].sh-visible  { animation: shLeft  0.6s cubic-bezier(.22,1,.36,1) both; }
        [data-sh="right"].sh-visible { animation: shRight 0.6s cubic-bezier(.22,1,.36,1) both; }
        [data-sh="scale"].sh-visible { animation: shScale 0.6s cubic-bezier(.22,1,.36,1) both; }

        @keyframes shFadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shLeft   { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes shRight  { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes shScale  { from{opacity:0;transform:scale(.86)}         to{opacity:1;transform:scale(1)} }

        /* ── Hero orbs ── */
        @keyframes shOrb { 0%,100%{transform:translate(0,0)} 40%{transform:translate(30px,-25px)} 70%{transform:translate(-15px,18px)} }
        .sh-orb1 { animation: shOrb 14s ease-in-out infinite; }
        .sh-orb2 { animation: shOrb 18s ease-in-out infinite reverse; }
        .sh-orb3 { animation: shOrb 11s ease-in-out infinite 4s; }

        /* ── Floating product cards ── */
        @keyframes shFloat { 0%,100%{transform:translateY(0) rotate(var(--rot,0deg))} 50%{transform:translateY(-12px) rotate(var(--rot,0deg))} }
        .sh-float-1 { animation: shFloat 3.5s ease-in-out infinite; --rot:-3deg; }
        .sh-float-2 { animation: shFloat 4.2s ease-in-out infinite 0.6s; --rot:2deg; }
        .sh-float-3 { animation: shFloat 3.8s ease-in-out infinite 1.1s; --rot:-1.5deg; }
        .sh-float-4 { animation: shFloat 4.6s ease-in-out infinite 0.3s; --rot:3deg; }

        /* ── Shopping cart pulse ── */
        @keyframes cartPulse { 0%,100%{box-shadow:0 0 0 0 rgba(102,126,234,0)} 50%{box-shadow:0 0 40px 8px rgba(102,126,234,.35)} }
        .cart-pulse { animation: cartPulse 2.5s ease-in-out infinite; }

        /* ── Gradient sweep ── */
        @keyframes shGrad { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .sh-grad { background-size:200% auto; animation: shGrad 4s ease infinite; }

        /* ── Counter pop ── */
        @keyframes shPop { from{opacity:0;transform:scale(.6) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        .sh-pop { animation: shPop .5s cubic-bezier(.34,1.56,.64,1) both; }

        /* ── Card hover ── */
        .sh-card { transition: transform .25s, box-shadow .25s; }
        .sh-card:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(102,126,234,.2); }

        /* ── Blinking dot ── */
        @keyframes shBlink { 0%,100%{opacity:1} 50%{opacity:.3} }
        .sh-blink { animation: shBlink 1.4s ease-in-out infinite; }

        /* ── Progress bars ── */
        @keyframes shBar { from{width:0} to{width:var(--w)} }
        .sh-bar { animation: shBar 1.4s cubic-bezier(.22,1,.36,1) 0.4s both; }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        {/* Orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="sh-orb1 absolute -top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#667eea]/10 blur-[100px]" />
          <div className="sh-orb2 absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#764ba2]/12 blur-[90px]" />
          <div className="sh-orb3 absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#f093fb]/6 blur-[70px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div>
              <div data-sh data-delay="0" className="mb-5">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#667eea]/15 to-[#764ba2]/15 border border-[#667eea]/25 text-[#667eea] px-4 py-1.5 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-400 sh-blink" />
                  Shopify Expert Partner
                </span>
              </div>

              <h1 data-sh data-delay="80" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Desarrollo{' '}
                <span className="bg-gradient-to-r from-[#667eea] via-[#a855f7] to-[#f093fb] bg-clip-text text-transparent sh-grad">
                  Shopify
                </span>{' '}
                Personalizado
              </h1>

              <p data-sh data-delay="160" className="text-lg text-gray-400 mb-3 leading-relaxed">
                Temas únicos, Apps personalizadas y Automatizaciones con IA para tu tienda.
              </p>
              <p data-sh data-delay="200" className="text-gray-500 mb-8 leading-relaxed">
                Transformamos tu visión en una tienda de alto rendimiento con diseño exclusivo,
                funcionalidades a medida y ventas en piloto automático.
              </p>

              <div data-sh data-delay="260" className="flex flex-wrap gap-3 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-8 text-base font-semibold transition-all hover:scale-105" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Solicita tu Presupuesto Personalizado
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div id="sh-stats" data-sh data-delay="320" className="flex flex-wrap gap-6">
                {[
                  { n: '120+', label: 'Tiendas lanzadas' },
                  { n: '+40%', label: 'Conv. media' },
                  { n: '48h', label: 'Presupuesto' },
                ].map((s, i) => (
                  <div key={i} className={`text-center ${counted ? 'sh-pop' : 'opacity-0'}`} style={{ animationDelay: i * 100 + 'ms' }}>
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#f093fb] bg-clip-text text-transparent">{s.n}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating product cards + fake store */}
            <div data-sh="scale" data-delay="100" className="relative flex items-center justify-center min-h-[400px]">

              {/* Central store mockup */}
              <div className="relative z-10 w-36 h-44 rounded-2xl bg-[#111120] border border-white/[0.08] shadow-2xl cart-pulse flex flex-col overflow-hidden">
                {/* Fake toolbar */}
                <div className="flex items-center gap-1 px-2 py-1.5 bg-white/[0.04] border-b border-white/[0.06]">
                  {['#ff5f57','#febc2e','#28c840'].map((c,i)=>(
                    <div key={i} className="w-1.5 h-1.5 rounded-full" style={{background:c}} />
                  ))}
                </div>
                {/* Store header */}
                <div className="h-6 bg-gradient-to-r from-[#667eea]/30 to-[#764ba2]/30 flex items-center px-2">
                  <div className="w-8 h-1.5 bg-white/20 rounded-full" />
                </div>
                {/* Product grid */}
                <div className="flex-1 p-2 grid grid-cols-2 gap-1">
                  {[
                    { c:'#667eea' },
                    { c:'#764ba2' },
                    { c:'#f093fb' },
                    { c:'#4facfe' },
                  ].map((p,i)=>(
                    <div key={i} className="rounded bg-white/[0.05] overflow-hidden" style={{height:'36px'}}>
                      <div className="h-3/4 rounded-t" style={{background:`${p.c}22`}} />
                      <div className="px-1 py-0.5">
                        <div className="h-1 bg-white/10 rounded-full w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Add to cart button */}
                <div className="p-1.5">
                  <div className="h-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center">
                    <span className="text-[7px] font-bold text-white">Add to cart ✓</span>
                  </div>
                </div>
              </div>

              {/* Floating product cards */}
              {FLOATING_PRODUCTS.map((prod, i) => {
                const positions = [
                  'top-4 left-0',
                  'top-4 right-0',
                  'bottom-8 left-2',
                  'bottom-4 right-0',
                ];
                const floatClasses = ['sh-float-1','sh-float-2','sh-float-3','sh-float-4'];
                return (
                  <div key={i} className={`absolute ${positions[i]} ${floatClasses[i]} z-20`}>
                    <div className="bg-[#111120] border border-white/[0.1] rounded-xl px-3 py-2 shadow-xl min-w-[110px]"
                      style={{ borderColor: prod.color + '30' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{prod.emoji}</span>
                        <div>
                          <p className="text-[9px] text-gray-400 leading-none">{prod.name}</p>
                          <p className="text-[11px] font-bold" style={{ color: prod.color }}>{prod.price}</p>
                        </div>
                      </div>
                      <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className="sh-bar h-full rounded-full" style={{ '--w': `${55 + i * 12}%`, background: `${prod.color}99` } as React.CSSProperties} />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* AI badge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 border border-[#667eea]/25 rounded-full px-4 py-1.5 flex items-center gap-2 sh-float-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#667eea] sh-blink" />
                <span className="text-[11px] font-semibold text-[#667eea]">IA activa · +40% conversión</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-sh className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white">
            Nuestros Servicios <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Shopify</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card data-sh data-delay="0" className="bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300 sh-card">
              <CardHeader>
                <Palette className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-2xl text-white">🎨 Temas Personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Diseñamos y desarrollamos temas Shopify únicos que reflejan perfectamente tu marca
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Diseño 100% personalizado y responsive</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Optimizado para conversiones y SEO</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Compatible con todas las apps de Shopify</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Velocidad de carga ultrarrápida</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Editor personalizado para tu equipo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card data-sh data-delay="120" className="bg-white/[0.04] border border-white/10 hover:border-[#764ba2]/30 transition-all duration-300 sh-card">
              <CardHeader>
                <Code className="w-12 h-12 text-[#764ba2] mb-4" />
                <CardTitle className="text-2xl text-white">⚙️ Apps Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Creamos aplicaciones a medida para añadir funcionalidades específicas a tu tienda
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                    <span>Integraciones con sistemas externos (ERP, CRM)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                    <span>Calculadoras de precios personalizadas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                    <span>Sistemas de suscripciones avanzados</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                    <span>Gestión de inventario personalizada</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#764ba2] mt-0.5 flex-shrink-0" />
                    <span>Soluciones B2B y mayoristas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card data-sh data-delay="240" className="bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300 sh-card">
              <CardHeader>
                <Bot className="w-12 h-12 text-[#667eea] mb-4" />
                <CardTitle className="text-2xl text-white">🤖 Automatizaciones con IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Implementamos inteligencia artificial para automatizar y optimizar tu negocio
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Chatbots IA para atención al cliente 24/7</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Recomendaciones de productos inteligentes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Optimización de precios dinámica</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Automatización de marketing y emails</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#667eea] mt-0.5 flex-shrink-0" />
                    <span>Análisis predictivo de ventas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DESARROLLO DE TEMAS Y APPS SHOPIFY — SECCIÓN DETALLADA
          ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#667eea]/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#764ba2]/6 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Header */}
          <div className="text-center mb-16 slide-in-section">
            <span className="inline-block bg-gradient-to-r from-[#667eea]/15 to-[#764ba2]/15 border border-[#667eea]/20 text-[#667eea] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Desarrollo propio · Desde cero · A tu medida
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Temas y Apps Shopify{' '}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                100% personalizados
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              No plantillas genéricas. Construimos exactamente lo que tu negocio necesita,
              con código limpio, escalable y documentado.
            </p>
          </div>

          {/* Two main columns */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* ── Temas ── */}
            <div className="slide-in-section group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#667eea]/30 transition-all duration-300">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#667eea]/15 border border-[#667eea]/25 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-7 h-7 text-[#667eea]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Temas Shopify a Medida</h3>
                    <p className="text-[#667eea] text-sm font-medium">Diseño exclusivo · Liquid · Dawn</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Tu tienda merece una identidad única. Desarrollamos temas Shopify desde cero o
                  personalizamos profundamente los existentes, adaptando cada detalle a tu marca y
                  optimizando cada página para convertir visitas en ventas.
                </p>

                {/* What's included */}
                <div className="space-y-3 mb-7">
                  {[
                    { icon: '🎨', title: 'Diseño UI/UX exclusivo',        desc: 'Wireframes, mockups y diseño final adaptado a tu marca' },
                    { icon: '📱', title: 'Responsive perfecto',            desc: 'Experiencia impecable en móvil, tablet y escritorio' },
                    { icon: '⚡', title: 'Velocidad Core Web Vitals',      desc: 'Optimizado para Google. Carga ultra-rápida.' },
                    { icon: '🛒', title: 'Flujo de compra optimizado',     desc: 'Checkout, cart y product pages diseñados para convertir' },
                    { icon: '✏️', title: 'Editor personalizado',           desc: 'Tu equipo puede editar contenido sin tocar código' },
                    { icon: '🔌', title: 'Compatible con apps populares',  desc: 'Klaviyo, Reviews, Loyalty y todas las apps que uses' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors">
                      <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-white text-sm font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {['Liquid', 'HTML/CSS', 'JavaScript', 'Dawn', 'Shopify CLI', 'Figma'].map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#667eea]/12 text-[#667eea] border border-[#667eea]/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Fake theme preview */}
                <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d0d18] p-3 mb-7">
                  <div className="flex items-center gap-1.5 mb-2">
                    {['#ff5f57','#febc2e','#28c840'].map((c,i)=><div key={i} className="w-2 h-2 rounded-full" style={{background:c}}/>)}
                    <div className="flex-1 h-3 bg-white/[0.05] rounded ml-2 flex items-center px-2">
                      <span className="text-[7px] text-gray-600 font-mono">yourstore.myshopify.com</span>
                    </div>
                  </div>
                  {/* Fake product page */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-white/[0.06]" style={{height:'70px'}} />
                    <div className="space-y-1.5 py-1">
                      <div className="h-2 bg-white/10 rounded w-3/4" />
                      <div className="h-2 bg-white/10 rounded w-1/2" />
                      <div className="h-2 bg-[#667eea]/30 rounded w-1/3 mt-2" />
                      <div className="h-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full w-full mt-2" />
                    </div>
                  </div>
                </div>

                {/* Price range */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#667eea]/8 border border-[#667eea]/15 mb-6">
                  <div>
                    <p className="text-xs text-gray-500">Desde</p>
                    <p className="text-2xl font-extrabold text-white">1.500 €</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Incluye</p>
                    <p className="text-xs text-gray-300">Diseño + Desarrollo + Formación</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/30 text-white border-0 rounded-full font-semibold group" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Quiero un tema personalizado
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* ── Apps ── */}
            <div className="slide-in-section group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#764ba2]/30 transition-all duration-300">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#764ba2] to-[#f093fb]" />
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#764ba2]/15 border border-[#764ba2]/25 flex items-center justify-center flex-shrink-0">
                    <Code className="w-7 h-7 text-[#764ba2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Apps Shopify Personalizadas</h3>
                    <p className="text-[#764ba2] text-sm font-medium">App Bridge · Admin API · Webhooks</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Cuando las apps del marketplace no hacen exactamente lo que necesitas,
                  desarrollamos la tuya. Integrada nativamente en Shopify, con la lógica de
                  negocio que tu tienda requiere y sin pagar comisiones de por vida.
                </p>

                {/* Types of apps */}
                <div className="space-y-3 mb-7">
                  {[
                    { icon: '🔗', title: 'Integraciones con ERP/CRM',        desc: 'Conecta Shopify con Odoo, SAP, HubSpot o cualquier sistema' },
                    { icon: '💰', title: 'Calculadoras de precio dinámico',   desc: 'Presupuestadores, configuradores y precios por volumen' },
                    { icon: '🔄', title: 'Sistemas de suscripción propios',   desc: 'Suscripciones sin depender de apps de terceros' },
                    { icon: '📦', title: 'Gestión de inventario avanzada',    desc: 'Multi-almacén, alertas, reposición automática' },
                    { icon: '🏢', title: 'Portales B2B y mayoristas',         desc: 'Precios por cliente, pedidos mínimos, aprobaciones' },
                    { icon: '🤖', title: 'Apps con IA integrada',             desc: 'Recomendaciones, chatbots y análisis predictivo' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors">
                      <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-white text-sm font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {['Node.js', 'React', 'App Bridge', 'Admin API', 'Webhooks', 'Polaris'].map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#764ba2]/12 text-[#764ba2] border border-[#764ba2]/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Fake app preview */}
                <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d0d18] p-3 mb-7">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-[#764ba2] to-[#f093fb]" />
                    <span className="text-[8px] font-mono text-[#764ba2]">My Custom App · Shopify Admin</span>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mb-2">
                    {[
                      { l:'Pedidos sync', v:'1.248', c:'#764ba2' },
                      { l:'Stock alerts', v:'3', c:'#f093fb' },
                      { l:'B2B clients', v:'47', c:'#4facfe' },
                    ].map((m,i)=>(
                      <div key={i} className="rounded-lg p-2 bg-white/[0.05]" style={{borderLeft:`2px solid ${m.c}`}}>
                        <p className="text-[7px] text-gray-500">{m.l}</p>
                        <p className="text-[10px] font-bold text-white">{m.v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#764ba2] to-[#f093fb] rounded-full" style={{width:'78%'}} />
                  </div>
                  <p className="text-[7px] text-gray-600 mt-1">Sincronización ERP — 78% completada</p>
                </div>

                {/* Price range */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#764ba2]/8 border border-[#764ba2]/15 mb-6">
                  <div>
                    <p className="text-xs text-gray-500">Desde</p>
                    <p className="text-2xl font-extrabold text-white">2.500 €</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Incluye</p>
                    <p className="text-xs text-gray-300">Desarrollo + Integración + Soporte</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#764ba2] to-[#f093fb] hover:shadow-lg hover:shadow-[#764ba2]/30 text-white border-0 rounded-full font-semibold group" asChild>
                  <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer">
                    Quiero una app personalizada
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom trust bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500 slide-in-section">
            {[
              '✅ Código limpio y documentado',
              '✅ Cumple las políticas de Shopify',
              '✅ Mantenimiento y actualizaciones',
              '✅ Presupuesto sin compromiso',
            ].map((item, i) => (
              <span key={i} className="text-gray-400">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white slide-in-section">
            ¿Por Qué <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Elegirnos</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-[#667eea] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Experiencia Especializada</h3>
                <p className="text-gray-400">
                  Somos expertos certificados en Shopify con años de experiencia desarrollando 
                  soluciones para todo tipo de negocios, desde pequeñas boutiques hasta grandes retailers.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#764ba2]/30 transition-all duration-300">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-[#764ba2] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Enfoque en Resultados</h3>
                <p className="text-gray-400">
                  No solo creamos código bonito, creamos soluciones que aumentan tus ventas, 
                  mejoran la experiencia del cliente y reducen tus costos operativos.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
              <CardContent className="p-6">
                <Code className="w-10 h-10 text-[#667eea] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Código de Calidad</h3>
                <p className="text-gray-400">
                  Seguimos las mejores prácticas de Shopify y escribimos código limpio, 
                  documentado y fácil de mantener para que tu tienda sea escalable.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#764ba2]/30 transition-all duration-300">
              <CardContent className="p-6">
                <Bot className="w-10 h-10 text-[#764ba2] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Innovación con IA</h3>
                <p className="text-gray-400">
                  Integramos las últimas tecnologías de inteligencia artificial para 
                  automatizar procesos y ofrecer experiencias de compra únicas a tus clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso IA */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#764ba2]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white slide-in-section">
            Casos de Uso de <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">IA en Shopify</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Descubre cómo la inteligencia artificial puede transformar tu tienda Shopify
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Bot className="w-6 h-6 text-[#667eea]" />
                  <span>Asistente de Ventas IA</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Un chatbot inteligente que atiende consultas, recomienda productos y 
                  ayuda a completar la compra, aumentando la conversión hasta un 40%.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    <span>Respuestas instantáneas 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    <span>Recomendaciones personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    <span>Gestión de carritos abandonados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#764ba2]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Sparkles className="w-6 h-6 text-[#764ba2]" />
                  <span>Generación de Contenido</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  IA que genera descripciones de productos optimizadas para SEO, 
                  emails de marketing personalizados y contenido para redes sociales.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#764ba2]" />
                    <span>Descripciones SEO optimizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#764ba2]" />
                    <span>Emails automáticos personalizados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#764ba2]" />
                    <span>Posts para redes sociales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#667eea]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Zap className="w-6 h-6 text-[#667eea]" />
                  <span>Optimización de Precios</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Algoritmos de IA que ajustan precios dinámicamente según demanda, 
                  competencia y otros factores para maximizar tus ganancias.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    <span>Precios dinámicos automáticos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    <span>Análisis de competencia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    <span>Maximización de márgenes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="slide-in-section bg-white/[0.04] border border-white/10 hover:border-[#764ba2]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <ShoppingBag className="w-6 h-6 text-[#764ba2]" />
                  <span>Búsqueda Visual Inteligente</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Los clientes pueden buscar productos subiendo fotos, 
                  y la IA encuentra artículos similares en tu catálogo.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#764ba2]" />
                    <span>Búsqueda por imagen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#764ba2]" />
                    <span>Reconocimiento de productos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-[#764ba2]" />
                    <span>Experiencia de compra mejorada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white slide-in-section">
            Nuestro <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Proceso</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { num: '1', title: 'Consulta Inicial', desc: 'Entendemos tus necesidades, objetivos y visión para tu tienda Shopify' },
              { num: '2', title: 'Propuesta & Diseño', desc: 'Creamos mockups y una propuesta técnica detallada con presupuesto' },
              { num: '3', title: 'Desarrollo', desc: 'Desarrollamos tu solución con actualizaciones regulares y feedback' },
              { num: '4', title: 'Lanzamiento & Soporte', desc: 'Implementamos y te acompañamos con soporte continuo' },
            ].map((step, si) => (
              <Card key={step.num} data-sh data-delay={si * 100} className="text-center bg-white/[0.04] border border-white/10 sh-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 slide-in-section">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
            ¿Listo para Llevar tu Tienda Shopify al <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Siguiente Nivel</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Contáctanos hoy y descubre cómo podemos transformar tu visión en una tienda Shopify exitosa
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300">
              <a href="mailto:info@robotsconsultant.net" className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@robotsconsultant.net</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white/[0.05] border border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300">
              <a href="https://wa.me/34654942720" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+34 654 94 27 20</span>
              </a>
            </Button>
          </div>
          
          <p className="text-lg font-semibold text-gray-400">
            Consulta gratuita sin compromiso • Presupuesto personalizado en 48h
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopifyServices;
