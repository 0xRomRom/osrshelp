import React, { useRef, useEffect } from "react";

const MovingImageCanvas = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const speed = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const loadImage = async () => {
      const image = new Image();
      image.src = "/skillicons/Attack.webp"; // Adjust the path to your image
      await image.decode(); // Wait for the image to be loaded

      imageRef.current = image;
      animate();
    };

    loadImage();

    let x = 0;
    let y = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imageRef.current, x, y);
    };

    const updatePosition = () => {
      x += speed;
      if (x > canvas.width) {
        x = -imageRef.current.width;
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={200}
      style={{ border: "1px solid #000" }}
    >
      Your browser does not support the canvas element.
    </canvas>
  );
};

export default MovingImageCanvas;
