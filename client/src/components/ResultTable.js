import React from 'react';
import { Table } from 'reactstrap'

const ResultTable = ({ result }) => {

  const genRows = words => {
    return Object.keys(words).map(word => {
      return(
        <tr>
          <td>{word}</td>
          <td>{words[word]}</td>
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
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {genRows(result)}
        </tbody>
      </Table>
    </>
  )
}

export default ResultTable;
