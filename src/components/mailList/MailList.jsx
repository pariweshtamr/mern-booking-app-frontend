import { Container } from 'react-bootstrap'
import './mailList.scss'
const MailList = () => {
  return (
    <div className="mail">
      <Container className="mail-container">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text " placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </Container>
    </div>
  )
}

export default MailList
