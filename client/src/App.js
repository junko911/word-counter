import React from "react"
import "./App.css"
import { Container } from "reactstrap"
import UrlForm from "./components/UrlForm"
import ResultTable from "./components/ResultTable"

class App extends React.Component {

  state = {
    db: {}
  }

  submitUrl = url => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    }
    fetch("http://localhost:3000/", options)
      .then(res => res.json())
      .then(data => {
        const newDb = this.state.db
        const date = new Date().toLocaleString()
        newDb[date] = { url: url, result: data }
        this.setState({db: newDb})
      })
  }

  render () {
    return (
      <Container className="mt-2">
        <h1>Word Counter</h1>
        <UrlForm submitUrl={this.submitUrl} />
        <ResultTable db={this.state.db}/>
      </Container>
    )
  }
}

export default App
