import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clubs } from '../data/clubs';
import { FaInstagram, FaUsers, FaUserTie, FaChalkboardTeacher, FaArrowLeft } from 'react-icons/fa';

const ClubDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [showAllRules, setShowAllRules] = useState(false);

  const club = clubs.find(c => c.id === parseInt(id));

  if (!club) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-accent mb-4">
            {lang === 'kk' ? 'Клуб табылмады' : lang === 'tr' ? 'Kulüp bulunamadı' : 'Club not found'}
          </h1>
          <button
            onClick={() => navigate('/clubs')}
            className="btn-primary"
          >
            {lang === 'kk' ? 'Клубтарға оралу' : lang === 'tr' ? 'Kulüplere dön' : 'Back to Clubs'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/clubs')}
          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>{lang === 'kk' ? 'Артқа' : lang === 'tr' ? 'Geri' : 'Back'}</span>
        </button>

        {/* Header with Logo */}
        <div className="bg-primary-light rounded-2xl p-8 mb-8 border border-accent/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={club.logo}
              alt={club.name[lang]}
              className="w-32 h-32 object-contain"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-heading font-bold text-accent mb-4">
                {club.name[lang]}
              </h1>
              <p className="text-xl text-text-secondary mb-4">
                {club.description[lang]}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-text-primary">
                  <FaUsers className="text-accent" />
                  <span>{club.members} {lang === 'kk' ? 'мүше' : lang === 'tr' ? 'üye' : 'members'}</span>
                </div>
                <div className="flex items-center gap-2 text-text-primary">
                  <FaUserTie className="text-accent" />
                  <span>{lang === 'kk' ? 'Төраға' : lang === 'tr' ? 'Başkan' : 'President'}: {club.president}</span>
                </div>
                <div className="flex items-center gap-2 text-text-primary">
                  <FaChalkboardTeacher className="text-accent" />
                  <span>{lang === 'kk' ? 'Жетекші' : lang === 'tr' ? 'Danışman' : 'Supervisor'}: {club.supervisor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Link */}
        {club.instagram && (
          <div className="bg-primary-light rounded-2xl p-6 mb-8 border border-accent/30">
            <a
              href={club.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-accent hover:text-accent/80 transition-colors text-xl"
            >
              <FaInstagram className="text-3xl" />
              <span>{lang === 'kk' ? 'Instagram бетіміз' : lang === 'tr' ? 'Instagram sayfamız' : 'Our Instagram'}</span>
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Full Description */}
          <div className="bg-primary-light rounded-2xl p-6 border border-accent/30">
            <h2 className="text-2xl font-heading font-bold text-accent mb-4">
              {lang === 'kk' ? 'Толық ақпарат' : lang === 'tr' ? 'Tam Bilgi' : 'Full Information'}
            </h2>
            <p className="text-text-primary leading-relaxed">
              {club.fullDescription ? club.fullDescription[lang] : club.description[lang]}
            </p>
          </div>

          {/* Rules */}
          <div className="bg-primary-light rounded-2xl p-6 border border-accent/30">
            <h2 className="text-2xl font-heading font-bold text-accent mb-4">
              {lang === 'kk' ? 'Клуб ережелері' : lang === 'tr' ? 'Kulüp Kuralları' : 'Club Rules'}
            </h2>
            {club.rules ? (
              <>
                <ul className="space-y-3">
                  {(showAllRules ? club.rules[lang] : club.rules[lang].slice(0, 5)).map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-primary">
                      <span className="text-accent font-bold">{index + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                {club.rules[lang].length > 5 && (
                  <button
                    type="button"
                    onClick={() => setShowAllRules((prev) => !prev)}
                    className="mt-4 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    {showAllRules
                      ? (lang === 'kk' ? 'Қысқаша көрсету' : lang === 'tr' ? 'Daha az göster' : 'Show less')
                      : (lang === 'kk' ? 'Толығырақ' : lang === 'tr' ? 'Daha fazla' : 'Show more')}
                  </button>
                )}
              </>
            ) : (
              <p className="text-text-secondary italic">
                {lang === 'kk' ? 'Ережелер жасалуда...' : lang === 'tr' ? 'Kurallar hazırlanıyor...' : 'Rules coming soon...'}
              </p>
            )}
          </div>
        </div>

        {/* Photos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* President Photo */}
          <div className="bg-primary-light rounded-2xl p-6 border border-accent/30">
            <h2 className="text-2xl font-heading font-bold text-accent mb-4">
              {lang === 'kk' ? 'Төраға' : lang === 'tr' ? 'Başkan' : 'President'}
            </h2>
            <div className="aspect-square rounded-lg overflow-hidden bg-primary-dark border border-accent/20">
              {club.presidentPhoto ? (
                <img
                  src={club.presidentPhoto}
                  alt={`${club.president}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaUserTie className="text-6xl text-accent/30" />
                </div>
              )}
            </div>
            <p className="text-center text-text-primary font-medium mt-4 text-lg">
              {club.president}
            </p>
          </div>

          {/* Team Photo */}
          <div className="bg-primary-light rounded-2xl p-6 border border-accent/30">
            <h2 className="text-2xl font-heading font-bold text-accent mb-4">
              {lang === 'kk' ? 'Команда' : lang === 'tr' ? 'Takım' : 'Team'}
            </h2>
            <div className="aspect-square rounded-lg overflow-hidden bg-primary-dark border border-accent/20">
              {club.teamPhoto ? (
                <img
                  src={club.teamPhoto}
                  alt={`${club.name[lang]} команда`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaUsers className="text-6xl text-accent/30" />
                </div>
              )}
            </div>
            <p className="text-center text-text-secondary mt-4">
              {lang === 'kk' ? 'Біздің команда' : lang === 'tr' ? 'Takımımız' : 'Our Team'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;



