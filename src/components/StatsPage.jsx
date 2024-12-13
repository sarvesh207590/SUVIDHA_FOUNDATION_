import React from 'react';
import './StatsPage.css';

const StatsPage = () => {
  return (
    <section id="stats" className="py-5">
      <h2 className="stats-title">Our Impact</h2>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-globe-americas"></i>
          </div>
          <h3 className="stat-number">15+</h3>
          <p className="stat-text">Countries</p>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="stat-number">3L+</h3>
          <p className="stat-text">Volunteers</p>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3 className="stat-number">1 Cr+</h3>
          <p className="stat-text">Internship Goal</p>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-tree"></i>
          </div>
          <h3 className="stat-number">54L+</h3>
          <p className="stat-text">Trees Planted</p>
        </div>
      </div>
    </section>
  );
};

export default StatsPage;
