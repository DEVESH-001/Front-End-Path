import React from 'react';

const style = {
    background: 'lightgray',
    border: '1px solid #999',
    float: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '66px',
    marginRight: '-1px',
    color: 'black',
    cursor: 'pointer',
}

const Square = ({ value, onClick }) => (
    <button onClick={onClick} style={style}>
        {value}
    </button>
);

export default Square;