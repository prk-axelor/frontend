import React, { useState } from "react";
import "./form.css";

function Registrationform() {
  const [form, setForm] = useState({
    userName: "",
    passWord: "",
    city: "",
    server: "",
  });
  const [postion, setPosition] = useState("admin");

  const [usererr, setErr] = useState("");

  function loginHandle(e) {
    e.preventDefault();
    if (!form.name) {
      setErr("required");
    }
    if(form.passWord.length !== 8 || !form.passWord.match(/[0-9]/)) {
      setErr("must have 8 charc and 1 digit");
    }
  }

  function changeHandle(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
    setErr("");

    setPosition(e.target.value);
  }

  return (
    <>
      <div>
        <form action="" onSubmit={loginHandle}>
          <center>
            <h1>form</h1>
            <table>
              <tbody>
                <tr>
                  <td>UserName:</td>
                  <td>
                    <input
                      type="text"
                      name="userName"
                      value={form.userName}
                      onChange={changeHandle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>password:</td>
                  <td>
                    <input
                      type="password"
                      name="passWord"
                      value={form.passWord}
                      onChange={changeHandle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    city of <br />
                    emplyoment:
                  </td>
                  <td>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={changeHandle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>webserver:</td>
                  <td>
                    <select
                      name="server"
                      id="server"
                      value={form.server}
                      onChange={changeHandle}
                    >
                      <option value="1">---select-server--</option>
                      <option value="2">value2</option>
                      <option value="3">value3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    please specify <br /> your role:
                  </td>
                  <td>
                    <span>
                      <input
                        type="radio"
                        name="rdbtn"
                        id="eng"
                        value="engineer"
                        checked={postion === "engineer"}
                        onChange={changeHandle}
                      />
                      engineer
                    </span>
                    <span>
                      <input
                        type="radio"
                        name="rdbtn"
                        id="gues"
                        value="guest"
                        checked={postion === "guest"}
                        onChange={changeHandle}
                      />
                      guest
                    </span>
                    <span>
                      <input
                        type="radio"
                        name="rdbtn"
                        id="ad"
                        value="admin"
                        checked={postion === "admin"}
                        onChange={changeHandle}
                      />
                      admin
                    </span>
                    <span>
                      <input
                        type="radio"
                        name="rdbtn"
                        id="manager"
                        value="manager"
                        checked={postion === "manager"}
                        onChange={changeHandle}
                      />
                      manager
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    single sign-in <br /> on following:
                  </td>
                  <td>
                    <span>
                      <input type="checkbox" name="payroll" value="payroll" />
                      payroll
                    </span>
                    <span>
                      <input type="checkbox" name="mail" value="mail" />
                      mail
                    </span>
                    <span>
                      <input
                        type="checkbox"
                        name="self-service"
                        value="self-service"
                      />
                      self-service
                    </span>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <input type="submit" value="submit" />
                    <input type="reset" value="reset" />
                  </td>
                  <tr>
                    <td>
                      <p>{usererr}</p>
                    </td>
                  </tr>
                </tr>
              </tbody>
            </table>
          </center>
        </form>
      </div>
    </>
  );
}
export default Registrationform;
