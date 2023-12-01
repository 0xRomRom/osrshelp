import stl from "./Totalusers.module.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import NumberCounter from "../../../../utils/NumberCounter";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(3341);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
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
