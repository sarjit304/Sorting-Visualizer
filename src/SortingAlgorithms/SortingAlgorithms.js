export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    console.log('Merge Sorted array: ', array);
    return animations;
  }
 
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations,) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
}


export function getBubbleSortAnimations(array) {
    console.log('given array', array);
    let animations = [];
    let i, j;
    let lengthOfArray = array.length;
    for (i=0; i<lengthOfArray; i++) {
        for (j=0; j<lengthOfArray-i-1; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1, animations);
            }
        }
    }
    console.log('sorted array', array);
    return animations;
}

function swap(mainArray, xp, yp, animations) {
    const subAnimations = [];
    subAnimations.push([xp, yp]);
    let temp = mainArray[xp];
    subAnimations.push([xp, mainArray[yp]]);
    mainArray[xp] = mainArray[yp];
    subAnimations.push([yp, temp]);
    mainArray[yp] = temp;
    subAnimations.push([xp, yp]);
    animations.push(subAnimations);
}

export function getQuickSortAnimations(array) {
  let animations = [];
  doQuickSort(array, 0, array.length-1, animations);
  animations = animations.slice(178);
  console.log(animations);
  return animations;
}

function doQuickSort(array, start, end, animations) {
  if (start >= end) {
    return;
  }

  let index = partition(array, start, end, animations);
  doQuickSort(array, start, index-1, animations);
  doQuickSort(array, index+1, end, animations);
}

function partition(array, start, end, animations) {
  let pivotIndex = start;
  let pivotValue = array[end];
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex, animations);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, end, animations);
  return pivotIndex; 
}


