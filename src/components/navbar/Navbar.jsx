import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <Container className="navContainer">
        <Link to="/" className="logoLink">
          <span className="logo">Booking App</span>
        </Link>

        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
