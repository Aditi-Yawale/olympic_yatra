import React, { useState } from "react";
import "./CommonDashboard.css";

const EventSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("02/09/2024");

  const events = {
    athletics: [
      { country: "USA", name: "J. Gatlin" },
      { country: "CHN", name: "X. Wei" },
      { country: "JPN", name: "J. Mika" },
      { country: "AUS", name: "A. Mate" },
      { country: "FRA", name: "J. Leroux" },
      { country: "NED", name: "P. Much" },
      { country: "GBR", name: "W. Mick" },
    ],
    shooting: [
      {
        time: "1345 HRS",
        participants: [
          { country: "JPN", name: "J. Mika" },
          { country: "AUS", name: "A. Mate" },
          { country: "GBR", name: "W. Mick" },
        ],
      },
      {
        time: "1545 HRS",
        participants: [{ country: "TBD", name: "TBD" }],
      },
    ],
  };

  const flagEmojis = {
    USA: "🇺🇸",
    CHN: "🇨🇳",
    JPN: "🇯🇵",
    AUS: "🇦🇺",
    FRA: "🇫🇷",
    NED: "🇳🇱",
    GBR: "🇬🇧",
    TBD: "🏳️",
  };

  return (
    <div className="event-schedule-container">
      <div className="date-selector">
        <label>Date</label>
        <input
          type="text"
          value={selectedDate}
          readOnly
          className="date-input"
        />
        <input type="date" className="calendar-input" />
      </div>
      
      <div className="event-section">
        <div className="event-category">
          <h2>Athletics</h2>
          <span className="live-badge">Live</span>
          <ul className="event-list">
            {events.athletics.map((athlete, index) => (
              <li key={index} className="athlete">
                <span className="flag">{flagEmojis[athlete.country]}</span>
                <span>{athlete.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="event-category">
          <h2>Shooting</h2>
          {events.shooting.map((shoot, index) => (
            <div key={index} className="shooting-event">
              <p>{shoot.time}</p>
              <ul className="event-list">
                {shoot.participants.map((participant, index) => (
                  <li key={index} className="athlete">
                    <span className="flag">{flagEmojis[participant.country]}</span>
                    <span>{participant.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
