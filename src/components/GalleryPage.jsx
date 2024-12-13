import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const galleryItems = [
    { src: "events/free_workshops.png", name: "Suvidha Foundation Workshops" },
    { src: "events/workshops.png", name: "Free Workshops" },
    { src: "events/books_distribution.png", name: "Suvidha Foundation Books Distribution" },
    { src: "events/online_events.png", name: "Suvidha Foundation Online Events" },
    { src: "events/cloths_destribution.png", name: "Suvidha Foundation Clothes Distribution" },
    { src: "events/tree_plantation.png", name: "Suvidha Foundation Tree Plantation" },
    { src: "events/free_education.png", name: "Suvidha Foundation Free Education" },
    { src: "events/womans_day.png", name: "Suvidha Foundation Women's Day Celebration" },
    { src: "events/food_drive.png", name: "Suvidha Foundation Food Drive" },
    { src: "events/events.png", name: "Suvidha Foundation Events" },
    { src: "events/womans_day.png", name: "Suvidha Foundation Women Empowerment Campaigns" },
    { src: "events/animal_feeding.png", name: "Animal Feeding" },
  ];

  return (
    <section id="gallery" className="container py-5">
        <center><h2><b>Gallery:</b></h2></center>
      <h4 className="gallery-title text-center mb-5">
        Moments of Impact: Capturing the Journey of Our NGO
      </h4>
      <div className="row g-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 gallery-item"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="image-card">
              <img src={item.src} alt={item.name} className="img-fluid rounded shadow" />
              <div className="image-name text-center mt-3">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
