class Queue {
    constructor() {
        this.input = [];
    }

    addElement(elem) {
        this.input.push(elem);
    }

    remove() {
        this.input.shift();
    }

    get size() {
        return this.input.length;
    }

}

Queue.prototype.enqueue = Queue.prototype.addElement;
Queue.prototype.dequeue = Queue.prototype.remove;

module.exports = Queue;
