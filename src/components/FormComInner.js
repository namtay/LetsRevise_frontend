import React from 'react';
import {Form} from "react-bootstrap";

function FormComInner(props) {
    return (
        <Form.Group controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={`Enter ${props.label}`} />
        <Form.Text className="text-muted">
          {props.text}
        </Form.Text>
      </Form.Group>
    )
}

export default FormComInner
