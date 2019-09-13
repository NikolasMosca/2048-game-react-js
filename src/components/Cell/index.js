import React from 'react';
import './style.scss';

function Cell(props) {
  const { index, value } = props;
  return (
    <div className={'Cell' + ((value > 0) ? ` active cell-${index} value-${value}` : '')}>
      {(value > 0) ? value : ''}
    </div>
  );
}

export default Cell;
