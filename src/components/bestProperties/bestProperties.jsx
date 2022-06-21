import './bestProperties.scss'
import bestProperty from '../../assets/bestProperties.json'
import { Container } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'

const BestProperties = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8000/api/hotels?featured=true',
  )

  console.log(data)

  return (
    <Container>
      <div className="best-properties">
        {loading ? (
          'LOADING...'
        ) : (
          <>
            {data.map((property) => (
              <div className="bpItem" key={property._id}>
                <img src={property.photos[0]} className="bpImg" alt="" />
                <div className="bpTitles">
                  <h1>{property.name}</h1>
                  <h2>{property.city}</h2>
                  <p>Starting from ${property.cheapestPrice}</p>

                  {property.rating && (
                    <div className="bpRating">
                      <button>{property.rating}</button>
                      <span>Excellent</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Container>
  )
}

export default BestProperties
