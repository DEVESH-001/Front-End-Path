import React from "react";
import Square from "./Square";

const style = {
  border: "2px solid black",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "0px",
  width: "198px",
  margin: "20px auto",
};

function Board({ squares, onClick }) {
  return (
    <div style={style}>
      {squares.map((square,index)=>(
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

export default Board;
