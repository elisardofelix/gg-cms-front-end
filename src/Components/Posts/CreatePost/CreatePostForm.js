import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateFormPost = ({ title_state, permalink_state, createHandler }) => (
  <div className="app-form">
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="input"
          required
          placeholder="Title"
          value={title_state.title}
          onChange={(e) => title_state.setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPermaLink">
        <Form.Label>PermaLink</Form.Label>
        <Form.Control
          type="input"
          required
          placeholder="PermaLink"
          value={permalink_state.permaLink}
          onChange={(e) => permalink_state.setPermaLink(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formContent">
        <div id="editorjs"></div>
      </Form.Group>
      <Button variant="primary btn-success" onClick={createHandler}>
        Create
      </Button>
    </Form>
  </div>
);

export default CreateFormPost;
