// Constants
import { playerO, playerX } from "../../configs/contants/constant";

// Components
import PlayerScore from "../PlayerScore";

const ScoreBoard = () => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-x-20 mb-6">
        <PlayerScore playerName={playerX} score={0} />
        <PlayerScore playerName={playerO} score={0} />
      </div>

      <span className="text-xs text-white/50"></span>
    </>
  );
};

export default ScoreBoard;
