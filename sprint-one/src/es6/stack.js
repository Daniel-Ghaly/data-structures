class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push (value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage['1'] = value;
    } else {
      this.storage[this.getMaxPlusOne(this.storage)] = value;
    }
  }

  pop () {
    var numbers = Object.keys(this.storage);
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }
    var poppedValue = this.storage[this.getMax(numbers)];
    delete this.storage[this.getMax(numbers)];
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
}
