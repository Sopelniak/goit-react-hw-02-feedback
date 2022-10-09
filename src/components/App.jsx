import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  onLeaveFeedback = option => {
    if (option === 1) {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }
    if (option === 2) {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }
    if (option === 3) {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback({ good, neutral, bad }) !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export { App };
