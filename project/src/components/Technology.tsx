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
      description: 'Level 3 autonomous driving with AI-powered navigation, adaptive cruise control, and intelligent lane assistance for safer journeys.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BatteryCharging,
      title: 'AI Battery Management',
      description: 'Neural network-optimized battery system that learns your driving patterns to maximize range and efficiency.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Smart Infotainment OS',
      description: 'Next-generation 17" touchscreen interface with voice control, gesture recognition, and seamless cloud connectivity.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: DownloadCloud,
      title: 'OTA Software Updates',
      description: 'Continuous improvements delivered wirelessly. Your vehicle gets better over time with new features and enhancements.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Cpu,
      title: 'Advanced Computing',
      description: 'Powerful onboard computer with AI processing capabilities for real-time decision making and enhanced safety.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Shield',
      description: 'Military-grade encryption and multi-layer security protocols protect your vehicle and personal data.',
      gradient: 'from-slate-600 to-slate-800',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/30 mb-4">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Innovation</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">Technology That Drives Tomorrow</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience the future with our cutting-edge automotive technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">The Brain Behind the Beauty</h3>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Our vehicles are powered by a custom-designed AI processor capable of 1,000 trillion operations per second. This unprecedented computing power enables real-time decision making, predictive maintenance, and continuous learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Predictive Intelligence</h4>
                    <p className="text-slate-400">Anticipates road conditions and optimizes performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Adaptive Learning</h4>
                    <p className="text-slate-400">Learns your preferences and driving style over time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Continuous Updates</h4>
                    <p className="text-slate-400">Regular improvements without visiting a service center</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Technology Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
