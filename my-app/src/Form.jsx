import React,{usestate} from "react";
import "./form.css";


const Form = () => {
  const[uname,setname]=usestate('')
  const[pswd,setpswd]=usestate('')
  const[city,setcity]=usestate('')
  const[usererr,setusererr]=usestate(false)


const handlelogin=(e)=>{
  e.preventDefault()
}
    

  return (
    <div>
    <form action="" onSubmit={handlelogin} >
    <center>
      <h1>form</h1>
      <table>
        <tbody>
          <tr>
            <td>UserName:</td>
            <td>
              <input type="text" name="uname" onChange={e=>setname(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>password:</td>
            <td>
              <input type="password" name="pswd" onChange={e=>setpswd(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              city of <br />
              emplyoment:
            </td>
            <td>
              <input type="text" name="city" onChange={e=>setcity(e.target.value)}/>
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
                <input type="checkbox" name="value1" />
                payroll
              </span>
              <span>
                <input type="checkbox" name="value2" id="" />
                mail
              </span>
              <span>
                <input type="checkbox" name="value3" id="" />
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
  )
}

export default Form


