import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  t: (key: string) => string;
}

export const Hero = ({ t }: HeroProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const [loading, setLoading] = useState(false);

  // Parallax effect only for large screens
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll and loader
  const handleButtonClick = (targetId: string) => {
    setLoading(true);
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setLoading(false), 800);
    }, 400);
  };

  return (
    <section
      id="home"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="space-y-5 sm:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-6">
            <span className="text-white text-xs sm:text-sm font-medium">
              Introducing Eastern India’s Premier EV Experience
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight">
            {t("hero.tagline")}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
            Experience the future of automotive excellence with our revolutionary
            electric vehicles designed for the roads of Eastern India.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center pt-6 sm:pt-8">
            <button
              onClick={() => handleButtonClick("models")}
              className="group w-full sm:w-auto px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/40"
            >
              {t("hero.explore")}
            </button>
            <button
              onClick={() => handleButtonClick("contact")}
              className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-semibold transition-all transform hover:scale-105 border border-white/30"
            >
              {t("hero.testDrive")}
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 sm:pt-16 flex flex-col items-center space-y-2">
            <span className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">
              Scroll to Explore
            </span>
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/60 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-500">
          <div className="w-10 sm:w-12 h-10 sm:h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          <p className="mt-3 sm:mt-4 text-white text-xs sm:text-sm font-medium tracking-wide">
            Loading...
          </p>
        </div>
      )}
    </section>
  );
};
