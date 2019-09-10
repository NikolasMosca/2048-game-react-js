import React, { PureComponent } from 'react';
import './style.scss';

import Cell from '../Cell';

class Grid extends PureComponent {
    state = {
        cells: [
            {
                id: 1,
                value: 2,
                position: 2
            }, {
                id: 2,
                value: 4,
                position: 5
            }, {
                id: 3,
                value: 2,
                position: 3
            }, {
                id: 4,
                value: 2,
                position: 7
            }
        ]
    }

    componentDidMount() {
        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37: //Arrow left
                    this.move([
                        [0, 1, 2, 3],
                        [4, 5, 6, 7],
                        [8, 9, 10, 11],
                        [12, 13, 14, 15]
                    ])
                break;
                case 38: //Arrow up
                    this.move([
                        [0, 4, 8, 12],
                        [1, 5, 9, 13],
                        [2, 6, 10, 14],
                        [3, 7, 11, 15]
                    ])
                break;
                case 39: //Arrow right
                    this.move([
                        [0, 1, 2, 3].reverse(),
                        [4, 5, 6, 7].reverse(),
                        [8, 9, 10, 11].reverse(),
                        [12, 13, 14, 15].reverse()
                    ], true)
                break;
                case 40: //Arrow down
                    this.move([
                        [0, 4, 8, 12].reverse(),
                        [1, 5, 9, 13].reverse(),
                        [2, 6, 10, 14].reverse(),
                        [3, 7, 11, 15].reverse()
                    ], true)
                break;
                default: 
                break;
            }           
        });
    }

    move = (positions, reverse) => {
        let { cells } = this.state;
        cells.sort(this.compare);
        if(reverse) cells.reverse();

        let focus;
        cells.map((item, index) => {
            positions.map((p, i) => (p.includes(item.position)) ? focus = i : false)
            
            cells[index] = this.shiftCell(item, positions[focus])
            let i = positions[focus].indexOf(cells[index].position);
            if(i >= 0) positions[focus].splice(i, 1);
            return true;
        })
        
        
        if(reverse) cells.reverse();
        console.log('moved cells', cells)
        this.setState({cells})
        this.forceUpdate();
    }

    //Compare sort for cells's state
    compare = (a, b) => {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
    }

    shiftCell = (item, positions) => {
        let index = positions.indexOf(item.position);

        if(index === -1) return item

        if(index === 0) {
            item.position = positions[index];
            return item
        }

        item.position = positions[index - 1];
        return this.shiftCell(item, positions);
    }

    //Check if there are some numbers equal near each element
    checkEqualNumbers = items => {
        let prevValue;
        let equalNumbers = [];
        items.map((item, index) => {
            if(!prevValue) {
                prevValue = {
                    value: item,
                    index: index
                }
            } else if(prevValue.value === item) {
                equalNumbers.push([prevValue.index, index]);
            }
            return true;
        })
        return equalNumbers;
    }

    //Get any values present in specific positions
    getRangeGrid = (cells, positions) => {
        let result = {};
        cells.map(item => {
            let { value, position } = item;
            if(positions.includes(position)) {
                result[position] = value;
            }
            return true;
        })
        return Object.values(result);
    }

    //Generate background cells
    generateBackgroundCells = () => {
        let cells = [];
        for(var i = 0; i < 16; i++) cells.push(<Cell key={i} value={0}/>);
        return cells;
    }

    //Generate actual cells that moves around in the grid when the user press keys
    generateCells = () => {
        const { cells } = this.state;
        return cells.map(({id, value, position}) => <Cell key={id} value={value} index={position}/>)
    }

    render() {
        console.log('render')
        return (
            <div className="Grid">
                {this.generateBackgroundCells()}
                <div className="Overlay">
                    {this.generateCells()}
                </div>
            </div>
        );
    }
}

export default Grid;
