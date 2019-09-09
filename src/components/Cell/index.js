import React from 'react';
import './style.scss';

function Cell(props) {
  const { value } = props;
  return (
    <div className="Cell">
      {(value > 0) ? value : ''}
    </div>
  );
}

export default Cell;
