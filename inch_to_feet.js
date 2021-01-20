function fit(inch){

    return [Math.floor(inch/12),(inch-Math.floor(inch/12)*12)];
    
}
var inch = window.prompt("give your inch:");
var feet = fit(inch);
document.write("this is " +feet[0] +" fit and "+feet[1]+" inch long");
