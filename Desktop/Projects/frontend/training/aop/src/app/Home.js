import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { rest } from "../services/http";
import logo from "../images/logo.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const api = {
    fetchContacts: () => {
      rest
        .post("ws/rest/com.axelor.contact.db.Contact/search", {})
        .then((response) => setData(response.data.data))
        .then(navigate("/"));
    },
    delContacts: (id) => {
      rest
        .post(`ws/rest/com.axelor.contact.db.Contact/removeAll`, {
          records: [{ id: `${id}` }],
        })
        .then((response) => setData(response.data.data));
    },
  };

  console.log(data);

  useEffect(() => {
    api.fetchContacts();
  }, []);
  // function deluser(id) {
  //   rest
  //     .delete(`ws/rest/com.axelor.contact.db.Contact/removeAll`, {
  //       records: {
  //         id: data.id,
  //         version: "",
  //       },
  //     })
  //     .then((response) => setData(response.data.data));
  // }

  return (
    <div>
      <Container fluid style={{ padding: 20 }}>
        <Row>
          {data?.map((d) => {
            return (
              <Col md={4} key={d.id}>
                <Card style={{ width: "18rem" }}>
                  <Row>
                    <Col md={4}>
                      <div
                        style={{
                          backgroundImage: `url(${logo})`,
                          height: 150,
                          width: 130,

                          marginTop: 30,
                          marginLeft: 10,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{d.id}</Card.Title>
                        <Card.Title>{d.firstName}</Card.Title>
                        <Card.Text>{d.email}</Card.Text>
                        <Card.Text>{d.phone}</Card.Text>
                        <Card.Link href={`/user/${d.id}`}>Update</Card.Link>
                        <Card.Link
                          href="/"
                          onClick={(e) => api.delContacts(d.id, e)}
                        >
                          Delete
                        </Card.Link>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Adduser;
