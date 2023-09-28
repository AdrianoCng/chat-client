import { createBrowserRouter } from "react-router-dom";

import Login from "@routes/index";
import Chat from "@routes/chat";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
  ],
  { future: { v7_normalizeFormMethod: true } }
);

export default router;
