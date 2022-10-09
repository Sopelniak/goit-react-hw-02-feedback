import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <button onClick={() => onLeaveFeedback(1)} type="button">
        Good
      </button>
      <button onClick={() => onLeaveFeedback(2)} type="button">
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback(3)} type="button">
        Bad
      </button>
    </>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
