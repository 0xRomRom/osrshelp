import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPause } from "react-icons/io";
import { useEffect, useMemo, useRef, useState } from "react";
import song1 from "../../../../assets/tracks/Track1.mp3";
import song2 from "../../../../assets/tracks/Track2.mp3";
import song3 from "../../../../assets/tracks/Track3.mp3";
import song4 from "../../../../assets/tracks/Track4.mp3";
import song5 from "../../../../assets/tracks/Track5.mp3";
import song6 from "../../../../assets/tracks/Track6.mp3";
import song7 from "../../../../assets/tracks/Track7.mp3";
import song8 from "../../../../assets/tracks/Track8.mp3";
import song9 from "../../../../assets/tracks/Track9.mp3";
import song10 from "../../../../assets/tracks/Track10.mp3";

const OSRSRadio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [songIndex, setSongIndex] = useState(0);

  const playStorage = localStorage.getItem("radio");

  const memoizedSongs = useMemo(() => {
    const songs = [
      song1,
      song2,
      song3,
      song4,
      song5,
      song6,
      song7,
      song8,
      song9,
      song10,
    ];
    return songs;
  }, []);

  useEffect(() => {
    // console.log(playStorage);
    const audio = audioRef.current;

    const handlePlaying = () => {
      console.log("Audio is playing");
    };

    const handlePause = () => {
      console.log("Audio is paused");
    };

    audio.addEventListener("play", handlePlaying);
    audio.addEventListener("pause", handlePause);

    // Set the audio source when the song index changes
    if (isPlaying) {
      audioRef.current.src = memoizedSongs[songIndex];
      audioRef.current.play();
      // Play the audio if isPlaying is true
    }
  }, [songIndex, memoizedSongs, isPlaying, playStorage]);

  const togglePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };
  const togglePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
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

  return (
    <div className={stl.radio}>
      <div className={stl.btnRow}>
        <button className={stl.cta} onClick={handlePrev}>
          <MdSkipPrevious className={stl.enlarge} />
        </button>
        {!isPlaying ? (
          <button className={stl.cta} onClick={togglePlay}>
            <FaPlay />
          </button>
        ) : (
          <button className={stl.cta} onClick={togglePause}>
            <IoMdPause />
          </button>
        )}

        <button className={stl.cta} onClick={handleNext}>
          <MdSkipNext className={stl.enlarge} />
        </button>
      </div>
    </div>
  );
};

export default OSRSRadio;
