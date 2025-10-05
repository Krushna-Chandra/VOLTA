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

function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
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
