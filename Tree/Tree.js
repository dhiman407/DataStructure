const TreeNode = require('./TreeNode');
const Queue = require('../queues/Queue');

class Tree {
    constructor(value) {
        this._root = new TreeNode(value);
    }

    traverseDF(callback) {
        (function recursive(currentNode) {
            for(let i = 0; i<currentNode.children.length; i++) {
                recursive(currentNode.children[i]);
            }
            callback(currentNode);
        })(this._root);
    }

    traverseBF(callback) {
        let queue = new Queue();
        queue.enqueue(this._root);
        let currentNode = queue.dequeue();
        while (currentNode) {
            for(let i=0; i< currentNode.children.length; i++) {
                queue.enqueue(currentNode.children[i]);
            }
            callback(currentNode);
            currentNode = queue.dequeue();
        }
    }

    addNode(value, parentValue) {
        const newNode = new TreeNode(value);

        if(this._root == null) {
            this._root = newNode;
            return;
        }

        this.traverseDF((node) => {
            if(node.data === parentValue) {
                node.children.push(newNode);
            }
        })
    }
}
