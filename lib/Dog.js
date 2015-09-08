'use strict';

function Dog(name,age){
  this.age = age;
  this.name = name;
}

Dog.prototype.ageInYears = function() {
  return this.age
};

Dog.prototype.ageInDays = function() {
  return this.age*365
};

Dog.prototype.ageInDogYears = function() {
  return this.age*7
};
