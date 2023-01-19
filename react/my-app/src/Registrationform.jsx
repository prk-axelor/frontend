import React, { useState } from "react";
import "./form.css";

function Registrationform() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [usererr, seterr] = useState(false);
  const [passerr, setvalidatepassword] = useState(false);

  function loginhandle(e) {
    e.preventDefault();
    if (username === "" || city === "") {
      seterr(true);
    }
    if (password === "") {
      setvalidatepassword(true);
    }
    if (password.length !== 8 || password.match(/[0-9]/) == null) {
      setvalidatepassword(true);
    }
  }
  return (
    <div>
      <form action="" onSubmit={loginhandle}>
        <center>
          <h1>form</h1>
          <table>
            <tbody>
               <tr>
                <td>UserName:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setusername(e.target.value)}
                  />
                  {usererr && username === "" ? <label>enter name</label> : ""}
                </td>
              </tr>
              <tr>
                <td>password:</td>
                <td>
                  <input
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  {passerr && password === "" ? (
                    <label>enter password</label>
                  ) : (
                    ""
                  )}
                  {passerr && password.length !== 8 ? (
                    <label>password must have 8 character</label>
                  ) : (
                    ""
                  )}

                  {passerr && password.match(/[0-9]/) == null ? (
                    <label>must have 1 digit</label>
                  ) : (
                    ""
                  )}
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
                    onChange={(e) => setcity(e.target.value)}
                  />
                  {usererr && city === "" ? <label>enter city</label> : ""}
                </td>
              </tr>
              <tr>
                <td>webserver:</td>
                <td>
                  <select name="server" id="server">
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
                    <input type="radio" name="value1" id="eng" />
                    engineer
                  </span>
                  <span>
                    <input type="radio" name="value1" id="gues" />
                    guest
                  </span>
                  <span>
                    <input type="radio" name="value1" id="ad" />
                    admin
                  </span>
                  <span>
                    <input type="radio" name="value1" id="manager" />
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
                    <input type="checkbox" name="payroll" />
                    payroll
                  </span>
                  <span>
                    <input type="checkbox" name="mail" />
                    mail
                  </span>
                  <span>
                    <input type="checkbox" name="self-service" />
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
              </tr>
            </tbody>
          </table>
        </center>
      </form>
    </div>
  );
}
export default Registrationform;
