import React from 'react';
import './NewsEvents.css';

const newsData = [
  {
    id: 1,
    image: '/images/gess-dubai.webp',
    title: 'Almoe Digital Solutions participates in GESS Dubai, 2023',
    url: '#',
  },
  {
    id: 2,
    image: '/images/gess-dubai.webp',
    title: 'Almoe Digital Solutions participates in GITEX Global Dubai, 2024',
    url: '#',
  },
  {
    id: 3,
    image: '/images/gess-dubai.webp',
    title: 'Almoe Digital Solutions participates in Medlab Middleast, 2022',
    url: '#',
  },
];

function NewsEvents() {
  return (
    <section className="latest-news-cards-section">
      <div className="container">
        <h2 className="section-heading">Latest News &amp; Events</h2>
        <div className="news-cards-wrapper">
          {newsData.map(({ id, image, title, description, url }) => (
            <div className="news-card" key={id}>
              <img className="news-card-image" src={image} alt={title} />
              <div className="news-card-content">
                <h3 className="news-card-title">{title}</h3>
                <p className="news-card-description">{description}</p>
                <a href={url} className="button news-event-btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;
