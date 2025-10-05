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
      className="py-20 bg-white dark:bg-slate-800 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Performance That Electrifies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Engineering excellence meets cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-6`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-semibold text-slate-600 dark:text-slate-400 ml-1">
                    {stat.unit}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Performance Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  Electric Vehicle (Ours)
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    <span>70% lower emissions over lifetime</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    <span>Instant torque delivery</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    <span>85% cheaper per kilometer</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-3" />
                    <span>Minimal maintenance required</span>
                  </li>
                </ul>
              </div>
              <div className="opacity-70">
                <h4 className="text-xl font-semibold mb-4">Traditional Gas Vehicle</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    <span>High CO₂ emissions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    <span>Delayed power response</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    <span>Rising fuel costs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-red-400 rounded-full mr-3" />
                    <span>Regular maintenance needed</span>
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
