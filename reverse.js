//iterative way
var str="i am motherficscsfsfs";
var kalu="";
for(var i=str.length-1;i>=0;i--){
   kalu+=str[i];
}
console.log(kalu);
//builtin method: spilit reverse join
console.log(str.split('').reverse().join(''));//str.split('').reverse().join('');