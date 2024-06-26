import { useState } from "react";

const RandomButton = ({ text, selected, setSelected }) => {
  function rollNumber() {
    return Math.floor(Math.random() * 8);
  }
  function handleClick() {
    const rng = rollNumber();
    if (rng === selected) {
      // check dupe
      handleClick();
    } else {
      setSelected(rng);
    }
  }

  return <button onClick={handleClick}>{text}</button>;
};

const VoteButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(new Int8Array(anecdotes.length));
  const [selected, setSelected] = useState(0);
  const [topIndex, setTopIndex] = useState(0);

  function handleVote() {
    const newPoints = [...points];
    newPoints[selected] += 1;

    if (newPoints[selected] > newPoints[topIndex]) {
      setTopIndex(selected);
      console.log("New Top Index!: " + selected);
    }
    setPoints(newPoints);
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <VoteButton text="vote" onClick={handleVote} />
      <RandomButton
        text="next anecdote"
        selected={selected}
        setSelected={setSelected}
      />
      <h1>Anecdote with the most votes</h1>
      {anecdotes[topIndex]}
      <div>has {points[topIndex]} votes </div>
    </>
  );
};

export default App;
