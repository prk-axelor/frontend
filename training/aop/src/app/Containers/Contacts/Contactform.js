import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "./Api";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contactform() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addContact, updateContact } = api;

  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target || {};

    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateContact(id, data);
    } else {
      const response = await addContact(data);
      const { data: userData, status } = response;
      if (userData && status === 0) {
        navigate(`/user/${userData[0].id}`);
      }
    }
  };

  useEffect(() => {
    if (id) {
      api.getContact(id).then(setdata);
    }
  }, [id]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>firstName</Form.Label>
          <Form.Control
            type="text"
            value={data.firstName || ""}
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>lastName</Form.Label>
          <Form.Control
            type="text"
            value={data.lastName || ""}
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          {id ? "Update" : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default Contactform;
