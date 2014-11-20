---
languages: javascript
tags: functions, prototypes
---

# Dog.js

Represent a dog as an object. Your dog has two properties, `name` and `age`. There should be three functions that represent this age in years, days, and dog years (every year is 7 dog years).

The three functions should be attached to the protoype while the `name` and `age` properties should be attached to each new object.

## Properties defined on the instance Vs. Functions defined on the prototype

Prototypes in JavaScript are what store 'instance methods', which is different than classical inheritance in Ruby. In Ruby a new instance copies all the instance methods it knows upon creation and stores them for access.

JavaScript instances do not store any methods from their prototype; instead, they will refer back to prototype every time the method is called.  This is much more memory efficient, but has the draw back of being less clear.

This means that every new instance of a prototype share _one_ copy of a method defined on the protoype.  This also means that every instance shares the same property if it is defined on the prototype.  A property defined on the prototype can be though of more like a Ruby `constant`.

ex.
```javascript
// JavaScript constructor,
// like a Ruby class/initialize method all in one
function Person(){
};

// like a Ruby instance method
Person.prototype.greet = function(){ 
  return 'Hi!!!';
};

var avi = new Person();
var arel = new Person();

// Same function, same return value
avi.greet();
  // -> 'Hi!!!'
arel.greet();
  // -> 'Hi!!!' 

// Like a Ruby constant
Person.prototype.species = 'Homo Sapien';

// Same property, same return value
avi.species
  // -> 'Homo Sapien'
arel.species
  // -> 'Homo Sapien'
```

To have information specific to an instance use the `this` keyword, like Ruby's `self` to create new properties of the instance inside the constructor function.

ex.
```javascript
function Person(catchPhrase){
  // A JavaScript property
  // inside a constructor this property behaves
  // like a ruby attribute accessor
  this.catchPhrase = catchPhrase;
};

var avi = new Person("That's so freakin' cool!");
var arel = new Person("Boats!");

avi.catchPhrase;
  // -> "That's so freakin' cool!"
arel.catchPhrase;
  // -> "Boats!"
```

As a note (and hint), `this` can be accessed inside prototypical methods too. However, unlike `self` `this` is ___explicit___, meaning it must be stated everytime you want to use it.

ex.
```javascript
function Person(catchPhrase){
  this.catchPhrase = catchPhrase;
};

Person.prototype.denyCatchPhrase = function(){
  return "What!?! I like never say, '" + this.catchPhrase + "'";
};

var avi = new Person("That's so freakin' cool!");
var arel = new Person("Boats!");

avi.denyCatchPhrase();
  // -> "What!?! I like never say, 'That's so freakin' cool!'"
arel.denyCatchPhrase();
  // -> "What!?! I like never say, 'Boats!'"
```


To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install ironboard

# to run in the command line run
ironboard

#to run in the browser
ironboard -b
```