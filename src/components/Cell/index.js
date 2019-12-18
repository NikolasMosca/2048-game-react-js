import React from 'react';
import './style.scss';

function Cell(props) {
  const { index, value, last } = props;
  return (
    <div className={
      'Cell' + 
      ((value > 0) ? ` active cell-${index} value-${value}` : '') +
      ((last) ? ` last` : '')
    }>
      {(value > 0) ? value : ''}
    </div>
  );
}

export default Cell;
