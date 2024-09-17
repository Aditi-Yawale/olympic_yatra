import React from 'react';
import './CommonDashboard.css'; // Add custom styles

const LiveEvent = () => {
  const events = [
    { id: 1, title: 'Athletics', description: "Men's 100m", link: '#', icon: '🏃‍♂️' },
    { id: 2, title: 'Surfing', description: "Men's", link: '#', icon: '🏄‍♂️' },
    { id: 3, title: 'Tennis', description: "Women’s", link: '#', icon: '🎾' },
  ];

  return (
    <div className="live-event-container">
      <h3 className="live-title">Live</h3>
      <div className="live-event-list">
        {events.map((event) => (
          <div className="live-event-card" key={event.id}>
            <div className="event-icon">{event.icon}</div>
            <div className="event-details">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
            <a href={event.link} className="watch-now">
              Watch Now
            </a>
          </div>
        ))}
      </div>
      <div className="see-more-btn-container">
        <button className="see-more-btn">See More</button>
      </div>
    </div>
  );
};

export default LiveEvent;
