import React from 'react';
import { range } from '/src/utils'

function Grid({guesses}) {
const otherCells = 6 - guesses.length;
  // const letters = []
  // guesses.forEach((guess) => {
  //   const arr = guess.guess.split('')
  //   letters.push(arr)
  // })
  // console.log(letters)
  return (
    <div className="guess-results">
        {guesses.map(({guess, id}) => 
        <p className="guess" key={id}>
          <span className="cell">{guess[0]}</span>
          <span className="cell">{guess[1]}</span>
          <span className="cell">{guess[2]}</span>
          <span className="cell">{guess[3]}</span>
          <span className="cell">{guess[4]}</span>
        </p>
        )}
        { range(otherCells).map((num) =>
        <p className="guess" key={num}>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
        )}
    </div>
      )
}

export default Grid;
