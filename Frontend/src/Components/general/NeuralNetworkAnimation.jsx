// src/components/NeuralNetworkAnimation.jsx

import { motion } from "framer-motion";

export default function NeuralNetworkAnimation({ circles }) {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Render Circles */}
        {circles.map((circle, index) => (
          <motion.circle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              boxShadow: "0 0 30px 5px white",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              delay: index * 0.5,
            }}
            className="fill-white"
            style={{
              filter: "blur(5px)",
            }}
          />
        ))}

        {/* Draw Lines */}
        {circles.slice(1).map((circle, index) => (
          <line
            key={index}
            x1={circles[index].cx}
            y1={circles[index].cy}
            x2={circle.cx}
            y2={circle.cy}
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.2"
          />
        ))}

        {/* Light Animation moving along lines */}
        {circles.slice(1).map((circle, index) => (
          <motion.line
            key={index}
            x1={circles[index].cx}
            y1={circles[index].cy}
            x2={circle.cx}
            y2={circle.cy}
            stroke="white"
            strokeWidth="2"
            initial={{ strokeDashoffset: 100 }}
            animate={{
              strokeDashoffset: [100, 0],
            }}
            strokeDasharray="100"
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 1.5,
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
