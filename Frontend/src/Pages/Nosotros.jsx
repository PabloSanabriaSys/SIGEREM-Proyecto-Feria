import React, { useEffect, useRef, useState } from "react";

const Nosotros = () => {
  const WS_URL = "ws://127.0.0.1:8000/ws/2";
  const connection = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket(WS_URL);
    connection.current = socket;

    socket.addEventListener("open", (e) => {
      console.log("connection established");
      for(let i=0; i<10; i++) socket.send("connection established"+i);
    });

    socket.addEventListener("message", (e) => {
      console.log("message recieved from server ", e.data);

      setMessage(e.data);
    });

    socket.addEventListener("close", () => {
      console.log("conexion cerrada");
    });

    socket.addEventListener("error", (error) => {
      console.error("websocket error: ", error);
    });

    return () => {
      if (connection.current) {
        connection.current.close();
      }
    };
  }, [WS_URL]);

  return (
    <div className="bg-background">
      <h1>Nosotros</h1>
      <span>Message: </span>
      <span>{message}</span>
    </div>
  );
};

export default Nosotros;
