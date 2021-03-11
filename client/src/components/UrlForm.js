import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const UrlForm = props => {
  return(
    <>
      <Form>
        <FormGroup>
          <Label for="url">URL</Label>
          <Input
            type="url"
            name="url"
            placeholder="https://www.example.com" />
        </FormGroup>
      </Form>
      <Button>Submit</Button>
    </>
  )
}

export default UrlForm;
