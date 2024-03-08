import stl from "./UpdatePoll.module.css";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import CurrentPollState from "./currentpollstate/CurrentPollState";

import InfoOverlay from "./infooverlay/InfoOverlay";
import PollQuestions from "./pollquestions/PollQuestions";
import supabase from "../../../../utils/supabase/supabase";
import PollResults from "./pollresults/PollResults";
import { useNavigate } from "react-router-dom";

import IdleState from "./idlestate/IdleState";
import SubmissionsState from "./submissionsstate/SubmissionsState";
import ConstructionState from "./constructionstate/ConstructionState";
import Spinner from "../../../../utils/loadingspinner/Spinner";

const UpdatePoll = () => {
  const navigate = useNavigate();
  const { userID } = useContext(AuthContext);
  const [voted, setVoted] = useState(true);
  const [voteResults, setVoteResults] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [showInfoOverlay, setShowInfoOverlay] = useState(false);
  const [checkedQuestion, setCheckedQuestion] = useState(null);
  const [pollQuestions, setPollQuestions] = useState([]);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [activePhase, setActivePhase] = useState(null);
  const [userVoteIndex, setUserVoteIndex] = useState(null);

  useEffect(() => {
    if (activePhase === "Idle") return;
    if (!userID) {
      setAlreadyVoted(false);
      return;
    }

    const checkIfAlreadyVoted = async () => {
      //Gaurd if user has already voted
      try {
        const { data, error } = await supabase
          .from("poll_votes")
          .select("uservote")
          .eq("uid", userID);
        setUserVoteIndex(data[0]?.uservote);
        const len = Object.entries(data).length;
        if (len > 0) {
          setAlreadyVoted(true);
        }
        if (error) {
          // throw new Error("No vote recorded.");
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkIfAlreadyVoted();
  }, [alreadyVoted, userID, activePhase]);

  useEffect(() => {
    setCheckedQuestion(null);
  }, [voted]);

  useEffect(() => {
    const initFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("poll_questions")
          .select("*")
          .eq("uid", "dbbc33b0-9a71-4172-9abd-979ef8ea3c14")
          .single();

        const parsedQuestions = JSON.parse(data.pollobject);
        setPollQuestions(parsedQuestions);
        setActivePhase(data.pollstate);

        if (error) {
          throw new Error(error);
        }
      } catch (err) {
        console.error(err);
      }
    };
    initFetcher();
  }, []);

  useEffect(() => {
    if (activePhase === "Idle") return;
    const updateVoteCount = async () => {
      try {
        const { data, error } = await supabase.from("poll_votes").select("*");
        if (error) {
          throw new Error(error);
        }

        const questionVoteCounts = Array(pollQuestions.length).fill(0);

        data.forEach((item) => {
          const index = item.uservote - 1;
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
  }, [pollQuestions, voted, activePhase]);

  const handleVote = async () => {
    if (!userID) {
      navigate("/login");
    }
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
      console.error(err);
    }

    setVoted(!voted);
    setAlreadyVoted(true);
    setTotalVotes(() => totalVotes + 1);
  };

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
      {pollQuestions.length === 0 && (
        <div className={stl.centerSpinner}>
          <Spinner />
        </div>
      )}
      {pollQuestions.length > 0 && (
        <>
          {activePhase === "Construction" && (
            <ConstructionState userID={userID} />
          )}
          {activePhase === "Submissions" && (
            <SubmissionsState userID={userID} />
          )}
          {activePhase === "Idle" && <IdleState />}

          {activePhase === "Poll" && (
            <>
              {!voted && (
                <PollQuestions
                  totalVotes={totalVotes}
                  checkedQuestion={checkedQuestion}
                  setCheckedQuestion={setCheckedQuestion}
                  pollQuestions={pollQuestions}
                  alreadyVoted={alreadyVoted}
                  userVoteIndex={userVoteIndex}
                />
              )}

              {voted && voteResults && (
                <PollResults
                  totalVotes={totalVotes}
                  voteResults={voteResults}
                />
              )}

              <div className={stl.ctaBox}>
                {!alreadyVoted && !voted && (
                  <button
                    className={stl.voteBtn}
                    style={{
                      opacity: voted ? "0" : "1",
                      cursor: voted ? "initial" : "pointer",
                    }}
                    disabled={voted ? true : false}
                    onClick={handleVote}
                  >
                    {!userID ? "Sign in to vote" : "Vote"}
                  </button>
                )}
                {alreadyVoted && !voted && (
                  <button
                    className={stl.alreadyVotedBtn}
                    disabled={true}
                    style={{
                      opacity: voted ? "0" : "1",
                    }}
                  >
                    Already voted
                  </button>
                )}
              </div>
              <div className={stl.seeResultsBox}>
                <span
                  className={stl.seeResults}
                  onClick={() => setVoted(!voted)}
                >
                  {voted ? "Vote" : "See results"}
                </span>
              </div>
            </>
          )}
        </>
      )}
      <CurrentPollState
        showInfoOverlay={showInfoOverlay}
        setShowInfoOverlay={setShowInfoOverlay}
        activePhase={activePhase}
      />
    </div>
  );
};

export default UpdatePoll;
