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
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-2 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30 mb-4">
            <TreePine className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium uppercase tracking-wider">
              Sustainability
            </span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Driving Change for a Greener Future
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Every journey with us is a step towards a more sustainable planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {sustainabilityMetrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Carbon Footprint Comparison
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        VOLTA Electric Vehicle
                      </span>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">2.8 tons CO₂/year</span>
                    </div>
                    <div className="h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full w-[30%]" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                        Hybrid Vehicle
                      </span>
                      <span className="text-sm font-bold text-orange-600 dark:text-orange-400">5.2 tons CO₂/year</span>
                    </div>
                    <div className="h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full w-[55%]" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                        Traditional Gas Vehicle
                      </span>
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">9.4 tons CO₂/year</span>
                    </div>
                    <div className="h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full w-full" />
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
                  * Based on 15,000 km annual driving with Eastern India grid mix
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Commitment to the Environment
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0">
                    <Wind className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                      Clean Energy Manufacturing
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our facilities run on 100% renewable energy, utilizing solar and wind power to minimize environmental impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0">
                    <Recycle className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                      Battery Recycling Program
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      98% of battery materials are recovered and reused, ensuring a circular economy for critical minerals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0">
                    <TreePine className="h-8 w-8 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                      Carbon Offset Initiatives
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      For every vehicle sold, we plant 100 trees in Eastern India, contributing to reforestation efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">Join the Green Revolution</h3>
              <p className="text-xl mb-8 text-green-50">
                "The best time to switch to electric was yesterday. The second best time is now."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-xl px-8 py-4">
                  <div className="text-3xl font-bold">15,000+</div>
                  <div className="text-sm text-green-100">Vehicles Delivered</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl px-8 py-4">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-green-100">Charging Stations</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl px-8 py-4">
                  <div className="text-3xl font-bold">12.5M</div>
                  <div className="text-sm text-green-100">Tons CO₂ Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
