import stl from "./Totalusers.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";
import app from "./../../../../../src/utils/firebase";
import { getDatabase, get, ref as refs, set } from "firebase/database";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(3341);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const dbRef = refs(getDatabase());
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((review) => {
            console.log(review.val());
            let count = 0;
            review.forEach((item) => {
              const finalRes = +item.val().rating;
              count += finalRes;
            });
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(app);
  }, [app]);

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
