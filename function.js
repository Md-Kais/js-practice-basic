//A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

var sum = 0;

function addThree() {
    sum = sum + 3;
    return sum;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

console.log(addThree(5));
addFive();