
//1 using methid of mine

var array=[3,2,3,3,4,5,6,7,8,8,9,0,01,2,3];
var unique=[];
for(var i=0;i<array.length;i++){
    if(unique.indexOf(array[i])==-1){
        unique.push(array[i]);
    }
}
unique.sort();

console.log(unique);

//using built in function;//using Set object
var ans=[...new Set (unique)];//builtin method
console.log(ans);