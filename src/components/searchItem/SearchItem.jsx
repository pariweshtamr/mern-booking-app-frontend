import { Col, Container } from 'react-bootstrap'
import './searchItem.scss'

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img className="siImg" src="/images/sixcontinents.jpg" alt="" />
      <Container className="d-flex">
        <Col md="8" className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from the city</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire Studio -- 1 Bathromm -- 1 full bed
          </span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </Col>
        <Col md="4" className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsText">
            <span className="siPrice">$150</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckBtn">See availability</button>
          </div>
        </Col>
      </Container>
    </div>
  )
}

export default SearchItem
