import { PlayerScoreProps } from "../../configs/interfaces/interface";

const PlayerScore = ({ playerName, score }: PlayerScoreProps) => {
  return (
    <div className="flex flex-col items-center text-white">
      <p className="text-sm uppercase tracking-widest mb-2">{playerName}</p>
      <p className="text-2xl"> {score}</p>
    </div>
  );
};

export default PlayerScore;
