
let prime=new Array(123456).fill(true);
let ans=[];
function primes(number){
    for(let i=3;i*i<=number;i+=2){
        if(prime[i]==true){
            for(let j=i*2;j<=number;j+=i){
                prime[j]=false;
            }
        }
    }
    ans.push(2);
    for(let i=3;i<=number;i+=2){
        if(prime[i]){
            ans.push(i);
        }
    }


}
let number=window.prompt("number :");
primes(number);
document.write(ans);