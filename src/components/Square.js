import React from 'react'

const style = {
    background: '#76e395',
    border: '2px solid #f0ba0a',
    fontSize: '40px',
    fontWeight: '600',
    cursor: 'pointer',
    outLine: 'none'
}

const Square = ({onClick, value}) => (
   <button style={style} onClick={onClick}>
     {value}
   </button>
);

export default Square