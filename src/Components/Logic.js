import { useState, useEffect } from 'react';
import React from 'react';

const Logic = function () {
  const potentialMatches = [
    // from the backend but would contain names/profile info
    'Sally',
    'Vanessa',
    'Jayda',
    'Wanda',
    'Sonia',
    'Tamia',
  ];

  const [names, setNames] = useState(0);

  function incrementButton() {
    setNames(() => names + 1);
  }

  function resetButton() {
    setNames(0);
  }

  useEffect(() => {
    console.log('the age has changed', potentialMatches[names]);
  }, [names]);

  return (
    <div>
      <h1>Hello</h1>
      <div>
        {potentialMatches[names] !== undefined ? (
          potentialMatches[names]
        ) : (
          <h3>No More Potentials</h3>
        )}
      </div>
      <button onClick={incrementButton}>Next Match</button>
      <button onClick={resetButton}>Reset Button</button>
    </div>
  );
};

export default Logic;
