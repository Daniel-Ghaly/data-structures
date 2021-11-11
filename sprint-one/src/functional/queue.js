var Queue = function() {


  // helper functions

  var getMax = function(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };

  var getMaxPlusOne = function(storage) {
    // access array of numbers
    var numbers = Object.keys(storage);
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }
    return getMax(numbers) + 1;
  };

  var getMin = function(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  };
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage['1'] = value;
    } else {
      storage[getMaxPlusOne(storage)] = value;
    }
  };

  someInstance.dequeue = function() {
    var numbers = Object.keys(storage);
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }
    var poppedValue = storage[getMin(numbers)];
    delete storage[getMin(numbers)];
    return poppedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
