import './featured.scss'
import featuredCities from '../../assets/featuredCities.json'
import { Container } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8000/api/hotels/city?cities=Sydney,Melbourne,Gold Coast,Canberra',
  )

  return (
    <Container className="featured-container">
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div className="featured">
            {data.map((city, i) => (
              <div key={i} className="featuredItem">
                <img src={city.img} alt="" className="featuredImg" />
                <div className="featuredTitles">
                  <h1>{city.name}</h1>
                  <h2>
                    {data[i]} {data[i] > 1 ? 'properties' : 'property'}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  )
}

export default Featured
