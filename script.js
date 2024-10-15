//JS IN-BUILT NUMBER FUNCTIONS
var num1 = 10
var num2 = 10.0
var str1 = 'a'

// Typeof - identifies the data type of the variable 
console.log(typeof(num1))
console.log(typeof(num2))
console.log(typeof(str1))

// toString - takes number as input and returns a string
num1String = num1.toString()
num2String = num2.toString()
console.log(num1String)
console.log(num2String)

console.log(typeof(num1String))
console.log(typeof(num2String))

//parseInt() - takes a string numeral as input and returns a number
console.log(parseInt(num1String))
console.log(parseInt(num2String))

console.log(typeof(num1String))
console.log(typeof(num2String))

//toFixed() - takes floating number a input and rounds it off to the given number
var num = 10.1092383
console.log(num.toFixed())
// 1 DP
console.log(num.toFixed(1))
//2 DP
console.log(num.toFixed(2))
//5 DP
console.log(num.toFixed(5))


