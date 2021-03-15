import React from "react"
import { Table } from "reactstrap"

const ResultTable = db => {
  const genRows = obj => {
    return Object.keys(obj.db).map(key => {
      return (
        <tr key={key}>
          <td>{key}</td>
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
    </>
  )
}

export default ResultTable
