import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    return (
      <>
        <ul>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{countTotalFeedback({ good, neutral, bad })}</span>
          </li>
          <li>
            Positive feedback:{' '}
            <span>
              {countPositiveFeedbackPercentage(good, countTotalFeedback)}%
            </span>
          </li>
        </ul>
      </>
    );
  }
}

export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
