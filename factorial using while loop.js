function fact(number) {
    if(number==0) return 1;
    let i=1,sum=1;

     while(i<=number){
         sum*=i;
         i++;
     }
     return sum;
}



var number = window.prompt("number:");
var ans = fact(number);
document.write(ans);