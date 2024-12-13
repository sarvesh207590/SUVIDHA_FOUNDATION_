import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import './Carousel.css'; // Include custom CSS for positioning

const CustomCarousel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="corossal1.png" alt="First slide" />
          <Carousel.Caption>
            <h3 className="responsive-heading">Support Our Cause</h3>
            <p ><span className='bg-success rounded'>Join hands for a sustainable future.</span></p>
            <Button variant="warning" className="me-2">Donate Now</Button>
            <Button  className='btn btn-light'onClick={handleShow}>Watch Video</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="corossal2.png" alt="Second slide" />
          <Carousel.Caption>
            <h3 className="responsive-heading">Join Our Internship Program</h3>
            <p><span className='bg-success rounded'>Empowering youth to make a difference.</span></p>
            <Button variant="warning" className="me-2">Donate Now</Button>
            <Button  className='btn btn-light' onClick={handleShow}>Watch Video</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="corossal3.png" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="responsive-heading">Join Our Program</h3>
            
            <p><span className='bg-success rounded'>Empowering youth to make a difference.</span></p>
            <Button variant="warning" className="me-2">Donate Now</Button>
            <Button 
             className='btn btn-light'onClick={handleShow}>Watch Video</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="corossal4.png" alt="Fourth slide" />
          <Carousel.Caption>
            <h3 className="responsive-heading">Get Your Certificates</h3>
            
            <p><span className='bg-success rounded'>Join our Internship Program</span></p>
            <Button 
            className='btn btn-light'
            onClick={handleShow}>Watch Video</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Modal for Video */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video controls width="100%">
            <source src="Suvidha_Foundation_Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomCarousel;
