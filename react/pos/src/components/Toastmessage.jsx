import React from "react";
import { Toast } from "react-bootstrap";

function Toastmessage({ list, handleToast }) {
  return (
    <>
      {list.map((fruit) => {
        return (
          <Toast
            onClose={() => handleToast(fruit.id)}
            delay={1000}
            autohide
            key={fruit.id}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{fruit.name}</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>added successfully</Toast.Body>
          </Toast>
        );
      })}
    </>
  );
}

export default Toastmessage;
