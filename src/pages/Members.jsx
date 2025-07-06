import React from "react";
import "./Members.css";

const members = [
  {
    name: "Arjun Kapoor",
    role: "Club President",
  },
  {
    name: "Sara Malik",
    role: "Vice President",
  },
  {
    name: "Ravi Verma",
    role: "Event Coordinator",
  },
  {
    name: "Priya Singh",
    role: "Social Media Lead",
  },
];

const Members = () => {
  return (
    <div className="members-container">
      <h2 className="members-title">🪐 Meet the Team</h2>
      <div className="row justify-content-center">
        {members.map((member, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="member-card">
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
