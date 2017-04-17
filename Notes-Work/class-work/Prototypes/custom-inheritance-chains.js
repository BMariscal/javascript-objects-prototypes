'use strict';

function Animal(voice){
    this.voice = voice || 'GRUNT';
}

Animal.prototype.speak = function(){
    console.log(this.voice);
};


function Cat(name,color){
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

//use our Animal function as the prototype for our cat

Cat.prototype = Object.create(Animal.prototype); // sets the prototype of Cat to Animal but also changes the constructor of Cat to Animal
Cat.prototype.constructor = Cat; //set the constructor of our Cat object to cat instead of animal.

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy.speak());