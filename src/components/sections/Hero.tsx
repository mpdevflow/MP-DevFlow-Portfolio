import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ArrowRight, Code2, Cpu, Database, PlayCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(true); // Default to true to prevent flash

  // Refs for high-performance direct DOM manipulation
  const containerRef = useRef<HTMLElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);
  const floatingCard3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = useSmoothScroll();

  // 1. Mount Animation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // 2. Intersection Observer (Performance: Disable parallax when off-screen)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3. Parallax Logic (Only active when in view + desktop)
  useEffect(() => {
    if (!isInView) return; // Stop listening if off-screen

    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Double check ref existence inside handler
      if (!containerRef.current) return;

      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      requestAnimationFrame(() => {
        // 1. Move Background Orbs (Slow, organic)
        if (orb1Ref.current)
          orb1Ref.current.style.transform = `translate3d(${x * -20}px, ${y * -20}px, 0)`;
        if (orb2Ref.current)
          orb2Ref.current.style.transform = `translate3d(${x * 30}px, ${y * 30}px, 0)`;

        // 2. Move Spotlight (Follows mouse exactly)
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
        }

        // 3. Move Floating Elements (Parallax Layers for Depth)
        if (floatingCard1Ref.current)
          floatingCard1Ref.current.style.transform = `translate3d(${x * -40}px, ${y * -40}px, 0) rotate(-6deg)`;
        if (floatingCard2Ref.current)
          floatingCard2Ref.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0) rotate(12deg)`;
        if (floatingCard3Ref.current)
          floatingCard3Ref.current.style.transform = `translate3d(${x * 15}px, ${y * -15}px, 0) rotate(-3deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden perspective-1000 transform-gpu"
    >
      {/* 1. Background Grid & Noise */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-transparent to-[#0B0E14]"></div>

      {/* 2. Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(600px circle at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)',
        }}
      />

      {/* 3. Ambient Glow Effects */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 transition-transform duration-100 ease-out will-change-transform animate-pulse-slow md:animate-none"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 transition-transform duration-100 ease-out will-change-transform animate-pulse-slow md:animate-none"
        style={{ animationDelay: '2s' }}
      />

      {/* 4. Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={floatingCard1Ref}
          className="absolute top-[15%] left-[10%] p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm -z-5 opacity-40 hidden lg:block transition-transform duration-75 ease-out will-change-transform"
        >
          <Code2 className="text-blue-400 mb-2" size={32} />
          <div className="w-24 h-2 bg-white/10 rounded-full mb-2"></div>
          <div className="w-16 h-2 bg-white/10 rounded-full"></div>
        </div>

        <div
          ref={floatingCard2Ref}
          className="absolute bottom-[20%] right-[10%] p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm -z-5 opacity-30 hidden lg:block transition-transform duration-100 ease-out will-change-transform"
        >
          <Database className="text-purple-400 mb-2" size={32} />
          <div className="flex gap-2">
            <div className="w-2 h-8 bg-purple-500/20 rounded-full"></div>
            <div className="w-2 h-12 bg-purple-500/40 rounded-full"></div>
            <div className="w-2 h-6 bg-purple-500/20 rounded-full"></div>
          </div>
        </div>

        <div
          ref={floatingCard3Ref}
          className="absolute top-[20%] right-[15%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm -z-5 opacity-20 hidden lg:block transition-transform duration-150 ease-out will-change-transform"
        >
          <Cpu className="text-cyan-400" size={24} />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-4xl w-full text-center space-y-8 z-10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 hover:bg-white/10 transition-colors cursor-default animate-[float_4s_ease-in-out_infinite]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-medium text-blue-200 tracking-wide uppercase">
            Accepting New Projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          We Build Products, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient bg-300%">
            Not Just Code.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A boutique dev studio from the Philippines. Senior-level execution, product-minded
          thinking, and AI-augmented speed — so you pay for results, not hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] flex items-center gap-2 cursor-pointer hover:-translate-y-1"
          >
            Book a Discovery Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-sm flex items-center gap-2 cursor-pointer hover:-translate-y-1"
          >
            <PlayCircle
              size={18}
              className="text-slate-400 group-hover:text-white transition-colors"
            />
            View Selected Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        .bg-300% {
            background-size: 300% auto;
        }
        .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
