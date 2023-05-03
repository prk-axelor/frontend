import Events from "./views/events";
import Contacts from "./views/contacts";
import Index from "./views";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "events",
        element: <Events />,
      },

      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export default router;
