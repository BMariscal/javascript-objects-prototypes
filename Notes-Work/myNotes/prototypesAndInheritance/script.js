'use strict';


//var arr = new Array('red', 'blue', 'green');
//same as:
var arr = ['red', 'blue', 'green'];
//new Array calls on the array constructor, as does [] 

Object.defineProperty(Array.prototype, 'last', {get: function(){
  return this[this.length-1];
  
}});
//create property that points to the last item in arr object
//Object.defineProperty creates//builds a property ('last') of the array object
// & this property can call on a function to do what we want 
//(i.e, get the last item in array)

var last = arr.last;
display(last);
var arr2 = ['one','two','three'];
display(Array);//Array is a function that's meant to be
//used as a contructor function
display(arr2.last);


//prototype exists on every function in javascript

var myFunc = function(){}
display(myFunc.prototype)
//this prototype property is an empty object
//returns: {}


//objects do not have a prototype property but it does
//have a proto property
var cat ={name: 'Fluffy'}
display(cat.__proto__)
//returns: object {}



//distinctions:

// Function's prototype: A function's prototype is the object instance 
//that will become the prototype for all objects created using
//this function as a constructor. 

// Object's prototype: An object's prototype is the object instance from 
// which the object is inherited.



//It is important, though, to take note of the word instance in those
//definitions. A prototype is not like a class. It is actually an object.
//So when a function is created, it gets a prototype object created and
//attached to it behind the scenes. If that function is then used as a 
//constructor function with the new keyword, the object that is created 
//has a proto property that is pointing to the same object that is the
//function's prototype.


function Cat(name, color){
  this.name =name
  this.color =color

}

var fluffy = new Cat('Fluffy', 'White')

display(Cat.prototype) //returns Cat {}
display(fluffy.__proto__)//returns Cat{}
display(Cat.prototype === fluffy.__proto__) //return true

//They're pointing to the exact same instance of an object. 
//Notice that they are the same instance. You can see that they're equal. 


//You can see that both instances of cat are pointing to the same prototype
//instance.

Cat.prototype.age = 3
display(Cat.prototype)
display(fluffy.__proto__)

var muffin = new Cat('Muffin', 'Brown');

display(muffin.__proto__)

//changes age/property of proptotype

Cat.prototype.age = 4;
display(Cat.prototype)
display(fluffy.__proto__)
display(muffin.__proto__)

// changes age/property of instance
display('------')
fluffy.age = 5
display(fluffy.age) //returns 5
display(muffin.__proto__) //returns 4
display(fluffy.__proto__)//returns 4

//The key concept to notice here is that prior to setting 
//Fluffy's age directly, the Fluffy object never really had an 
//age property. Only its prototype did. 

//The instance property overwrites prototype property

//object --->  object instance(a.k.a prototype)---> instance

//var fluffy is an instance and fluffy.age is an instance property or a property
//of an instance.

// Meanwhile, Cat.prototype is an object instance


/*Here we have our diagram from earlier showing our Cat function and 
our two instances of cats. And you can see that they are all pointing 
to the same prototype in memory. When we changed the prototype of our 
function, what we really did was create a new object in memory and 
changed the function's prototype property to point at that new object.
However, the existing Fluffy and Muffin instances of our cat still have
prototypes that are pointing to the old prototype object. When we then 
created our new Snowbell instance of a cat, it created a new object and 
set its prototype to point to the current prototype of the Cat function.


***This really highlights the fact that prototypes really are objects that 
live in memory. And as you would expect, they behave like any other 
objects with regards to pointers.*/




//Prototypal Inheritance Chains:



// //What if we wanted our cat to inherit properties from a parent 
// called Animal? Let's take a look at how we'd do that. Let's make 
// it so that all animals have a speak function. Now any function 
// that uses Animal as its prototype will get the speak function 
// automatically. So now we need to assign Animal as the prototype 
// for the Cat function. We simply do that like this. So now we can 
// make Fluffy speak. And you can see here that Fluffy grunted. 





// function Animal() {
  
// }
// Animal.prototype.speak = function(){
//   display('Grunt')}

// function Cat(name, color){

// this.name = name
// this.color = color}


    // Here, the Cat prototype inherits from the animal prototype
// Cat.prototype = Object.create(Animal.prototype)

// var fluffy = new Cat('Fluffy', 'White')

// fluffy.speak()


//



// We do need to call our Animal constructor from our Cat constructor.
// This way if anything needs to happen to initialize an Animal upon 
// construction, it will be taken care of. We just do that like this.
// So that will call the Animal function passing in the cat being constructed.
// So any Animal-related initialization can occur. Let's just add something
// to demonstrate that. Let's make it so that our cat can meow instead 
// of just grunting. To do that, let's have our Animal constructor take
// in a voice. And we'll update our speak function to use the Animal's 
// voice. Now we can optionally pass in a voice. Let's do that from our
// Cat constructor. Now you can see that when we call the speak function,
// our cat will meow instead of grunt. 

// So now if we display 
// Fluffy, we can see that Fluffy is a cat again. And we can see 
// that Fluffy's prototype is a cat and that Fluffy's prototype's 
// prototype is an Animal. It seems like we've covered a lot of 
// steps here. But, really, there are just three lines that you 
// need to worry about when creating the prototype chain, and that
// is these three lines here. You just need to implement these 
// three concepts whenever building a prototype chain. And that's
// all there is to it.

function Animal(voice) { //animal function
  this.voice = voice || 'grunt'
}
Animal.prototype.speak = function(){//creates the speak property in Animal's prototype
  display(this.voice)
}



function Cat(name, color){
  //Animal.call calls the function with this and individual arguments
Animal.call(this, 'Meow mix')//worry about this when creating prototype chain
  this.name = name
  this.color = color
}

//makes Cat.prototype inherit from Animal.prototype
Cat.prototype = Object.create(Animal.prototype)//worry about this
//sets the Cat object's constructor as Cat, not Animal
Cat.prototype.constructor = Cat//worry about this too

var fluffy = new Cat('Fluffy', 'White')

fluffy.speak()
display(fluffy)
display(fluffy.__proto__.__proto__)


// same but with classes syntax 

// class Animal {
//   constructor(voice) {
//     this.voice = voice || 'grunt'
//   }
  
//   speak() {
//     display(this.voice)
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super('Meow')
//     this.name = name
//     this.color = color
//   }
// }

// var fluffy = new Cat('Fluffy', 'White')
// display(Object.keys(fluffy.__proto__.__proto__))
// display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))












