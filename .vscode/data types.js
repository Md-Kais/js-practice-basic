//  JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
var myName;
//When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined"
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);
// escape sequences
// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed
var myStr = "Bob";
myStr=myStr.replace("Bob","Job");
console.log(myStr);