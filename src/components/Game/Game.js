import React, { useEffect } from 'react';

import { sample } from '../../utils';

import { WORDS, LETTERS} from '../../data';
import Guess from '../Guess';
import Grid from '../Grid';
import Results from '../Results';
import Keyboard from '../Keyboard'
import { checkGuess } from '/src/game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guesses, setGuesses] = React.useState([])
  const [hasWon, setHasWon] = React.useState(false)
  const [letters, setLetters] = React.useState([...LETTERS])


  const logGuess = () => {
    console.log('answer: ' + answer)
    console.log('guess: ' + guess)
    console.log(guesses)
  }
  useEffect(() => {logGuess()})

  const updateLetters = (word, status) => {
    const nextLetters = [...letters]
    for (let i = 0; i < 5; i += 1) {
      const nextLetter = word[i]
      const index = nextLetters.map(i => i.letter).indexOf(nextLetter)
      nextLetters[index].status = status[i]
    }
    setLetters(nextLetters)
  }

  const handleGuess = (g) => {
    if (g.length === 5 && typeof g === 'string') {
      const nextGuess = g.toUpperCase()
      const guessResults = checkGuess(g, answer)
      const styles = []
      guessResults.forEach((result) => styles.push(result.status))
      const guessObj = {
        guess: nextGuess,
        id: crypto.randomUUID(),
        styles,
      }
      setGuess(nextGuess)
      setGuesses([...guesses, guessObj])
      updateLetters(nextGuess, styles)
      if (nextGuess === answer) {
        setHasWon(true)
        console.log('correct guess entered')
      }
    } else {
      console.log('wrong length of guess')
    }
  }
  return (
    <>
    <Grid guesses = {guesses} answer= {answer}/>
    <Guess handleGuess = {handleGuess} hasWon={hasWon}/>
    <Results length={guesses.length} hasWon={hasWon} answer={answer}/>
    <Keyboard letters={letters}/>
    </>
  )
}

export default Game;
