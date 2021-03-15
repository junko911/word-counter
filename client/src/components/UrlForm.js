import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const UrlForm = ({ submitUrl }) => {
  const [url, changeUrl] = useState("")

  const submitHandler = e => {
    e.preventDefault()
    submitUrl(url)
    changeUrl("")
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="url">Enter URL</Label>
          <Input
            type="url"
            name="url"
            placeholder="https://www.example.com"
            onChange={e => changeUrl(e.target.value)}
            value={url}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default UrlForm
