'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
};

//for .. in to display properties and property values of the cat object.

for(var propName in cat){
    console.log(propName + ':' + cat[propName]);
}

console.log(Object.keys(cat)); // displays array of cat object properties

console.log(JSON.stringify(cat)); // JSON serialization

// if we don't want a property to show up in a for loop we can set its enumerable attribute to false:

Object.defineProperty(cat, 'name',{enumerable: false});


// now the loop will only output the color property:
for(var propertyName in cat){
    console.log(propertyName + ':' + cat[propertyName]);
}

console.log(Object.keys(cat));


//Setting enumerable to false effects JSON serialization:

console.log(JSON.stringify(cat));

//NOTE: Setting enumerable to flase does not effect our ability to access the property

//we can still:

cat.name = 'McFluffy';

console.log(cat.name);