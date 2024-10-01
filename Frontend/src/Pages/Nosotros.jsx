import React, { useEffect, useRef, useState } from "react";

const Nosotros = () => {
  const WS_URL = "ws://127.0.0.1:8000/ws/2";
  const connection = useRef(null);
  const videoRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        connection.current = new WebSocket(WS_URL);

        connection.current.onopen = () => {
          console.log("Websocket connected");
        };

        connection.onerror = (error) => {
          console.error("Error en Websocket", error);
        };

        const canvas = document.createElement("canvas");

        const captureFrames = () => {
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;

          const ctx = canvas.getContext("2d");

          const sendFrame = () => {
            ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob) => {
              if (
                connection.current &&
                connection.current.readyState === WebSocket.OPEN
              ) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  connection.current.send(reader.result);
                };
                reader.readAsDataURL(blob);
              }
            }, "image/jpeg");

            setTimeout(sendFrame, 100);
          };

          sendFrame();
        };

        captureFrames();
      })
      .catch((error) => {
        console.error("Error accessing camera", error);
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
      <video ref={videoRef} autoPlay muted></video>
    </div>
  );
};

export default Nosotros;
