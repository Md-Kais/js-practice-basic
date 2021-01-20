function leap(year){
    if((year%400==0) || ((year%100!=0) && (year%4==0))){
        return true;
    }
    else{
        return false;
    }
}

var year=window.prompt("YEAR:");
var ans=leap(year);
if(ans==true){
    document.write("this is  a leap year");
}
else{
    document.write("this is not a leap year");
}
