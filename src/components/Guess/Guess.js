import React from 'react';

function Guess({handleGuess, hasWon}) {
  const [guess, setGuess] = React.useState('')

  return <div>
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      handleGuess(guess)
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={hasWon}
        id="guess-input"
        type="text"
        value={guess.toUpperCase()}
        onChange = {(event) => {
          setGuess(event.target.value)
        }}
        pattern="[a-zA-Z]{5}"
        title="enter a five letter world"
      ></input>
    </form>
  </div>;
}

export default Guess;
