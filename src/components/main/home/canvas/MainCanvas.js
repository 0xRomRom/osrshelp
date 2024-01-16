import React, { useRef, useEffect } from "react";
import stl from "./MainCanvas.module.css";

const MainCanvas = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const speed = 2;
  const initialDirection = Math.random() < 0.5 ? 1 : -115; // Randomize initial direction

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const loadImage = async () => {
      const image = new Image();
      image.src = "/skillicons/Attack.webp";
      image.className = "canvasImg";
      await image.decode();

      imageRef.current = image;
      animate();
    };

    loadImage();

    let x = initialDirection === 1 ? 0 : canvas.width; // Set initial x position based on direction
    let y = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imageRef.current, x, y);
    };

    const updatePosition = () => {
      x += speed * initialDirection;

      if (initialDirection === 1 && x > canvas.width) {
        x = -imageRef.current.width;
        y += 3 * speed;
      } else if (initialDirection === -1 && x < -imageRef.current.width) {
        x = canvas.width;
      }

      draw();
    };

    const animate = () => {
      updatePosition();
      requestAnimationFrame(animate);
    };

    // Cleanup function
    return () => {
      cancelAnimationFrame(animate);
    };
  }, [initialDirection]);

  return (
    <div className={`${stl.canvasWrapper} ${stl.canvasImg}`}>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        className={stl.mainCanvas}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default MainCanvas;
