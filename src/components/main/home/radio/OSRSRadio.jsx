import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPause } from "react-icons/io";
import { useEffect, useMemo, useRef, useState } from "react";

import "react-h5-audio-player/lib/styles.css";
import song1 from "../../../../assets/tracks/7th_realm.mp3";

const OSRSRadio = () => {
  const audioRef = useRef(new Audio(song1));
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [songIndex, setSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const memoizedSongs = useMemo(() => [song1], []);

  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
  }, [audioRef.current]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime); // Update current time as the audio progresses
    };

    audio.addEventListener("timeupdate", handleTimeUpdate); // Add time update listener

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate); // Remove time update listener
    };
  }, [audioRef]);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => {
      if (prevState) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      return !prevState;
    });
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

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    console.log(event.target);
    console.log(rect);
    const offsetX = event.clientX - rect.left;
    console.log("Offset X", offsetX);
    const width = rect.width;
    const clickedPercentage = (offsetX / 184) * 100;
    console.log(clickedPercentage);
    const newTime = (clickedPercentage / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className={stl.radio}>
      <div className={stl.titleRow}>Track 2</div>
      <div className={stl.btnRow}>
        <button className={stl.cta} onClick={handlePrev}>
          <MdSkipPrevious className={stl.enlarge} />
        </button>

        {!isPlaying ? (
          <button className={stl.cta} onClick={handlePlayPause}>
            <FaPlay />
          </button>
        ) : (
          <button className={stl.cta} onClick={handlePlayPause}>
            <IoMdPause />
          </button>
        )}

        <button className={stl.cta} onClick={handleNext}>
          <MdSkipNext className={stl.enlarge} />
        </button>
      </div>
      <div className={stl.durationbar} onClick={handleClick}>
        <div
          className={stl.innerBar}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default OSRSRadio;
