import { useRef } from 'react';
import { Award, Users, MapPin, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const milestones = [
    { year: '2020', title: 'Foundation', description: 'Company established with a vision to revolutionize EV mobility in Eastern India.' },
    { year: '2021', title: 'First Model', description: 'LX 400e launched, receiving overwhelming response from early adopters.' },
    { year: '2023', title: 'Expansion', description: 'Network expanded to 100+ charging stations across Eastern India.' },
    { year: '2024', title: 'Innovation', description: 'Launched AI-powered autonomous driving suite and battery technology.' },
  ];

  const achievements = [
    { icon: Award, value: '15+', label: 'Industry Awards', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, value: '15,000+', label: 'Happy Customers', color: 'from-blue-500 to-cyan-500' },
    { icon: MapPin, value: '100+', label: 'Charging Stations', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, value: '450%', label: 'Growth YoY', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-800 transition-colors relative overflow-hidden"
    >
      {/* ✅ Background Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ✅ Header Section */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Pioneering the electric revolution in Eastern India with passion, innovation, and commitment to excellence.
          </p>
        </div>

        {/* ✅ Vision & Innovation Section */}
        <div className={`max-w-6xl mx-auto mb-16 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Vision & Innovation
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded with a singular vision: to make premium electric mobility accessible and sustainable for Eastern India. We're not just building cars; we're creating a movement towards a cleaner, smarter future.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Our state-of-the-art facility combines craftsmanship with automation, ensuring every vehicle meets the highest standards of quality and performance.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-5 sm:p-6 border border-blue-200 dark:border-blue-800">
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Our mission is to accelerate the world's transition to sustainable transportation while delivering an unparalleled driving experience."
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-semibold">
                  - Founder & CEO, VOLTA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Milestones Timeline */}
        <div className={`max-w-6xl mx-auto mb-16 md:mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center mb-10 sm:mb-12">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden lg:block" />
            <div className="space-y-10 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:col-start-2'}`}>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold mb-3">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Achievements Grid */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center mb-10 sm:mb-12">
            Achievements & Impact
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className={`inline-flex p-4 sm:p-5 rounded-xl bg-gradient-to-br ${achievement.color} mb-3 sm:mb-4`}>
                    <achievement.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
