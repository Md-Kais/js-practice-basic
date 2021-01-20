var mindSwing=12;
var crimpThing=22;
var emotion=100;
console.log(mindSwing);
console.log(crimpThing);
console.log(emotion);
// typeof indicates the type of the variable;
// such that 
console.log(typeof mindSwing);
// string writes ""; example
var name='kais kais';
console.log(name);
console.log(typeof name);//string 
//yes or no=>boolean; true or false 
var isHot=true;
console.log(isHot);
console.log(typeof(isHot));
//boolean example
var isEmotional = false;
console.log(isEmotional);
console.log(typeof (isEmotional));
//true or false is a special keyword
// change the name
name='kasi kasi';
console.log(name);//kasi kasi
//camelcase letter
//naming convention

//use stringName.toLowercase() to change the string to lowercase all!  example below
name='KASI KSSIS';
console.log(name.toLowerCase());
//toUpperCase;
console.log(name.toUpperCase());

//indexOf a string;
var promise='I promise you to become a programmer ! and this thing is kinda hard but I can become a great programmer. IN SHA ALLAH';
console.log(promise.indexOf('programmer'));
//index counting is start from 0 and run through it ! and take space( ) as an ondex;
// if multiple time the word occurs it can give answer us of the first one
//if the word is not  in the string it gives us answer -1 . it means the answer is not here..see the next example
console.log(promise.indexOf('progrer'));//-1 cause progrer is not in the string
///string split
//use string_name.split('the thing you wanna split');
prom=promise;
console.log(promise.split(' '));//here it cut through all the string perspect of the space (' ');
//console.log( prom.split('promise'));//it don't work right now

// var country='Bangladesh';
// console.log(indexOf('desh'));
// var para = 'I am a javascript developer';
// console.log(para.indexOf('j'));


// integer float parseInt parseFloat , int to string , string to int ;
//int to string;  use emptystring('')+ the int ;example:
var number0=12;
number0=''+number0;
console.log(typeof number0);
console.log(number0);
//string to number ; u can use 3 different ways to do that
//1.parseInt (if number is int , you can guess or you have to need only intger part);
//2.parseFloat (if number is float  and you need float ! maximum case we use that)
// use + sign. modern age devloper, use this to their conversion
//1 exmpl;
//1
var number1='123.333';
//if you wanna join  strings! next strings join alongside of the previous one! take a look
console.log(number0 + number1);//12123.333

number1=parseInt(number1);//can't give us point(float) part
console.log(typeof number1);
console.log(number1);
//2 exmle
var number2 = '223.555';
number2 = parseFloat(number2);//it gives us float part
console.log(typeof number2);
console.log(number2);

//3 exmple3
var number3='333.444'
number3 = +number3;
console.log(typeof number3);
console.log(number3);

//toFixed( after point float number we need) function used for how many digits  we need after decimal pont;
//previous sum  of number2 and number3;

var sum2and3=number2+number3;
console.log(sum2and3);
//we print after 2 digits of int
//99 simply converts next number like as our real life
console.log(sum2and3.toFixed(2));
//556.999 becomes 557.00 like our real life
//mathmatical operator
//*  % ++ -- abs round floor ceil  and random

var num1=123;
var num2=12;
var mul=num1*num2;
var div = num1 / num2;
var mod = num1 % num2;
console.log(mul);
console.log(div);
console.log(mod);
var num3=13.234;
console.log(Math.round(num3));//13

console.log(Math.ceil(num3));//14
console.log(Math.floor(num3));//13
num3*=-1;//-13.234
console.log(Math.abs(num3));//13.234
//generating random number
var randomNum=(Math.random());//random number
randomNum*=100;
randomNum=Math.round(randomNum);
console.log(randomNum);
//if else tumi paro
//round ceil floor in negative number
////important
var negnum=-123.345;
var negnum1=-123.789;
console.log(Math.round(negnum));//-123
console.log(Math.round(negnum1));//-124

console.log(Math.ceil(negnum));//-123(-abs(num))
console.log(Math.ceil(negnum1));//-123(-abs(num))
console.log(Math.floor(negnum));//-124(-123-1)
console.log(Math.floor(negnum1));//-124(-123-1)

//round 
// Errors and Exceptions
// 1. A non - numeric string passed as parameter returns NaN
// 2. An array with more than 1 integer passed as parameter returns NaN
// 3. An empty variable passed as parameter returns NaN
// 4. An empty string passed as parameter returns NaN
// 5. An empty array passed as parameter returns NaN

///1st day terminates here

