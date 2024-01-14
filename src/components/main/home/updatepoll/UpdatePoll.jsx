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
    setTotalVotes(() => totalVotes + 1);
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
    const updateVoteCount = async () => {
      try {
        const { data, error } = await supabase.from("poll_votes").select("*");
        if (error) {
          console.log(error);
          throw new Error(error);
        }

        const questionVoteCounts = Array(pollQuestions.length).fill(0);

        data.forEach((item) => {
          const index = item.uservote - 1; // Assuming uservote is 1-indexed
          if (index >= 0 && index < pollQuestions.length) {
            questionVoteCounts[index]++;
          }
        });

        const updatedQuestions = pollQuestions.map((question, index) => ({
          ...question,
          voteCount: question.voteCount + questionVoteCounts[index],
        }));

        setTotalVotes(data.length);
        setVoteResults(updatedQuestions);
      } catch (err) {
        console.error(err);
      }
    };

    if (pollQuestions.length > 0) {
      updateVoteCount();
    }
  }, [pollQuestions, voted]);

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
