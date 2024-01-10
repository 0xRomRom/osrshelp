import stl from "./SupportersModal.module.css";

const SupportersModal = () => {
  return (
    <div className={stl.supportersmodal}>
      <h2 className={stl.supportersHero}>Supporters</h2>
      <div className={stl.supportersList}>
        <div className={stl.supporter}>
          <img src="./random/Mod.webp" alt="Mod" className={stl.modCrown} />
          <span className={stl.userName}>King Rom II</span>
          <span className={stl.amount}>x3</span>
          <img
            src="./foods/Lobster.webp"
            alt="Lobster"
            className={stl.lobsterImg}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportersModal;
