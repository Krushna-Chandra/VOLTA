import { useRef, useState, useEffect } from 'react';
import { Zap, TrendingUp, Battery, Leaf } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export const PerformanceStats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [counters, setCounters] = useState({
    range: 0,
    acceleration: 0,
    chargeTime: 0,
    efficiency: 0,
  });

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      range: 450,
      acceleration: 4.2,
      chargeTime: 35,
      efficiency: 95,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        range: Math.floor(targets.range * progress),
        acceleration: parseFloat((targets.acceleration * progress).toFixed(1)),
        chargeTime: Math.floor(targets.chargeTime * progress),
        efficiency: Math.floor(targets.efficiency * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Zap,
      value: counters.range,
      unit: 'km',
      label: 'Maximum Range',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: TrendingUp,
      value: counters.acceleration,
      unit: 's',
      label: '0-100 km/h',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Battery,
      value: counters.chargeTime,
      unit: 'min',
      label: 'Fast Charge Time',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Leaf,
      value: counters.efficiency,
      unit: '%',
      label: 'Energy Efficiency',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-white dark:bg-slate-800 transition-colors relative overflow-hidden"
    >
      {/* Gradient background for glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Performance That Electrifies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-2">
            Engineering excellence meets cutting-edge technology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 touch-manipulation">
                <div className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-6`}>
                  <stat.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${stat.color}`} />
                </div>

                <div className="mb-2">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-lg sm:text-2xl font-semibold text-slate-600 dark:text-slate-400 ml-1">
                    {stat.unit}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div
          className={`mt-12 sm:mt-16 max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Performance Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  Electric Vehicle (Ours)
                </h4>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    70% lower emissions over lifetime
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    Instant torque delivery
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    85% cheaper per kilometer
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    Minimal maintenance required
                  </li>
                </ul>
              </div>
              <div className="opacity-80">
                <h4 className="text-lg sm:text-xl font-semibold mb-4">
                  Traditional Gas Vehicle
                </h4>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    High CO₂ emissions
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    Delayed power response
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    Rising fuel costs
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    Regular maintenance needed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
