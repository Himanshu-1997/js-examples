function SinglyLinkedListNode(value, next = null) {
  this.value = value;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

SinglyLinkedList.prototype.size = function() {
  return this.size + 1;
};

SinglyLinkedList.prototype.insert = function(value) {
  this.size++;
  const newNode = new SinglyLinkedListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }
  this.tail.next = newNode;
  this.tail = newNode;
};

SinglyLinkedList.prototype.insertAtFront = function(value) {
  if (!this.head) {
    this.insert(value);
    return;
  }
  this.size++;
  const newNode = new SinglyLinkedListNode(value);
  newNode.next = this.head;
  this.head = newNode;
};

SinglyLinkedList.prototype.findIndex = function(value) {
  let currentNode = this.head;
  let i = 0;
  while (currentNode) {
    if (currentNode.value === value) {
      console.log(`Node exist at ${i} index`);
      return i;
    }
    currentNode = currentNode.next;
    i++;
  }
  console.log("Node doesn't exist");
  return -1;
};

SinglyLinkedList.prototype.traverse = function() {
  let listString = "";
  let currentNode = this.head;
  while (currentNode) {
    listString = `${listString} ${currentNode.value} =>`;
    currentNode = currentNode.next;
  }
  console.log(`[${this.size}]: ${listString}`);
};

SinglyLinkedList.prototype.insertAt = function(index, value) {
  if (index > this.size) throw new Error(`${this.constructor.name} Error: IndexOverflow`);
  if (this.size === index) {
    this.insert(value);
    return;
  }
  if (index === 0) {
    this.insertAtFront(value);
    return;
  }
  let currentNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }
  const newNode = new SinglyLinkedListNode(value, currentNode.next);
  currentNode.next = newNode;
  this.size++;
};

SinglyLinkedList.prototype.reveseList = function() {
  let lastNode = null;
  let currentNode = this.head;
  let nextNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = lastNode;
    lastNode = currentNode;
    currentNode = nextNode;
  }
  this.tail = this.head;
  this.head = lastNode;
};

SinglyLinkedList.prototype.getReversedCopy = function() {
  const copy = new SinglyLinkedList();
  let currentNode = this.head;
  while (currentNode) {
    copy.insertAtFront(currentNode.value);
    currentNode = currentNode.next;
  }
  return copy;
};

const ll1 = new SinglyLinkedList();

ll1.insert(12);
ll1.insert(24);
ll1.insert(36);
ll1.insertAtFront(48);
ll1.findIndex(24);
ll1.traverse();
ll1.insertAt(1, 60);
