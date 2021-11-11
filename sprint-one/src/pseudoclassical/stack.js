var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  this.storage = {};


};

Stack.prototype.push = function(value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage['1'] = value;
  } else {
    this.storage[this.getMaxPlusOne(this.storage)] = value;
  }
},
Stack.prototype.pop = function() {
  var numbers = Object.keys(this.storage);
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
  }
  var poppedValue = this.storage[this.getMax(numbers)];
  delete this.storage[this.getMax(numbers)];
  return poppedValue;
},
Stack.prototype.size = function() {
  console.log(this.storage);
  return Object.keys(this.storage).length;

},
Stack.prototype.getMaxPlusOne = function(storage) {
  // access array of numbers
  var numbers = Object.keys(storage);
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
  }
  return this.getMax(numbers) + 1;
},
Stack.prototype.getMax = function(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};