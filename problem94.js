// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const treeNodeValuesArr = [];
    if (root === null) {
        return treeNodeValuesArr;
    }
    
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null at this point
        current = stack.pop();
        treeNodeValuesArr.push(current.val);
        
        // We have visited the node and its left subtree, now it's right subtree's turn
        current = current.right;
    }

    return treeNodeValuesArr;
};