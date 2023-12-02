import stl from "./Totalusers.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";
import app from "./../../../../../src/utils/firebase";
import { getDatabase, get, ref as refs, set } from "firebase/database";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [incrementDB, setIncrementDB] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const setCurrentTimestamp = () => {
    const now = new Date();
    const currentH = now.getHours();
    const currentM = now.getMinutes();

    localStorage.setItem("activeStamp", currentH + "-" + currentM);
  };

  useEffect(() => {
    const now = new Date();
    const currentH = now.getHours();
    const currentM = now.getMinutes();
    const previousVisit = localStorage.getItem("activeStamp");

    if (!previousVisit) {
      console.log("No visit");
      setCurrentTimestamp();
      setIncrementDB(true);
    }
    if (previousVisit) {
      const visitedH = +previousVisit.split("-")[0];
      const visitedM = +previousVisit.split("-")[1];

      if (currentH > visitedH) {
        setCurrentTimestamp();
        setIncrementDB(true);
        localStorage.removeItem("activeStamp");
        return;
      }
      if (currentH === 0 && visitedH > 0) {
        setCurrentTimestamp();
        setIncrementDB(true);
        localStorage.removeItem("activeStamp");
        return;
      }
      if (currentH === visitedH && currentM - 5 >= visitedM) {
        setCurrentTimestamp();
        setIncrementDB(true);
        localStorage.removeItem("activeStamp");
        return;
      }

      if (currentH === visitedH) {
        if (
          (currentM - 5 === -5 > visitedM && visitedM === 55) ||
          (currentM - 5 === -4 > visitedM && visitedM === 56) ||
          (currentM - 5 === -3 > visitedM && visitedM === 57) ||
          (currentM - 5 === -2 > visitedM && visitedM === 58) ||
          (currentM - 5 === -1 > visitedM && visitedM === 59)
        ) {
          setCurrentTimestamp();
          setIncrementDB(true);
          localStorage.removeItem("activeStamp");
          return;
        }
      }
    }
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
    if (totalUsers > 0 && incrementDB) {
      const dbSetter = getDatabase();

      set(refs(dbSetter, `totalUsers/Counter`), {
        totalUsers: totalUsers,
      });
      setTotalUsers(totalUsers);
    }
  }, [totalUsers, incrementDB]);

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
