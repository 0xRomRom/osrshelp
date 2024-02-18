import stl from "./Totalusers.module.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";
import supabase from "../../../../utils/supabase/supabase";
import Spinner from "../../../../utils/loadingspinner/Spinner";

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
          (currentM - 5 === -5 && visitedM === 55) ||
          (currentM - 5 === -4 && visitedM === 56) ||
          (currentM - 5 === -3 && visitedM === 57) ||
          (currentM - 5 === -2 && visitedM === 58) ||
          (currentM - 5 === -1 && visitedM === 59)
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
      const dbFetcher = async () => {
        try {
          const { data, error } = await supabase
            .from("totalusers")
            .select("*")
            .eq("id", 1);

          if (error) {
            throw error;
          }

          if (data) {
            setTotalUsers(data[0].totalcount);
          }
        } catch (error) {
          console.error("Error fetching total count:", error.message);
        }
      };
      dbFetcher();
    }
  }, [totalUsers]);

  useEffect(() => {
    if (incrementDB && totalUsers > 0) {
      const updater = async () => {
        const incremented = totalUsers + 1;
        try {
          const { data, error } = await supabase
            .from("totalusers")
            .update([{ totalcount: incremented }])
            .eq("id", 1); // Filter by id = 1

          if (error) {
            throw error;
          }

          if (data) {
            setTotalUsers(incremented);
          }
        } catch (error) {
          console.error("Error incrementing total count:", error.message);
        }
      };
      updater();
    }
  }, [incrementDB, totalUsers]);

  return (
    <>
      <div className={stl.totalusers}>
        {totalUsers === 0 && <Spinner />}
        {totalUsers > 0 && (
          <>
            <h2 className={stl.userCount} ref={ref}>
              {" "}
              {inView && <NumberCounter n={totalUsers} />}
            </h2>
            <span className={stl.visitorsSpan}>Total users</span>
          </>
        )}
      </div>
    </>
  );
};

export default TotalUsers;
