let firstNames=[];
let lastNames=[];
let combinationArray=[];
for (let i = 0; i < 2; i++) {
    element = prompt(`Enter element ${i + 1}: of the first array`);
    firstNames.push(element);
}
for (let i = 0; i < 2; i++) {
    element = prompt(`Enter element ${i + 1} of the second array:`);
    lastNames.push(element);
}

for (let i = 0; i < 2; i++) {
    element = `4.`+firstNames[i]+" "+lastNames[i];
    combinationArray.push(element);
}
console.log(combinationArray);
