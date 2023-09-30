import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons">
      {Object.keys(options).map(option => (
        <button
          key={option}
          className="btn"
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {/* першу  літеру назви кнопки робимо великою */}
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
