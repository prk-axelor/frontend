import React from "react";
import { Row, ListGroup, Badge } from "react-bootstrap";

function Addtocart({ cartItems }) {
  let totalprice = 0;
  let nettotal = 0;
  nettotal = nettotal + totalprice;
  return (
    <div>
      <Row>
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
              <ListGroup as="ol" numbered>
                {cartItems.map((fruit) => {
                  return (
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{fruit.name}</div>
                        <p>
                          ₹{fruit.rs}x{fruit.qunty}
                        </p>
                      </div>
                      <Badge bg="primary" pill>
                        {(totalprice = fruit.rs * fruit.qunty)}
                      </Badge>
                    </ListGroup.Item>
                  );
                })}

                <div className="d-flex justify-content-between align-items-center list-group-item">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Net Total</div>
                  </div>
                  <span
                    variant="primary"
                    className="badge rounded-pill bg-primary"
                  >
                    {nettotal}
                  </span>
                </div>
              </ListGroup>
            </div>
          )}
        </div>
      </Row>
    </div>
  );
}

export default Addtocart;
