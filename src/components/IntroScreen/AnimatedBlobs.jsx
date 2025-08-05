import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const blobs = [
  {
    bg: "#f3701e",
    opacity: 0.3,
    size: 600,
    blur: 120,
    position: { top: -100, left: -150 },
    animation: {
      x: [0, 40, -40, 0],
      y: [0, -40, 40, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(120px)", "blur(180px)", "blur(140px)", "blur(120px)"],
      duration: 15,
    },
  },
  {
    bg: "#4b607f",
    opacity: 0.2,
    size: 500,
    blur: 100,
    position: { bottom: -150, right: -100 },
    animation: {
      x: [0, -50, 50, 0],
      y: [0, 50, -50, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(100px)", "blur(150px)", "blur(120px)", "blur(100px)"],
      duration: 17,
    },
  },
  {
    bg: "#a67bc5",
    opacity: 0.2,
    size: 400,
    blur: 100,
    position: { top: "15%", right: "15%" },
    animation: {
      x: [0, 30, -30, 0],
      y: [0, -30, 30, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(100px)", "blur(150px)", "blur(120px)", "blur(100px)"],
      duration: 14,
    },
  },
  {
    bg: "#f37ea8",
    opacity: 0.2,
    size: 300,
    blur: 80,
    position: { bottom: "10%", left: "20%" },
    animation: {
      x: [0, -40, 40, 0],
      y: [0, 40, -40, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(80px)", "blur(130px)", "blur(100px)", "blur(80px)"],
      duration: 19,
    },
  },
  {
    bg: "#f3701e",
    opacity: 0.15,
    size: 350,
    blur: 100,
    position: { top: "30%", left: "55%" },
    animation: {
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(100px)", "blur(140px)", "blur(120px)", "blur(100px)"],
      duration: 15,
    },
  },
  {
    bg: "#a67bc5",
    opacity: 0.1,
    size: 150,
    blur: 50,
    position: { top: "5%", left: "10%" },
    animation: {
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(50px)", "blur(70px)", "blur(60px)", "blur(50px)"],
      duration: 16,
    },
  },
  {
    bg: "#4b607f",
    opacity: 0.1,
    size: 120,
    blur: 40,
    position: { bottom: "25%", right: "25%" },
    animation: {
      x: [0, -15, 15, 0],
      y: [0, 15, -15, 0],
      scale: [1, 1.5, 1],
      filter: ["blur(40px)", "blur(60px)", "blur(50px)", "blur(40px)"],
      duration: 14,
    },
  },
];
// animacja przy której porzebowałem pomocy
const AnimatedBlobs = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTrail((t) => [...t.slice(-9), { x: e.clientX, y: e.clientY }]);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {blobs.map(({ bg, opacity, size, blur, position, animation }, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              backgroundColor: bg,
              opacity,
              width: size,
              height: size,
              filter: `blur(${blur}px)`,
              position: "fixed",
              ...position,
            }}
            animate={{
              x: animation.x,
              y: animation.y,
              scale: animation.scale,
              filter: animation.filter,
            }}
            transition={{
              duration: animation.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {trail.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.4, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: pos.y,
            left: pos.x,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "rgba(243, 112, 30, 0.4)",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            zIndex: -9,
          }}
        />
      ))}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100vw",
          height: "100vh",
          background: `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, rgba(243,112,30,0.3), transparent 80%)`,
          mixBlendMode: "screen",
          zIndex: -10,
        }}
      />
    </>
  );
};

export default AnimatedBlobs;
