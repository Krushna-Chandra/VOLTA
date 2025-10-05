import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Clock, Gauge } from 'lucide-react';
import { vehicleModels, colorOptions, wheelOptions, interiorOptions } from '../data/vehicles';
import { VehicleConfig } from '../types';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

interface ModelsShowcaseProps {
  t: (key: string) => string;
}

export const ModelsShowcase = ({ t }: ModelsShowcaseProps) => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [showConfigurator, setShowConfigurator] = useState(false);
  const [config, setConfig] = useState<VehicleConfig>({
    model: vehicleModels[0].id,
    color: colorOptions[0].id,
    wheels: wheelOptions[0].id,
    interior: interiorOptions[0].id,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const currentModel = vehicleModels[currentModelIndex];

  const nextModel = () => setCurrentModelIndex((i) => (i + 1) % vehicleModels.length);
  const prevModel = () => setCurrentModelIndex((i) => (i - 1 + vehicleModels.length) % vehicleModels.length);

  useEffect(() => {
    setConfig((prev) => ({ ...prev, model: currentModel.id }));
  }, [currentModel.id]);

  const handleReserve = () => {
    alert(
      `Configuration saved!\nModel: ${currentModel.name}\nColor: ${
        colorOptions.find((c) => c.id === config.color)?.name
      }\nWheels: ${wheelOptions.find((w) => w.id === config.wheels)?.name}\nInterior: ${
        interiorOptions.find((i) => i.id === config.interior)?.name
      }`
    );
  };

  return (
    <section
      ref={sectionRef}
      id="models"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">
            {t('models.title') || 'Choose Your Vision'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('models.subtitle') ||
              'Three exceptional models, each engineered to redefine your driving experience'}
          </p>
        </div>

        {/* Model Showcase */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
              <img
                src={currentModel.image}
                alt={currentModel.name}
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Model Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    {currentModel.name}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8">
                    {currentModel.tagline}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {[
                      { Icon: Zap, label: t('specs.range'), value: `${currentModel.range} km` },
                      { Icon: Gauge, label: t('specs.acceleration'), value: `${currentModel.acceleration}s` },
                      { Icon: Clock, label: t('specs.chargeTime'), value: `${currentModel.chargeTime} min` },
                    ].map(({ Icon, label, value }, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 text-center"
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mb-1 sm:mb-2 mx-auto" />
                        <div className="text-lg sm:text-2xl font-bold text-white">{value}</div>
                        <div className="text-xs sm:text-sm text-slate-300">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price + Configurator */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{currentModel.price}</div>
                    <button
                      onClick={() => setShowConfigurator(!showConfigurator)}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
                    >
                      {t('configurator.buildYourCar')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevModel}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 transition-all"
              aria-label="Previous model"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
            <button
              onClick={nextModel}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 transition-all"
              aria-label="Next model"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {vehicleModels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentModelIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentModelIndex
                    ? 'w-10 bg-blue-600'
                    : 'w-2 bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to model ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Configurator */}
        {showConfigurator && (
          <div className="mt-10 sm:mt-12 max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
              {t('configurator.buildYourCar')}
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {/* Color Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
                  {t('configurator.color')}
                </label>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setConfig({ ...config, color: color.id })}
                      className={`flex flex-col items-center space-y-1 sm:space-y-2 p-3 sm:p-4 rounded-xl transition-all ${
                        config.color === color.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-600'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <div
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wheels Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
                  {t('configurator.wheels')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {wheelOptions.map((wheel) => (
                    <button
                      key={wheel.id}
                      onClick={() => setConfig({ ...config, wheels: wheel.id })}
                      className={`p-4 sm:p-6 rounded-xl transition-all text-center ${
                        config.wheels === wheel.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-600'
                          : 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600'
                      }`}
                    >
                      <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{wheel.image}</div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        {wheel.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interior Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
                  {t('configurator.interior')}
                </label>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {interiorOptions.map((interior) => (
                    <button
                      key={interior.id}
                      onClick={() => setConfig({ ...config, interior: interior.id })}
                      className={`flex flex-col items-center space-y-1 sm:space-y-2 p-3 sm:p-4 rounded-xl transition-all ${
                        config.interior === interior.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-600'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <div
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg border-4 border-white shadow-lg"
                        style={{ backgroundColor: interior.color }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        {interior.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reserve Button */}
              <div className="pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={handleReserve}
                  className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  {t('configurator.reserve')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
