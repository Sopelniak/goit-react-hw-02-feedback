import { Component } from 'react';

class FeedbackOptions extends Component {
  processReviews = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  render() {
    // const { good, neutral, bad } = this.props;
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={this.processReviews} type="button">
          Good
        </button>
        <button onClick={this.processReviews} type="button">
          Neutral
        </button>
        <button onClick={this.processReviews} type="button">
          Bad
        </button>
      </>
    );
  }
}

export { FeedbackOptions };
