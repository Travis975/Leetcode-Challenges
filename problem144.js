// 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

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
var preorderTraversal = function(root) {
    // Check if the root is null 
    if (root === null) {
        return [];
    }
    // Make the stack and an array to push the values of the tree nodes
    const stack = [root];
    const treeNodeValuesArr = [];

    while (stack.length > 0) {
        const node = stack.pop();
        treeNodeValuesArr.push(node.val);

        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    // Return the values 
    return treeNodeValuesArr;
};