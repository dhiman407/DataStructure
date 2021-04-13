class Stack {
    constructor() {
        this.input = [];
    }

    add(elem) {
        this.input.push(elem);
        return this;
    }

    remove() {
        return this.input.pop();
    }

    get Size() {
        return this.input.length;
    }
}

Stack.prototype.push = Stack.prototype.add;
Stack.prototype.pop = Stack.prototype.remove;

module.exports = Stack;
