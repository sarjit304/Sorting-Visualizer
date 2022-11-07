import React, { Component } from 'react';
import { getMergeSortAnimations, getBubbleSortAnimations, getQuickSortAnimations } from '../SortingAlgorithms/SortingAlgorithms';
//import { MergeSort } from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Number of bars is set dynamically according to screen size.
let NUMBER_OF_ARRAY_BARS;

// Max height of bars set dynamically according to screen size.
let HEIGHT_OF_ARRAY_BARS;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// Button badges
let BUTTON_BADGES = 'button button1';


class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            array: [],
        };    
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray = () => {
        const array = [];
        console.log('width:', window.innerWidth,'height:', window.innerHeight);
        if(window.innerWidth>window.innerHeight) {
            NUMBER_OF_ARRAY_BARS = Math.floor(window.innerWidth/8.8);
            HEIGHT_OF_ARRAY_BARS = window.innerHeight/1.1; //max 730
        } else {
            NUMBER_OF_ARRAY_BARS = Math.floor(window.innerWidth/10);
            HEIGHT_OF_ARRAY_BARS = window.innerHeight/1.45; //max 730
        }
        console.log('number of bars: ', NUMBER_OF_ARRAY_BARS)
        for (let i=0; i<NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(45, HEIGHT_OF_ARRAY_BARS));
        }
        array.push(HEIGHT_OF_ARRAY_BARS);
        this.setState({ array });
    }

    mergeSort = () => {
        const animations = getMergeSortAnimations(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }
    
    bubbleSort = () => {
        const animations = getBubbleSortAnimations(this.state.array);
        console.log(animations);
        for (let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let j=0; j<4; j++) {
                if (j===0) {
                    const [barOneIdx, barTwoIdx] = animations[i][j];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = SECONDARY_COLOR;
                        barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                }
                if (j===1) {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i][j];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
                if (j===2) {
                    setTimeout(() => {
                        const [barTwoIdx, newHeight] = animations[i][j];
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barTwoStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
                if (j===3) {
                    const [barOneIdx, barTwoIdx] = animations[i][j];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                        barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                }
            } 
        }
    }

    quickSort = () => {
        const animations = getQuickSortAnimations(this.state.array);
        console.log(animations);
        for (let i=0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let j=0; j<4; j++) {
                if (j===0) {
                    const [barOneIdx, barTwoIdx] = animations[i][j];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = SECONDARY_COLOR;
                        barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                }
                if (j===1) {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i][j];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
                if (j===2) {
                    setTimeout(() => {
                        const [barTwoIdx, newHeight] = animations[i][j];
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barTwoStyle.height = `${newHeight}px`;
                    }, i * ANIMATION_SPEED_MS);
                }
                if (j===3) {
                    const [barOneIdx, barTwoIdx] = animations[i][j];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                        barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                }
            } 
        }
    }

    testSortingAlgorithms() {
        for (let i=0; i<100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i=0; i<length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
            //const sortedArray = MergeSort(array);
            const sortedArray = getMergeSortAnimations(array);
            console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
        }
    }



    render() { 
        return (
            <div className='array-container' >
                <div className='btn-section'>
                    <button onClick={this.resetArray} className={BUTTON_BADGES}>Generate new array</button>
                    <button onClick={this.mergeSort.bind(this)} className={BUTTON_BADGES}>Merge Sort</button>  
                    <button onClick={this.bubbleSort} className={BUTTON_BADGES}>Bubble Sort</button>
                    <button onClick={this.quickSort} className={BUTTON_BADGES}>Quick Sort</button>
                    {/*<button className={BUTTON_BADGES}>Heap Sort</button>*/}
                    {/*<button onClick={this.testSortingAlgorithms} className='btn btn-primary m-1'>Test sorting algorithms</button> */}
                </div> 
                {this.state.array.map((value, idx) => (
                    <div 
                        className='array-bar'
                        key={idx}
                        style={{backgroundColor: PRIMARY_COLOR,
                        height: ` ${value}px`}}
                    >
                    </div>
                ))}
            </div>
        );
    }
}
 
export default SortingVisualizer;


//  Generates random integers between a given range
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length ) return false;
    let lengthOfArray = arrayOne.length;
    for ( let i=0; i<=lengthOfArray; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}
