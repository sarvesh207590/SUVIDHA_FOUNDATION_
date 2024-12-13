import React from 'react';
import './WhatWeDoPage.css'; // Include custom CSS for styling

const WhatWeDoPage = () => {
  const causes = [
    {
      title: 'Healthy Food',
      description:
        'By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.',
    },
    {
      title: 'Social Awareness',
      description:
        'We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.',
    },
    {
      title: 'Tree Plantation',
      description:
        'Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.',
    },
    {
      title: 'Health Care',
      description:
        'We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.',
    },
    {
      title: 'Primary Education',
      description:
        'By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.',
    },
    {
      title: 'Social Care',
      description:
        'Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals.',
    },
  ];

  return (
    <section id="what-we-do" className="py-5 text-center">
      <h2 className="section-title">What We Do</h2>
      <div className="cause-cards-container">
        {causes.map((cause, index) => (
          <div className="cause-card" key={index}>
            <h3 className="cause-title">{cause.title}</h3>
            <p className="cause-description">{cause.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoPage;
