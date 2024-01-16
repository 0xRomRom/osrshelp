import React, { useRef, useEffect } from "react";
import stl from "./MainCanvas.module.css";

const MainCanvas = () => {
  const canvasRef = useRef(null);
  const speed = 0.25;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 0;
    let y = 0;
    const image = new Image();
    image.src = "./skillicons/Firemaking.png";
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, x, y, 20, 20); // Set the image dimensions here
    };

    const animate = () => {
      y += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, x, y, 20, 20);

      // Define a break condition
      if (y < canvas.height) {
        console.log(y);
        requestAnimationFrame(animate);
      }
      if (y > 148) {
        y = 0;
      }
    };

    animate();
  }, []);

  return (
    <div className={stl.canvasWrapper}>
      <canvas
        ref={canvasRef}
        className={stl.mainCanvas}
        style={{ width: "100%" }}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default MainCanvas;
