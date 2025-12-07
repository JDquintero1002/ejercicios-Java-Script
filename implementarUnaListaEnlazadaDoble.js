class ListNode {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = new ListNode(val);
    this.tail = this.head;
  }
  
  add(val) {
    if (!this.exists(val)) {
      let newNode = new ListNode(val);
      let lastNode;
      lastNode = this.tail;
      lastNode.next = newNode;
      newNode.prev = lastNode;
      this.tail = newNode;
    }
  }
  
  removeLast() {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  
  removeVal(val) {
    let node = this.head;
    let prevNode, nextNode;
    
    while (node !== null && node.val !== val) {
      node = node.next;
    }
    
    if (node !== null) {
      prevNode = node.prev;
      nextNode = node.next;
      
      if (prevNode) {
        prevNode.next = nextNode;
      } else {
        this.head = nextNode;
      }
      
      if (nextNode) {
        nextNode.prev = prevNode;
      } else {
        this.tail = prevNode;
      }
      
      return true;
    }
    return false;
  }
  
  exists(val) {
    let node = this.head;
    while (node !== null && node.val !== val) {
      node = node.next;
    }
    return node !== null;
  }
  
  iterateForward() {
    let node = this.head;
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
  
  iterateReverse() {
    let node = this.tail;
    while (node !== null) {
      console.log(node.val);
      node = node.prev;
    }
  }
}

var myList = new DoublyLinkedList(1);
myList.add(2);
myList.add(3);

console.log("Iteración hacia adelante:");
myList.iterateForward();

console.log("Eliminar 2:");
myList.removeVal(2); 

console.log("Iteracion atrás después de borrar 2:");
myList.iterateReverse();