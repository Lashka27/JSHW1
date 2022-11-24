// Task 1
function compareParameters(a, b) {
    if(a == b) {
        return("ტოლია");
    } else {
        return("არ არის ტოლი")
    }
}
console.log(compareParameters(a, b))

// Task 2
function fahrenheightToCelsius(a) {
    if(typeof fahrenheight=='number'){
        return((fahrenheight-32)*5/9);
    } else {
        return false;
    }
}
console.log(fahrenheightToCelsius(fahrenheight))

// Task 3
function calculation(a, b, operator){
    if (typeof a !== "number" && typeof b !== "number" && operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*"){
        return false;
    } else if (b == 0 && operator === "/"){
        return false;
    } else if (operator === "+"){
        return a + b;
    } else if (operator === "-"){
        return a - b;
    } else if (operator === "/"){
        return a / b;
    } else {
        return a * b;
    }
}
console.log(calculation(a, b, operator))