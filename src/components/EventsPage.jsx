import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <section id="events" className="container py-5">
      <h4 className="events-title text-center mb-5">Our Charity Events: Celebrating Our Impact Together</h4>

      <div className="row g-4">
        {/* Tree Plantation Event */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/tree_plantation.png" alt="Tree Plantation" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Tree-Plantation Drive</h3>
              <p className="event-description">
                Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.
              </p>
            </div>
          </div>
        </div>

        {/* Fundraising Event */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/fundraising.png" alt="Fundraising" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Fundraising Events</h3>
              <p className="event-description">
                Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.
              </p>
            </div>
          </div>
        </div>

        {/* Clothes Distribution */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/cloths_destribution.png" alt="Clothes Distribution" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Cloths Distribution</h3>
              <p className="event-description">
                Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need.
              </p>
            </div>
          </div>
        </div>

        {/* Women's Day */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/womans_day.png" alt="Women's Day" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Women's Day</h3>
              <p className="event-description">
                Celebrating the strength, resilience, and achievements of women worldwide. Let's honor their contributions on this special Women's Day.
              </p>
            </div>
          </div>
        </div>

        {/* Food Donation */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/food_donation.png
            " alt="Food Donation" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Food Donation</h3>
              <p className="event-description">
                Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.
              </p>
            </div>
          </div>
        </div>

        {/* Animal Feeding */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/animal_feeding.png" alt="Animal Feeding" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Animal Feeding</h3>
              <p className="event-description">
                Join us in providing sustenance and compassion to our furry companions. Let's make a positive impact on their lives.
              </p>
            </div>
          </div>
        </div>

        {/* Sanitary Pads Distribution */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/sanitary_pad_distribution.png" alt="Sanitary Pads Distribution" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Sanitary Pads Distribution</h3>
              <p className="event-description">
                Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Let's empower women and ensure access to safe and dignified hygiene.
              </p>
            </div>
          </div>
        </div>

        {/* Free Workshops */}
        <div className="col-md-4 col-sm-6">
          <div className="event-card">
            <img src="events/free_workshops.png" alt="Free Workshops" className="event-img" />
            <div className="event-info">
              <h3 className="event-heading">Free Workshops</h3>
              <p className="event-description">
                Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
