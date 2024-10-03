import React, { useEffect, useRef, useState } from 'react';
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import { HAND_CONNECTIONS, Holistic } from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { useLocation } from 'react-router-dom';

const RecognitionGesture = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [showPoints, setShowPoints] = useState(true);
  const location = useLocation();
  const cameraRef = useRef(null);
  const holisticRef = useRef(null);

  const onResults = (results) => {
    if (!webcamRef.current?.video || !canvasRef.current) return;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    if (canvasCtx == null) throw new Error('Could not get context');
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.globalCompositeOperation = 'destination-atop';
    canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.globalCompositeOperation = 'source-over';

    if (showPoints) {
      // Draw hands
      drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS,
        {color: '#CC0000', lineWidth: 5});
      drawLandmarks(canvasCtx, results.leftHandLandmarks,
        {color: '#00FF00', lineWidth: 2});
      drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,
        {color: '#00CC00', lineWidth: 5});
      drawLandmarks(canvasCtx, results.rightHandLandmarks,
        {color: '#FF0000', lineWidth: 2});

      // Draw nose and mouth points
      if (results.faceLandmarks) {
        const nose = results.faceLandmarks[4];
        const mouth = results.faceLandmarks[0];

        canvasCtx.fillStyle = 'blue';
        canvasCtx.beginPath();
        canvasCtx.arc(nose.x * canvasElement.width, nose.y * canvasElement.height, 5, 0, 5 * Math.PI);
        canvasCtx.fill();

        canvasCtx.fillStyle = 'yellow';
        canvasCtx.beginPath();
        canvasCtx.arc(mouth.x * canvasElement.width, mouth.y * canvasElement.height, 5, 0, 5 * Math.PI);
        canvasCtx.fill();
      }
    }

    canvasCtx.restore();
  }

  useEffect(() => {
    holisticRef.current = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      }
    });
    holisticRef.current.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    holisticRef.current.onResults(onResults);

    if (webcamRef.current && webcamRef.current.video) {
      cameraRef.current = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (webcamRef.current && webcamRef.current.video) {
            await holisticRef.current.send({image: webcamRef.current.video});
          }
        },
        width: 640,
        height: 480,
      });
      cameraRef.current.start();
    }

    // Cleanup function
    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop();
      }
      if (holisticRef.current) {
        holisticRef.current.close();
      }
    };
  }, []);

  // Effect to stop camera when route changes
  useEffect(() => {
    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop();
      }
    };
  }, [location]);

  return (
    <div className="relative">
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 9,
          width: 640,
          height: 480,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 9,
          width: 640,
          height: 480,
        }}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-white p-2 rounded">
        <span className="mr-2">Mostrar puntos:</span>
        <input
          type="checkbox"
          checked={showPoints}
          onChange={(e) => setShowPoints(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default RecognitionGesture;