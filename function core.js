function evenify(num){
    if(num & 1){
        return "1";
    }
    else{
        return "2";
    }
}
function Array(array){
    for(var i=0;i<array.length();i++){
        if(evenify(array[i])==1){
            console.log(array[i]+"Odd");
        }
        else{
            console.log(array[i]+"even");
        }
    }
}
var friends=[2,3,4,5,6,7,9];
Array[friends];