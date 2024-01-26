import React, { useRef, useEffect } from "react";
import stl from "./MainCanvas.module.css";

const MainCanvas = ({
  sourceImgs,
  minSpeed = 0.15,
  maxSpeed = 0.7,
  renderCount,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgWidth = 92;
    const imgHeight = 92;

    const yBegin = -50;
    const yEnd = 220;

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
      });
    };

    const images = [];

    const initializeImage = async () => {
      for (let i = 0; i < renderCount; i++) {
        const x = Math.floor(Math.random() * 280);
        const y = yBegin;

        const image = await loadImage(
          sourceImgs[Math.floor(Math.random() * sourceImgs.length)]
        );

        const speed = minSpeed + Math.random() * maxSpeed;
        images.push({ image, x, y, speed });
      }

      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      images.forEach((imageObj) => {
        imageObj.y += imageObj.speed;

        // Calculate the scaling factor based on canvas size
        const scaleFactor = canvas.width / imgWidth;

        // Adjust drawing dimensions
        const scaledWidth = (imgWidth / scaleFactor) * 0.75;
        const scaledHeight = imgHeight / scaleFactor;

        ctx.drawImage(
          imageObj.image,
          imageObj.x,
          imageObj.y,
          scaledWidth,
          scaledHeight
        );

        if (imageObj.y >= yEnd) {
          imageObj.y = yBegin;
          imageObj.x = Math.floor(Math.random() * 280);
          imageObj.image.src =
            sourceImgs[Math.floor(Math.random() * sourceImgs.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    initializeImage();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, [sourceImgs, maxSpeed, minSpeed, renderCount]);

  return (
    <div className={stl.canvasWrapper}>
      <canvas ref={canvasRef} className={stl.mainCanvas}>
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default MainCanvas;
