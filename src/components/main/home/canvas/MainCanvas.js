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
  const speed = 0.25;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const randomizer = () => Math.floor(Math.random() * imageState.length);

    // Img 1 init
    let x1 = Math.floor(Math.random() * 200);
    let y1 = -10;
    const image1 = new Image();
    image1.src = imageState[randomizer()];

    image1.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image1, x1, y1, 20, 20);
    };

    // Img 2 init
    let x2 = Math.floor(Math.random() * 200);
    let y2 = -10;
    const image2 = new Image();
    image2.src = imageState[randomizer()];
    image2.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image2, x2, y2, 20, 20); // Set the image dimensions here
    };

    // Img 2 init
    let x3 = Math.floor(Math.random() * 200);
    let y3 = -10;
    const image3 = new Image();
    image3.src = imageState[randomizer()];
    image3.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image3, x3, y3, 20, 20); // Set the image dimensions here
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      y1 += speed;
      ctx.drawImage(image1, x1, y1, 20, 20);

      y2 += speed - 0.05;
      ctx.drawImage(image2, x2, y2, 20, 20);

      y3 += speed - 0.1;
      ctx.drawImage(image3, x3, y3, 20, 20);

      // Define a break condition
      if (y1 < canvas.height && y2 < canvas.height) {
        // console.log(y1, y2);
        requestAnimationFrame(animate);
      }

      if (y1 > 110) {
        y1 = 0;
        x1 = Math.floor(Math.random() * 200);
        image1.src = imageState[randomizer()];
      }
      if (y2 > 110) {
        y2 = 0;
        x2 = Math.floor(Math.random() * 200);
        image2.src = imageState[randomizer()];
      }
      if (y3 > 110) {
        y3 = 0;
        x3 = Math.floor(Math.random() * 200);
        image3.src = imageState[randomizer()];
      }
    };

    animate();
  }, []);

  return (
    <div className={stl.canvasWrapper}>
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
