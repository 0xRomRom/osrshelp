import stl from "./Totalusers.module.css";

const TotalUsers = () => {
  return (
    <div className={stl.totalusers}>
      <h2 className={stl.userCount}>3391</h2>
      <span className={stl.visitorsSpan}>Total visitors</span>
    </div>
  );
};

export default TotalUsers;
