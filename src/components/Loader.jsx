import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="wrapper-grid">
      {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
        <div key={index} className="cube">
          <div className="face face-front">{letter}</div>
          <div className="face face-back"></div>
          <div className="face face-right"></div>
          <div className="face face-left"></div>
          <div className="face face-top"></div>
          <div className="face face-bottom"></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
