import React from "react";
import Contactlist from "./Containers/Contacts/Contactlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Contactform from "./Containers/Contacts/Contactform";

function Headers(props) {
  return <header className={styles.header} {...props} />;
}
function Logo() {
  return <p className={styles.p}>axelor</p>;
}

function Navbar({ children }) {
  return <nav className={styles.nav}>{children}</nav>;
}

function NavLinks() {
  return (
    <div className={styles.div}>
      <a href="/" className={styles.a}>
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
          <Route path="/" element={<Contactlist />}></Route>
          <Route path="/add" element={<Contactform />}></Route>
          <Route path="/user/:id" element={<Contactform />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
