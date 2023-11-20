# LinkedList Class

## Methods

### `push(value)`

**Case:** Adding a node to the end of the linked list.

**Steps:**
1. Create a new node with the given value.
2. If the list is empty, set both head and tail to the new node.
3. If not, make the current tail's next point to the new node, and update the tail.

### `pop()`

**Case:** Removing the last node from the linked list.

**Steps:**
1. If the list is empty, return undefined.
2. If there's only one node, set both head and tail to null.
3. Otherwise, traverse to the second last node, update the tail, and set its next to null.

### `unshift(value)`

**Case:** Adding a node to the beginning of the linked list.

**Steps:**
1. Create a new node with the given value.
2. If the list is empty, set both head and tail to the new node.
3. If not, make the new node's next point to the current head, and update the head.

### `shift()`

**Case:** Removing the first node from the linked list.

**Steps:**
1. If the list is empty, return undefined.
2. Set the head to the current head's next.
3. Set the removed node's next to null.
4. If the list becomes empty, update the tail to null.

### `get(index)`

**Case:** Fetching a node at a given index.

**Steps:**
1. If the index is out of bounds, return undefined.
2. Traverse the list to the specified index and return the node found.

### `set(index, value)`

**Case:** Setting the value of a node at a given index.

**Steps:**
1. Get the node at the specified index.
2. If the node exists, update its value and return true, else return false.

### `insert(index, value)`

**Case:** Inserting a new node at a given index.

**Steps:**
1. If the index is 0, use unshift to add to the beginning.
2. If the index is the length, use push to add to the end.
3. If the index is out of bounds, return false.
4. Otherwise, create a new node, link it appropriately, and update the length.

### `remove(index)`

**Case:** Removing a node at a given index.

**Steps:**
1. If the index is 0, use shift to remove from the beginning.
2. If the index is the length - 1, use pop to remove from the end.
3. If the index is out of bounds, return undefined.
4. Otherwise, get the node before the specified index, update links, and return the removed node.

### `reverse()`

**Case:** Reversing the linked list.

**Steps:**
1. Swap head and tail.
2. Initialize next, prev as null.
3. Loop through the list, reversing links between nodes.
