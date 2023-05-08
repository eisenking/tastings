import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function TastingCard( { id, name, image}) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={image} height="158px" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Link to={`/${id}`}>
          <Button variant="primary">Рассчитать</Button>
        </Link>       
      </Card.Body>
    </Card>
  );
}

export default TastingCard;