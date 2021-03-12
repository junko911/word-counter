import React, { useState } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import UrlForm from './components/UrlForm';
import ResultTable from './components/ResultTable';

function App() {
  const [result, changeResult] = useState({})

  const submitUrl = url => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify({
        url: url
      })
    }
    fetch('http://localhost:3000/', options)
    .then(res => res.json())
    .then(data => {
      changeResult(data)
    })
  }

  return (
    <Container className="mt-2">
      <h1>Word Counter</h1>
      <UrlForm submitUrl={submitUrl}/>
      <ResultTable result={result}/>
    </Container>
  );
}

export default App;
