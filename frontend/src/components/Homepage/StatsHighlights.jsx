import React from 'react';
import './StatsHighlights.css'; 
import '../../styles/button.css'

const statsData = [
  { id: 1, number: '30+', label: 'Years of Experience' },
  { id: 2, number: '30+', label: 'Partner Brands Across The Globe' },
  { id: 3, number: '20+', label: 'Authorized Service & Support Partner Brands' },
  { id: 4, number: '3,500+', label: 'AV Installations' },
];

function StatsHighlights() {
  return (
    <section className="stats-highlights">
      <div className="container">
        <h2 className="stats-heading">Why Almoe Digital Solutions?</h2>
        <div className="stats-cards">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <button className="button stats-button">Get Inspired</button>
      </div>
    </section>
  );
}

export default StatsHighlights;
