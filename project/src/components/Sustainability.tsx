import { useRef } from 'react';
import { Leaf, Droplets, Recycle, Sun, TreePine, Wind } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export const Sustainability = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const sustainabilityMetrics = [
    {
      icon: Leaf,
      value: '70%',
      label: 'Less Emissions Over Lifetime',
      color: 'text-green-500',
    },
    {
      icon: Recycle,
      value: '98%',
      label: 'Recyclable Battery Materials',
      color: 'text-blue-500',
    },
    {
      icon: Sun,
      value: '100%',
      label: 'Renewable Energy in Manufacturing',
      color: 'text-yellow-500',
    },
    {
      icon: Droplets,
      value: '60%',
      label: 'Water Usage Reduction',
      color: 'text-cyan-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sustainability"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30 mb-4">
            <TreePine className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Sustainability
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Driving Change for a Greener Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Every journey with us is a step towards a more sustainable planet.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
          {sustainabilityMetrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison & Description Section */}
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-20">
            {/* Carbon Footprint Chart */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Carbon Footprint Comparison
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: 'VOLTA Electric Vehicle',
                    value: '2.8 tons CO₂/year',
                    color: 'from-green-500 to-green-600',
                    width: 'w-[30%]',
                  },
                  {
                    name: 'Hybrid Vehicle',
                    value: '5.2 tons CO₂/year',
                    color: 'from-orange-400 to-orange-500',
                    width: 'w-[55%]',
                  },
                  {
                    name: 'Traditional Gas Vehicle',
                    value: '9.4 tons CO₂/year',
                    color: 'from-red-500 to-red-600',
                    width: 'w-full',
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item.name}
                      </span>
                      <span className="font-bold text-slate-800 dark:text-white">
                        {item.value}
                      </span>
                    </div>
                    <div
                      className={`h-3 sm:h-4 bg-gradient-to-r ${item.color} rounded-full ${item.width}`}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                * Based on 15,000 km annual driving with Eastern India grid mix.
              </p>
            </div>

            {/* Commitment Cards */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Wind,
                  title: 'Clean Energy Manufacturing',
                  text: 'Our facilities run on 100% renewable energy, utilizing solar and wind power to minimize environmental impact.',
                  color: 'text-blue-500',
                },
                {
                  icon: Recycle,
                  title: 'Battery Recycling Program',
                  text: '98% of battery materials are recovered and reused, ensuring a circular economy for critical minerals.',
                  color: 'text-green-500',
                },
                {
                  icon: TreePine,
                  title: 'Carbon Offset Initiatives',
                  text: 'For every vehicle sold, we plant 100 trees in Eastern India, contributing to reforestation efforts.',
                  color: 'text-emerald-500',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                >
                  <item.icon className={`h-8 w-8 ${item.color} flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-1 sm:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Join the Green Revolution
              </h3>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-green-50">
                "The best time to switch to electric was yesterday. The second best time is now."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {[
                  { value: '15,000+', label: 'Vehicles Delivered' },
                  { value: '100+', label: 'Charging Stations' },
                  { value: '12.5M', label: 'Tons CO₂ Saved' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 backdrop-blur-md rounded-xl px-6 sm:px-8 py-4"
                  >
                    <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-green-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
