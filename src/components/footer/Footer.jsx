import { Col, Container, Row } from 'react-bootstrap'
import './footer.scss'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row text-center">
          <Col md="7" sm="12" className="footer-left-content">
            <div className="copywrite ">
              Copyright &copy; 2022 Booking App | All rights reserved
            </div>
          </Col>
          <Col md="5" sm="12">
            <div className="footer-right-content">
              <ul className="social-icons">
                <li>
                  <a
                    href="/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
