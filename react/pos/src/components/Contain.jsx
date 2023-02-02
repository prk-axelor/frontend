import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";

function Contain({ addToCart, fruits, cartItems }) {
  let totalprice = 0;

  let total = cartItems.reduce(
    (total, item) => total + item.rs * item.quantity,
    0
  );

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={8} style={{ padding: 10 }}>
            <Row>
              {fruits.map((fruit) => {
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
                                height: 150,
                              }}
                            />
                          </Col>
                          <Col md={12}>
                            <Card.Title>{fruit.name}</Card.Title>
                            <Card.Text>₹{fruit.rs}</Card.Text>

                            <Button
                              variant="primary"
                              onClick={() => addToCart(fruit)}
                              name="button"
                            >
                              Add to cart
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col sm={4} style={{ padding: 10 }}>
            <div>
              {cartItems.length === 0 ? (
                <div
                  style={{
                    fontSize: 30,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "whitesmoke",
                    padding: 30,
                  }}
                >
                  card is empty
                </div>
              ) : (
                <div>
                  <ListGroup as="ol">
                    {cartItems.map((fruit, i) => {
                      return (
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                          key={i}
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">
                              {i + 1}.{fruit.name}
                            </div>
                            <p>
                              ₹{fruit.rs}x{fruit.quantity}
                            </p>
                          </div>
                          <Badge bg="primary" pill>
                            {(totalprice = fruit.rs * fruit.quantity)}
                          </Badge>
                        </ListGroup.Item>
                      );
                    })}

                    <ListGroup.Item
                      as="div"
                      className="d-flex justify-content-between align-items-center list-group-item"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Net Total</div>
                      </div>
                      <span
                        variant="primary"
                        className="badge rounded-pill bg-primary"
                      >
                        {total}
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contain;
