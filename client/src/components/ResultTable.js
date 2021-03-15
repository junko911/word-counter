import React from 'react';
import { Table } from 'reactstrap'

const ResultTable = () => {
  
  let wordsDb = localStorage.getItem('wordsDb')
  let records = JSON.parse(wordsDb)

  const genRows = records => {
    return Object.keys(records).map(r => {
      return(
        <tr key={r}>
          <td>{r}</td>
          <td>{records[r]["url"]}</td>
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
          {genRows(records)}
        </tbody>
      </Table>
    </>
  )
}

export default ResultTable;
