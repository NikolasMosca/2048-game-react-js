import React, { PureComponent } from 'react';
import { Swipeable } from 'react-swipeable'
import './style.scss';

import Cell from '../Cell';

//Swipable configuration to avoid pull down refresh for mobile browser
const SwipeableConfig = {
    preventDefaultTouchmoveEvent: false
}

class Grid extends PureComponent {
    state = {
        cells: [],
        lastId: 100,
        gameover: false
    }

    getLeftPositions = () => 
        [ [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15] ];

    getUpPositions = () => 
        [ [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15] ];

    getRightPositions = () => 
        [
             [0, 1, 2, 3].reverse(), [4, 5, 6, 7].reverse(), 
             [8, 9, 10, 11].reverse(), [12, 13, 14, 15].reverse() 
        ];

    getDownPositions = () => 
        [
            [0, 4, 8, 12].reverse(), [1, 5, 9, 13].reverse(),
            [2, 6, 10, 14].reverse(), [3, 7, 11, 15].reverse()
        ];

    componentDidMount() {
        let { cells, lastId } = this.state;
        cells.push(this.addRandomCell(cells, ++lastId));
        cells.push(this.addRandomCell(cells, ++lastId));
        cells.push(this.addRandomCell(cells, ++lastId));
        cells.push(this.addRandomCell(cells, ++lastId));
        cells.push(this.addRandomCell(cells, ++lastId));
        this.setState({
            cells,
            lastId: (++lastId)
        })

        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37: //Arrow left
                    this.onEventSubmit('Left'); 
                break;
                case 38: //Arrow up
                    this.onEventSubmit('Up');  
                break;
                case 39: //Arrow right
                    this.onEventSubmit('Right');   
                break;
                case 40: //Arrow down
                    this.onEventSubmit('Down');     
                break;
                default: return;
            }
        });
    }

    //Manage swipes in touchscreens
    swipeHandler = (e) => {
        this.onEventSubmit(e.dir);
    }

    //Perform the action and move the cells!
    onEventSubmit = (direction) => {
        if(this.checkGameOver()) return;

        let { lastId } = this.state;
        let cells = [...this.state.cells]
        let backupCells = JSON.stringify(this.state.cells.sort(this.compareId));

        switch(direction) {
            case 'Left':
                cells = this.move(cells, this.getLeftPositions())     
                cells = this.fusionSimilarCells(cells, this.getLeftPositions())
                cells = this.move(cells, this.getLeftPositions())     
            break;
            case 'Up':
                cells = this.move(cells, this.getUpPositions())
                cells = this.fusionSimilarCells(cells, this.getUpPositions())
                cells = this.move(cells, this.getUpPositions())    
            break;
            case 'Right':
                cells = this.move(cells, this.getRightPositions(), true)
                cells = this.fusionSimilarCells(cells, this.getRightPositions())
                cells = this.move(cells, this.getRightPositions(), true)    
            break;
            case 'Down':
                cells = this.move(cells, this.getDownPositions(), true)
                cells = this.fusionSimilarCells(cells, this.getDownPositions())
                cells = this.move(cells, this.getDownPositions(), true)    
            break;
            default: return;
        }

        if(this.checkChangeGrid(cells, backupCells)) {
            cells.push(this.addRandomCell(cells, ++lastId));
            if(cells && cells.length > 0) {
                this.setState({
                    cells,
                    lastId: (lastId + 1)
                })
                this.forceUpdate();    
            } 
        }      
          
        if(this.checkGameOver()) {
            this.setState({
                gameover: true
            })
        }
    }

    move = (cells, positions, reverse) => {
        cells.sort(this.compare);
        if(reverse) cells.reverse();

        let focus;
        let tempPositions = [...positions];
        cells.map((item, index) => {
            tempPositions.map((p, i) => (p.includes(item.position)) ? focus = i : false)
            
            cells[index] = this.shiftCell(item, tempPositions[focus])
            let i = tempPositions[focus].indexOf(cells[index].position);
            if(i >= 0) tempPositions[focus].splice(i, 1);
            return true;
        })
        
        
        if(reverse) cells.reverse();
        return cells;
    }

    fusionSimilarCells = (cells, positions) => {
        positions.map(row => {
            let findValues = {};
            row.map((position, indexPosition) => {         
                let deleteCellsIndex = [];
                cells.map((item, index) => {
                    if(item.position === position) {

                        if(
                            typeof findValues[item.value] !== undefined && 
                            cells[findValues[item.value]] && 
                            cells[findValues[item.value]].position === row[indexPosition - 1]
                        ) {
                            cells[ findValues[item.value] ].value += item.value;
                            delete findValues[item.value];
                            deleteCellsIndex.push(index);
                        } else {
                            findValues[item.value] = index;
                        }

                    }
                    return true;
                })

                //Remove cells that I have fusion
                deleteCellsIndex.map(index => cells.splice(index, 1));
                return true;
            })    
            return true;
        })
        return cells;
    }

    //Create new random cell
    addRandomCell = (cells, lastId) => {
        let avaiablePositions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        let blockedPositions = [];
        cells.map(({position}) => blockedPositions.push(position))
        avaiablePositions = avaiablePositions.filter((i) => blockedPositions.indexOf(i) < 0);
        
        let randPosition = avaiablePositions[Math.floor(Math.random() * avaiablePositions.length)];
        let randValue = (Math.floor(Math.random() * 10) < 7) ? 2 : 4;
        return {
            id: lastId,
            value: randValue,
            position: randPosition
        }
    }

    //Compare sort for cells's state
    compare = (a, b) => {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
    }
    compareId = (a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    }

    checkChangeGrid = (cells, backupCells) => {
        let stateCells = [...this.state.cells]
        stateCells.sort(this.compareId);
        cells.sort(this.compareId);
        if(JSON.stringify(cells) === backupCells) {
            return false;
        }
        return true;
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

    checkGameOver = () => {
        const { cells } = this.state;
        if(cells.length === 16) {
            let find = false;
            let objCells = {};
            cells.map(item => objCells[ item.position ] = item.value)
            for(let index in objCells) {
                index = parseInt(index);
                if(index !== 3 && index !== 7 && index !== 11 && index !== 15) {
                    if(objCells[index + 1] && objCells[index] === objCells[index + 1]) {
                        find = true;
                    }
                }
                if(index !== 12 && index !== 13 && index !== 14 && index !== 15) {
                    if(objCells[index + 4] && objCells[index] === objCells[index + 4]) {
                        find = true;
                    }
                }
            }
            if(find) return false;
            return true;
        }
        return false;
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
        cells.sort(this.compareId);
        return cells.map(({id, value, position}, index) => 
            <Cell key={id} value={value} index={position} last={(index + 1 === cells.length) ? true : false}/>
        )
    }

    render() {
        const { gameover } = this.state;
        return (
            <Swipeable onSwiped={this.swipeHandler} {...SwipeableConfig} className="Grid">
                {this.generateBackgroundCells()}
                <div className="Overlay">
                    {this.generateCells()}
                    {(gameover && (
                        <div className="GameOver">
                            GAME OVER
                            <div className="Retry" onClick={() => window.location.reload()}>
                                Click me to retry!
                            </div>
                        </div>
                    ))}
                </div>
            </Swipeable>
        );
    }
}

export default Grid;
