import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";

const style = {
  width: "200px",
  margin: "20px auto",
};

function Game() {
  //const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]); //we are wrapping the initial state in an array to represent the history of moves
  const [stepNumber, setStepNumber] = useState(0); // to keep track of the current step in the game
  //const winner = calculateWinner(board); // board is passed to calculateWinner to determine if there's a winner
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    //let make the copy of board state, because we should not mutate the state
    const boardCopy = [...board];
    //if user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    //put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy); // update the board state with the modified copy
    setXIsNext(!xIsNext); // toggle turns, meaning if it was X's turn, now it's O's turn and vice versa
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Restart Game</button>
  );

  return (
    <>
      <Board onClick={handleClick} squares={board} />
      <div style={style}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
          {renderMoves()}
        </p>
      </div>
    </>
  );
}

export default Game;
