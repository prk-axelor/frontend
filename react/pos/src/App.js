import React, { useState } from "react";
import Contain from "./components/Contain";
import Toastmessage from "./components/Toastmessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState([]);

  const fruits = [
    {
      id: 1,
      name: "strawberry",
      rs: 10,
      imagename: "./Images/strawberry.jpg",
    },
    {
      id: 2,
      name: "banana",
      rs: 20,
      imagename: "./Images/banana.png",
    },
    {
      id: 3,
      name: "pineapple",
      rs: 30,
      imagename: "./Images/pineapple.png",
    },
    {
      id: 4,
      name: "cherry",
      rs: 30,
      imagename: "./Images/cherry.png",
    },
    {
      id: 5,
      name: "graphes",
      rs: 30,
      imagename: "./Images/graphes.jpeg",
    },
    {
      id: 6,
      name: "apple",
      rs: 20,
      imagename: "./Images/apple.jpeg",
    },
    {
      id: 7,
      name: "red chilli",
      rs: 10,
      imagename: "./Images/red-chilly.jpeg",
    },
    {
      id: 8,
      name: "capcicum",
      rs: 10,
      imagename: "./Images/capcicum.jpeg",
    },
    {
      id: 9,
      name: "onion ",
      rs: 20,
      imagename: "./Images/onion.jpg",
    },
    {
      id: 10,
      name: "mashroom",
      rs: 30,
      imagename: "./Images/mashroom.png",
    },
    {
      id: 11,
      name: "guava",
      rs: 10,
      imagename: "./Images/guava.png",
    },
    {
      id: 12,
      name: "tomato",
      rs: 15,
      imagename: "./Images/tomato.png",
    },
    {
      id: 13,
      name: "brinjal",
      rs: 10,
      imagename: "./Images/brinjal.jpeg",
    },
    {
      id: 14,
      name: "broccoli",
      rs: 30,
      imagename: "./Images/broccoli.jpeg",
    },
    {
      id: 15,
      name: "carrot",
      rs: 20,
      imagename: "./Images/carrot.jpg",
    },
  ];

  function addToCart(fruit) {
    setShow(true);

    var toast = fruit.name;

    setToast(toast);

    const productExist = cartItems.find((item) => item.id === fruit.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === fruit.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }]);
    }
  }

  function Header() {
    return (
      <p
        style={{
          fontSize: 30,
          padding: 0,
          margin: 0,
          backgroundColor: "whitesmoke",
          padding: 30,
        }}
      >
        Axelor POS
      </p>
    );
  }
  return (
    <div>
      <Header />
      <Contain fruits={fruits} addToCart={addToCart} cartItems={cartItems} />

      <Toastmessage
        fruits={fruits}
        setShow={setShow}
        show={show}
        toast={toast}
      />
    </div>
  );
}

export default App;
