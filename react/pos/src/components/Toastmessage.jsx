import React from "react";
import { Toast } from "react-bootstrap";

function Toastmessage({ list, handleToast }) {
  return (
    <>
      {list.map((fruit, i) => {
        return (
          <Toast
            onClose={() => handleToast(fruit.id)}
            delay={1000}
            autohide
            key={i}
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
          </Toast>
        );
      })}
    </>
  );
}

export default Toastmessage;
