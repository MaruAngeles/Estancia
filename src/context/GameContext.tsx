import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext<any>(null);

export function GameProvider({ children }: any) {
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);

  const addReward = (coinReward: number, xpReward: number) => {
    setCoins(prev => prev + coinReward);
    setXp(prev => prev + xpReward);
  };

  return (
    <GameContext.Provider
      value={{
        coins,
        xp,
        addReward
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);