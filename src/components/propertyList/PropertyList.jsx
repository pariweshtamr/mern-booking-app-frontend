import { Container } from 'react-bootstrap'
import './propertyList.scss'
import propertyLists from '../../assets/propertyList.json'
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8000/api/hotels/type',
  )

  console.log(data)

  return (
    <Container>
      <div className="pList">
        {loading ? (
          'Loading...'
        ) : (
          <>
            {data.map((property, i) => (
              <div className="pListItem" key={i}>
                <img src={property.img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{property.title}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}s
                  </h2>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Container>
  )
}

export default PropertyList
