import React from 'react';
import { Form, Row, Col } from "react-bootstrap";
import FormComInner from "./FormComInner";


function SignInForm() {
    return (
        <Form>
          <Row>
            <Col md={{ span:10, offset: 1 }}>
              <FormComInner
                controlId="formBasicEmail"
                label="Email"
                type="email"
                text="This email will not be shared with anyone else"
              ></FormComInner>
            </Col>
          </Row>         
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <FormComInner
                controlId="formBasicConfirmPassword"
                label="Password"
                type="password"
              ></FormComInner>
            </Col>
          </Row>
        </Form>
      );
}

export default SignInForm
