/**
 * Tree traversal is the process of visiting each node in a tree data structure, exactly once.
 * There are three ways to traverse a tree:
 * 1. Breadth-first search (BFS)
 * 2. Depth-first search (DFS)
 *
 * Breadth-first search (BFS)
 * definition: BFS is an algorithm for traversing or searching tree or graph data structures.
 * It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'[1]),
 * and explores the neighbor nodes first, before moving to the next level neighbors.
 * BFS uses a queue data structure to keep track of all the child nodes that are yet to be visited.
 * BFS is a recursive algorithm, which uses the concept of backtracking.
 * It involves exhaustive searches of all the nodes by going ahead,
 * if possible, else by backtracking.
 * BFS is used to solve problems like finding the shortest path in a maze.
 * Big O of BFS
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph.
 * Space Complexity: O(V) where V is the number of vertices in the graph.
 *
 * Depth-first search (DFS)
 * definition: Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
 * The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph)
 * and explores as far as possible along each branch before backtracking.
 * DFS uses a stack data structure to keep track of all the child nodes that are yet to be visited.
 * DFS is a recursive algorithm, which uses the concept of backtracking.
 * It involves exhaustive searches of all the nodes by going ahead,
 * if possible, else by backtracking.
 *
 * Depth-first search (DFS) has three variants:
 * 1. In-order traversal
 * 2. Pre-order traversal
 * 3. Post-order traversal
 *
 *
 * Pre-order traversal
 * definition: Pre-order traversal is a type of depth-first traversal.
 * In this traversal, the root node is visited first, then the left subtree and later the right sub-tree.
 * So the root is always visited before its child nodes (left and right sub-trees).
 * Pre-order traversal is applied on binary search trees.
 *
 *
 * Post-order traversal
 * definition: Post-order traversal is a type of depth-first traversal.
 * In this traversal, the root node is visited last, after the left subtree and the right sub-tree.
 * So the root is always visited after its child nodes (left and right sub-trees).
 * Post-order traversal is applied on binary search trees.
 *
 *
 * In-order traversal
 * definition: In-order traversal is a type of depth-first traversal.
 * In this traversal, the left subtree is visited first, then the root and later the right sub-tree.
 * So the root is always visited between the left and right sub-trees.
 * In-order traversal is applied on binary search trees.
 * In-order traversal gives nodes in non-decreasing order.
 *
 *
 * Pros and Cons of BFS
 * Pros
 * 1. BFS is easy to implement.
 * 2. BFS is better than DFS when the target node is closer to the root node.
 * 3. BFS can be used to find the shortest path in an unweighted graph.
 * 4. BFS can be used to find the connected components in an undirected graph.
 * 5. BFS can be used to find the two-vertices connectivity in an undirected graph.
 * 6. BFS can be used to find the bridges in a graph.
 * 7. BFS can be used to find the articulation points in a graph.
 *
 * Cons
 * 1. BFS is not suitable for finding the shortest path in a weighted graph.
 * 2. BFS is not suitable for finding the cycles in a graph.
 * 3. BFS is not suitable for finding the strongly connected components in a directed graph.
 * 4. BFS is not suitable for finding the topological sorting of a graph.
 * 5. BFS is not suitable for finding the Hamiltonian cycles in a graph.
 *
 * Pros and Cons of DFS
 * Pros
 * 1. DFS is easy to implement.
 * 2. DFS can be used to find the cycles in a graph.
 * 3. DFS can be used to find the strongly connected components in a directed graph.
 * 4. DFS can be used to find the topological sorting of a graph.
 * 5. DFS can be used to find the Hamiltonian cycles in a graph.
 * 6. DFS can be used to find the Eulerian cycles in a graph.
 * 7. DFS can be used to find the bridges in a graph.
 *
 * Cons
 * 1. DFS is not suitable for finding the shortest path in an unweighted graph.
 * 2. DFS is not suitable for finding the connected components in an undirected graph.
 * 3. DFS is not suitable for finding the two-vertices connectivity in an undirected graph.
 * 4. DFS is not suitable for finding the articulation points in a graph.
 *
 */
