import React, { PureComponent } from 'react';
import './style.scss';

import Cell from '../Cell';

class Grid extends PureComponent {
    state = {
        cells: [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }

    componentDidMount() {
        
    }

    generateCells = () => {
        return this.state.cells.map((item, index) => <Cell key={index} value={item}/>)
    }

    render() {
        return (
            <div className="Grid">
                {this.generateCells()}
            </div>
        );
    }
}

export default Grid;
