import stl from "./Spinner.module.css";

const Spinner = () => {
  return (
    // <img
    //   src="./runecraft/Law_rune.webp"
    //   alt="Law Rune spinner"
    //   className={stl.spinner}
    // />
    <div className={stl.ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
