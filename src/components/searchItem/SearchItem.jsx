import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './searchItem.scss'

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img className="siImg" src={item.photos[0]} alt="" />
      <Container className="d-flex">
        <Col md="8" className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}m from the city</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">{item.description}</span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </Col>
        <Col md="4" className="siDetails">
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
          )}
          <div className="siDetailsText">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckBtn">See availability</button>
            </Link>
          </div>
        </Col>
      </Container>
    </div>
  )
}

export default SearchItem
