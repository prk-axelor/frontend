import React from "react";
import Home from "./Home";
import Adduser from "./Adduser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Updateuser from "./Updateuser";
function Headers(props) {
  return (
    <header
      style={{
        backgroundColor: "whitesmoke",
        padding: 60,
        color: "black",
        fontSize: 30,
      }}
      {...props}
    />
  );
}
function Logo() {
  return <p style={{ margin: 0, display: "inline" }}>axelor</p>;
}

function Navbar({ children }) {
  return <nav style={{ display: "inline" }}>{children}</nav>;
}

function NavLinks() {
  return (
    <div style={{ float: "right", padding: 5 }}>
      <a href="/" style={{ marginRight: 20 }}>
        home
      </a>
      <a href="/add"> add-user</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Headers>
        <Logo />
        <Navbar>
          <NavLinks />
        </Navbar>
      </Headers>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Adduser />}></Route>
          <Route path="/user/:id" element={<Updateuser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
