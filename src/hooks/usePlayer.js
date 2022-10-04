import { useState, useCallback } from "react";

import {randomTetromino} from "/src/business/Tetrominoes";

const buildPlayer = (previous) => {

};

export const usePlayer = () => {
  const [player, setPlayer] = usePlayer(buildPlayer());

  const resetPlayer = useCallback(()=>{
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player, setPlayer, resetPlayer];
}
