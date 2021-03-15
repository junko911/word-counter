import React from 'react'
import { Table, Modal, ModalBody } from "reactstrap"

const ResultModal = ({modal, toggle, result}) => {

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

  return (
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
  )
}

export default ResultModal
