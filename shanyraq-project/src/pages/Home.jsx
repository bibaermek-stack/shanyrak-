import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { clubs } from '../data/clubs';
import logo from '../assets/images/shanyrak_logo-round.png';

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;

  // Соңғы 6 клубты көрсету
  const featuredClubs = clubs.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Shanyraq Banner */}
      <section className="gradient-shanyraq py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-accent rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-accent rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-accent rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center p-6 md:p-8 shadow-2xl mx-auto mb-6">
            <img
              src={logo}
              alt="Shanyraq Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-accent/90 font-medium mb-4">
            "Шаңырық" студенттік клубтар координациясы
          </p>
          <p className="text-2xl md:text-3xl text-accent font-heading mb-6">
            {t('home.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-text-primary/90 mb-8 max-w-2xl mx-auto">
            {t('home.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/clubs')}
            >
              {t('home.joinButton')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/clubs')}
            >
              {t('home.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">22</div>
              <div className="text-text-secondary">Студенттік клуб</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">800+</div>
              <div className="text-text-secondary">Белсенді мүше</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">150+</div>
              <div className="text-text-secondary">Іс-шара жылына</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">50+</div>
              <div className="text-text-secondary">Жетістіктер</div>
            </div>
          </div>
        </div>
      </section>

      {/* Танымал клубтар */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-4">
              Танымал клубтар
            </h2>
            <p className="text-text-secondary">
              Біздің ең белсенді және танымал студенттік клубтарымыз
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClubs.map((club) => (
              <Card
                key={club.id}
                hover
                premium
                className="p-6 cursor-pointer"
                onClick={() => navigate(`/clubs/${club.id}`)}
              >
                <div
                  className="w-full h-32 flex items-center justify-center mb-4 rounded-lg p-4"
                  style={{ backgroundColor: club.color + '20' }}
                >
                  <img
                    src={club.logo}
                    alt={club.name[lang]}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-accent mb-2">
                  {club.name[lang]}
                </h3>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {club.description[lang]}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">
                    {club.members} {t('clubs.members')}
                  </span>
                  <span className="text-accent hover:text-accent-light">
                    {t('clubs.viewDetails')} →
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => navigate('/clubs')}>
              Барлық клубтарды көру
            </Button>
          </div>
        </div>
      </section>

      {/* Бізбен қосылыңыз */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-4">
            Бізге қосыл!
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Өз қызығушылығыңызға сай клубты таңдап, студенттік өмірді толық өмір сүріңіз.
            Жаңа достармен танысып, дағдыларыңызды дамытыңыз!
          </p>
          <Button size="lg" onClick={() => navigate('/clubs')}>
            Клубты таңдау
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
