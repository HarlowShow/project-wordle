import React from 'react';
import { range } from '/src/utils'


function Grid({guesses}) {
const otherCells = 6 - guesses.length;
  return (
    <div className="guess-results">
        {guesses.map(({guess, id, styles}) => 
        <p className="guess" key={id}>
          <span className={`cell ${styles[0]}`}>{guess[0]}</span>
          <span className={`cell ${styles[1]}`}>{guess[1]}</span>
          <span className={`cell ${styles[2]}`}>{guess[2]}</span>
          <span className={`cell ${styles[3]}`}>{guess[3]}</span>
          <span className={`cell ${styles[4]}`}>{guess[4]}</span>
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
