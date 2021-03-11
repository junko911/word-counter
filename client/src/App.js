import './App.css';
import { Container } from 'reactstrap';
import UrlForm from './components/UrlForm';
import ResultTable from './components/ResultTable';

function App() {
  return (
    <Container className="mt-2">
      <h1>Word Counter</h1>
      <UrlForm/>
      <ResultTable/>
    </Container>
  );
}

export default App;
