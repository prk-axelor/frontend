import "./App.css";
import React from "react";
function Table(props) {
  return (
    <table
      border="1"
      style={{
        borderCollapse: "collapse",
      }}
      {...props}
    />
  );
}
function TableHeader({ children }) {
  return <thead>{children}</thead>;
}
function TableRows({ children }) {
  return <tr>{children}</tr>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function App() {
  const days = ["sun", "mon", "tues", "wed", "thus", "fri", "sat"];
  var date = new Date();
  var currentMonth = date.getMonth();
  var currentYear = date.getFullYear();
  date = new Date(currentYear, currentMonth, 1);

  var getFirstWeekday = date.getDay();
  date.setMonth(currentMonth + 1, 0);
  var lastDate = date.getDate();

  var day = 1;

  let rows = [];
  for (let i = 0; i < 35; i++) {
    if (i % days.length === 0) {
      rows.push(<tr></tr>);
    } 
    if (i >= getFirstWeekday && day <= lastDate) {
      rows.push(<td key={i}>{day}</td>);
      day += 1;
    }
    else {
      rows.push(<td>{""}</td>);
    }
    
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRows>
            {days.map((item) => (
              <th>{item}</th>
            ))}
          </TableRows>
        </TableHeader>
        <TableBody>{rows}</TableBody>
      </Table>
    </>
  );
}

export default App;
