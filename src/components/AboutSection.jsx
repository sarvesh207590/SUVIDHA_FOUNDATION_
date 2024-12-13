import React from 'react';
import './AboutSection.css'; // You can define styles here for yellow-black theme

const AboutSection = () => {
  return (
    <section id="about" className="py-5 text-center bg-light">
      <h3 className="section-heading">Learn About Us :</h3>
      <p className="section-title">Suvidha Foundation (SUVIDHA MAHILA MANDAL)</p>
      <div className="d-flex justify-content-center mt-4">
        {/* About Card */}
        <div className="card about-card mx-2">
          <div className="card-body">
            <h4 className="card-heading">About</h4>
            <p className="card-text">
              Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer. Through these programs, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equips them for the unforeseen future.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="card about-card mx-2">
          <div className="card-body">
            <h4 className="card-heading">Mission</h4>
            <p className="card-text">
              To Inspire Students, help them Innovate, and let them Integrate to build the next generation humankind.
              <br />
              To Run Food Donation And Awareness Campaign In Rural Regions.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card about-card mx-2">
          <div className="card-body">
            <h4 className="card-heading">Vision</h4>
            <p className="card-text">
              To build the Next Generation Entrepreneur, by providing them a Skill-Based Education.
              <br />
              To Provide Internship, Training, and Workshops and Quality Education All Over The World.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
