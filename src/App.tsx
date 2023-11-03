import { RouterProvider } from "react-router-dom";

import router from "./router";
import AuthProvider from "@/contexts/AuthProvider/AuthProvider";
import SocketProvider from "./contexts/SocketProvider/SocketProvider";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <RouterProvider router={router} />
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
