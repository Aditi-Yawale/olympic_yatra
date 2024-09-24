import React, { useState } from 'react';
import './AthleteDashboard.css';

const Timeline = () => {
  const [events, setEvents] = useState(['Event 1', 'Event 2', 'Event 3']);
  const [newEvent, setNewEvent] = useState('');

  const handleEventChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents([...events, newEvent]);
      setNewEvent('');
    }
  };

  const handleDeleteClick = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h3>Your Timeline</h3>
      </div>
      <div className="timeline-content">
        {events.map((event, index) => (
          <div className="event" key={index}>
            <span>{event}</span>
            <button className="delete-button" onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        ))}
        <div className="event">
          <input
            type="text"
            value={newEvent}
            onChange={handleEventChange}
            placeholder="Add new event"
          />
          <button onClick={handleAddEvent}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
