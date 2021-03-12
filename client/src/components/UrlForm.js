import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const UrlForm = () => {
  const [url, changeUrl] = useState("")

  const submitHandler = e => {
    e.preventDefault()
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
    .then(console.log)
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

export default UrlForm;
