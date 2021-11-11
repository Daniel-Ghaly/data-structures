class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue (value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage['1'] = value;
    } else {
      this.storage[this.getMaxPlusOne(this.storage)] = value;
    }
  }

  dequeue () {
    var numbers = Object.keys(this.storage);
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }
    var poppedValue = this.storage[this.getMin(numbers)];
    delete this.storage[this.getMin(numbers)];
    return poppedValue;
  }
  size() {
    console.log(this.storage);
    return Object.keys(this.storage).length;

  }
  getMaxPlusOne (storage) {
    // access array of numbers
    var numbers = Object.keys(storage);
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }
    return this.getMax(numbers) + 1;
  }
  getMax (array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  getMin (array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
}
