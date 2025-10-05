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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">VOLTA</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Pioneering the electric revolution in Eastern India with premium vehicles that combine luxury, performance, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Models</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  LX 400e
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  MX 550e
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  RX Performance
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Compare Models
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Configurator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Charging Network
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Service Centers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Owner's Manual
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mail className="h-6 w-6 text-blue-500" />
              <span>{t('footer.newsletter')}</span>
            </h3>
            <p className="text-slate-400 mb-6">
              Stay updated with the latest news, offers, and innovations
            </p>
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

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 VOLTA Electric Vehicles. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
