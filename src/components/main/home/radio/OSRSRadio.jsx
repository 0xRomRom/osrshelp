import stl from "./OSRSRadio.module.css";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { useRef, useState } from "react";
import track1 from "../../../../assets/tracks/Track1.mid";

const OSRSRadio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={stl.radio}>
      <div className={stl.btnRow}>
        <button className={stl.cta}>
          <MdSkipPrevious className={stl.enlarge} />
        </button>
        <button className={stl.cta} onClick={togglePlay}>
          <FaPlay />
        </button>
        <button className={stl.cta}>
          <MdSkipNext className={stl.enlarge} />
        </button>
        <audio ref={playerRef} controls>
          <source
            src="../../../../assets/tracks/Track1.mid"
            type="audio/midi"
          />
        </audio>
      </div>
    </div>
  );
};

export default OSRSRadio;
