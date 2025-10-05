import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { TestDriveBooking } from '../types';

interface ContactProps {
  t: (key: string) => string;
}

export const Contact = ({ t }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<TestDriveBooking>({
    name: '',
    email: '',
    phone: '',
    preferredModel: 'LX 400e',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredModel: 'LX 400e',
        city: '',
      });
    }, 3000);
  };

  const locations = [
    { city: 'Kolkata', address: 'Salt Lake Sector V, Kolkata - 700091', phone: '+91 33 1234 5678' },
    { city: 'Bhubaneswar', address: 'Chandrasekharpur, Bhubaneswar - 751016', phone: '+91 674 123 4567' },
    { city: 'Guwahati', address: 'GS Road, Guwahati - 781005', phone: '+91 361 123 4567' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('nav.contact')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Schedule your test drive or get in touch with our team
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t('hero.testDrive')}
                </h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Thank You!
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-center">
                      We've received your test drive request. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Preferred Model *
                      </label>
                      <select
                        required
                        value={formData.preferredModel}
                        onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option>LX 400e</option>
                        <option>MX 550e</option>
                        <option>RX Performance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        City / Test Drive Location *
                      </label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a city</option>
                        <option>Kolkata</option>
                        <option>Bhubaneswar</option>
                        <option>Guwahati</option>
                        <option>Patna</option>
                        <option>Ranchi</option>
                        <option>Siliguri</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>Submit Request</span>
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Visit Our Showrooms
                </h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                          {location.city}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                          {location.address}
                        </p>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@volta-ev.com"
                    className="flex items-center space-x-3 hover:translate-x-2 transition-transform"
                  >
                    <Mail className="h-6 w-6" />
                    <span>info@volta-ev.com</span>
                  </a>
                  <a
                    href="tel:+911800123456"
                    className="flex items-center space-x-3 hover:translate-x-2 transition-transform"
                  >
                    <Phone className="h-6 w-6" />
                    <span>1800-123-456 (Toll Free)</span>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-slate-200 dark:bg-slate-700 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.00315488632!2d88.12225809999999!3d22.54577795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VOLTA Showrooms Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
