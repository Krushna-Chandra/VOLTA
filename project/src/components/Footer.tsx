import { useState } from 'react';
import { Zap, Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  t: (key: string) => string;
}

export const Footer = ({ t }: FooterProps) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid - brand + links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">VOLTA</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Pioneering the electric revolution in Eastern India with premium vehicles that combine luxury, performance, and sustainability.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Models */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-6">Models</h3>
            <ul className="space-y-3">
              {['LX 400e', 'MX 550e', 'RX Performance', 'Compare Models', 'Configurator'].map((model, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {model}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press & Media', 'Sustainability', 'Investor Relations'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {['FAQs', 'Charging Network', 'Service Centers', "Owner's Manual", 'Contact Support'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 pt-10 mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mail className="h-6 w-6 text-blue-500" />
              <span>{t('footer.newsletter')}</span>
            </h3>
            <p className="text-slate-400 mb-6">Stay updated with the latest news, offers, and innovations</p>

            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3 text-green-400 font-medium">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} VOLTA Electric Vehicles. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Legal'].map((item, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
