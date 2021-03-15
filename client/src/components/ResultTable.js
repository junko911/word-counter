import React, { useState } from "react"
import { Table, Modal, ModalBody } from "reactstrap"

const ResultTable = db => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [result, setResult] = useState({})

  const clickHandler = e => {
    const results = db.db[e.target.id]["result"]
    setResult(results)
    setModal(true)
  }

  const genModalRows = obj => {
    return Object.keys(obj).map(ele => {
      return (
        <tr key={ele}>
          <td>{ele}</td>
          <td>{obj[ele]}</td>
        </tr>
      )
    })
  }

  const genRows = obj => {
    return Object.keys(obj.db).map(key => {
      return (
        <tr key={key}>
          <td id={key} onClick={e => clickHandler(e)}>{key}</td>
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          {modal ?
          <Table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {genModalRows(result)}
            </tbody>
          </Table>
          : null
          }
        </ModalBody>
      </Modal>
    </>
  )
}

export default ResultTable
