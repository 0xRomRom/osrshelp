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
    if (!totalUsers) {
      const db = getDatabase(app);
      const dbRef = refs(getDatabase());
      let currValue = 0;

      get(dbRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const value = snapshot.val().totalUsers.Counter.totalUsers;
            currValue += value;
            currValue++;
            setTotalUsers(currValue);
            console.log(currValue);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(currValue);
    }
  }, [totalUsers]);

  useEffect(() => {
    if (totalUsers > 0 && !initialFetch) {
      const dbSetter = getDatabase();

      set(refs(dbSetter, `totalUsers/Counter`), {
        totalUsers: totalUsers,
      });
      setTotalUsers(totalUsers + 1);
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
