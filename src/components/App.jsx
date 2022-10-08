import { Component } from 'react';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    good: 2,
    neutral: 4,
    bad: 6,
  };

  countTotalFeedback = obj => {
    let total = 0;
    for (const key in obj) {
      total = total + obj[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = (goodValue, countTotalFeedback) => {
    if (countTotalFeedback(this.state) !== 0) {
      return ((goodValue / countTotalFeedback(this.state)) * 100).toFixed(0);
    } else {
      return '-';
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export { App };
