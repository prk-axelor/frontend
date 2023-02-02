import React from "react";
import { ToastContainer, Row, Col, Toast } from "react-bootstrap";

function Toastmessage({ show, setShow, toast }) {
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer position="top-end" className="p-3">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{toast}</strong>

              <small>just now</small>
            </Toast.Header>
            <Toast.Body>added successfully</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default Toastmessage;
