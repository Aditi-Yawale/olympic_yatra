import React, { useState } from 'react';
import './CommonDashboard.css'; // Add custom styles

const LiveEvent = () => {
  // Initial events to display
  const initialEvents = [
    { id: 1, title: 'Athletics', description: "Men's 100m", link: 'https://www.youtube.com/watch?v=7Xnr805bm4E', icon: '🏃‍♂️' },
    { id: 2, title: 'Surfing', description: "Men's", link: 'https://www.youtube.com/watch?v=O_VSmuh3a2g', icon: '🏄‍♂️' },
    { id: 3, title: 'Tennis', description: "Women’s", link: 'https://www.youtube.com/watch?v=HCRfEdC7fdQ', icon: '🎾' },
  ];

  // Additional events to show when 'See More' is clicked
  const additionalEvents = [
    { id: 4, title: 'Swimming', description: "Men’s 200m Freestyle", link: 'https://www.youtube.com/watch?v=9yuKCKtUow0', icon: '🏊‍♂️' },
    { id: 5, title: 'Cycling', description: "Women’s Road Race", link: 'https://www.youtube.com/watch?v=czAztK7C1rs', icon: '🚴‍♀️' },
    { id: 6, title: 'Basketball', description: "Men’s", link: 'https://www.youtube.com/watch?v=uJs693eNfuQ', icon: '🏀' },
  ];

  // Combine the initial and additional events for toggling
  const allEvents = [...initialEvents, ...additionalEvents];

  // State to manage the current view of events (initial or all)
  const [events, setEvents] = useState(initialEvents);
  const [showMore, setShowMore] = useState(false); // Tracks whether we are showing more or not

  // Handle "See More" functionality
  const handleSeeMore = () => {
    setEvents(allEvents); // Show all events
    setShowMore(true); // Set the state to "more"
  };

  // Handle "See Less" functionality
  const handleSeeLess = () => {
    setEvents(initialEvents); // Show only initial events
    setShowMore(false); // Set the state to "less"
  };

  return (
    <div className="live-event-container">
      <h3 className="live-title">Olympics 2024</h3>
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
        {!showMore ? ( // Show "See More" if not all events are shown
          <button className="see-more-btn" onClick={handleSeeMore}>
            See More
          </button>
        ) : ( // Show "See Less" if all events are currently shown
          <button className="see-more-btn" onClick={handleSeeLess}>
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default LiveEvent;
