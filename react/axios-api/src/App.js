import axios from "axios";
import React, { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [users, setUsers] = useState([]);
  const apiget = async () => {
    await axios.get("api/contacts").then((response) => setUsers(response.data));
  };
  useEffect(() => {
    apiget();
  }, []);
  console.log(users);
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <>
            <ListItem alignItems="flex-start" key={user.id}>
              <ListItemText>{user.id}</ListItemText>
              <ListItemText>{user.firstName}</ListItemText>
              <ListItemText>{user.lastName}</ListItemText>
            </ListItem>
            <Divider variant="inset" />
          </>
        );
      })}
    </div>
  );
}

export default App;
