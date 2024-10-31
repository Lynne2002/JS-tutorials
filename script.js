/* //JS IN-BUILT NUMBER FUNCTIONS
var num1 = 10
var num2 = 10.3
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
console.log(typeof(num2String)) //returns integer not float

//parseInt() - takes a string numeral as input and returns a number
console.log(parseInt(num1String))
console.log(parseInt(num2String))
console.log(parseInt(str1)) //NaN

console.log(typeof(num1String))
console.log(typeof(num2String))

//parseFloat() - taes string numeral as input and returns a floating number
console.log(parseFloat(num1String))
console.log(parseFloat(num2String))

//toFixed() - takes floating number a input and rounds it off to the given number
var num = 10.1092383
console.log(num.toFixed())
// 1 DP
console.log(num.toFixed(1))
//2 DP
console.log(num.toFixed(2))
//5 DP
console.log(num.toFixed(5)) */

//JS Strings
//defining strings in JS
var myString = "JavaScript is my favourite language JavaScript"
console.log(typeof(myString))

//If your string contains a double quote - use escape sequence (\)
var mySecondString = "Javascript is everyones \"favourite\" language"
console.log(mySecondString)

var myThirdString = "I love JavaScript!"


//If your string contains a single quote - use escape sequence (\)
var mySecondString = 'Javascript is everyones \'favourite\' language'
console.log(mySecondString)

//OR
var mySecondString = "Javascript is everyones 'favourite' language"
var mySecondString = 'Javascript is everyones "favourite" language'

//IN-BUILT STRING FUNCTIONS
//length - returns the length of  a string
console.log(myString.length)

//Index starts from 0
//indexOf - finding the index of a string inside another string-case sensitive
console.log(myString.indexOf('favourite')) //17
console.log(myString.indexOf('is')) //11
console.log(myString.indexOf('i')) //7
console.log(myString.indexOf('JavaScript')) //0
console.log(myString.indexOf('java')) //case sensitivity -1 -> If the substring is not found, indexOf returns -1.

// lastIndexOf - finds the last index of a string inside another string.
console.log(myString.lastIndexOf('JavaScript'))//36
console.log(myString.lastIndexOf('is'))//11

//slice - gets a part of our string slice (start, end)
console.log(myString.slice(0,4)) //Java
console.log(myString.slice(17, 26))//favourite
//- negative - starts from the end of the string
console.log(myString.slice(-10)) //JavaScript
//index at 10 onwards
console.log(myString.slice(10)) // is my favourite language JavaScript

//substr(startPos, length) - gets the substring 
console.log(myString.substring(0,4)) //Java
console.log(myString.substring(17,26)) //favourite
console.log(myString.slice(-10)) //JavaSCript
console.log(myString.substring(10)) // is my favourite language JavaScript

//toUpperCase() - converts string to uppercase
console.log(myString.toUpperCase())//JAVASCRIPT IS MY FAVOURITE LANGUAGE JAVASCRIPT

//toLowerCase() - converts string to lowercase
console.log(myString.toLowerCase()) //javascript is my favourite language javascript

//concat() - merges two or more strings
console.log(myString.concat(mySecondString)) //JavaScript is my favourite language JavaScriptJavascript is everyones "favourite" language
console.log(myString.concat(' ', mySecondString, ' ', myThirdString)) //JavaScript is my favourite language JavaScript Javascript is everyones "favourite" language I love JavaScript!

//+ operator can also be used to concatenate two or more strings
console.log(myString + ' ' + mySecondString)

//trim() - removes whitespace from the beginning and end of a string
var fourthString = "    I love JavaScript   "//I love JavaScript
console.log(fourthString.trim())

//charAt() - takes a position as an argument and returns the character at that position
var fifthString = "I am learning JavaScript"
console.log(fifthString.charAt(5))//l
console.log(fifthString.charAt(4)) //empty space

//split() - splits string on basis of passed arguments and returns an array of split strings
console.log(fifthString.split()) //[ 'I am learning JavaScript' ]
console.log(fifthString.split(' '))//[ 'I', 'am', 'learning', 'JavaScript' ]

var sixthString = "JavaScript, HTML, CSS, Node.JS"
console.log(sixthString.split(','))//[ 'JavaScript', ' HTML', ' CSS', ' Node.JS' ]

//Null vs undefined
//Null - A value assigned to a variable to show that the value holds no value
//Undefined - A variable has been declared but has not been initialized/ not been assigned a value

var testVar //holds no value
console.log(testVar) //undefined

testVar = null
console.log(testVar) //holds the value null

// If else conditional statement
if(2>4){
    console.log(true)
} else{
    console.log(false)
}

// if..else if
if(5 > 7){
    console.log('5 .7')
}
else if(2 > 4){
    console.log('4>2')
}
else{
    console.log('Neither are true')
}



