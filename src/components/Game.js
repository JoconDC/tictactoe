import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';
import '../index.css';

const styles = {
width: '200px',
margin: '20px auto'
}
const Game = () => {
     const [history, setHistory] = useState([Array(9).fill(null)]);
     const [stepNumber, setStepNumber] = useState(0);
     const [xIsNext, setXisNext] = useState(true);
     const winner = calculateWinner(history[stepNumber]);
     
     const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
         const squares = [...current];
         //if user click an occupied square or if game is won, return
         if (winner || squares[i]) return;
         //put and x or an O in the clicked square
         squares[i] = xIsNext ? 'X' : 'O';
         setHistory([...timeInHistory, squares]);
         setStepNumber(timeInHistory.length);
         setXisNext(!xIsNext);
     }

     const jumpTo = step => {
            setStepNumber(step);
            setXisNext(step % 2 === 0)
     }
     
     const renderMoves = () => (
            history.map((_step, move) => {
               const destination = move ? `Go to move#${move}` : 'Go to start';
             return (
                <li key={move}>
                   <button onClick={() => jumpTo(move)} className='f6 link dim br3 ph3 pv0 mb2 dib white bg-mid-gray'>{destination}</button>
                </li>
             )
         })
     )  
           
  return (
     <>
     <Board squares={history[stepNumber]} onClick={handleClick} />
     <div style={styles}>
        <p className='f5 f4-m f3-l black-50 mt0 lh-copy i'>{winner ? 'WINNER!! : ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMoves()}
     </div>
     </>
  )

}

export default Game;