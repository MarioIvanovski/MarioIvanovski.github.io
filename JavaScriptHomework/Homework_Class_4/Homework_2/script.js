
function validateNumber(num) {
    return !isNaN(num) && num !== null && num !== "";
}

function sumOfNumbers(array2) {
    let sum = 0;
    for (let i = 0; i < array2.length; i++) {
        if (!validateNumber(array2[i])) {
            return "Error: Invalid number detected!";
        }
        sum += array2[i];
    }
    return sum;
}

let input = prompt("Enter a list of 5 numbers separated by commas:");
let array = input.split(",").map(num => parseFloat(num.trim()));

if (array.length !== 5) {
    console.error("Error: Please enter exactly 5 numbers!");
    alert("Error: Please enter exactly 5 numbers!");
} else {
    let result = sumOfNumbers(array);

    if (typeof result === "string") {
        console.error(result);
    } else {
        console.log("Sum of numbers is:", result);
    }
}
