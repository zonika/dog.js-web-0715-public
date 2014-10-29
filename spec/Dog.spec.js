'use strict';

describe('Dog', function() {
  var dog;
  beforeEach(function() {
    dog = new Dog('Buttons', 5);
  });

  describe('name property', function() {
    it('should have a name stored on creation in a property', function() {
      expect(dog.name).toEqual('Buttons');
    });

    it('should not share a name between to instances', function() {
      var piper = new Dog('Piper', 3);
      expect(piper.name).toEqual('Piper');
      expect(dog.name).toEqual('Buttons');
    });
  });

  describe('age property', function() {
    it('should return an Integer', function(){
      expect(typeof dog.age).toEqual('number');
    });

    it('should be able to be set/get', function(){
      expect(dog.age).toEqual(5);
    });
  });

  describe('#ageInYears', function() {
    it('should return an Integer', function(){
      expect(typeof dog.ageInYears()).toEqual('number');
    });

    it('should return age', function() {
      expect(dog.ageInYears()).toEqual(5);
    });
  });

  describe('#ageInDays', function() {
    it('should return the dog\'s age in days', function(){
      expect(dog.ageInDays()).toEqual(1825);
    });
  });

  describe('#ageInDogYears', function() {
    it('should return the dog\'s age in dog years', function(){
      expect(dog.ageInDogYears()).toEqual(35);
    });
  });

});
