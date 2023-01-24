import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import banana from './Images/banana.png'

function Containe() {
  const[amount,setamount]=useState(0);
  const[qty,setqty]=useState(0);
  let totalprice=0;
  const fruits = [
    {
      id: 1,
      name: "strawberry",
      rs: 10,
      qty: 2,
      imagename: "./Images/strawberry.jpg",
     
    },
    {
      id: 2,
      name: "banana",
      rs: 20,
      qty: 2,
      imagename: './Images/banana.png',
    },
    {
      id: 3,
      name: "pineapple",
      rs: 30,
      qty: 2,
      imagename: "./Images/pineapple.png",
    },
    {
      id: 4,
      name: "cherry",
      rs: 30,
      qty: 2,
      imagename: "./Images/cherry.png",
    },
    {
      id: 5,
      name: "graphes",
      rs: 30,
      qty: 2,
      imagename: "./Images/graphes.jpeg",
    },
    {
      id: 6,
      name: "apple",
      rs: 30,
      qty: 2,
      imagename: "./Images/apple.jpeg",
    },
  ];
  function addamount(e){
    
    
    e.preventDefault()
     
      setqty(qty+1);
     console.log(qty)
      
   
     
    
    
   

    
    
   


  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={8} style={{ padding: 10 }}>
            <Row>
              {fruits.map((fruit, index) => {
               
                                
                return (
                  <Col md={2}>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12}>
                            <div
                              style={{
                                backgroundImage: `url(${fruit.imagename})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                height: 150
                              }}
                            />
                          </Col>
                          <Col md={12}>
                            <Card.Title>{fruit.name}</Card.Title>
                            <Card.Text>
                            <b>{fruit.rs}</b> </Card.Text>

                            <Button variant="primary" onClick={addamount}>Add to card</Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col sm={4} style={{ padding: 10 }}>{qty}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Containe;
