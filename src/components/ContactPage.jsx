import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoMdCall } from 'react-icons/io';
import { Breadcrumb } from 'react-bootstrap'; // Import Breadcrumb from Bootstrap
import './ContactPage.css'; 

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
      </Breadcrumb>

      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a
            href="https://www.instagram.com/suvidha_mahila_mandal/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/company/suvidha-foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <IoMdCall className="contact-icon" />
          <a href="tel:+91 7020044091" className="contact-link">
            +91 7020044091
          </a>
        </div>
        <div className="contact-item">
          <IoMdMail className="contact-icon" />
          <a href="mailto:info@suvidhafoundationedutech.org" className="contact-link">
            info@suvidhafoundationedutech.org
          </a>
        </div>
      </div>

      {/* Send Message Section with Image */}
    

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform">
        <button onClick={handleShowForm} className="send-message-btn">
          Send Message
        </button>
      </a>
    </div>
  );
};

export default ContactPage;
