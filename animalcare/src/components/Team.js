import React from 'react';
import './Team.css';

const teamMembers = [
  { name: "Dr. Mia Carter", role: "Veterinarian", img: "/images/j1.jpg"},
  { name: "Sam Thomas", role: "Adoption Manager", img: "/images/j2.jpg"},
  { name: "Elena Rivera", role: "Animal Care Specialist", img: "/images/j3.jpg" },
  { name: "Leo Zhang", role: "Volunteer Coordinator", img: "/images/j4.jpg" },
  { name: "Priya Nair", role: "Behavior Trainer", img: "/images/j5.jpg" },
  { name: "Carlos Gomez", role: "Shelter Operations", img: "/images/j6.jpg" },
  { name: "Priya Nair", role: "Behavior Trainer", img: "/images/j7.jpg" },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Dedicated Team</h2>
      <p>Passionate individuals who care for our furry friends with love and expertise 🐾</p>
      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <div className="team-card" key={i}>
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
