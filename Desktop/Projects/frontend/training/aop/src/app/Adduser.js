import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { rest } from "../services/http";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const rest = axios.create({
//   baseURL: "/open-platform-demo",
//   headers: {
//     Authorization: "Basic YWRtaW46YWRtaW4=",
//     //"X-CSRF-Token": "f5976e7b19324ac7bc76bf8fdc37ecd1",
//   },
// });
function Adduser() {
  const [user, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({
      ...user,
      [name]: value,
    });
  };
  console.log(user);

  function handleSubmit() {
    rest
      .post("/ws/rest/com.axelor.contact.db.Contact", {
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      })
      .then((response) => setdata(response.data.data))
      .then(navigate("/"));
  }
  return (
    <div>
      <center>
        <p>insert your data</p>
      </center>
      <Form method="POST" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>firstName</Form.Label>
          <Form.Control
            type="text"
            value={user.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>lastName</Form.Label>
          <Form.Control
            type="text"
            value={user.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>phone</Form.Label>
          <Form.Control
            type="number"
            value={user.phone}
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Adduser;
