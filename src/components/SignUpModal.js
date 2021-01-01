import React from 'react';
import {Modal,Button}from "react-bootstrap";
import FormCom from "./SignUpForm";


function SignUpModal (props) {

  return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCom></FormCom>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide} type="submit">
            {props.text}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
  }

  export default SignUpModal