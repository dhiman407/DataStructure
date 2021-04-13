const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.last = null;
        this.length = 0;
    }

    /**
     * Add elements at the end of the list
     * @param {any} value
     */

    addLast(value) {
        const node = new Node(value);
        let currentNode = this.head;

        if(!currentNode) {
            this.head = node;
            this.length++;
            return node;
        }

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;

        this.length++;
        return node;
    }

    removeFromList(value) {
        let currentNode = this.head;
        if(currentNode.value === value) {
            this.head = currentNode.next;
            this.length--;
        } else {
            let previousNode = currentNode;
            while(currentNode) {
                if(currentNode.value === value) {
                    previousNode.next = currentNode.next;
                    this.length--;
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
}

LinkedList.prototype.add = LinkedList.prototype.addLast;
module.exports = LinkedList;
