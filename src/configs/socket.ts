import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  retries: 1,
  autoConnect: false,
});

function connectSocket() {
  return new Promise((resolve, reject) => {
    socket.connect();

    socket.on("connect", () => {
      resolve(socket);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      socket.close();
      reject(error);
    });

    socket.on("connect_timeout", () => {
      console.error("Socket connection timeout");
      socket.close();
      reject(new Error("Socket connection timeout"));
    });
  });
}

export default connectSocket;
