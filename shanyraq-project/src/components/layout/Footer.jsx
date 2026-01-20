import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';
import logo from '../../assets/images/shanyrak_logo-round.png';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' },
    { icon: FaTelegram, url: 'https://t.me', label: 'Telegram' }
  ];

  return (
    <footer className="bg-primary-dark border-t border-accent/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Shanyraq логотипі */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-xl mx-auto mb-4">
              <img
                src={logo}
                alt="Shanyraq Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-heading font-bold text-accent mb-2">Shanyraq</h3>
            <p className="text-text-secondary">Бір шаңырақ - көп клубтар</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* О нас */}
          <div>
            <h4 className="text-accent font-heading font-bold mb-4">{t('footer.about')}</h4>
            <p className="text-text-secondary text-sm">
              ХҚТУ студенттік клубтарының бірыңғай платформасы.
              Біз студенттердің әлеуметтік, мәдени және интеллектуалды дамуына ықпал етеміз.
            </p>
          </div>

          {/* Әлеуметтік желілер */}
          <div>
            <h4 className="text-accent font-heading font-bold mb-4">{t('footer.social')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors text-2xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Байланыс */}
          <div>
            <h4 className="text-accent font-heading font-bold mb-4">{t('footer.contact')}</h4>
            <div className="text-text-secondary text-sm space-y-2">
              <p>Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университеті</p>
              <p>Түркістан, Қазақстан</p>
              <p>Email: shokhzod.ergashtayer@ayu.edy.kz</p>
              <p>Тел: +7 702 386 0700</p>
            </div>
          </div>
        </div>

        {/* Алтын сызық */}
        <div className="border-t border-accent/20 pt-8">
          <p className="text-center text-text-secondary text-sm">
            © {currentYear} Shanyraq - ХҚТУ. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
