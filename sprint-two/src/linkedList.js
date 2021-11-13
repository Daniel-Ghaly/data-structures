var LinkedList = function() {
  var list = {}; // {value : 4, null : tail}
  list.head = null;
  list.tail = null;

  //list = {{head : 1, next : 1}, {value : 1, next : 4}, 4 : 5 , 5 : 6, tail : 6}.   add tail 6
  //list = { head : {},  ..... 5 : {value: 5, next : null} , tail : {}}. list.5.next = 4

  // head: {value:5, next:   }, {value: 4}
  //list = {head: { value: 4, next : null} , 4: {value : 4, next: null}, 5 : {value : 5, next : null} tail : { value: 4, next : null}}


  // [1,2,3,4]
  // { value: 4, next : 5}  {value: 5, next:null}
  list.addToTail = function(value) {

    // console.log(Node(value).value); // 4
    // add 5, we will have to make {value : 4, next : 5}
    // identify if it is empty
    // if (list.head === null) {
    //   list[value] = Node(value);
    //   list.tail = list[value];
    //   list.head = list[value];
    // } else {
    //   list[list.tail.value].next = value;
    //   list[value] = Node(value);
    //   list.tail = list[value];
    // }


    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
      // list = {head: {value: 4, next :null}, {tail: {value: 4, next :null}}
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };


  list.removeHead = function() {
    var removedHead = list.head;
    list.head = list.head.next;
    delete removedHead;
    return removedHead.value;




    // var removedHead = list.head.value;
    // list.head = list[list.head.next];
    // delete list[removedHead];
    // return removedHead;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    if (list.tail.value === target) {
      return true;
    }
    if (list[target] === undefined) {
      return false;
    } else {
      return true;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
