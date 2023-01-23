import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  return <p>hey this is login page</p>;
}
function FormControl({ label, children }) {
  return (
    <div>
      <label style={{ display: "inline" }}>{label}</label>
      <div style={{ display: "inline" }}>{children}</div>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (form.username !== "admin" || form.password !== "admin") {
      setError("invalid log in data");
    } else {
      localStorage.setItem("login", true);
      navigate("/");
    }
  }

  function onChangehandle(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <div>
      <Header />
      <form action="" onSubmit={handleSubmit}>
        <FormControl label="Username:   ">
          <input type="text" name="username" onChange={onChangehandle} />
        </FormControl>
        <FormControl label="Password:   ">
          <input type="password" name="password" onChange={onChangehandle} />
        </FormControl>
        <input type="submit" value="submit" />
        <input type="reset" value="reset" />
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Login;
