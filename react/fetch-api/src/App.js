import React, { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

function App() {
  const [users, setuser] = useState([]);

  useEffect(() => {
    fetch("api/contacts")
      .then((response) => response.json())
      .then((json) => setuser(json));
  }, []);

  return (
    <div className="App">
      <div>my api</div>
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
