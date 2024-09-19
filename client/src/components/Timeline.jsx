import React, { useState } from 'react';
import './AthleteDashboard.css';

const Timeline = () => {
  const [events, setEvents] = useState(['Event 1', 'Event 2', 'Event 3']);
  const [editIndex, setEditIndex] = useState(null);
  const [newEvent, setNewEvent] = useState('');

  const handleEditClick = (index) => {
    setEditIndex(index);
    setNewEvent(events[index]);
  };

  const handleEventChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleSaveClick = () => {
    const updatedEvents = [...events];
    updatedEvents[editIndex] = newEvent;
    setEvents(updatedEvents);
    setEditIndex(null);
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
        <h3>Timeline</h3>
        {/* Edit icon as a label to trigger editing */}
        <label htmlFor="edit-icon" className="edit-icon" onClick={() => setEditIndex(events.length)}>
          &#9998; {/* Pencil icon */}
        </label>
      </div>
      <div className="timeline-content">
        {events.map((event, index) => (
          <div className="event" key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={newEvent}
                onChange={handleEventChange}
                onBlur={handleSaveClick} // Save changes when focus is lost
              />
            ) : (
              <span>{event}</span>
            )}
            {editIndex !== index && (
              <div>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
        {editIndex === events.length && (
          <div className="event">
            <input
              type="text"
              value={newEvent}
              onChange={handleEventChange}
              placeholder="Add new event"
            />
            <button onClick={handleAddEvent}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
