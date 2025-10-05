import { useState, useEffect } from 'react';
import { Menu, X, Zap, Sun, Moon, Globe } from 'lucide-react';
import { Theme } from '../hooks/useTheme';
import { LanguageCode } from '../hooks/useLanguage';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

export const Header = ({ theme, toggleTheme, language, setLanguage, t }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const languages = [
    { code: 'en' as LanguageCode, name: 'English', flag: '🇬🇧' },
    { code: 'hi' as LanguageCode, name: 'हिंदी', flag: '🇮🇳' },
    { code: 'bn' as LanguageCode, name: 'বাংলা', flag: '🇧🇩' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Zap className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}
            >
              VOLTA
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {['home', 'models', 'technology', 'sustainability', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'
                }`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'hover:bg-slate-200 dark:hover:bg-slate-700'
                  : 'hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className={isScrolled ? 'h-5 w-5 text-slate-700 dark:text-slate-300' : 'h-5 w-5 text-white'} />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-slate-200 dark:hover:bg-slate-700'
                    : 'hover:bg-white/20'
                }`}
                aria-label="Change language"
              >
                <Globe className={isScrolled ? 'h-5 w-5 text-slate-700 dark:text-slate-300' : 'h-5 w-5 text-white'} />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center space-x-2 ${
                        language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 bg-white dark:bg-slate-900 rounded-lg p-4 shadow-xl">
            {['home', 'models', 'technology', 'sustainability', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-blue-600 py-2"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
