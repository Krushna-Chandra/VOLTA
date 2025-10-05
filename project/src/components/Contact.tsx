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
      className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('nav.contact')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Schedule your test drive or get in touch with our team
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left: Contact Form */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {t('hero.testDrive')}
                </h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <CheckCircle className="h-14 w-14 sm:h-16 sm:w-16 text-green-500" />
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Thank You!
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-center text-sm sm:text-base max-w-sm">
                      We've received your test drive request. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {[
                      { label: 'Full Name *', type: 'text', key: 'name', placeholder: 'Your name' },
                      { label: 'Email Address *', type: 'email', key: 'email', placeholder: 'your.email@example.com' },
                      { label: 'Phone Number *', type: 'tel', key: 'phone', placeholder: '+91 98765 43210' },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          value={(formData as any)[field.key]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}

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
                      className="w-full px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <span>Submit Request</span>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Locations & Map */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Showroom Locations */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Visit Our Showrooms
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-1">
                          {location.city}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-1">
                          {location.address}
                        </p>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4 sm:space-y-5">
                  <a
                    href="mailto:info@volta-ev.com"
                    className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition-transform"
                  >
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-sm sm:text-base">info@volta-ev.com</span>
                  </a>
                  <a
                    href="tel:+911800123456"
                    className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition-transform"
                  >
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-sm sm:text-base">1800-123-456 (Toll Free)</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-56 sm:h-64 md:h-72 bg-slate-200 dark:bg-slate-700 relative">
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
