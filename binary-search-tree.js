"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    

    if (this.val === val) return this;

    if (val < this.val) {
      return this.left?.findRecursively(val);
    }
    else {
      return this.right?.findRecursively(val);
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {

    if (val < this.val) {
      if (!this.left) {
        this.left = new Node(val);
        return this.left;
      } else {
        return this.left.insertRecursively(val);
      }
    }
    else {
      if (!this.right) {
        this.right = new Node(val);
        return this.right;
      } else {
        return this.right.insertRecursively(val);
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];

    function _traverse(node, visited) {

      visited.push(node.val);

      if (node.left) _traverse(node.left, visited).val;
      if (node.right) _traverse(node.right, visited).val;

      return visited;
    }
  
    return _traverse(this, visited);
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    const visited = [];

    function _traverse(node, visited) {
      //if (node === null) return;

      //visited.push(node);
      if (node.left) _traverse(node.left, visited).val;

      visited.push(node.val);

      if (node.right) _traverse(node.right, visited).val;

      return visited;
    }
  
    return _traverse(this, visited);

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];

    function _traverse(node, visited) {
      //if (node === null) return;

      //visited.push(node);
      if (node.left) _traverse(node.left, visited).val;
      if (node.right) _traverse(node.right, visited).val;


      visited.push(node.val);
      return visited;
    }
  
    return _traverse(this, visited);
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    let looking = true;
    while (looking) {

      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          looking = false;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(val);
          looking = false;
        } else {
          current = current.right;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (this.root) this.root.insertRecursively(val);
    else this.root = new Node(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    let looking = true;
    while (current) {

      if (val === current.val) {
        return current;
      }
      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.root ? this.root.findRecursively(val) : undefined;
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    return this.root ? this.root.dfsPreOrder() : [];
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    return this.root ? this.root.dfsInOrder() : [];
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    return this.root ? this.root.dfsPostOrder() : [];
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    if (!this.root) return [];

    const seen = [];
    const toVisitQueue = [this.root];

    while (toVisitQueue.length > 0) {
      const current = toVisitQueue.shift();
      seen.push(current.val);

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return seen;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
