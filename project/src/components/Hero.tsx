import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
}

export const Hero = ({ t }: HeroProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
            <span className="text-white text-sm font-medium">Introducing Eastern India's Premier EV Experience</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            {t('hero.tagline')}
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Experience the future of automotive excellence with our revolutionary electric vehicles designed for the roads of Eastern India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToModels}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/50"
            >
              {t('hero.explore')}
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-semibold transition-all transform hover:scale-105 border border-white/30"
            >
              {t('hero.testDrive')}
            </button>
          </div>

          <div className="pt-16 flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm uppercase tracking-wider">Scroll to Explore</span>
            <ChevronDown className="h-6 w-6 text-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
