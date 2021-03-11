import './App.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function App() {
  return (
    <Container className="mt-2">
      <h1>Word Counter</h1>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="url">URL</Label>
              <Input
                type="url"
                name="url"
                placeholder="https://www.example.com" />
            </FormGroup>
          </Form>
          <Button>Submit</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
