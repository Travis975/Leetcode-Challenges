// LRU Cache 
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. 
// Otherwise, add the key-value pair to the cache. If the number of keys exceeds 
// the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:
//      Input:
//          ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//          [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
//      Output:
//          [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation:
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); => cache is {1=1}
// lRUCache.put(2, 2); => cache is {1=1, 2=2}
// lRUCache.get(1);    => return 1
// lRUCache.put(3, 3); => LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    => returns -1 (not found)
// lRUCache.put(4, 4); => LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    => return -1 (not found)
// lRUCache.get(3);    => return 3
// lRUCache.get(4);    => return 4
 

// Constraints:
// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

// Solution
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new this.Node(null, null);
    this.tail = new this.Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

// Node class definition
LRUCache.prototype.Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    const node = this.cache.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this._remove(this.cache.get(key));
    }
    const newNode = new this.Node(key, value);
    this._add(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size > this.capacity) {
        const lru = this.tail.prev;
        this._remove(lru);
        this.cache.delete(lru.key);
    }
};

// Remove a node from the doubly linked list
LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

// Add a node to the front of the doubly linked list
LRUCache.prototype._add = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */