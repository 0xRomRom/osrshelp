import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPause } from "react-icons/io";
import { useEffect, useMemo, useRef, useState } from "react";

import "react-h5-audio-player/lib/styles.css";
import song1 from "../../../../assets/tracks/7th_realm.mp3";

const OSRSRadio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const audioRef = useRef(new Audio(song1));
  const [songIndex, setSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const memoizedSongs = useMemo(() => [song1], []);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    setTimeout(() => {
      audio.currentTime = 60;
    }, 5000);
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime); // Update current time as the audio progresses
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate); // Add time update listener

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate); // Remove time update listener
    };
  }, [audioRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleNext = () => {
    setSongIndex((prevIndex) => (prevIndex + 1) % memoizedSongs.length);
  };

  const handlePrev = () => {
    setSongIndex(
      (prevIndex) =>
        (prevIndex - 1 + memoizedSongs.length) % memoizedSongs.length
    );
  };

  return (
    <div className={stl.radio}>
      <div className={stl.titleRow}>Track 2</div>
      <div className={stl.btnRow}>
        <button className={stl.cta} onClick={handlePrev}>
          <MdSkipPrevious className={stl.enlarge} />
        </button>
        {!isPlaying ? (
          <button className={stl.cta} onClick={() => setIsPlaying(true)}>
            <FaPlay />
          </button>
        ) : (
          <button className={stl.cta} onClick={() => setIsPlaying(false)}>
            <IoMdPause />
          </button>
        )}

        <button className={stl.cta} onClick={handleNext}>
          <MdSkipNext className={stl.enlarge} />
        </button>
      </div>
      <div className={stl.durationbar}>
        <div
          className={stl.innerBar}
          style={{ width: `${(currentTime / duration) * 100}%` }} // Use progress instead of currentTime
        ></div>
      </div>
    </div>
  );
};

export default OSRSRadio;
