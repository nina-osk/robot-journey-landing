import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

type Phase = 'idle' | 'person' | 'cloning' | 'monitor' | 'ai';
interface AiMsg { text: string; done: boolean; }

// ─── PersonSVG ────────────────────────────────────────────────────────────────

const PersonSVG = ({ uid, ghost }: { uid: string; ghost?: boolean }) => {
  const g = `pg_${uid}`;
  const a = ghost ? 0.35 : 1;
  return (
    <svg viewBox="0 0 80 116" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="80" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#667eea" stopOpacity={a} />
          <stop offset="100%" stopColor="#764ba2" stopOpacity={a} />
        </linearGradient>
      </defs>
      {/* Head */}
      <circle cx="40" cy="20" r="16" fill={`url(#${g})`} />
      {/* Body */}
      <path d="M18 40 Q20 33 40 33 Q60 33 62 40 L66 86 Q66 93 54 93 L26 93 Q14 93 14 86 Z"
        fill={`url(#${g})`} />
      {/* Left arm */}
      <path d="M20 47 Q8 58 7 72" stroke={`rgba(102,126,234,${a})`} strokeWidth="8"
        strokeLinecap="round" fill="none" />
      {/* Right arm */}
      <path d="M60 47 Q72 58 73 72" stroke={`rgba(118,75,162,${a})`} strokeWidth="8"
        strokeLinecap="round" fill="none" />
      {/* Legs */}
      <path d="M30 93 L26 114" stroke={`url(#${g})`} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M50 93 L54 114" stroke={`url(#${g})`} strokeWidth="9" strokeLinecap="round" fill="none" />
    </svg>
  );
};

// ─── MonitorWidget ────────────────────────────────────────────────────────────

const MonitorWidget = ({ messages }: { messages: AiMsg[] }) => (
  <div className="flex flex-col items-center w-40">
    <div className="w-full rounded-xl border border-[#667eea]/40 bg-[#0d0d18] shadow-xl shadow-[#667eea]/20 overflow-hidden">
      {/* Chrome bar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/[0.06] bg-white/[0.02]">
        {['bg-red-500/50', 'bg-yellow-500/50', 'bg-green-500/50'].map((c, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${c}`} />
        ))}
        <span className="ml-2 text-[7px] font-mono text-[#667eea]/70">Robot Journey AI</span>
        <div className="ml-auto w-1 h-1 rounded-full bg-green-400 animate-pulse" />
      </div>
      {/* Chat area */}
      <div className="px-2 py-2 space-y-1 h-24 overflow-hidden">
        {messages.map((m, i) => (
          <div key={i} className="msg-in flex items-center gap-1">
            <span className={`text-[8px] font-mono ${m.done ? 'text-green-400' : 'text-[#667eea]'}`}>
              {m.done ? '✓' : '›'}
            </span>
            <span className={`text-[8px] font-mono leading-tight ${m.done ? 'text-green-300' : 'text-gray-300'}`}>
              {m.text}
            </span>
          </div>
        ))}
        {messages.length < 4 && (
          <div className="flex gap-0.5 pl-3 pt-0.5">
            {[0, 0.22, 0.44].map((d, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#667eea]"
                style={{ animation: `blinkCursor 1s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
        )}
      </div>
    </div>
    {/* Stand */}
    <div className="w-4 h-3 bg-[#1a1a2e] mx-auto"
      style={{ clipPath: 'polygon(20% 0,80% 0,100% 100%,0 100%)' }} />
    <div className="w-14 h-1.5 rounded-full bg-[#1a1a2e] border border-white/10" />
  </div>
);

// ─── Cloning Particles ────────────────────────────────────────────────────────

const CloningParticles = () => (
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
    {Array.from({ length: 14 }, (_, i) => {
      const angle = (i / 14) * Math.PI * 2;
      const r = 44 + (i % 3) * 18;
      return (
        <div key={i} className="absolute rounded-full"
          style={{
            width: 3 + (i % 3) * 1.5,
            height: 3 + (i % 3) * 1.5,
            background: i % 2 ? '#667eea' : '#764ba2',
            opacity: 0,
            animation: `particleFloat 1.5s ease-out ${i * 0.09}s infinite`,
            '--tx': `${Math.cos(angle) * r}px`,
            '--ty': `${Math.sin(angle) * r}px`,
          } as React.CSSProperties}
        />
      );
    })}
  </div>
);

// ─── HeroSection ─────────────────────────────────────────────────────────────

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [aiMessages, setAiMessages] = useState<AiMsg[]>([]);

  useEffect(() => {
    const t = setTimeout(() => { setIsVisible(true); setPhase('person'); }, 400);
    return () => clearTimeout(t);
  }, []);

  // Phase sequencer
  useEffect(() => {
    if (phase === 'idle') return;
    let delay = 2000;
    let next: Phase = 'person';
    if      (phase === 'person')  { delay = 2200; next = 'cloning'; }
    else if (phase === 'cloning') { delay = 2000; next = 'monitor'; }
    else if (phase === 'monitor') { delay = 900;  next = 'ai'; }
    else if (phase === 'ai')      { delay = 6500; next = 'person'; }
    const t = setTimeout(() => {
      if (phase === 'ai') setAiMessages([]);
      setPhase(next);
    }, delay);
    return () => clearTimeout(t);
  }, [phase]);

  // AI typing messages
  useEffect(() => {
    if (phase !== 'ai') return;
    const msgs: AiMsg[] = [
      { text: 'Analizando leads...', done: false },
      { text: '✓ Filtrado listo',    done: true  },
      { text: 'Enviando propuesta...', done: false },
      { text: '✓ Cliente notificado', done: true  },
    ];
    const ts = msgs.map((m, i) =>
      setTimeout(() => setAiMessages(p => [...p, m]), i * 1100 + 400)
    );
    return () => ts.forEach(clearTimeout);
  }, [phase]);

  const showClone   = ['cloning', 'monitor', 'ai'].includes(phase);
  const showMonitor = ['monitor', 'ai'].includes(phase);
  const isCloning   = phase === 'cloning';

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-24 md:pt-32 overflow-hidden"
    >
      <style>{`
        @keyframes personFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes scanDown {
          0%   { top: -2px; opacity: 1; }
          90%  { opacity: 0.9; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cloneIn {
          0%   { opacity: 0; transform: translateX(44px) scale(0.45); filter: blur(14px); }
          70%  { filter: blur(1px); }
          100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes monitorIn {
          0%   { opacity: 0; transform: scale(0.5) translateY(22px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 5px #667eea); }
          50%       { filter: drop-shadow(0 0 22px #667eea) drop-shadow(0 0 38px #764ba2); }
        }
        @keyframes msgIn {
          0%   { opacity: 0; transform: translateX(-8px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1); }
        }
        @keyframes particleFloat {
          0%   { opacity: 0.9; transform: translate(0, 0) scale(1); }
          100% { opacity: 0;   transform: translate(var(--tx), var(--ty)) scale(0.2); }
        }
        .person-float { animation: personFloat 2.8s ease-in-out infinite; }
        .glow-pulse    { animation: glowPulse .7s ease-in-out infinite; }
        .clone-in      { animation: cloneIn .9s cubic-bezier(.22,1,.36,1) forwards; }
        .monitor-in    { animation: monitorIn .7s cubic-bezier(.34,1.56,.64,1) forwards; }
        .msg-in        { animation: msgIn .35s ease-out forwards; }
      `}</style>

      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left content ── */}
          <div className={`flex-1 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Si tu negocio depende de ti para funcionar,{' '}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                pero no quieres contratar más personal.
              </span>{' '}
              Te ayudamos a clonarte.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              Especialistas en digitalización y automatización de negocios.
              Transforma tu caos operativo en una estructura escalable, vende más y recupera tu
              tiempo libre, sin contratar más personal.
            </p>
            <Button
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-[#667eea]/40 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 rounded-full group"
              onClick={() => {
                const calendly = document.querySelector('.calendly-inline-widget');
                if (calendly) calendly.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              Agenda tu sesión estratégica
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* ── Right: clone animation panel ── */}
          <div className={`flex-1 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#667eea]/20 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">

              {/* Phase label */}
              <div className="absolute top-4 inset-x-0 flex justify-center z-10">
                <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-500 ${
                  isCloning    ? 'text-[#667eea]' :
                  showMonitor  ? 'text-green-400'  :
                                 'text-gray-600'
                }`}>
                  {isCloning ? '⚡ Clonando...' : showMonitor ? '● IA Activa' : 'Tu negocio hoy'}
                </span>
              </div>

              {/* Scene */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-end justify-center gap-3">

                  {/* Original person */}
                  {phase !== 'idle' && (
                    <div className={`flex flex-col items-center transition-all duration-700 ${
                      showMonitor ? '-translate-x-1' : ''
                    }`}>
                      <div className={`relative w-20 overflow-hidden ${
                        isCloning ? 'glow-pulse' : 'person-float'
                      }`}>
                        <PersonSVG uid="orig" />
                        {/* Scan line */}
                        {isCloning && (
                          <div
                            className="absolute inset-x-0 h-[2px] pointer-events-none"
                            style={{
                              background:
                                'linear-gradient(90deg,transparent,#667eea,#fff,#764ba2,transparent)',
                              animation: 'scanDown 1.4s linear forwards',
                              boxShadow: '0 0 8px #667eea, 0 0 16px #764ba2',
                            }}
                          />
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 mt-2">Tú</span>
                    </div>
                  )}

                  {/* Monitor */}
                  {showMonitor && (
                    <div className="monitor-in">
                      <MonitorWidget messages={aiMessages} />
                    </div>
                  )}

                  {/* Clone */}
                  {showClone && (
                    <div className={`clone-in flex flex-col items-center transition-all duration-700 ${
                      showMonitor ? 'translate-x-1' : ''
                    }`}>
                      <div
                        className={`w-20 ${showMonitor ? 'person-float' : ''}`}
                        style={{ animationDelay: '.5s', opacity: showMonitor ? 1 : 0.55 }}
                      >
                        <PersonSVG uid="clone" ghost={!showMonitor} />
                      </div>
                      <span
                        className="text-[10px] font-mono mt-2"
                        style={{ color: showMonitor ? '#667eea' : 'rgba(102,126,234,0.5)' }}
                      >
                        {showMonitor ? 'Agente IA' : 'Clonando...'}
                      </span>
                    </div>
                  )}

                  {/* Particles during cloning */}
                  {isCloning && <CloningParticles />}
                </div>

                {/* Connection wire when monitor is active */}
                {showMonitor && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center opacity-25">
                    <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#667eea]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#667eea]" />
                    <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#764ba2]" />
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
