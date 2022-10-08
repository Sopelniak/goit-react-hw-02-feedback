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
        <h2>Statistics</h2>
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
