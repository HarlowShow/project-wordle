import React from 'react';

function Results({length, hasWon, answer}) {
  if (length === 6 || hasWon === true) {
    return (
      <div>
        { hasWon === true ? 
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {length}</strong>.
        </p>
      </div>
        :
        <div className="sadbanner">
        <p>Sorry, the correct answer is <strong>{answer}</strong></p>
      </div>
      }
      </div>
    )
  }
}

export default Results;
