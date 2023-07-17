/**
 * Hash Tables
 * Hash tables are used to store key-value pairs (like objects).
 * They are like arrays, but the keys are not ordered.
 * Unlike arrays, hash tables are fast for all of the following operations:
 * finding values, adding new values, and removing values!
 * Hash tables are used to implement an associative array, a structure that can map keys to values.
 * A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
 * A good hash function minimizes collisions, or situations in which a hash function maps two or more keys to the same index.
 * A collision is typically resolved by storing the new key in the same bucket as the colliding key by creating a singly linked list.
 * To look up a value by key, a hash function is used to compute the index into the array, and the desired value can be found in the corresponding bucket.
 * Hash tables have a big O of O(1) for insertion, deletion, and access.
 * Hash tables are used in many programming languages, including JavaScript, Python, Ruby, and Java.
 *
 * A good hash function should be:
 * Fast (i.e. constant time)
 * Doesn't cluster outputs at specific indices, but distributes uniformly
 * Deterministic (same input yields same output)
 *
 * Handling collisions:
 * Separate Chaining
 * Linear Probing
 *
 * Separate Chaining
 * With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
 * This allows us to store multiple key-value pairs at the same index.
 *
 * Linear Probing
 * With linear probing, when we find a collision, we search through the array to find the next empty slot.
 * Unlike with separate chaining, this allows us to store a single key-value at each index.
 */
