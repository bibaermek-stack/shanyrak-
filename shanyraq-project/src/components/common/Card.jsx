import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  premium = false
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  const hoverStyles = hover ? 'hover:scale-105 transition-transform duration-300' : '';
  const premiumStyles = premium ? 'card-premium' : 'bg-primary-light border border-accent/20';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${premiumStyles} ${className}`}>
      {children}
    </div>
  );
};

// ClubCard компоненті - клубтарға арнайы
export const ClubCard = ({ club, language = 'kk', onClick }) => {
  return (
    <Card hover premium className="p-6 cursor-pointer">
      <div
        className="w-full h-32 flex items-center justify-center mb-4 rounded-lg overflow-hidden"
        style={{ backgroundColor: club.color + '20' }}
      >
        <img
          src={club.logo}
          alt={club.name[language]}
          className="w-full h-full object-contain p-2"
        />
      </div>

      <h3 className="text-xl font-heading font-bold text-accent mb-2">
        {club.name[language]}
      </h3>

      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {club.description[language]}
      </p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-text-secondary">
          {club.members} мүшелер
        </span>
        <span className="text-accent hover:text-accent-light">
          Толығырақ →
        </span>
      </div>
    </Card>
  );
};

export default Card;
