function fact(number){
    if(number <=1){
        return 1;

    }
    else{
        return number*fact(number-1);
    }
}


var number = window.prompt("number:");
var ans = fact(number);
document.write(ans);