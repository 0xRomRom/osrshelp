import stl from "./UpdatePoll.module.css";
import { useEffect, useState } from "react";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import CurrentPollState from "./currentpollstate/CurrentPollState";

import InfoOverlay from "./infooverlay/InfoOverlay";
import PollQuestions from "./pollquestions/PollQuestions";

import PollResults from "./pollresults/PollResults";

const UpdatePoll = () => {
  const [voted, setVoted] = useState(false);
  const [totalVotes, setTotalVotes] = useState(200);
  const [showInfoOverlay, setShowInfoOverlay] = useState(false);
  const [checkedQuestion, setCheckedQuestion] = useState(null);

  useEffect(() => {
    setCheckedQuestion(null);
  }, [voted]);

  const handleVote = () => {
    if (!checkedQuestion) {
      return;
    }
    setVoted(!voted);
    setTotalVotes((votes) => votes + 1);
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

      {!voted && (
        <PollQuestions
          totalVotes={totalVotes}
          checkedQuestion={checkedQuestion}
          setCheckedQuestion={setCheckedQuestion}
        />
      )}

      {voted && <PollResults totalVotes={totalVotes} />}

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
