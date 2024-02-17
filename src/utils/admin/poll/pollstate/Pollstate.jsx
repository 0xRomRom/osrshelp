import { useState } from "react";
import stl from "./Pollstate.module.css";
import supabase from "../../../supabase/supabase";
import { useEffect } from "react";

const Pollstate = () => {
  const [activeState, setActiveState] = useState("Idle");

  useEffect(() => {
    const stateFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("poll_questions")
          .select("*");

        if (error) {
          throw new Error(error);
        }

        console.log(data);

        //Set result as state
        //   setActiveState(data[0])
      } catch (err) {
        console.error(err);
      }
    };

    stateFetcher();
  }, []);

  const updatePollstate = async (newState) => {
    try {
      await supabase
        .from("pollstate")
        .update({
          pollstate: newState,
          uid: "123",
        })
        .eq("uid", "123");

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
