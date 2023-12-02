import stl from "./Totalusers.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";
import app from "./../../../../../src/utils/firebase";
import { getDatabase, get, ref as refs, set } from "firebase/database";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [initialFetch, setInitialFetch] = useState(false);
  const [incrementDB, setIncrementDB] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const setCurrentTimestamp = () => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getMinutes();

    localStorage.setItem("activeStamp", currentDay + "-" + currentHour);
  };

  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getMinutes();
    const previousVisit = localStorage.getItem("activeStamp");

    if (!previousVisit) {
      console.log("No visit");
      setCurrentTimestamp();
      setIncrementDB(true);
    }
    if (previousVisit) {
      const visitedDay = +previousVisit.split("-")[0];
      const visitedHour = +previousVisit.split("-")[1];
      console.log("visitedDay:", visitedDay);
      console.log("visitedHour:", visitedHour);

      console.log("Current Day:", currentDay);
      console.log("Current Hour", currentHour);

      if (currentDay > visitedDay) {
        setCurrentTimestamp();
        setIncrementDB(true);
        localStorage.removeItem("activeStamp");
        return;
      }
      if (currentHour === 0 && visitedHour > 0) {
        setCurrentTimestamp();
        setIncrementDB(true);
        localStorage.removeItem("activeStamp");
        return;
      }
      if (currentHour > visitedHour) {
        setCurrentTimestamp();
        setIncrementDB(true);
        localStorage.removeItem("activeStamp");
        return;
      }
    }
  }, []);

  useEffect(() => {
    // console.log(localStorage.getItem("activeStamp"));
  }, []);

  // Get initial database values
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

  useEffect(() => {
    if (totalUsers > 0 && !initialFetch && incrementDB) {
      const dbSetter = getDatabase();

      set(refs(dbSetter, `totalUsers/Counter`), {
        totalUsers: totalUsers,
      });
      setTotalUsers(totalUsers);
      setInitialFetch(true);
    }
  }, [totalUsers, initialFetch, incrementDB]);

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
