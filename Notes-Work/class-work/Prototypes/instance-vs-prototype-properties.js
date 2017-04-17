'use strict';

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3; // all cats will have an age of 3

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('muffin', 'brown');

console.log(fluffy.age); // age 3
console.log(muffin.age); //age 3


// what if we change the age of one of our cats?

fluffy.age = 5;

console.log(fluffy.age); // 5

console.log(muffin.age); // 3

//how is it that we changed the age of one cat but not the other?

//lets look at the prototype of both of our cats

console.log(fluffy.__proto__); //age 3
console.log(muffin.__proto__); //age 3

// this is because the prototype of our cats (muffin and fluffy) is the Cat object. When we set the age for fluffy to 5, we set the age of the fluffy instance and not its prototype.

// note: Instantace properties OVERRIDE the prototype property.

