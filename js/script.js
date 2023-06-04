// console.log("connected")

//! Qoute Function - Find length and width. multiply together. Multiply that by the price.

// * Per Foot Cost = $2.50
// * 1/4 Round Cost = $1.50
// * Baseboard Cost = $1.00

document.getElementById("submit").onclick = function () {

    // Pricing variables
    const pricePerFt = 2.5;
    const qtRound = 1.5;
    const baseboard = 1;


    // get user input for length and width
    let length = document.getElementById("user-length").value;
    let width = document.getElementById("user-width").value;

    // calculate user length and width
    const calcSqFt = length * width;

    console.log(calcSqFt * pricePerFt);
    console.log(calcSqFt * (pricePerFt + qtRound));
    console.log(calcSqFt * (pricePerFt + baseboard));
    console.log(calcSqFt * (pricePerFt + qtRound + baseboard));
}