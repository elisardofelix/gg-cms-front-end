import React from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = ({ username_state, password_state, loginHandler }) => (
  <Form id="login-form">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control
        type="input"
        required
        placeholder="User Name"
        onChange={(e) => username_state.setUsername(e.target.value)}
        value={username_state.username}
      />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        onChange={(e) => password_state.setPassword(e.target.value)}
        value={password_state.password}
      />
    </Form.Group>
    <Button variant="primary btn-success" onClick={loginHandler}>
      Sign in
    </Button>
  </Form>
);

export default LoginForm;
