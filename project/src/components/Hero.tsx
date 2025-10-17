import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-950" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <div className="overflow-hidden mb-4">
            <h1 className="text-7xl md:text-9xl font-light tracking-wider animate-slide-up">
              OXXO<span className="text-amber-500">.</span>
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl text-zinc-300 tracking-widest font-light animate-slide-up-delay">
              MİMARLIK & TASARIM
            </p>
          </div>

          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-8 mb-12 animate-fade-in-delay" />

          <div className="flex gap-6 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 tracking-wider text-sm"
            >
              PROJELERİ KEŞFET
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border border-white/30 hover:bg-white hover:text-zinc-950 transition-all duration-300 tracking-wider text-sm"
            >
              İLETİŞİME GEÇ
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('projects')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow"
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </button>
    </section>
  );
}
