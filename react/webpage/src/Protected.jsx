import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedin = localStorage.getItem("login");

    navigate(!isLoggedin ? "/login" : "/");
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}
export default Protected;
