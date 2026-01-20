import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ClubCard } from '../components/common/Card';
import { clubs, categories } from '../data/clubs';
import { FaSearch } from 'react-icons/fa';

const Clubs = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация клубов
  const filteredClubs = clubs.filter((club) => {
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    const matchesSearch = club.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          club.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-4">
            {t('clubs.title')}
          </h1>
          <p className="text-xl text-text-secondary">
            {t('clubs.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('clubs.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-primary-light border border-accent/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent"
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-accent text-xl" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-accent text-primary'
                  : 'bg-primary-light text-text-primary hover:bg-accent/20 border border-accent/30'
              }`}
            >
              {category.name[lang]}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-text-secondary">
            {filteredClubs.length} {lang === 'kk' ? 'клуб табылды' : lang === 'tr' ? 'kulüp bulundu' : 'clubs found'}
          </p>
        </div>

        {/* Clubs Grid */}
        {filteredClubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClubs.map((club) => (
              <div key={club.id} onClick={() => navigate(`/clubs/${club.id}`)}>
                <ClubCard club={club} language={lang} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-xl">
              {lang === 'kk' ? 'Клуб табылмады' : lang === 'tr' ? 'Kulüp bulunamadı' : 'No clubs found'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clubs;
