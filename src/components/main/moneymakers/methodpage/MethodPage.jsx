import stl from "./MethodPage.module.css";

const MethodPage = ({ method }) => {
  return (
    <div className={stl.methodpage}>
      <span>{method.title}</span>
    </div>
  );
};

export default MethodPage;
