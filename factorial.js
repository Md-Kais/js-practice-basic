function fact(number){
    if(number==0) return 1;
    else if(number ==1) return 1;
    else if(number==2) return 2;
    else{
        let sum=2;
        for(let i=3;i<=number;i++){
            sum*=i;
        }
        return sum;
    }
}

var number=window.prompt("number:");
var ans=fact(number);
document.write(ans);