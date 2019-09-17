import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import Grid from '.';
import {
    MoveLeft,
    FusionLeft,
    MoveRight,
    FusionRight,
    MoveUp,
    FusionUp,
    MoveDown,
    FusionDown,
    CheckGameOver
} from './index.testcase.js';

configure({
    adapter: new Adapter()
});
  
describe('Check move cells', () => {

    /*********************************************
     ******************** LEFT *******************
     *********************************************/
    it('Check Move left', () => {
        const wrapper = mount(<Grid />);   
        MoveLeft.map(({cells, result}) => {
            expect(wrapper.instance().move(
                cells, 
                wrapper.instance().getLeftPositions()
            )).to.deep.equal(result);
        })        
    });

    it('Check Fusion left', () => {
        const wrapper = mount(<Grid />);
        FusionLeft.map(({cells, result}) => {
            expect(wrapper.instance().fusionSimilarCells(
                cells, 
                wrapper.instance().getLeftPositions()
            )).to.deep.equal(result);
        })  
    });

    /*******************************************
     ******************** UP *******************
     *******************************************/
    it('Check Move up', () => {
        const wrapper = mount(<Grid />);   
        MoveUp.map(({cells, result}) => {
            expect(wrapper.instance().move(
                cells, 
                wrapper.instance().getUpPositions()
            )).to.deep.equal(result);
        })        
    });

    it('Check Fusion up', () => {
        const wrapper = mount(<Grid />);
        FusionUp.map(({cells, result}) => {
            expect(wrapper.instance().fusionSimilarCells(
                cells, 
                wrapper.instance().getUpPositions()
            )).to.deep.equal(result);
        })  
    });

    /**********************************************
     ******************** RIGHT *******************
     **********************************************/
    it('Check Move right', () => {
        const wrapper = mount(<Grid />);   
        MoveRight.map(({cells, result}) => {
            expect(wrapper.instance().move(
                cells, 
                wrapper.instance().getRightPositions(),
                true
            )).to.deep.equal(result);
        })        
    });

    it('Check Fusion right', () => {
        const wrapper = mount(<Grid />);
        FusionRight.map(({cells, result}) => {
            expect(wrapper.instance().fusionSimilarCells(
                cells, 
                wrapper.instance().getRightPositions(),
                true
            )).to.deep.equal(result);
        })  
    });

    /**********************************************
     ******************** DOWN *******************
     **********************************************/
    it('Check Move down', () => {
        const wrapper = mount(<Grid />);   
        MoveDown.map(({cells, result}) => {
            expect(wrapper.instance().move(
                cells, 
                wrapper.instance().getDownPositions(),
                true
            )).to.deep.equal(result);
        })        
    });

    it('Check Fusion down', () => {
        const wrapper = mount(<Grid />);
        FusionDown.map(({cells, result}) => {
            expect(wrapper.instance().fusionSimilarCells(
                cells, 
                wrapper.instance().getDownPositions(),
                true
            )).to.deep.equal(result);
        })  
    });

    /**********************************************************
     ******************** CHECK CHANGE GRID *******************
     **********************************************************/
    it('Check Game Over', () => {
        const wrapper = mount(<Grid />);
        CheckGameOver.map(({cells, result}) => {
            wrapper.setState({ cells })
            expect(wrapper.instance().checkGameOver()).to.equal(result); 
        })  
    });
});