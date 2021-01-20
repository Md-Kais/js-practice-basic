//1
var a=7,b=5;
var t=a;
a=b;
b=t;
console.log(b,a);
//2
var x=6666;
var y=777;
x+=y;
y=x-y;
x-=y;
console.log(x, y);
//3
var xxx=666;
var yyy=777;
[xxx,yyy]=[yyy,xxx];
console.log(xxx, yyy);