import React from "react"
import "./App.css"
import { Container } from "reactstrap"
import UrlForm from "./components/UrlForm"
import ResultTable from "./components/ResultTable"
import { submitHandler } from "./Utils"

function App() {

  return (
    <Container className="mt-2">
      <h1>Word Counter</h1>
      <UrlForm submitUrl={submitHandler} />
      <ResultTable />
    </Container>
  )
}

export default App
