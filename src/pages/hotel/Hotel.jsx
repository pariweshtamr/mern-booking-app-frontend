import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.scss"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const id = location.pathname.split("/")[2]

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8000/api/hotels/find/${id}`
  )

  const { isLoading, search } = useSelector((state) => state.search)

  const { dates, options } = search

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
  function dayDifference(start, end) {
    const timeDiff = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    return diffDays
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  const photos = [
    {
      src: "/images/novotel/1.jpg",
    },
    {
      src: "/images/novotel/2.jpg",
    },
    {
      src: "/images/novotel/3.jpg",
    },
    {
      src: "/images/novotel/4.jpg",
    },
    {
      src: "/images/novotel/5.jpg",
    },
    {
      src: "/images/novotel/6.jpg",
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber
    if (direction === "left") {
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
      {loading ? (
        "LOADING..."
      ) : (
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
                onClick={() => handleMove("left")}
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
                onClick={() => handleMove("right")}
              />
            </div>
          )}
          <div className="hotel-wrapper">
            <button className="book-now">Reserve or Book Now!</button>
            <h1 className="hotel-title">{data.name}</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.city}</span>
            </div>
            <span className="hotel-distance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotel-price-highlight">
              Book a stay over ${data.cheapestPrice} at this property and
              getafree airport taxi
            </span>
            <div className="hotel-images">
              {data.photos?.map((photo, i) => (
                <div className="hotel-img-wrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotel-img"
                  />
                </div>
              ))}
            </div>

            <Row className="hotel-details">
              <Col md="8" className="hotel-details-texts">
                <h1 className="hotel-title">{data.title}</h1>
                <p className="hotel-desc">{data.description}</p>
              </Col>
              <Col md="4" className="hotel-details-price">
                <h1>Perfect for a {days}-night stay</h1>
                <span>
                  Located in the heart of the city, this Hotel has an excellent
                  ocation score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room} </b> ({days}{" "}
                  nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </Col>
            </Row>
          </div>
        </Container>
      )}

      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel
