// WHAT IS A PROTOTYPE??

// A Prototype is an object that exists on every function in JavaScript

var myFunction = function(){}; // if we create a new function

// then try view its prototype:

console.log(myFunction.prototype); // notice we get an empty object

// A function's prototype is the object INSTANCE that will become the prototype for all objects created using this function as a constructor

// An object's prototype is the object INSTANCE from which the object is inherited.


function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;

//view our function's prototype
console.log(Cat.prototype); // has a prototype of object

//create a new object
var fluffy = new Cat('Fluffy', 'White');

//view our new objects prototype
console.log(fluffy.__proto__); // the prototype of our fluffy object is Cat


var muffin = new Cat('Muffin', 'Brown');

console.log(muffin.__proto__); // we can see that any Object created using the Cat constructor function will inherit the Cat prototype.
