import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const onLeaveFeedback = ({ target }) => {
    if (target.name === 'good') {
      setGood(prevState => prevState + 1);
    } else if (target.name === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (target.name === 'bad') {
      setBad(prevState => prevState + 1);
    }

    //   this.setState(prevState => ({
    //     [target.name]: prevState[target.name] + 1,
    //   }));
  };

   function countTotalFeedback (){
    const total = good + neutral + bad;
    return total;
  };

 function countPositiveFeedbackPercentage() {
    return Math.ceil((good / (good + neutral + bad)) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Statistics
          good={['Good', good]}
          neutral={['Neutral', neutral]}
          bad={['Bad', bad]}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        {!countTotalFeedback() && (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

export default App;
