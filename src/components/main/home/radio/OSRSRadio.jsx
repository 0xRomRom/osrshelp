import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPause } from "react-icons/io";
import { useEffect, useMemo, useRef, useState } from "react";

import song1 from "../../../../assets/tracks/7th_Realm.mp3";
import song2 from "../../../../assets/tracks/Adventure.mp3";
import song3 from "../../../../assets/tracks/Al_Kharid.mp3";

const OSRSRadio = () => {
  const audioRef = useRef(new Audio(song1));
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [songIndex, setSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songName, setSongName] = useState(null);

  const memoizedSongs = useMemo(() => [song1, song2, song3], []);

  useEffect(() => {
    const audio = audioRef.current;

    const fileName = audio.src.substring(audio.src.lastIndexOf("/") + 1);
    const clearName = fileName.split(".")[0].replaceAll("_", " ");
    setSongName(clearName);

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
    };
  }, [audioRef, songIndex]);

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
    audioRef.current.src = memoizedSongs[songIndex];
    audioRef.current.play();
  };

  const handlePrev = () => {
    setSongIndex(
      (prevIndex) =>
        (prevIndex - 1 + memoizedSongs.length) % memoizedSongs.length
    );
    audioRef.current.src = memoizedSongs[songIndex];
    audioRef.current.play();
  };

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = 184; // Hardcoded to current container width
    const clickedPercentage = (offsetX / width) * 100;
    const newTime = (clickedPercentage / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className={stl.radio}>
      <div className={stl.titleRow}>{songName}</div>
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
