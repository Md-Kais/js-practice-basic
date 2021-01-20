var get;

function getsmaller(numbers){
    get=numbers[0];
   for(var i=0;i<numbers.length;i++){
       if(numbers[i]<get){
           get=numbers[i];
       }
   }
   return get;

}

var output=getsmaller([88,89,99]);
console.log(get);