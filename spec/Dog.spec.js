'use strict';

describe('Dog', function() {
  var dog;
  beforeEach(function() {
    dog = new Dog();
    dog.age = 5;
  });

  describe("#age", function() {
    it("should return an Integer", function(){
      expect(typeof dog.age).toEqual('number');
    });

    it("should be able to be set/get", function(){
      expect(dog.age).toEqual(5);
    });
  });

  describe("#ageInYears", function() {
    it("should return an Integer", function(){
      expect(typeof dog.ageInYears()).toEqual('number');
    });

    it("should return age", function() {
      expect(dog.ageInYears()).toEqual(5);
    });
  });

  describe("#ageInDays", function() {
    it("should return the dog's age in days", function(){
      expect(dog.ageInDays()).toEqual(1825);
    });
  });

  describe("#ageInDogYears", function() {
    it("should return the dog's age in dog years", function(){
      expect(dog.ageInDogYears()).toEqual(35);
    });
  });

});
