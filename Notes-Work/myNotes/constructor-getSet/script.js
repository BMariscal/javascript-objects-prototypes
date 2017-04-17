'use strict';

//Using Constructor Functions to Create JavaScript Objects:
// Makes a constuctor to create any type of cat

//new intializes function

//The 'this' keyword refers to an object. That object is whatever 
//object is executing the current bit of code. By default, that 
//is the global object. In a web browser, that is the window object. 
//So when we executed this Cat function, what was 'this' referring to?
//It was referring to a new empty object. That's what the new keyword 
//does for us. It creates a new empty JavaScript object, sets the context
//of this to that new object, and then calls the Cat function. 

function Cat(name, color) {
  this.name = name,
    this.color = color

}



var cat = new Cat('Fluffy','White');
display(cat);

// So when we executed this Cat function, what was 'this' 
// referring to? It was referring to a new empty object. 
// That's what the new keyword does for us. It creates a new empty 
// JavaScript object, sets the context of this to that new object,
// and then calls the Cat function.

//When "new" is removed: Without new, window.color would return white.
//display(window.color) // and this.color = "White", it returns "White"
//Why?:
// Previously, it was the new keyword that was returning our new object. 
//But you can see that we called our Cat function, and the Cat function 
//set the color to white on something. What did it do that to? Remember 
//that without the new keyword setting the context of this, this is going
//to refer to the window object



// Using Getters and Setters:

// Getters and Setters areattributes on a 
// property that allow you to specify the return value of a property
// using a function and set the value of a property using a function.
// But you can access the property just like you would any other property.
// Let's take a look at how you might do that. Our cat has a name property,
// and that name property has an object with a first and last name. What if 
// we want to know the full name of the cat? Let's use a property getter to
// create a full name property that does that.


var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'}, 
    color: 'White'
}

//To create getters and setters,
// you have to use defineProperty like this. Now we have a full name property
// that will return the first and last name appended. Let's take a look at the 
// full name of our cat now. Now you can see that it's displaying the full 
// name of our cat, and we were able to access it just like we would any other
// property even though it's actually executing a function behind the scenes. 

// Object.defineProperty(cat, 'fullName', 
//   {
//     get: function() {
//       return this.name.first + ' ' + this.name.last
//     }
//   })
  
//   display(cat.fullName);

// Now what if we wanted to be able to set the first and 
// last name based off of setting the full name? Well, let's add a setter for
// that. Now we can set the cat's first and last name like this. And you can
// see that the full name is now Muffin Top. But not only that, if we take a
// look at the first and last names, you can see that those are also correctly
// set. So here we're setting the full name as if its a property, and yet behind
// the scenes, it's executing a function and doing a lot more than that. 

Object.defineProperty(cat, 'fullName', 
  {
    get: function() {
      return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
  })
  
cat.fullName = 'Muffin Top'
display(cat.fullName);
display(cat.name.first);
display(cat.name.last);




