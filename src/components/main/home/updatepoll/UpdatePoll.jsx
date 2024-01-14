import stl from "./UpdatePoll.module.css";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import CurrentPollState from "./currentpollstate/CurrentPollState";

import InfoOverlay from "./infooverlay/InfoOverlay";
import PollQuestions from "./pollquestions/PollQuestions";
import supabase from "../../../../utils/supabase/supabase";
import PollResults from "./pollresults/PollResults";

const UpdatePoll = () => {
  const { userID } = useContext(AuthContext);
  const [voted, setVoted] = useState(false);
  const [voteResults, setVoteResults] = useState({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [showInfoOverlay, setShowInfoOverlay] = useState(false);
  const [checkedQuestion, setCheckedQuestion] = useState(null);

  useEffect(() => {
    setCheckedQuestion(null);
  }, [voted]);

  const handleVote = async () => {
    if (!checkedQuestion) {
      return;
    }
    try {
      const { error } = await supabase.from("poll_votes").insert([
        {
          uid: userID,
          uservote: checkedQuestion,
        },
      ]);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.log(err);
    }

    setVoted(!voted);

    if (5 > 6) {
      updateCurrentPoll();
    }
  };

  const updateCurrentPoll = async () => {
    const data = [
      { question: 1, questionValue: "Bird House calculator", voteCount: 0 },
      { question: 2, questionValue: "Hydra calculator", voteCount: 0 },
      { question: 3, questionValue: "Herbiboar calculator", voteCount: 0 },
      { question: 4, questionValue: "Blast Furnace calculator", voteCount: 0 },
      {
        question: 5,
        questionValue: "Pyramid plunder calculator",
        voteCount: 0,
      },
    ];

    const stringData = JSON.stringify(data);

    try {
      const { data, error } = await supabase
        .from("poll_questions")
        .update({ pollobject: stringData })
        .eq("uid", userID);

      console.log(data);

      if (error) {
        console.log(error);
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      const voteResult = {
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
      };
      try {
        const { data, error } = await supabase.from("poll_votes").select("*");

        if (error) {
          throw new Error(error);
        }
        if (data) {
          //Total votes
          setTotalVotes(Object.entries(data).length);
          //Vote results
          data.forEach((item) => {
            voteResult[`question${item.uservote}`] += 1;
          });
          setVoteResults(voteResult);
        }
      } catch (err) {
        console.error(err);
      }
    };

    initialFetch();
  }, []);

  return (
    <div className={stl.modal}>
      {showInfoOverlay && (
        <InfoOverlay
          showInfoOverlay={showInfoOverlay}
          setShowInfoOverlay={setShowInfoOverlay}
        />
      )}
      <HiOutlineQuestionMarkCircle
        className={stl.questionMark}
        onClick={() => setShowInfoOverlay(!showInfoOverlay)}
      />
      <h2 className={stl.title}>Update poll</h2>

      {!voted && (
        <PollQuestions
          totalVotes={totalVotes}
          checkedQuestion={checkedQuestion}
          setCheckedQuestion={setCheckedQuestion}
        />
      )}

      {voted && (
        <PollResults totalVotes={totalVotes} voteResults={voteResults} />
      )}

      <div className={stl.ctaBox}>
        <button
          className={stl.voteBtn}
          style={{
            opacity: voted ? "0" : "1",
            cursor: voted ? "initial" : "pointer",
          }}
          disabled={voted ? true : false}
          onClick={handleVote}
        >
          Vote
        </button>
      </div>
      <div className={stl.seeResultsBox}>
        <span className={stl.seeResults} onClick={() => setVoted(!voted)}>
          {voted ? "Vote" : "See results"}
        </span>
      </div>
      <CurrentPollState />
    </div>
  );
};

export default UpdatePoll;
