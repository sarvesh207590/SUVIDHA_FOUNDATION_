import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './OurTeam.css'; // Import custom CSS for styling

const teamMembers = [
  {
    name: 'Shobha Motghare',
    position: 'Secretary',
    image: 'Team/shobha_metghare.png', 
    linkedin: 'https://www.linkedin.com/in/shobha-motghare-0a6a57238/',
  },
  {
    name: 'Payal Badhe',
    position: 'President',
    image: 'Team/Payal_Badhe.png', 
    linkedin: 'https://www.linkedin.com/in/payal-badhe-531756aa/',
  },
  {
    name: 'Bharti Shendre',
    position: 'Treasurer',
    image: 'Team/Bharati_Shendre.png',  
    linkedin: 'https://www.linkedin.com/in/bharti-shendre-6517b928a/',
  },
  {
    name: 'Nilima Kalambe',
    position: 'Advisor',
    image: 'Team/Nilima_Kalambe.png', 
    linkedin: 'https://www.linkedin.com/in/nilima-kalambe-b275a1245/',
  },
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <h1>Meet Our Team</h1>
      <p className="team-subheading">The people behind our charity activities</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin className="linkedin-icon" /> LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
