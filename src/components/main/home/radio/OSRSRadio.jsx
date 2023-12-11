import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useEffect, useMemo, useRef, useState } from "react";
import song1 from "../../../../assets/tracks/Track.mp3";
// import song2 from "../../../../assets/tracks/Track2.mp3";
// import song3 from "../../../../assets/tracks/Track3.mp3";
// import song4 from "../../../../assets/tracks/Track4.mp3";
// import song5 from "../../../../assets/tracks/Track5.mp3";

const OSRSRadio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [songIndex, setSongIndex] = useState(0);

  const memoizedSongs = useMemo(() => {
    const songs = [song1];
    return songs;
  }, []);

  useEffect(() => {
    // Set the audio source when the song index changes
    audioRef.current.src = memoizedSongs[songIndex];
    // Play the audio if isPlaying is true
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [songIndex, memoizedSongs, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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
        <button className={stl.cta} onClick={togglePlay}>
          <FaPlay />
        </button>
        <button className={stl.cta} onClick={handleNext}>
          <MdSkipNext className={stl.enlarge} />
        </button>
      </div>
    </div>
  );
};

export default OSRSRadio;
