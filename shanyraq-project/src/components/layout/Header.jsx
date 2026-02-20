import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import logo from '../../assets/images/shanyrak_logo-round.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const languages = [
    { code: 'kk', name: 'Қазақша' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' }
  ];

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/clubs', label: t('nav.clubs') },
    { path: '/leaders', label: t('nav.leaders') }
  ];

  return (
    <header className="bg-primary border-b border-accent/30 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Shanyraq Logo"
              className="w-14 h-14 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-heading font-bold text-accent">Shanyraq</h1>
              <p className="text-xs text-text-secondary">Student Clubs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-text-primary hover-gold font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 text-text-primary hover-gold"
            >
              <FaGlobe className="text-xl" />
              <span className="hidden md:inline">{languages.find(l => l.code === i18n.language)?.name}</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-primary-light border border-accent/30 rounded-lg shadow-xl overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-accent hover:text-primary transition-colors ${
                      i18n.language === lang.code ? 'bg-accent/20 text-accent' : 'text-text-primary'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-text-primary hover-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

