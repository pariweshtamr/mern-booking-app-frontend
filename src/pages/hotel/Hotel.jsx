import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './hotel.scss'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: '/images/novotel/1.jpg',
    },
    {
      src: '/images/novotel/2.jpg',
    },
    {
      src: '/images/novotel/3.jpg',
    },
    {
      src: '/images/novotel/4.jpg',
    },
    {
      src: '/images/novotel/5.jpg',
    },
    {
      src: '/images/novotel/6.jpg',
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber
    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Container className="hotel-container">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove('left')}
            />
            <div className="slider-wrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="slider-img"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove('right')}
            />
          </div>
        )}
        <div className="hotel-wrapper">
          <button className="book-now">Reserve or Book Now!</button>
          <h1 className="hotel-title">Novotel Sydney Darling Harbour</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              100 Murray Street, Sydney Central Business District, 2009 Sydney,
              Australia
            </span>
          </div>
          <span className="hotel-distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel-price-highlight">
            Bookastay over$114 at this property and getafree airport taxi
          </span>
          <div className="hotel-images">
            {photos.map((photo, i) => (
              <div className="hotel-img-wrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotel-img"
                />
              </div>
            ))}
          </div>

          <Row className="hotel-details">
            <Col md="8" className="hotel-details-texts">
              <h1 className="hotel-title">Stay in the heart of Sydney</h1>
              <p className="hotel-desc">
                Located 3 minutes’ walk from Harborside Shopping Center in
                Sydney CBD (Central Business District), Novotel Sydney Darling
                Harbor offers spacious rooms, some with stunning views of the
                city skyline. It features a fitness center, outdoor swimming
                pool, outdoor tennis court and 30 minutes of free WiFi in the
                lobby per device per day. All modern, comfortable rooms at
                Darling Harbor Novotel include a flat-screen TV with cable
                channels. Guests can enjoy 24-hour room service. The Ternary
                Restaurant brings an air of relaxed sophistication to the
                Darling Harbor dining scene. Guests can experience three unique
                offerings; the Grill Kitchen, the Asian Kitchen and the Wine Bar
                in the welcoming, open plan space. Novotel Sydney Darling Harbor
                is a short walk to Darling Harbor’s main attractions, including
                Wildlife Sydney Zoo, Sea Life Sydney Aquarium, The Star Casino
                and National Maritime museum. It is located next to Convention
                Station, offering transport links across the city. The Sydney
                city center is just a 15-minute walk away. The International
                Convention Center Sydney is just 601 m away. Solo travelers in
                particular like the location – they rated it 9.2 for a
                one-person stay
              </p>
            </Col>
            <Col md="4" className="hotel-details-price">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the heart of the city, this Hotel has an excellent
                ocation score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </Col>
          </Row>
        </div>
      </Container>

      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel
