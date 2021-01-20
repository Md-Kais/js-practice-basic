function fib(number){
    for(let i=2;i<=number;i++){
        ans.push(ans[i-1]+ans[i-2]);
    }
}

let ans=[];
ans.push(0);
ans.push(1);
var number = window.prompt("number:");
fib(number);
document.write(ans[number]);