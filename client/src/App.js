import './App.css';
import { Container, Row, Col } from 'reactstrap';
import UrlForm from './components/UrlForm';

function App() {
  return (
    <Container className="mt-2">
      <h1>Word Counter</h1>
      <Row>
        <Col>
          <UrlForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
