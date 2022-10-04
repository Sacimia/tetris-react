import "./Tetris.css";

import Board from "/src/components/Board";
import GameStats from "/src/components/GameStats";
import Previews from "/src/components/Previews";

import { useBoard } from "/src/hooks/useBoard";
import { useGameStats } from "/src/hooks/useGameStats";
import { usePlayer} from "/src/hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) =>{
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({
     rows,
     columns
   });
   const [player, setPlayer ,resetPlayer] = usePlayer();
  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats = {gameStats} />
      <Previous tetrominoes={player.tetrominoes}>
    </div>
  );
};

export default Tetris;
