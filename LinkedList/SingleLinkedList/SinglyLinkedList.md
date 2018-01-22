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
