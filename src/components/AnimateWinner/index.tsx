import { useEffect } from "react";

// Interfaces
import { SquaresCollections } from "../../configs/interfaces/interface";

// Context
import { useBoardContext } from "../../context/BoardContext";

const AnimateWinner = ({ squares }: SquaresCollections) => {
  const { animateWinner, winningMoves } = useBoardContext();

  useEffect(() => {
    if (animateWinner === true) {
      const winningSquares = squares.filter((square, squareIndex) => {
        return (
          winningMoves &&
          winningMoves.some((move, index) => {
            return squareIndex === winningMoves[index];
          })
        );
      });

      const animate_animated_class = "animate__animated";
      const animate_class = "animate__shakeY";

      winningSquares.forEach((winningSquare) => {
        const squareElement = winningSquare?.current;

        const childOfSquare = squareElement?.firstElementChild;

        // Add Animation
        childOfSquare &&
          childOfSquare.classList.add(animate_animated_class, animate_class);

        // Remove Animation
        childOfSquare &&
          childOfSquare.addEventListener(
            "animationend",
            (e) => {
              e.stopPropagation();
              childOfSquare &&
                childOfSquare.classList.remove(
                  animate_animated_class,
                  animate_class
                );
            },
            {
              once: true,
            }
          );
      });
    }
  }, [animateWinner, squares, winningMoves]);

  return <></>;
};

export default AnimateWinner;
