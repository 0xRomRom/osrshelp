import React, { useRef, useEffect } from "react";
import stl from "./MainCanvas.module.css";

const imageState = [
  "./skillicons/Firemaking.png",
  "./skillicons/Slayer.png",
  "./skillicons/Fishing.webp",
  "./skillicons/Agility.webp",
  "./skillicons/Attack.webp",
  "./skillicons/Construction.webp",
  "./skillicons/Cooking.webp",
  "./skillicons/Crafting.webp",
  "./skillicons/Defence.webp",
  "./skillicons/Farming.webp",
  "./skillicons/Fishing.webp",
  "./skillicons/Fletching.webp",
  "./skillicons/Herblore.webp",
  "./skillicons/Hitpoints.webp",
  "./skillicons/Hunter.webp",
  "./skillicons/Magic.webp",
  "./skillicons/Mining.webp",
  "./skillicons/Prayer.webp",
  "./skillicons/Ranged.webp",
  "./skillicons/Runecraft.webp",
  "./skillicons/Smithing.webp",
  "./skillicons/Strength.png",
  "./skillicons/Thieving.webp",
  "./skillicons/Woodcutting.webp",
];

const MainCanvas = () => {
  const canvasRef = useRef(null);
  const speed = 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const randomImgSrc = () => Math.floor(Math.random() * imageState.length);
    const randomImgXPosition = () => Math.floor(Math.random() * 280);
    const imgWidth = 18;
    const imgHeight = 18;

    // Img 1 init
    let x1 = randomImgXPosition();
    let y1 = -10;
    const image1 = new Image();
    image1.src = imageState[randomImgSrc()];

    image1.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image1, x1, y1, imgWidth, imgHeight);
    };

    // Img 2 init
    let x2 = randomImgXPosition();
    let y2 = -10;
    const image2 = new Image();
    image2.src = imageState[randomImgSrc()];
    image2.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image2, x2, y2, imgWidth, imgHeight); // Set the image dimensions here
    };

    // Img 2 init
    let x3 = randomImgXPosition();
    let y3 = -10;
    const image3 = new Image();
    image3.src = imageState[randomImgSrc()];
    image3.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image3, x3, y3, imgWidth, imgHeight); // Set the image dimensions here
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      y1 += speed;
      ctx.drawImage(image1, x1, y1, imgWidth, imgHeight);

      y2 += speed - 0.05;
      ctx.drawImage(image2, x2, y2, imgWidth, imgHeight);

      y3 += speed - 0.1;
      ctx.drawImage(image3, x3, y3, imgWidth, imgHeight);

      // Define a break condition
      if (y1 < canvas.height && y2 < canvas.height) {
        // console.log(y1, y2);
        requestAnimationFrame(animate);
      }

      if (y1 > 110) {
        y1 = 0;
        x1 = randomImgXPosition();
        image1.src = imageState[randomImgSrc()];
      }
      if (y2 > 110) {
        y2 = 0;
        x2 = randomImgXPosition();
        image2.src = imageState[randomImgSrc()];
      }
      if (y3 > 110) {
        y3 = 0;
        x3 = randomImgXPosition();
        image3.src = imageState[randomImgSrc()];
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div className={stl.canvasWrapper}>
      <h1 className={stl.hero}>OSRS Help</h1>
      <canvas
        ref={canvasRef}
        className={stl.mainCanvas}
        style={{ width: "98%", height: "250%" }}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default MainCanvas;
