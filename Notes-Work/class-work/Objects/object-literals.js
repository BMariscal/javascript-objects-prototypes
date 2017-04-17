'use strict';

var cat = {name: 'Fluffy', color: 'White'} //object literal, most commonly used way to create an object.

console.log(cat.name); // displays the name property of the cat object in the console.

//we can add properties to objects on the fly

cat.age = 3;
cat.speak = function(){
    console.log("MEEOOWWWW")
}

console.log(cat.age);

cat.speak();

