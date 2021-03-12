// JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
var z = x / y; 
console.log(z, typeof z)

// NaN - Not a Number
var x = 100 / "Apple";  // x will be NaN (Not a Number)
console.log(x, isNaN(x), typeof x)

// But numbers can also be defined as objects with the keyword new:
var y = new Number(123);
console.log(y)

//The toString() Method
var x = 123;
var y = x.toString();     
console.log(y, typeof y)       
var z = (123).toString();    
console.log(z, typeof z)    
console.log((100 + 23).toString());

// toFixed() Method   - virgulden sonra kac sifir olacak (string sonuc)
var x = 9.656;
x.toFixed(0);           
x.toFixed(2);           
x.toFixed(4);

//toPrecision() Method  - kac rakam olacak  (string sonuc)
var x = 9.656;
x.toPrecision();       
x.toPrecision(2);

// valueOf() Method - degisken icerisindeki degeri gosterir (number sonuc)
var x = 123;
x.valueOf(); 

//Number() Method
console.log(
Number(true),          // returns 1
Number(false),         // returns 0
Number("10"),          // returns 10
Number("  10"),        // returns 10
Number("10  "),        // returns 10
Number(" 10  "),       // returns 10
Number("10.33"),       // returns 10.33
Number("10,33"),       // returns NaN
Number("10 33"),       // returns NaN
Number("John")        // returns NaN
)

console.log(new Date("2017-09-30"))
console.log(Number(new Date("2017-09-30")))

//parseInt() Method
console.log(
parseInt("10"), typeof(parseInt("10")),       // returns 10
parseInt("10.9"),      // returns 10
parseInt("10 20 30"),   // returns 10
parseInt("10y"),   // returns 10
parseInt("y 10 yer")   // returns NaN 
)

//The parseFloat() Method
console.log(
    parseFloat("10"),        // returns 10
    parseFloat("10.33"),     // returns 10.33
    parseFloat("10 20 30"),  // returns 10
    parseFloat("10 years"),  // returns 10
    parseFloat("years 10")  // returns Na
)

//MAX_VALUE minvalue
var x = Number.MIN_VALUE;
console.log(x)

document.getElementById("demo").innerHTML +="Hello";
document.getElementById("demo").style.backgroundColor = "lightblue";
document.getElementById("demo").style.color = "red"