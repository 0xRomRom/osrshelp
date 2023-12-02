import stl from "./Totalusers.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";
import app from "./../../../../../src/utils/firebase";
import { getDatabase, get, ref as refs, set } from "firebase/database";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [initialFetch, setInitialFetch] = useState(false);
  const [alreadyActive, setAlreadyActive] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const now = new Date();
    const currentMinute = now.getMinutes();

    const hasVisited = localStorage.getItem("activeStamp");
    console.log(hasVisited);
    if (!hasVisited) {
      localStorage.setItem("activeStamp", currentMinute);
      setAlreadyActive(false);
    } else {
      setAlreadyActive(true);
      console.log("Entered at minute", hasVisited);
    }
  }, [setAlreadyActive]);

  useEffect(() => {
    console.log(localStorage.getItem("activeStamp"));
  }, []);

  useEffect(() => {
    if (!totalUsers) {
      const db = getDatabase(app);
      const dbRef = refs(db);
      let currValue = 0;

      get(dbRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const value = snapshot.val().totalUsers.Counter.totalUsers;
            currValue += value;
            currValue++;
            setTotalUsers(currValue);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [totalUsers]);

  // Get initial database values
  useEffect(() => {
    if (totalUsers > 0 && !initialFetch && !alreadyActive) {
      const dbSetter = getDatabase();

      set(refs(dbSetter, `totalUsers/Counter`), {
        totalUsers: totalUsers,
      });
      setTotalUsers(totalUsers);
      setInitialFetch(true);
    }
  }, [totalUsers, initialFetch, alreadyActive]);

  return (
    <div className={stl.totalusers}>
      <h2 className={stl.userCount} ref={ref}>
        {" "}
        {inView && <NumberCounter n={totalUsers} />}
      </h2>
      <span className={stl.visitorsSpan}>Total users</span>
    </div>
  );
};

export default TotalUsers;
