import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function App() {
  return (
    <>
      <h1>Word Counter</h1>
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
    </>
  );
}

export default App;
