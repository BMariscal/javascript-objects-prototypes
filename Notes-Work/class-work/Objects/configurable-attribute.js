// the configurable property locks down a property to prevent certain attributes from being changed

'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
};

Object.defineProperty(cat, 'name', {configurable: false}); //name property attributes can not be changed

// Object.defineProperty(cat, 'name', {enumerable: false}); //error
// Object.defineProperty(cat, 'name', {configurable: true}); //error
// delete cat.name; //error

// 3 things are effected by making a property non configurable
// can not change enumerable, configurable or delete the property

//You can however, still change the writable property
Object.defineProperty(cat, 'name', {writable: false});

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));