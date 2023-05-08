import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TastingCard from '../components/TastingCard';
import { tastings } from '../data/data'

export function Tastings() {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Выберите начинку:</h1>
      <Row className="g-3">
        {tastings.map(item => (
          <Col className="d-flex justify-content-center" key={item.id}>
            <TastingCard {...item} key={item.id} recipe={item} />
        </Col>
        ))}
      </Row>
    </>
  )
}