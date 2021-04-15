const Node = require(./BinaryNode);

class BinaryTreeSimple {
  constructor() {
    this._root = null;
  }

  addNode(value) {
    const node = new Node(value);
    if(!this._root) {
      this._root = node;
    } else {
      let currentNode = this._root;
      while(currentNode) {
        if(value < currentNode.left) {
            if(!currentNode.left) {
              currentNode.left = node;
              break;
            }
            currentNode = currentNode.left;
        } else if(value > currentNode.right) {
          if(!currentNode.right) {
            currentNode.right = node;
            break;
          }
          currentNode = currentNode.right;
        } else {
          console.log('Node already exists');
          break;
        }
      }
    }

  }
}
