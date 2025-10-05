import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ModelsShowcase } from './components/ModelsShowcase';
import { PerformanceStats } from './components/PerformanceStats';
import { Technology } from './components/Technology';
import { Sustainability } from './components/Sustainability';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// 🌀 Loader video
import loaderVideo from './assets/loader.mp4';

// 🖱️ Ripple effect component
import { RippleEffect } from './components/RippleEffect';


function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-black">
        <video
          src={loaderVideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* 🖱️ Ripple effect overlays entire page */}
      <RippleEffect />

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <Hero t={t} />
      <ModelsShowcase t={t} />
      <PerformanceStats />
      <Technology />
      <Sustainability />
      <About />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
