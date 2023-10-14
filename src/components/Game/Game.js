import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import Grid from '../Grid'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guesses, setGuesses] = React.useState([])

  const logGuess = () => {
    console.log('answer: ' + answer)
    console.log('guess: ' + guess)
    console.log(guesses)
  }
  useEffect(() => {logGuess()})

  const handleGuess = (g) => {
    if (g.length === 5 && typeof g === 'string') {
      const nextGuess = g.toUpperCase()
      const guessObj = {
        guess: nextGuess,
        id: crypto.randomUUID(),
      }
      setGuess(nextGuess)
      setGuesses([...guesses, guessObj])
    } else {
      console.log('wrong length of guess')
    }
  }
  return (
    <>
    <Grid guesses = {guesses}/>
    <Guess handleGuess = {handleGuess}/>;
    </>
  )
}

export default Game;
