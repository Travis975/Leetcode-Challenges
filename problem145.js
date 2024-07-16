// 145. Binary Tree Postorder Traversal
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 
// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
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
var postorderTraversal = function(root) {
    const treeNodeValuesArr = [];
    if (root === null) {
        return treeNodeValuesArr;
    }
    
    const stack = [];
    let current = root;
    let lastVisited = null;


    while (stack.length > 0 || current !== null) {
        // Traverse to the left node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Peek the node from the stack
        const node = stack[stack.length - 1];
        
        // If the right node is null or already visited, process the current node
        if (node.right === null || node.right === lastVisited) {
            treeNodeValuesArr.push(node.val);
            stack.pop();
            lastVisited = node;
        } else {
            // Otherwise, traverse the right node
            current = node.right;
        }
    }
    
    return treeNodeValuesArr;
};
