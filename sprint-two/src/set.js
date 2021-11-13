var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      return true;
    }
  }
  return false;

};

setPrototype.remove = function(item) {
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      storage.splice(i, 1);
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
