'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
};

Object.defineProperty(cat, 'name', {writable: false}); // by setting the name property's write attribute to false. We make it so that the name property can not be changed.

console.log(Object.getOwnPropertyDescriptor(cat, 'name')); 

// attempt to change name property of cat object:

//cat.name = "Mr.Fluff"; // will throw error because in strict mode. If not in strict mode, no error will appear

//console.log(Object.getOwnPropertyDescriptor(cat, 'name')); // view error: TypeError: Cannot assign to read only property 'name' of #<Object>

//What if we have an object for the name property?

var cat1 = {
    name: {
        first: 'Fluffy',
        last: 'Flufster'
    },
    color: 'White'
};

Object.defineProperty(cat1, 'name', {writable: false});

//cat1.name = "McFluffy"; //error still occurs
//However, if we do this:
cat1.name.first = "McFluffy"; // no error

// Error does not occur because only the name property is set to read only. The object that the name property points to is still writable.
// if we want to make the name property object not writable we can do so like this:

//Object.freeze(cat.name);

console.log(Object.getOwnPropertyDescriptor(cat1, 'name'));