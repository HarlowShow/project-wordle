import React from 'react';

function Grid({guesses}) {
  return (

      <div>
        {guesses.map(({guess, id}) => 
        <span key={id}>{guess}</span>
        )}
      {/* {guesses.map((guess) => (
        <span>{guess}</span>
      )} */}
      </div>
      );
}

export default Grid;
