// Hardcoded account balance
let accountBalance = 2000; 

function atmWithdrawal() {
    let withdrawalAmount = parseFloat(prompt("Enter the amount you want to withdraw:"));

    if (withdrawalAmount > accountBalance) {
        console.log("Not enough money :(");
    } else {
        
        accountBalance -= withdrawalAmount;
        
        // Print the withdrawal amount and remaining balance
        console.log("You have withdrawn .", withdrawalAmount);
        console.log("Your remaining balance is .",accountBalance);
    }
}

atmWithdrawal();
