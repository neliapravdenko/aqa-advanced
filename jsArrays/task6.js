const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const copiedArray = [...numbersList];
copiedArray.sort((a, b) => a - b);
console.log('Initial array: ', numbersList);
console.log('Copied array: ', copiedArray);
