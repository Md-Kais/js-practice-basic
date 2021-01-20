/*let ans=[];
ans.push(0);
ans.push(1);*/
function fib(number){
   if(number==0) return 0;
   else if(number ==1) return 1;
   else{
       return fib(number-1)+fib(number-2);
   }
}

var number = window.prompt("number:");
var ans=fib(number);
document.write(ans);