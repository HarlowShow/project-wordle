import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('')
  const logGuess = () => {
    console.log('answer: ' + answer)
    console.log('guess: ' + guess)
  }
  useEffect(() => {logGuess()}, [guess])

  const handleGuess = (g) => {
    if (g.length === 5 && typeof g === 'string') {
      const nextGuess = g.toUpperCase()
      setGuess(nextGuess)
    } else {
      console.log('wrong length of guess')
    }
  }
  return <Guess handleGuess = {handleGuess}/>;
}

export default Game;
