import React from 'react';

function Guess({handleGuess}) {
  const [guess, setGuess] = React.useState('')

  return <div>
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      handleGuess(guess)
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange = {(event) => {
          setGuess(event.target.value)
        }}
      ></input>
    </form>
  </div>;
}

export default Guess;
