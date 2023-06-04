// console.log("connected")

//! Qoute Function - Find length and width. multiply together. Multiply that by the price.

// * Per Foot Cost = $2.50
// * 1/4 Round Cost = $1.50
// * Baseboard Cost = $1.00

document.getElementById("submit").onclick = function () {

    // Pricing variables
    const pricePerFt = 2.5;
    const qtRound = 1.5;
    const baseboard = 1.0;


    // get user input for length and width
    let length = document.getElementById("user-length").value;
    let width = document.getElementById("user-width").value;

    // calculate user length and width
    const calcSqFt = length * width;

    // display data to user
    document.getElementById("sqft").innerHTML = parseFloat(Math.round((calcSqFt + Number.EPSILON) * 100) / 100).toFixed(2);
    document.getElementById("pricePerSqft").innerHTML = parseFloat(calcSqFt * pricePerFt).toFixed(2);
    document.getElementById("priceQt").innerHTML = parseFloat(calcSqFt * (pricePerFt + qtRound)).toFixed(2);
    document.getElementById("priceBase").innerHTML = parseFloat(calcSqFt * (pricePerFt + baseboard)).toFixed(2);
    document.getElementById("priceBoth").innerHTML = parseFloat(calcSqFt * (pricePerFt + qtRound + baseboard)).toFixed(2);

    console.log(calcSqFt);
    // console.log(calcSqFt * pricePerFt);
    // console.log(calcSqFt * (pricePerFt + qtRound));
    // console.log(calcSqFt * (pricePerFt + baseboard));
    // console.log(calcSqFt * (pricePerFt + qtRound + baseboard));
}