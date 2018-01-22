# Single Linked List

# Create Linked List Class
```js
function SLinkedList() {
    this.length = 0;
    this.head = null;
}
```
# Create Node Class
```js
function Node(data) {
    this.data = data;
    this.next = null;
}
```
# Add node to the Linked List
```js
SLinkedList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // First Case: an empty list
    if (!currentNode) {
        this.head = node;
        this.length++;

        return node;
    }

    // Second Case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this.length++;

    return node;
};
```
# Find node in the Linked List
```js
SLinkedList.prototype.find = function(value){
  var currentNode  = this.head;
  while(currentNode){
    if(currentNode.data === value){
      return currentNode;
    }
    currentNode = currentNode.next;    
  }
  return -1;
}
```
# Remove node from the Linked List
```js
SLinkedList.prototype.delete = function(value){
  var currentNode = this.head;
  //Case: When target node is the head node.
  if(currentNode.data === value){
    this.head = currentNode.next;
    this.length--;
  }else{
    //Keeping track of the previous node because we have to link it to the next node of the target node
    var previousNode = currentNode;
    while(currentNode){
      if(currentNode.data === value){
        previousNode.next = currentNode.next;
        this.length--;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}
```
