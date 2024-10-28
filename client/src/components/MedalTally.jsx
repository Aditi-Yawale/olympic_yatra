import React, { useState } from 'react';
import './CommonDashboard.css';

const allCountries = [
  { country: 'United States', gold: 30, silver: 25, bronze: 20 },
  { country: 'China', gold: 29, silver: 17, bronze: 16 },
  { country: 'Japan', gold: 27, silver: 14, bronze: 17 },
  { country: 'Great Britain', gold: 22, silver: 17, bronze: 19 },
  { country: 'Germany', gold: 20, silver: 14, bronze: 16 },
  { country: 'Australia', gold: 17, silver: 7, bronze: 22 },
  { country: 'France', gold: 14, silver: 11, bronze: 12 },
  { country: 'Italy', gold: 13, silver: 10, bronze: 8 },
  { country: 'Canada', gold: 12, silver: 9, bronze: 10 },
  { country: 'South Korea', gold: 11, silver: 8, bronze: 12 },
];

function MedalTally() {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(prev => !prev);
  };

  const countriesToShow = showAll ? allCountries : allCountries.slice(0, 5);

  return (
    <div className={`medal-tally-wrapper ${showAll ? 'medal-tally-expanded' : ''}`}>
      <div className="medal-tally-background"></div>
      <div className="medal-tally-container">
        <div className="medal-tally-header">
          <h2>Medal Tally</h2>
          <button onClick={handleToggle} className="show-all-btn">
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
        <div className="medal-tally-list">
          <div className="medal-tally-header-row">
            <div className="country-name">Country</div>
            <div className="medal-label">Gold</div>
            <div className="medal-label">Silver</div>
            <div className="medal-label">Bronze</div>
          </div>
          {countriesToShow.map((country, index) => (
            <div key={index} className="medal-tally-item">
              <div className="country-name">{country.country}</div>
              <div className="medal-count">{country.gold}</div>
              <div className="medal-count">{country.silver}</div>
              <div className="medal-count">{country.bronze}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MedalTally;
