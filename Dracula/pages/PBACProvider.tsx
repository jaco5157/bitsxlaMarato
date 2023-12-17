import React, { createContext, useContext, useState } from 'react';

const PBACContext = createContext();

export const PBACProvider = ({ children }) => {

  const [pbacAnswers, setPbacAnswers] = useState([]);
  const [cumulativeScore, setCumulativeScore] = useState(0);

  const updatePbacAnswers = (newAnswer) => {
    setPbacAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  const updateCumulativeScore = (newScore) => {
    setCumulativeScore((prevScore) => prevScore + newScore);
  };

  const resetValues = () => {
    setPbacAnswers( () => [] );
    setCumulativeScore( () => 0 );
  };

  return (
    <PBACContext.Provider
      value={{ pbacAnswers, cumulativeScore, updatePbacAnswers, updateCumulativeScore, resetValues }}
    >
      {children}
    </PBACContext.Provider>
  );

};

export const usePBACContext = () => useContext(PBACContext);
