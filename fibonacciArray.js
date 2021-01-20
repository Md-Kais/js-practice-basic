let ans = [];
ans.push(0);

function fib(number){
    if(number==1){
       
        return [0,1];
    }
   else{
        let fibo=fib(number-1);
        let next= fibo[number-1]+fibo[number-2];
        fibo.push(next);
        return fibo;

    }

}




var number = window.prompt("number:");
let hell=fib(number);
document.write(hell);