function arrayToString(array)
{
    return array.join(' ');
}

let input = prompt("Enter a list of string separated by commas to form a sentance:");
let array = input.split(",");
console.log(arrayToString(array));