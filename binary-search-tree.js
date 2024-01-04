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

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

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

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

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
