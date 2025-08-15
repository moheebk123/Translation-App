const SpeedSelector = ({ speed, setSpeed }) => {
  const options = ["slow", "normal", "fast"];

  return (
    <div className="flex gap-4 mt-6 px-2 items-center justify-center flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => (speed !== option ? setSpeed(option) : null)}
          className={`px-4 py-2 rounded-lg font-semibold bg-gray-900 border transition-colors ${
            speed === option
              ? "text-purple-400 border-purple-400"
              : "text-gray-400 border-gray-400 hover:bg-gray-800 cursor-pointer"
          }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default SpeedSelector;
