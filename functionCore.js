function evenify(num) {
    if (num & 1) {
        return false;
    }
    else {
        return true;
    }
}
function Aray(array, name) {
    for (var i = 0; i < array.length; i++) {
        if (evenify(array[i]) === false) {
            console.log(array[i] + " Odd "); name()
        }
        else {
            console.log(array[i] + " even "); name()
        }
    }
}
///callback function
function friend() {
    console.log("he is my fuck");
}
function cran() {
    console.log("he is my fyuck");
}
var friends = [2, 3, 4, 5, 6, 7, 9];
Aray(friends, friend);
var crane = [1, 2, 3, 4, 56, 67];
Aray(crane, cran);
//arguments can read the parameters which is pass for the function.
function addNumbers() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
}
console.log(addNumbers(5, 12, 23, 45));