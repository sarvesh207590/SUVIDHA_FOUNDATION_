import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          {/* Office Headquarters */}
          <div className="col-md-4">
            <h5 className="footer-heading">Office Headquarters</h5>
            <p><strong>Nagpur Headquarter:</strong></p>
            <p>
              Suvidha Foundation, Motghare Bhavan, Ward No. 4, Santnagar, Annamod, 
              Near Water Tank, Khaperkheda, Saoner, Nagpur, Maharashtra, India Pincode - 441102
            </p>
            <p><strong>Hyderabad Headquarter:</strong></p>
            <p>
              Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
            </p>
          </div>

          {/* Certificates */}
          <div className="col-md-4">
            <h5 className="footer-heading">Certificates</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf" target="_blank" rel="noopener noreferrer">
                  80G Certificate
                </a>
              </li>
              <li>
                <a href="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf" target="_blank" rel="noopener noreferrer">
                  12A Certificate
                </a>
              </li>
              <li>
                <a href="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF" target="_blank" rel="noopener noreferrer">
                  CSR Certificate
                </a>
              </li>
              <li>
                <a href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf" target="_blank" rel="noopener noreferrer">
                  Suvidha Darpan Registration
                </a>
              </li>
              <li>
                <a href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf" target="_blank" rel="noopener noreferrer">
                  Suvidha Pan Card
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-4">
            <h5 className="footer-heading">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/verify-certificate">Verify Your Certificate</a></li>
              <li><a href="https://kidcoder.netlify.app/">Free Kids Coding Bootcamp</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-icons text-center mt-4">
          <a href="https://www.linkedin.com/company/suvidha-foundation/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/suvidha_mahila_mandal/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p>
            © Suvidha Foundation (Suvidha Mahila Mandal), All Rights Reserved.<br />
            Powered by Suvidha Foundation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
