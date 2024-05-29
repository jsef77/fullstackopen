import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td> {value}</td>
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
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={good + neutral + bad} />
          </tr>
          <tr>
            <StatisticLine text="average" value={averageFeedback()} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={positiveFeedback()} />
          </tr>
        </tbody>
      </table>
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
