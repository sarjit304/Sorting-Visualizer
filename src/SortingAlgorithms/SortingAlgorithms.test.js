import { getBubbleSortAnimations, getMergeSortAnimations, getQuickSortAnimations } from "./SortingAlgorithms";

const NUMBER_OF_TEST_CASES = 100;

// Runs 100 random test cases on the quick sort algorithm
test('Quick Sort test', () => {
    for (let i=0; i<NUMBER_OF_TEST_CASES; i++) {
        const array = [];
        const lengthOfArray = randomIntFromInterval(1, 1000);
        for (let i=0; i<lengthOfArray; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
        }
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        getQuickSortAnimations(array);
        expect(array).toEqual(javaScriptSortedArray);
    }
})


// Runs 100 random test cases on the merge sort algorithm
test('Merge Sort', () => {
    for (let i=0; i<NUMBER_OF_TEST_CASES; i++) {
        const array = [];
        const lengthOfArray = randomIntFromInterval(1, 1000);
        for (let i=0; i<lengthOfArray; i++) {
            array.push(randomIntFromInterval(-1000, 1000))
        }
        const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
        getMergeSortAnimations(array);
        expect(array).toEqual(javaScriptSortedArray);
    }
})

// Runs 100 random test cases on the bubble sort algorithm
test('Bubble Sort', () => {
    for (let i=0; i<NUMBER_OF_TEST_CASES; i++) {
        const array = [];
        const lengthOfArray = randomIntFromInterval(1, 1000);
        for (let i=0; i<lengthOfArray; i++) {
            array.push(randomIntFromInterval(-1000,1000));
        }
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        getBubbleSortAnimations(array);
        expect(array).toEqual(javaScriptSortedArray);
    }
})


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}