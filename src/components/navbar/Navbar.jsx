import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./navbar.scss"

const Navbar = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <div className="navbar">
      <Container className="navContainer">
        <Link to="/" className="logoLink">
          <span className="logo">Booking App</span>
        </Link>

        {user ? (
          <div className="d-flex align-items-center">
            <div>Welcome, {user.username}</div>
            <button className="navButton">Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Navbar
