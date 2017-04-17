'use strict';

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Brown');

console.log(fluffy.age); //age 4
console.log(muffin.age); //age 4

//if we set the prototype of our cat function to:

Cat.prototype = {age: 5}; // this creates a new instance of the Cat function

console.log(fluffy.age); //age 4
console.log(muffin.age); //age 4

// the fluffy and muffin objects are inheriting their age property from an instance of Cat saved in memory, thus their age does not change. 
// However, if we create a new cat it will inherit the age property = 5

var snowbell = new Cat('Snowbell', 'gray');

console.log(snowbell.age);// age 5