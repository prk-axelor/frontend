import React from "react";
import "./App.css";
import logo from "./logo.png";


function Header(props) {
  return (
    <header
      style={{
        backgroundColor: "#1bbc9b",
        padding: 60,
        color: "white",
        fontSize: 30,
      }}
      {...props}
    />
  );
}

function Logo() {
  return <p style={{ margin: 0, display: "inline" }}>STANLEY</p>;
}
function Navbar({ children }) {
  return <nav style={{ display: "inline" }}>{children}</nav>;
}

function NavLinks({ children }) {
  return <a style={{ float: "right", padding: 5 }}>{children}</a>;
}

function Content({ children }) {
  return <div style={{ textAlign: "center" }}>{children}</div>;
}
function Title({ children }) {
  return <p style={{ fontSize: 30 }}>{children}</p>;
}
function Description({ children }) {
  return <p>{children}</p>;
}
function HighLight({ children }) {
  return <span style={{ color: "red", padding: 3 }}>{children}</span>;
}
function ImageLogo() {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{ height: 300, width: 300, verticalAlign: "middle", padding: 30 }}
    />
  );
}

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navbar>
          <NavLinks>CONTACT</NavLinks>
          <NavLinks>BLOG</NavLinks>
          <NavLinks>ABOUT</NavLinks>
          <NavLinks>WORK</NavLinks>
        </Navbar>
      </Header>
      <Content>
        <ImageLogo />
        <Title>hey this is stainley</Title>
        <Description>
          good moring i am stably a handsome bootstratper.please consider
          <HighLight>our new website</HighLight> and login to get updated
        </Description>
      </Content>
    </>
  );
}

export default App;
