var name = 'Mosh';
console.log ('Mosh') 

//Comments - Reguli pentru Variabile
// Cannot be a reserved keyword
// Should be meaningful and descriptive and simple
// Cannot start with a number (1name)
// Cannot contain a space or a hyphen (-)
// Are case-sensitive

var name = 'Mosh';  // String Literal
var age = 30;  // Numeral Literal
var isApproved = true;  // Boolean Literal 
var firstName = undefined;  // undefined
var selectedColor = null;

// Objects
var person = {
    firstNamename:'Mosh',
    year:30
};

// Dot notation  is easier to use
person.firstNamename = "John"

// Bracket notation
person['firstNamename'] = 'Mary';

console.log(person.firstNamename); 

// Arrays  
var selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
console.log(selectedColor); 

// Function --- Performing a task
function greet (lastName) {
   console.log('Hello' + lastName); 
}

greet('John');
greet('Mary');

// Function --- Calculating a value
function square(number) {
    return number * number;
}
var number = square(2);
console.log(number);

// sau se poate scrie si asa (aici se calculeaza patrat lui 2)
function square(number) {
    return number * number
}
console.log(square(2)); 

