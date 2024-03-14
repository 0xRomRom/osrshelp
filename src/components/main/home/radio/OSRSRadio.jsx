import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPause } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import song1 from "../../../../assets/tracks/Adventure.mp3";
import song2 from "../../../../assets/tracks/Al_Kharid.mp3";
import song3 from "../../../../assets/tracks/Flute_salad.mp3";
import song4 from "../../../../assets/tracks/Baroque.mp3";
import song5 from "../../../../assets/tracks/Newbie_melodie.mp3";
import song6 from "../../../../assets/tracks/Sea_Shanty_2.mp3";
import song7 from "../../../../assets/tracks/Scape_Soft.mp3";
import song8 from "../../../../assets/tracks/Long_Way_Home.mp3";

const memoizedSongs = [song1, song2, song3, song4, song5, song6, song7, song8];
const bgSources = {
  0: "radiobg/Varrock.webp",
  1: "radiobg/Alkharid.webp",
  2: "radiobg/Draynor.webp",
  3: "radiobg/Baroque.webp",
  4: "radiobg/Newbie_melodie.webp",
  5: "radiobg/Sea_Shanty_2.webp",
  6: "radiobg/Scape_soft.webp",
  7: "radiobg/Long_Way_Home.webp",
};

const OSRSRadio = ({ radioPlaying, setRadioPlaying }) => {
  const audioRef = useRef(new Audio());
  const [duration, setDuration] = useState(null);
  const [songIndex, setSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audioRef]);

  const handlePlayPause = () => {
    if (!audioRef.current.src) {
      audioRef.current.src = memoizedSongs[0];
    }
    setRadioPlaying((prevState) => !prevState);
    if (radioPlaying) {
      audioRef.current.pause();
      return;
    }
    audioRef.current.play();
  };

  const handleNext = () => {
    setSongIndex((prevIndex) => (prevIndex + 1) % memoizedSongs.length);
  };

  const handlePrev = () => {
    setSongIndex(
      (prevIndex) =>
        (prevIndex - 1 + memoizedSongs.length) % memoizedSongs.length
    );
  };

  const handleProgressBarClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = 184; // Hardcoded to current container width
    const clickedPercentage = (offsetX / width) * 100;
    const newTime = (clickedPercentage / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  // Skip to mext song after finish
  useEffect(() => {
    if (currentTime + 1 >= duration) {
      setSongIndex((prevIndex) => (prevIndex + 1) % memoizedSongs.length);
      setCurrentTime(0);
    }
  }, [currentTime, duration, setCurrentTime]);

  useEffect(() => {
    if (audioRef.current.src) {
      setCurrentTime(0);
      audioRef.current.src = memoizedSongs[songIndex];
      audioRef.current.play();
    }
  }, [songIndex]);

  return (
    <div className={stl.radio}>
      <div className={stl.titleRow}>
        {memoizedSongs[songIndex]
          .split("/")
          .pop()
          .split(".")[0]
          .replaceAll("_", " ")}
      </div>
      <div className={stl.btnRow}>
        <button className={stl.cta} onClick={handlePrev}>
          <MdSkipPrevious className={stl.enlarge} />
        </button>

        <button className={stl.cta} onClick={handlePlayPause}>
          {radioPlaying ? <IoMdPause /> : <FaPlay />}
        </button>

        <button className={stl.cta} onClick={handleNext}>
          <MdSkipNext className={stl.enlarge} />
        </button>
      </div>
      <div className={stl.durationbar} onClick={handleProgressBarClick}>
        <div
          className={stl.innerBar}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      {radioPlaying && (
        <img
          loading="lazy"
          src={bgSources[songIndex]}
          alt="Radio Background"
          className={stl.gateBg}
        />
      )}
    </div>
  );
};

export default OSRSRadio;
