import React from 'react';

function Keyboard({letters}) {
  // correct / incorrect / misplaced


  const firstRow = letters.slice(0, 9)
  const secondRow = letters.slice(10, 18)
  const thirdRow = letters.slice(19, 26)

  console.log(firstRow)
  console.log(letters)
  return (
    <div className="keyboard-container" width="100%">
      <div className="keyboard-row">
      { firstRow.map((letter) => (
        <div className={`${letter.status} key`} key={letter.letter}>
          <span>{letter.letter}</span>
        </div>
      ))}
      </div>
      <div className="keyboard-row second">
      { secondRow.map((letter) => (
        <div className={`${letter.status} key`} key={letter.letter}>
          <span>{letter.letter}</span>
        </div>
      ))}
      </div>
      <div className="keyboard-row third">
      { thirdRow.map((letter) => (
        <div className={`${letter.status} key`} key={letter.letter}>
          <span>{letter.letter}</span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Keyboard;
