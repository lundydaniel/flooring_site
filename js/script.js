// console.log("connected")

//! Qoute Function - Find length and width. multiply together. Multiply that by the price.

// * $2.50 per foot for price 

document.getElementById("submit").onclick = function () {

    // get user input for length and width
    let length = document.getElementById("user-length").value;
    let width = document.getElementById("user-width").value;

    // calculate user length and width
    const calcSqFt = length * width;
    const pricePerFt = 2.5
    console.log(calcSqFt * pricePerFt);
}