'use strict';

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');

//lets see what prototypes are being inherited by our fluffy object:

console.log(fluffy.__proto__); // Cat{}
console.log(fluffy.__proto__.__proto__);// Object{}
console.log(fluffy.__proto__.__proto__.__proto__); //null

//when moving up the prototype chain, you will always find a null proto. Usually the null prototype comes after Object.