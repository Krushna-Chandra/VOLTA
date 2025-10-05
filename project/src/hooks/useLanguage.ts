import { useState } from 'react';

export type LanguageCode = 'en' | 'hi' | 'bn';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    bn: string;
  };
}

const translations: Translations = {
  'nav.home': { en: 'Home', hi: 'होम', bn: 'হোম' },
  'nav.models': { en: 'Models', hi: 'मॉडल', bn: 'মডেল' },
  'nav.technology': { en: 'Technology', hi: 'तकनीक', bn: 'প্রযুক্তি' },
  'nav.sustainability': { en: 'Sustainability', hi: 'स्थिरता', bn: 'স্থিতিশীলতা' },
  'nav.about': { en: 'About', hi: 'के बारे में', bn: 'সম্পর্কে' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क करें', bn: 'যোগাযোগ' },
  'hero.tagline': { en: 'Power. Precision. Pure Electric.', hi: 'शक्ति। सटीकता। शुद्ध इलेक्ट्रिक।', bn: 'শক্তি। নির্ভুলতা। বিশুদ্ধ বৈদ্যুতিক।' },
  'hero.explore': { en: 'Explore Models', hi: 'मॉडल देखें', bn: 'মডেল দেখুন' },
  'hero.testDrive': { en: 'Book a Test Drive', hi: 'टेस्ट ड्राइव बुक करें', bn: 'টেস্ট ড্রাইভ বুক করুন' },
  'configurator.buildYourCar': { en: 'Build Your Car', hi: 'अपनी कार बनाएं', bn: 'আপনার গাড়ি তৈরি করুন' },
  'configurator.color': { en: 'Color', hi: 'रंग', bn: 'রঙ' },
  'configurator.wheels': { en: 'Wheels', hi: 'पहिये', bn: 'চাকা' },
  'configurator.interior': { en: 'Interior', hi: 'आंतरिक', bn: 'অভ্যন্তরীণ' },
  'configurator.reserve': { en: 'Reserve Now', hi: 'अभी आरक्षित करें', bn: 'এখন সংরক্ষণ করুন' },
  'specs.range': { en: 'Range', hi: 'रेंज', bn: 'রেঞ্জ' },
  'specs.acceleration': { en: '0-100 km/h', hi: '0-100 किमी/घंटा', bn: '০-১০০ কিমি/ঘণ্টা' },
  'specs.chargeTime': { en: 'DC Fast Charge', hi: 'डीसी फास्ट चार्ज', bn: 'ডিসি ফাস্ট চার্জ' },
  'sustainability.title': { en: 'Driving Change for a Greener Future', hi: 'हरित भविष्य के लिए परिवर्तन', bn: 'সবুজ ভবিষ্যতের জন্য পরিবর্তন' },
  'footer.newsletter': { en: 'Subscribe to Newsletter', hi: 'न्यूज़लेटर की सदस्यता लें', bn: 'নিউজলেটার সাবস্ক্রাইব করুন' },
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { language, setLanguage, t };
};
