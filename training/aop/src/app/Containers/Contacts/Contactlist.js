import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import { api } from "./Api";
import logo from "../../../images/logo.png";
import styles from "../../App.module.css";

import { useEffect, useState } from "react";

function ContactList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getContacts().then(setData);
  }, []);
  const handleDelete = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      api.deleteContact([{ id: id, version: data.version }]).then(() => {
        setData((data) => data.filter((d) => d !== id));
      });
    }
  };

  return (
    <div>
      <Container fluid className={styles.Container}>
        <Row>
          {data?.map((d) => {
            return (
              <Col md={4} key={d.id}>
                <Card className={styles.Card}>
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
                        <Card.Link href="/" onClick={() => handleDelete(d.id)}>
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

export default ContactList;
