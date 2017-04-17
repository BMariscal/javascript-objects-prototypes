'use strict';

var cat = {
    name: {
        first: 'Fluffy',
        last: 'LaBeouf'
        
    }
};

Object.defineProperty(cat, 'fullName',{
    // defines a fullName Property containing a function that gets the first name and last name from the name property object and concats them.
    get:function(){
        return this.name.first + ' ' + this.name.last;
    },
    // use set to assign values to the first and last name properties of the name property object.
    set:function(value){
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
});

console.log(cat.fullName); // using get

cat.fullName = 'Muffin Top'; // using set

console.log(cat.fullName); // using get