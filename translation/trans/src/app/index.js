import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import Translate from "./services/translate";

function App() {
  return (
    <div className="App">
      <Translate>
        <RouterProvider router={router} />
      </Translate>
    </div>
  );
}

export default App;
