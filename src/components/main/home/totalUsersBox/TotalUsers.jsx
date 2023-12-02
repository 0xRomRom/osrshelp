import stl from "./Totalusers.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";
import app from "./../../../../../src/utils/firebase";
import { getDatabase, get, ref as refs, set } from "firebase/database";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [initialFetch, setInitialFetch] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const now = new Date();
    const currentMinute = now.getMinutes();
    const previousVisit = localStorage.getItem("activeStamp");

    let currMin = +currentMinute;
    let currVisit = +previousVisit;

    console.log("Current minute:", currMin);
    console.log("Previous visit:", currVisit);
    console.log("Time difference:", currMin - currVisit);
    if (currMin === 560) {
      // alert("Long ago!");
    }

    // localStorage.setItem("activeStamp", currentMinute);
    // console.log("Previous visit:", previousVisit);
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
    if (totalUsers > 0 && !initialFetch) {
      const dbSetter = getDatabase();

      // set(refs(dbSetter, `totalUsers/Counter`), {
      //   totalUsers: totalUsers,
      // });
      setTotalUsers(totalUsers);
      setInitialFetch(true);
    }
  }, [totalUsers, initialFetch]);

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
