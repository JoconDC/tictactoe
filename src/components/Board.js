import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid #f0ba0a',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => (
  <div style={style} className='bg-light-yellow'>
       {squares.map((square, i) => (
        <Square value={square} onClick={() => onClick(i)} />
       ))}
  </div>

)

export default Board;