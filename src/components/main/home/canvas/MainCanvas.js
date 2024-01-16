import React, { useRef, useEffect } from "react";
import stl from "./MainCanvas.module.css";

const imageState = [
  "./skillicons/Firemaking.png",
  "./skillicons/Slayer.png",
  "./skillicons/Fishing.webp",
  "./skillicons/Agility.webp",
];
const MainCanvas = () => {
  const canvasRef = useRef(null);
  const speed = 0.25;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    console.log(canvasHeight);
    let x1 = Math.floor(Math.random() * 200);
    let y1 = -10;
    const image1 = new Image();
    image1.src = imageState[0];

    image1.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image1, x1, y1, 20, 20); // Set the image dimensions here
    };

    console.log(Math.floor(Math.random() * canvasWidth));
    let x2 = Math.floor(Math.random() * 200); // Adjust the starting x position for the second image
    let y2 = -10;
    const image2 = new Image();
    image2.src = imageState[1]; // Provide the path to your second image
    image2.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image2, x2, y2, 20, 20); // Set the image dimensions here
    };

    const animate = () => {
      // Update position for the first image
      console.log(y1);
      // console.log(y2);

      y1 += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image1, x1, y1, 20, 20);

      // Update position for the second image
      y2 += speed - 0.05;
      ctx.drawImage(image2, x2, y2, 20, 20);

      // Define a break condition
      if (y1 < canvas.height && y2 < canvas.height) {
        console.log(y1, y2);
        requestAnimationFrame(animate);
      }

      // Reset position for the first image
      if (y1 > 110) {
        y1 = 0;
        x1 = Math.floor(Math.random() * 200);
        const randomgImg = Math.floor(Math.random() * imageState.length);
        console.log(randomgImg);
        image1.src = imageState[randomgImg];
      }

      // Reset position for the second image
      if (y2 > 110) {
        y2 = 0;
        x2 = Math.floor(Math.random() * 200);
        const randomgImg = Math.floor(Math.random() * imageState.length);
        image2.src = imageState[randomgImg];
      }
    };

    animate();
  }, []);

  return (
    <div className={stl.canvasWrapper}>
      <canvas
        ref={canvasRef}
        className={stl.mainCanvas}
        style={{ width: "95%", height: "250%" }}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default MainCanvas;
