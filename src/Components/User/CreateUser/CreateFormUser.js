import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateFormUser = ({ handler }) => {
  return (
    <div className="app-form">
      <Form id="create-form">
        <Form.Group controlId="formBasicUser">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="input"
            required
            placeholder="User Name"
            autoComplete="none"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="none"
          />
        </Form.Group>
        <Form.Group controlId="formBasicRePassword">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="none"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" autoComplete="none" />
        </Form.Group>
        <Form.Group controlId="formBasicStatus">
          <Form.Check type="checkbox" label="Active" />
        </Form.Group>
        <Form.Group controlId="formBasicIsAdmin">
          <Form.Check type="checkbox" label="Administrator" />
        </Form.Group>
        <Button variant="primary btn-success" onClick={handler}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateFormUser;
