import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Statistic = ({ text, stat }) => {
  return (
    <>
      <p>
        {text} {stat}
      </p>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  function averageFeedback() {
    const average = good - bad;
    const total = good + neutral + bad;

    return average / total;
  }

  function positiveFeedback() {
    const total = good + neutral + bad;

    return good / total + "%";
  }

  if (good + bad + neutral != 0) {
    return (
      <>
        {" "}
        <Statistic text="good" stat={good} />
        <Statistic text="neutral" stat={neutral} />
        <Statistic text="bad" stat={bad} />
        <Statistic text="all" stat={good + neutral + bad} />
        <Statistic text="average" stat={averageFeedback()} />
        <Statistic text="positive" stat={positiveFeedback()} />
      </>
    );
  }
  return "No feedback given";
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      {/* BUTTONS */}
      <Title text="give feedback" />
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />

      {/* STATS DISPLAY */}
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
