import { useRef } from 'react';
import { Brain, BatteryCharging, Smartphone, DownloadCloud, Cpu, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export const Technology = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const features = [
    {
      icon: Brain,
      title: 'Autonomous Driving Suite',
      description:
        'Level 3 autonomous driving with AI-powered navigation, adaptive cruise control, and intelligent lane assistance for safer journeys.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BatteryCharging,
      title: 'AI Battery Management',
      description:
        'Neural network-optimized battery system that learns your driving patterns to maximize range and efficiency.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Smart Infotainment OS',
      description:
        'Next-generation 17" touchscreen interface with voice control, gesture recognition, and seamless cloud connectivity.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: DownloadCloud,
      title: 'OTA Software Updates',
      description:
        'Continuous improvements delivered wirelessly. Your vehicle gets better over time with new features and enhancements.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Cpu,
      title: 'Advanced Computing',
      description:
        'Powerful onboard computer with AI processing capabilities for real-time decision making and enhanced safety.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Shield',
      description:
        'Military-grade encryption and multi-layer security protocols protect your vehicle and personal data.',
      gradient: 'from-slate-600 to-slate-800',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-4 sm:px-6 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Innovation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technology That Drives Tomorrow
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Experience the future with our cutting-edge automotive technologies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                  <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* AI System Section */}
        <div
          className={`mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `600ms` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">The Brain Behind the Beauty</h3>
              <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed">
                Our vehicles are powered by a custom-designed AI processor capable of 1,000 trillion operations per second.
                This computing power enables real-time decision making, predictive maintenance, and continuous learning.
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    color: 'bg-blue-500/20 text-blue-400',
                    title: 'Predictive Intelligence',
                    text: 'Anticipates road conditions and optimizes performance.',
                  },
                  {
                    num: 2,
                    color: 'bg-purple-500/20 text-purple-400',
                    title: 'Adaptive Learning',
                    text: 'Learns your preferences and driving style over time.',
                  },
                  {
                    num: 3,
                    color: 'bg-green-500/20 text-green-400',
                    title: 'Continuous Updates',
                    text: 'Regular improvements without visiting a service center.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 ${item.color} rounded-lg flex items-center justify-center font-bold text-lg`}
                    >
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm sm:text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Technology Interface"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Glow Effects */}
              <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full blur-3xl opacity-40" />
              <div className="absolute -top-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500 rounded-full blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
