import React, { useState } from "react"
import { Table } from "reactstrap"
import ResultModal from "./ResultModal"

const ResultTable = db => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [result, setResult] = useState({})

  const clickHandler = e => {
    const results = db.db[e.target.id]["result"]
    setResult(results)
    setModal(true)
  }

  const genRows = obj => {
    return Object.keys(obj.db).map(key => {
      return (
        <tr key={key}>
          <td
            id={key}
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={e => clickHandler(e)}
          >{key}</td>
          <td>{obj.db[key]["url"]}</td>
        </tr>
      )
    })
  }

  return (
    <>
      <h2 className="mt-4">Result</h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {genRows(db)}
        </tbody>
      </Table>
      <ResultModal modal={modal} toggle={toggle} result={result} />
    </>
  )
}

export default ResultTable
