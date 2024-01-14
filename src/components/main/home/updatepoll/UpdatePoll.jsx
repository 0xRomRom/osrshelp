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
  const [pollQuestions, setPollQuestions] = useState([]);

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
    const initFetcher = async () => {
      let parsedQuestions = null;
      try {
        const { data, error } = await supabase
          .from("poll_questions")
          .select("pollobject")
          .eq("uid", "dbbc33b0-9a71-4172-9abd-979ef8ea3c14")
          .single();

        parsedQuestions = JSON.parse(data.pollobject);
        setPollQuestions(parsedQuestions);
        if (error) {
          console.log(error);
          throw new Error(error);
        }
      } catch (err) {
        console.error(err);
      }
    };
    initFetcher();
  }, []);

  useEffect(() => {
    if (pollQuestions.length > 0) {
      const questions = [...pollQuestions];
      const updateVoteCount = async () => {
        try {
          const { data, error } = await supabase.from("poll_votes").select("*");
          setTotalVotes(data.length);
          let q1 = 0;
          let q2 = 0;
          let q3 = 0;
          let q4 = 0;
          let q5 = 0;

          data.forEach((item) => {
            if (item.uservote === 1) {
              q1++;
            }
            if (item.uservote === 2) {
              q2++;
            }
            if (item.uservote === 3) {
              q3++;
            }
            if (item.uservote === 4) {
              q4++;
            }
            if (item.uservote === 5) {
              q5++;
            }
          });
          questions[0].voteCount += q1;
          questions[1].voteCount += q2;
          questions[2].voteCount += q3;
          questions[3].voteCount += q4;
          questions[4].voteCount += q5;
          console.log(questions);
          setVoteResults(questions);

          if (error) {
            console.log(error);
            throw new Error(error);
          }
        } catch (err) {
          console.error(err);
        }
      };
      updateVoteCount();
    }
  }, [pollQuestions]);

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
          pollQuestions={pollQuestions}
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
