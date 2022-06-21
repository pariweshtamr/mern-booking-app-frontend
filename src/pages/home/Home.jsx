import { Container } from 'react-bootstrap'
import BestProperties from '../../components/bestProperties/bestProperties'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.scss'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container className="home-container pb-5">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title">Homes guests love</h1>
        <BestProperties />
      </Container>
      <MailList />
      <Footer />
    </div>
  )
}

export default Home
