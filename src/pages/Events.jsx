import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">🚀 Upcoming & Past Events</h2>

      <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption d-none d-md-block">
              <h5>🌌 Stargazing Night</h5>
              <p>Observing constellations and planets with telescopes</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>🧠 Astro Quiz Competition</h5>
              <p>Battle of space brains from all grades!</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>👩‍🚀 Guest Lecture: Life on Mars</h5>
              <p>By Dr. Vega from the Space Institute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
