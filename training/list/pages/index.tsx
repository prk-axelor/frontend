import axios from "axios";
import { useEffect, useState } from "react";

const rest = axios.create({
  baseURL: "/open-platform-demo",
  auth: { username: "admin", password: "admin" },
});

const index = () => {
  const [contactList, setContactlist] = useState([]);
  const getpost = () => {
    return rest
      .post("/ws/rest/com.axelor.contact.db.Contact/search", {})
      .then((response) => setContactlist(response.data.data));
  };

  useEffect(() => {
    getpost();
  }, []);

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th> <th>name</th>
            <th> email</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((list) => {
            return (
              <>
                <tr>
                  {" "}
                  <td>{list.id}</td>
                  <td> {list.firstName}</td>
                  <td> {list.email}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default index;
