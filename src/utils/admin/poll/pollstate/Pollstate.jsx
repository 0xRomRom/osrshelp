import { useState } from "react";
import stl from "./Pollstate.module.css";
import supabase from "../../../supabase/supabase";
import { useEffect } from "react";

const Pollstate = () => {
  const [activeState, setActiveState] = useState("");

  useEffect(() => {
    const stateFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("poll_questions")
          .select("*");

        if (error) {
          throw new Error(error);
        }

        //Set result as state
        setActiveState(data[0].pollstate);
      } catch (err) {
        console.error(err);
      }
    };

    stateFetcher();
  }, []);

  const updatePollstate = async (newState) => {
    try {
      await supabase
        .from("poll_questions")
        .update([
          {
            pollstate: newState,
          },
        ])
        .eq("uid", "dbbc33b0-9a71-4172-9abd-979ef8ea3c14");

      setActiveState(newState);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={stl.pollstate}>
      <button
        onClick={() => updatePollstate("Idle")}
        className={`${stl.pollCta} ${
          activeState === "Idle" ? stl.activeCta : ""
        }`}
      >
        Idle
      </button>
      <button
        onClick={() => updatePollstate("Submissions")}
        className={`${stl.pollCta} ${
          activeState === "Submissions" ? stl.activeCta : ""
        }`}
      >
        Submissions
      </button>
      <button
        onClick={() => updatePollstate("Poll")}
        className={`${stl.pollCta} ${
          activeState === "Poll" ? stl.activeCta : ""
        }`}
      >
        Poll
      </button>
      <button
        onClick={() => updatePollstate("Construction")}
        className={`${stl.pollCta} ${
          activeState === "Construction" ? stl.activeCta : ""
        }`}
      >
        Construction
      </button>
    </div>
  );
};

export default Pollstate;
