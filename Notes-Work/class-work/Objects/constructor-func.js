'use strict';

//We can use constructor functions to create multiple objects with predefined properties.

function Cat(name, color){
    this.name = name;
    this.color = color;
}

var cat = new Cat('Fluffy', 'White');

console.log(cat);