import React, { useRef, useEffect } from "react";
import stl from "./MainCanvas.module.css";

const MainCanvas = ({ sourceImgs }) => {
  const canvasRef = useRef(null);
  const speed = 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgWidth = 23;
    const imgHeight = 23;

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
      for (let i = 0; i < 3; i++) {
        const x = Math.floor(Math.random() * 280);
        const y = yBegin;

        const image = await loadImage(
          sourceImgs[Math.floor(Math.random() * sourceImgs.length)]
        );
        images.push({ image, x, y });
      }

      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      images.forEach((imageObj) => {
        imageObj.y += speed;
        ctx.drawImage(
          imageObj.image,
          imageObj.x,
          imageObj.y,
          imgWidth,
          imgHeight
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
  }, [sourceImgs]);

  return (
    <div className={stl.canvasWrapper}>
      <h1 className={stl.hero}>OSRS Help</h1>
      <canvas ref={canvasRef} className={stl.mainCanvas}>
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default MainCanvas;
