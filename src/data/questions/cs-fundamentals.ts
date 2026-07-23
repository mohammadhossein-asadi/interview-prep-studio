import type { Question } from "@/types/question";

const now = "2026-07-12T00:00:00.000Z";

export const csFundamentalsQuestions: Question[] = [
  // ──────────────────────────────────────────────
  // Data Structures (cs-001 – cs-006)
  // ──────────────────────────────────────────────
  {
    id: "cs-001",
    title: "What are the differences between Arrays and Linked Lists?",
    content: "Compare and contrast arrays and linked lists. What are their time and space complexities for common operations?",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Data Structures",
    category: "Data Structures",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Arrays store elements in contiguous memory with O(1) random access but O(n) insertion/deletion. Linked lists store elements in nodes with pointers, offering O(1) insertion/deletion at known positions but O(n) access time.",
    detailedExplanation: "An array is a contiguous block of memory where each element is accessed by its index. This enables O(1) random access via pointer arithmetic (base_address + index × element_size). However, inserting or deleting in the middle requires shifting elements, making it O(n). Arrays also have fixed size in many languages (though dynamic arrays like ArrayList resize by copying).\n\nA linked list is a sequence of nodes where each node stores data and a pointer (or reference) to the next node. Insertion and deletion at a known position are O(1) because you only update pointers. But accessing the k-th element requires traversing from the head, making it O(n). Linked lists use more memory due to pointer overhead.\n\nVariants include singly linked lists (one direction), doubly linked lists (forward and backward pointers), and circular linked lists (tail points back to head).",
    bestAnswer: "Arrays allocate contiguous memory, giving O(1) random access via index but O(n) insertion/deletion (shifting required). Memory is compact with no pointer overhead.\n\nLinked lists allocate nodes scattered in memory connected by pointers. Insertion/deletion at a known node is O(1) (just rewire pointers), but access by index is O(n) (traverse from head). Each node carries pointer overhead (4-8 bytes per pointer).\n\nKey tradeoffs: Arrays are better for frequent random access and cache-friendly sequential iteration. Linked lists are better for frequent insertions/deletions at arbitrary positions, and when the size is highly dynamic. In practice, arrays (or dynamic arrays) dominate because CPU cache prefetching makes their sequential access pattern much faster despite theoretical O(n) insertions.",
    alternativeAnswers: [
      "In JavaScript, arrays are actually objects with numeric keys, so they don't have true contiguous memory like C arrays. Python lists are arrays of references. True linked lists are less common in higher-level languages.",
      "Dynamic arrays (like Java's ArrayList or C++'s std::vector) amortize the cost of resizing with geometric growth, making them competitive with linked lists even for appends."
    ],
    commonMistakes: [
      "Assuming linked lists are always faster for insertion/deletion — it depends on whether you already have a reference to the insertion point.",
      "Ignoring cache locality — arrays are dramatically faster in practice due to cache lines, even when both have the same asymptotic complexity.",
      "Forgetting that a linked list requires O(n) space overhead for pointers alone."
    ],
    followUpQuestions: [
      "When would you choose a linked list over an array in a real-world system?",
      "What is a skip list and how does it improve linked list performance?",
      "How do doubly linked lists differ from singly linked lists in terms of complexity and use cases?"
    ],
    relatedQuestionIds: ["cs-002", "cs-003", "cs-004"],
    references: [
      { title: "CLRS - Linked Lists", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "GeeksforGeeks - Array vs Linked List", url: "https://www.geeksforgeeks.org/linked-list-vs-array/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-002",
    title: "Explain Stacks and Queues. What problems are they best suited for?",
    content: "What are stacks and queues? How do they differ? Give real-world examples and use cases for each.",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Data Structures",
    category: "Data Structures",
    companyTags: ["Amazon", "Microsoft", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "A stack is LIFO (last-in, first-out) — push to add, pop to remove from top. A queue is FIFO (first-in, first-out) — enqueue to add, dequeue to remove from front. Stacks are used for function call stacks, undo operations, and expression evaluation. Queues are used for BFS, task scheduling, and message queues.",
    detailedExplanation: "A stack operates like a stack of plates: the last plate placed on top is the first one removed. The core operations are push (add to top) and pop (remove from top), both O(1). Peek/top returns the top element without removing it. Stacks are used internally by programming languages for function call management, recursion, and local variable storage.\n\nA queue operates like a line at a store: the first person to join is the first served. Enqueue adds to the back, dequeue removes from the front, both O(1) with a linked-list or circular array implementation. Queues are fundamental for BFS traversal, print job scheduling, request handling in servers, and producer-consumer patterns.\\n\nVariants include priority queues (dequeue highest-priority element, implemented with heaps in O(log n)), double-ended queues or deques (enqueue/dequeue at both ends), and monotonic queues (maintain sorted order for sliding window problems).",
    bestAnswer: "A stack follows LIFO: the most recently added element is the first removed. Push and pop are both O(1). Use cases: function call management (call stack), undo/redo in editors, expression evaluation and syntax parsing, DFS traversal, balanced parentheses checking.\n\nA queue follows FIFO: the oldest element is removed first. Enqueue and dequeue are O(1) with proper implementation. Use cases: BFS traversal, print spooling, message passing between threads, task scheduling, buffering I/O streams.\n\nA priority queue allows retrieving the highest (or lowest) priority element, typically implemented as a binary heap with O(log n) insert and O(log n) extract-min/max. Used in Dijkstra's algorithm, Huffman coding, and OS process scheduling.",
    alternativeAnswers: [
      "In concurrent systems, blocking queues and lock-free stacks are important. Java's BlockingQueue and ConcurrentLinkedQueue handle thread-safe producer-consumer patterns.",
      "Monotonic stacks are critical for interview problems like 'next greater element' and 'largest rectangle in histogram'."
    ],
    commonMistakes: [
      "Confusing stack overflow (too many pushes) with stack overflow (the website).",
      "Forgetting that a naive queue implementation with an array wastes space — a circular array or linked list is needed for O(1) dequeue.",
      "Not mentioning that the call stack has limited size, which causes stack overflow on deep recursion."
    ],
    followUpQuestions: [
      "How would you implement a queue using two stacks?",
      "What is a monotonic stack and what problems does it solve?",
      "Explain how a circular buffer works for implementing a queue."
    ],
    relatedQuestionIds: ["cs-003", "cs-004", "cs-005"],
    references: [
      { title: "GeeksforGeeks - Stack Data Structure", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
      { title: "GeeksforGeeks - Queue Data Structure", url: "https://www.geeksforgeeks.org/queue-data-structure/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-003",
    title: "What is a Hash Map and how does it achieve O(1) lookup?",
    content: "Explain how hash maps work internally. What is a hash collision? What strategies handle collisions?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Data Structures",
    category: "Data Structures",
    companyTags: ["Google", "Amazon", "Apple"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "A hash map uses a hash function to convert keys into array indices for O(1) average-case lookup. Collisions occur when two keys hash to the same index. Common collision resolution strategies are separate chaining (linked lists at each bucket) and open addressing (probing for the next empty slot).",
    detailedExplanation: "A hash map (or hash table) stores key-value pairs. When you insert a key, the hash function computes an index into an internal array (bucket). The value is stored at that index. Lookup computes the same hash and goes directly to that index — O(1) average case.\n\nHash collisions happen because the hash function maps a potentially infinite key space to a finite array. Two main resolution strategies:\n\n1. Separate chaining: Each bucket holds a linked list (or other collection) of all entries that hash to that index. On collision, you append to the list and do a linear search within it. With a good hash function and low load factor (entries/buckets), the list stays short.\n\n2. Open addressing: All entries are stored in the array itself. On collision, you probe (search) for the next empty slot using a probing sequence — linear probing (check next slot), quadratic probing (check slots at increasing squared distances), or double hashing (use a second hash function to determine step size).\n\nThe load factor (n/m where n = entries, m = buckets) determines performance. When it exceeds a threshold (typically 0.75), the map resizes (usually doubles) and rehashes all entries — an O(n) operation that happens infrequently enough to maintain amortized O(1).",
    bestAnswer: "A hash map stores key-value pairs in an internal array. A hash function converts each key into an array index. Lookup, insertion, and deletion are O(1) average case because the hash directly determines where the value lives.\n\nCollisions (two keys hashing to the same index) are resolved via: (1) Separate chaining — each bucket holds a linked list of colliding entries, searched linearly. (2) Open addressing — colliding entries are placed in other slots via probing (linear, quadratic, or double hashing).\n\nA good hash function distributes keys uniformly. The load factor triggers resizing when too full. Java's HashMap uses separate chaining with linked lists (trees when chains are long), Python's dict uses open addressing with perturbation-based probing.",
    alternativeAnswers: [
      "Bloom filters are a probabilistic variant of hash maps that use multiple hash functions to test set membership with no false negatives, at the cost of possible false positives.",
      "Consistent hashing distributes keys across a ring to minimize rekeying when nodes are added/removed — used in distributed caches like Amazon DynamoDB."
    ],
    commonMistakes: [
      "Claiming hash map lookup is always O(1) — it's O(1) average but O(n) worst case when all keys collide.",
      "Forgetting that the hash function must be deterministic — same key must always produce the same index.",
      "Not considering that mutable objects as keys cause issues if their hash changes after insertion."
    ],
    followUpQuestions: [
      "How does Java's HashMap handle the case when a bucket gets too many entries?",
      "What makes a good hash function? Give an example.",
      "What is the difference between HashMap and ConcurrentHashMap?"
    ],
    relatedQuestionIds: ["cs-004", "cs-005", "cs-006"],
    references: [
      { title: "CLRS - Hash Tables", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Java HashMap Internals", url: "https://openjdk.org/jeps/0" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-004",
    title: "Explain binary trees, BSTs, and balanced trees.",
    content: "What is a binary tree? What is a binary search tree (BST)? Why do we need balanced trees like AVL or Red-Black trees?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Data Structures",
    category: "Data Structures",
    companyTags: ["Meta", "Microsoft", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A binary tree is a tree where each node has at most two children. A BST maintains the invariant that left children are less than the parent and right children are greater, enabling O(log n) search. Without balancing, a BST can degenerate to O(n). AVL and Red-Black trees use rotations to maintain balance and guarantee O(log n) operations.",
    detailedExplanation: "A binary tree is a hierarchical data structure where each node has zero, one, or two children (left and right). Common traversals: in-order (left, root, right), pre-order (root, left, right), post-order (left, right, root), level-order (BFS).\n\nA Binary Search Tree (BST) adds a constraint: for any node, all values in the left subtree are smaller and all values in the right subtree are larger. This enables O(log h) search, insertion, and deletion where h is the height. But if elements are inserted in sorted order, the BST becomes a linked list with h = n and O(n) operations.\n\nBalanced BSTs fix this by enforcing a height constraint. AVL trees ensure the height difference between left and right subtrees of any node is at most 1, using rotations on insert/delete. They guarantee O(log n) but rotations are frequent. Red-Black trees are less strictly balanced (longest path ≤ 2× shortest) but require fewer rotations, making them better for frequent insertions/deletions. Java's TreeMap uses Red-Black trees; SQLite uses B-trees.",
    bestAnswer: "A binary tree has nodes with at most two children. A BST orders them: left < parent < right, enabling binary search in O(log h). Unbalanced BSTs can degrade to O(n) — imagine inserting sorted data.\n\nBalanced trees maintain O(log n) height. AVL trees are strictly balanced (|height(left) - height(right)| ≤ 1) with rotations on every insert/delete — great for look-heavy workloads. Red-Black trees are loosely balanced with fewer rotations — better for insert-heavy workloads. Both guarantee O(log n) for search, insert, and delete.\n\nIn practice, self-balancing BSTs are used in databases (B-trees, B+ trees), memory allocators, and language standard libraries (Java TreeMap, C++ std::map).",
    alternativeAnswers: [
      "B-trees and B+ trees are balanced trees optimized for disk I/O — they have high branching factor to minimize disk reads. Databases use B+ trees for indexing.",
      "Trie (prefix tree) is another tree variant where each node represents a character, used for autocomplete, spell checking, and IP routing."
    ],
    commonMistakes: [
      "Confusing BST with binary tree — not all binary trees are BSTs.",
      "Forgetting that in-order traversal of a BST yields sorted order.",
      "Assuming AVL and Red-Black trees have the same performance characteristics — AVL is faster for lookups, Red-Black is faster for insertions."
    ],
    followUpQuestions: [
      "How do you check if a binary tree is a valid BST?",
      "What is the difference between a B-tree and a B+ tree?",
      "How do you find the lowest common ancestor in a BST?"
    ],
    relatedQuestionIds: ["cs-005", "cs-006", "cs-012"],
    references: [
      { title: "CLRS - Red-Black Trees", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Visualgo - BST", url: "https://visualgo.net/en/bst" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-005",
    title: "What is a Heap (Priority Queue)? How does it differ from a BST?",
    content: "What is a heap? How is it implemented as an array? What is the difference between a min-heap and a max-heap? How does it compare to a BST?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Data Structures",
    category: "Data Structures",
    companyTags: ["Amazon", "Google", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A heap is a complete binary tree satisfying the heap property: in a min-heap every parent ≤ its children; in a max-heap every parent ≥ its children. It's implemented as an array where for index i, the left child is at 2i+1 and the right at 2i+2. Unlike a BST, a heap only guarantees the root is the min/max — there's no ordering between siblings.",
    detailedExplanation: "A heap is typically implemented as an array because a complete binary tree has no gaps, so array indices encode the tree structure. For a node at index i: parent is (i-1)/2, left child is 2i+1, right child is 2i+2.\n\nInsertion (push): add to the end of the array, then 'heapify up' — compare with parent and swap if heap property is violated. O(log n).\n\nExtraction (pop): remove the root (min or max), move the last element to root, then 'heapify down' — compare with children and swap with the smaller (min-heap) or larger (max-heap) child. O(log n).\n\nA heap does NOT support efficient search (O(n)) because there's no ordering between siblings — you can't eliminate half the tree. A BST supports O(log n) search because left < root < right.\n\nHeaps are used for: priority queues, heap sort (O(n log n)), finding the k-th largest/smallest element, Dijkstra's shortest path, and median maintenance (using two heaps).",
    bestAnswer: "A heap is a complete binary tree where every parent is ≤ (min-heap) or ≥ (max-heap) its children. It's stored as an array: for index i, children are at 2i+1 and 2i+2.\n\nKey operations: insert (O(log n) — add to end, bubble up), extract-min/max (O(log n) — remove root, move last to root, bubble down). Finding any arbitrary element is O(n).\n\nUnlike a BST which orders all elements (left < root < right), a heap only guarantees the root is the extreme. Siblings have no ordering. This makes heaps worse for search but equally efficient for insert and extract-min/max. Heaps shine when you repeatedly need the min/max, like in scheduling or streaming median problems.",
    alternativeAnswers: [
      "A d-ary heap uses d children per node instead of 2, reducing heap height and improving cache performance for extract operations at the cost of slower inserts.",
      "A Fibonacci heap achieves O(1) amortized insert and decrease-key with O(log n) extract-min, used in theoretically optimal Dijkstra implementations."
    ],
    commonMistakes: [
      "Thinking a heap is sorted — it's not. Only the root is guaranteed to be the min/max.",
      "Confusing the array representation — children of index i are at 2i+1 and 2i+2, not 2i and 2i+1 (unless using 1-based indexing).",
      "Trying to search a heap efficiently — it's not a BST. Use a BST if you need ordered traversal."
    ],
    followUpQuestions: [
      "How would you find the k-th largest element in an unsorted array using a heap?",
      "What is heap sort and why is it O(n log n)?",
      "How do you merge two heaps?"
    ],
    relatedQuestionIds: ["cs-004", "cs-006", "cs-011"],
    references: [
      { title: "GeeksforGeeks - Heap Data Structure", url: "https://www.geeksforgeeks.org/heap-data-structure/" },
      { title: "Visualgo - Heap", url: "https://visualgo.net/en/heap" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-006",
    title: "What are Graphs? Explain adjacency list vs adjacency matrix.",
    content: "What is a graph data structure? When would you use an adjacency list versus an adjacency matrix? What are directed vs undirected graphs?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Data Structures",
    category: "Data Structures",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A graph consists of vertices (nodes) and edges (connections). An adjacency list stores each vertex's neighbors as a linked list or array — space O(V+E), good for sparse graphs. An adjacency matrix is a V×V 2D array — space O(V²), good for dense graphs and O(1) edge lookup. Directed graphs have one-way edges; undirected graphs have bidirectional edges.",
    detailedExplanation: "A graph G = (V, E) is a set of vertices connected by edges. Edges can be directed (one-way) or undirected (bidirectional), weighted (have a cost) or unweighted.\n\nAdjacency list: an array of lists where index i holds a list of vertices adjacent to vertex i. Space: O(V+E). Checking if edge (u,v) exists: O(degree(u)). Iterating all edges: O(V+E). Best for sparse graphs where E << V².\n\nAdjacency matrix: a V×V matrix where matrix[u][v] = 1 (or weight) if edge (u,v) exists. Space: O(V²). Checking edge existence: O(1). Iterating all edges: O(V²). Best for dense graphs where E ≈ V².\n\nOther representations: edge list (list of all edges, sorted or unsorted), incidence matrix (V×E matrix), and compressed sparse row (CSR) for numerical computing.",
    bestAnswer: "A graph is a collection of vertices connected by edges — the most general data structure for modeling relationships. Social networks, road maps, dependency graphs, and the web are all graphs.\n\nAdjacency list: each vertex stores a list of its neighbors. Space O(V+E). Edge lookup is O(degree(u)). Ideal for sparse graphs (most real-world graphs are sparse).\n\nAdjacency matrix: a V×V boolean or weight matrix. Space O(V²). Edge lookup is O(1). Ideal for dense graphs or when you need frequent edge-existence checks.\n\nDirected vs undirected: directed edges have direction (follow link →), undirected edges are bidirectional (friendship). Weighted edges carry costs (distance, time). A weighted directed graph is the standard model for shortest-path algorithms like Dijkstra's.",
    alternativeAnswers: [
      "For weighted graphs, adjacency lists store (neighbor, weight) pairs. For multigraphs (multiple edges between same vertices), you need to handle duplicate edges explicitly.",
      "Graph algorithms like topological sort, strongly connected components, and minimum spanning trees are fundamental to compiler design, network routing, and scheduling."
    ],
    commonMistakes: [
      "Forgetting that an undirected graph's adjacency matrix is symmetric — matrix[u][v] = matrix[v][u].",
      "Using an adjacency matrix for a sparse graph — it wastes O(V²) space when E is small.",
      "Not considering that BFS and DFS work on both directed and undirected graphs."
    ],
    followUpQuestions: [
      "How would you detect a cycle in a directed graph?",
      "What is topological sorting and when is it used?",
      "Explain Dijkstra's algorithm for shortest path."
    ],
    relatedQuestionIds: ["cs-012", "cs-011", "cs-004"],
    references: [
      { title: "CLRS - Graph Algorithms", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Visualgo - Graph", url: "https://visualgo.net/en/dfsbfs" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Algorithms (cs-007 – cs-012)
  // ──────────────────────────────────────────────
  {
    id: "cs-007",
    title: "Compare common sorting algorithms and their complexities.",
    content: "Compare Bubble Sort, Merge Sort, Quick Sort, and Heap Sort. What are their time and space complexities? When would you use each?",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Algorithms",
    category: "Algorithms",
    companyTags: ["Amazon", "Microsoft", "Google"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Bubble Sort: O(n²) time, O(1) space — simple but slow. Merge Sort: O(n log n) time, O(n) space — stable, guaranteed performance. Quick Sort: O(n log n) average, O(n²) worst, O(log n) space — fastest in practice with good pivot selection. Heap Sort: O(n log n) time, O(1) space — not stable but in-place.",
    detailedExplanation: "Bubble Sort repeatedly swaps adjacent elements if they're in wrong order. O(n²) worst and average case, O(1) space, stable. Only useful for nearly-sorted small arrays or educational purposes.\n\nMerge Sort divides the array in half recursively, sorts each half, then merges them. O(n log n) always, O(n) extra space, stable. The guaranteed O(n log n) makes it predictable. Used in external sorting (large files) and linked list sorting.\n\nQuick Sort picks a pivot, partitions elements around it (smaller left, larger right), then recurses. O(n log n) average, O(n²) worst case (sorted array with bad pivot), O(log n) stack space. With randomized or median-of-three pivot selection, worst case is extremely unlikely. It's the fastest in practice due to cache efficiency and low constant factors.\n\nHeap Sort builds a max-heap from the array, then repeatedly extracts the maximum. O(n log n) always, O(1) extra space, not stable. Useful when you need guaranteed O(n log n) without O(n) extra space.\n\nIn practice, most standard libraries use introsort (hybrid of quicksort, heapsort, and insertion sort) — Java's Arrays.sort for primitives, C++ std::sort.",
    bestAnswer: "Merge Sort: guaranteed O(n log n), stable, but needs O(n) extra space. Best when you need stability or guaranteed performance.\n\nQuick Sort: O(n log n) average, O(n²) worst, but fastest in practice due to cache-friendly access patterns. With randomized pivot, worst case is nearly impossible. Used in C++ std::sort (as introsort).\n\nHeap Sort: O(n log n) guaranteed, O(1) space, but poor cache locality makes it slower than quicksort in practice.\n\nBubble Sort: O(n²), only educational value. Some real-world hybrid sorts (like Timsort) use insertion sort for small subarrays.\n\nFor interviews, focus on the tradeoffs: stability, worst-case guarantees, space usage, and cache performance.",
    alternativeAnswers: [
      "Timsort (Python/Java default) is a hybrid of merge sort and insertion sort — O(n log n) worst case, stable, adaptive to partially sorted data. It's the real-world standard.",
      "Counting sort and radix sort are O(n) for integers with limited range, but they're not comparison-based and only work for specific data types."
    ],
    commonMistakes: [
      "Claiming Quick Sort is always O(n log n) — it's O(n²) worst case without good pivot selection.",
      "Forgetting that Merge Sort requires O(n) extra space, which can be a problem for memory-constrained systems.",
      "Not mentioning that the built-in sort functions in most languages are highly optimized hybrids."
    ],
    followUpQuestions: [
      "How does Timsort work and why is it so effective?",
      "What is the lower bound for comparison-based sorting and why?",
      "How would you sort a linked list?"
    ],
    relatedQuestionIds: ["cs-008", "cs-010", "cs-016"],
    references: [
      { title: "Visualgo - Sorting", url: "https://visualgo.net/en/sorting" },
      { title: "Wikipedia - Sorting Algorithm", url: "https://en.wikipedia.org/wiki/Sorting_algorithm" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-008",
    title: "Explain Binary Search and its variations.",
    content: "How does binary search work? What are the edge cases? What are some variations like finding the first/last occurrence, or searching in a rotated array?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Algorithms",
    category: "Algorithms",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Binary search finds a target in a sorted array by repeatedly halving the search space. Start with low=0, high=n-1. Compare mid element with target: if equal, return; if target is smaller, search left half; if larger, search right half. O(log n) time, O(1) space.",
    detailedExplanation: "Binary search works on sorted data. At each step, you compare the middle element with the target and eliminate half the remaining elements.\n\nStandard implementation: while low <= high, compute mid = low + (high - low) / 2 (avoids integer overflow vs (low+high)/2). If arr[mid] == target, return mid. If arr[mid] < target, low = mid + 1. If arr[mid] > target, high = mid - 1.\n\nCommon variations:\n1. First/last occurrence: when you find the target, don't stop — continue searching left (for first) or right (for last) by adjusting the binary condition.\n2. Insertion point: find where an element would be inserted to maintain sorted order — the position where low ends up.\n3. Rotated sorted array: binary search on which half is sorted, then check if target is in the sorted half.\n4. Search in 2D matrix: treat the matrix as a flat sorted array.\n5. Binary search on answer: when the answer space is monotonic (e.g., minimum capacity to ship packages in D days).",
    bestAnswer: "Binary search halves the search space each step on a sorted array — O(log n) time. The key insight: if the middle element is less than the target, the target must be in the right half.\n\nCritical implementation details: use `mid = low + (high - low) / 2` to avoid overflow. Be careful with the termination condition — `low <= high` for standard search, `low < high` for finding boundaries.\n\nVariations: (1) First/last occurrence — when you find the target, continue narrowing: `high = mid - 1` for first, `low = mid + 1` for last. (2) Rotated array — determine which half is sorted, then check if the target falls in that range. (3) Binary search on answer — when you need to find the minimum/maximum value satisfying a condition, binary search over the answer space.",
    alternativeAnswers: [
      "Exponential search combines binary search with an exponentially growing bound — useful when the array size is unknown or the target is near the beginning.",
      "Interpolation search estimates the target position based on value distribution — O(log log n) average for uniformly distributed data, but O(n) worst case."
    ],
    commonMistakes: [
      "Integer overflow with `(low + high) / 2` — use `low + (high - low) / 2` instead.",
      "Off-by-one errors: using `low < high` when `low <= high` is needed (or vice versa).",
      "Not handling the case where the target is not in the array — ensure the function returns -1 or an appropriate sentinel."
    ],
    followUpQuestions: [
      "How would you search in a rotated sorted array?",
      "Find the first position of a target in a sorted array with duplicates.",
      "How would you use binary search to find the square root of a number?"
    ],
    relatedQuestionIds: ["cs-007", "cs-010", "cs-004"],
    references: [
      { title: "TopCoder - Binary Search", url: "https://www.topcoder.com/thrive/articles/Binary%20Search" },
      { title: "LeetCode Binary Search Problems", url: "https://leetcode.com/tag/binary-search/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-009",
    title: "What is Recursion? How do you convert recursion to iteration?",
    content: "Explain recursion. What are the key components of a recursive function? How do you avoid stack overflow? When would you convert recursion to iteration?",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Algorithms",
    category: "Algorithms",
    companyTags: ["Amazon", "Google", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. Every recursive function needs a base case (to stop) and a recursive case (to make progress toward the base case). Convert to iteration using an explicit stack when recursion depth is too large.",
    detailedExplanation: "A recursive function has two essential parts: (1) Base case: the simplest input that can be answered directly without further recursion. (2) Recursive case: decomposes the problem into a smaller subproblem and calls itself with that smaller input, combining the result.\n\nEach recursive call adds a new frame to the call stack, consuming memory for local variables and the return address. Deep recursion (thousands of calls) causes stack overflow. Typical call stack size is 1-8 MB, supporting roughly 10,000-100,000 recursive calls depending on frame size.\n\nTail recursion: when the recursive call is the last operation, some languages (Scheme, Kotlin) optimize it into a loop (tail call optimization). Most mainstream languages (Python, Java, JavaScript) do NOT optimize tail calls.\n\nConverting to iteration: use an explicit stack data structure. Push the initial state, then loop: pop a state, process it, push resulting sub-states. This moves the 'stack' from the call stack to the heap, avoiding stack overflow.\n\nRecursion is natural for tree traversals, divide-and-conquer algorithms (merge sort, quicksort), backtracking, and problems with recursive structure (nested data, fractals).",
    bestAnswer: "Recursion solves a problem by breaking it into smaller subproblems of the same type. A recursive function needs: (1) a base case that returns a direct answer, and (2) a recursive case that calls itself with a smaller input and combines the result.\n\nStack overflow happens when recursion depth exceeds the call stack limit. Solutions: (1) Convert to iteration with an explicit stack. (2) Use tail recursion (if the language supports TCO). (3) Use memoization to avoid redundant recursive calls.\n\nConvert to iteration when: the recursion depth could be large (graph/tree with thousands of nodes), you need to minimize memory usage, or the language doesn't support TCO. Keep recursion for naturally recursive problems (tree traversal, backtracking) where the code clarity is worth the stack cost.",
    alternativeAnswers: [
      "Recursion with memoization (dynamic programming) converts exponential recursive solutions to polynomial time by caching subproblem results.",
      "Mutual recursion (A calls B, B calls A) is used in parsers and state machines but is harder to reason about."
    ],
    commonMistakes: [
      "Missing the base case — leads to infinite recursion and stack overflow.",
      "Not making progress toward the base case — the recursive call must reduce the problem size.",
      "Using recursion when O(1) space iteration is possible — recursion uses O(depth) stack space."
    ],
    followUpQuestions: [
      "How would you convert a recursive DFS to an iterative DFS using a stack?",
      "What is tail recursion and why doesn't JavaScript support tail call optimization?",
      "How does memoization change the time complexity of a recursive Fibonacci from O(2^n) to O(n)?"
    ],
    relatedQuestionIds: ["cs-010", "cs-011", "cs-012"],
    references: [
      { title: "MDN Recursion", url: "https://developer.mozilla.org/en-US/docs/Glossary/Recursion" },
      { title: "Tail Call Optimization - Explained", url: "https://exploringjs.com/es6/ch_tail-calls.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-010",
    title: "What is Dynamic Programming? How do you identify DP problems?",
    content: "What is dynamic programming? How do you know when a problem is a DP problem? What are the two approaches (top-down vs bottom-up)?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Algorithms",
    category: "Algorithms",
    companyTags: ["Google", "Amazon", "Microsoft", "Meta"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation. A problem is DP if it has optimal substructure (optimal solution contains optimal solutions to subproblems) and overlapping subproblems. Top-down uses memoization (recursive with cache); bottom-up uses tabulation (iterative with array).",
    detailedExplanation: "DP is an optimization technique for problems with two properties:\n\n1. Optimal substructure: the optimal solution to the problem can be constructed from optimal solutions of its subproblems. Example: shortest path from A to C goes through B, and the path A→B and B→C must each be shortest paths.\n\n2. Overlapping subproblems: the same subproblems are solved repeatedly. Without memoization, Fibonacci(50) recalculates the same values exponentially many times.\n\nTop-down (memoization): write the natural recursive solution, add a cache (hash map or array) to store results of subproblems. When a subproblem is first solved, compute and store it. On subsequent calls, return the cached result.\n\nBottom-up (tabulation): identify the dependency order of subproblems, fill a table iteratively from smallest subproblems to the full problem. Often more space-efficient and avoids recursion overhead.\n\nClassic DP problems: Fibonacci, climbing stairs, coin change, longest common subsequence, knapsack, edit distance, house robber, word break.",
    bestAnswer: "DP solves problems with optimal substructure and overlapping subproblems by storing results of subproblems to avoid recomputation.\n\nIdentifying DP: (1) Can you break the problem into smaller subproblems of the same type? (2) Are the same subproblems solved repeatedly? (3) Does the problem ask for optimal (min/max/count) value?\n\nTop-down: natural recursive solution + memoization cache. Easier to write. Bottom-up: fill a DP table iteratively, often more space-efficient.\n\nExample — Climbing Stairs: f(n) = f(n-1) + f(n-2) with f(1)=1, f(2)=2. The recursive solution is O(2^n), but with memoization or a simple loop it becomes O(n) time, O(1) space (if you only keep the last two values).",
    alternativeAnswers: [
      "Space optimization is a common DP technique: if the recurrence only depends on the last k values, you only need O(k) space instead of O(n).",
      "DP can also be viewed as shortest path in a DAG (Directed Acyclic Graph) — each subproblem is a node, dependencies are edges."
    ],
    commonMistakes: [
      "Trying to force DP on a problem without overlapping subproblems — not every optimization problem is DP.",
      "Forgetting to define the base case in the recurrence relation.",
      "Not optimizing space when the DP table's dependencies are limited to a few previous rows/columns."
    ],
    followUpQuestions: [
      "Solve the coin change problem using both top-down and bottom-up approaches.",
      "What is the difference between LIS (Longest Increasing Subsequence) and LCS (Longest Common Subsequence)?",
      "When would you use DP with bitmask?"
    ],
    relatedQuestionIds: ["cs-009", "cs-011", "cs-012"],
    references: [
      { title: "CLRS - Dynamic Programming", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "LeetCode DP Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-011",
    title: "Explain BFS and DFS. When would you use each?",
    content: "What are BFS and DFS? How do they work? What are their time and space complexities? When would you prefer BFS over DFS and vice versa?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Algorithms",
    category: "Algorithms",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "BFS explores level by level using a queue — finds shortest path in unweighted graphs. DFS explores as deep as possible using a stack (or recursion) — useful for topological sort, cycle detection, and path finding. Both are O(V+E) time and O(V) space.",
    detailedExplanation: "BFS (Breadth-First Search): start at a source vertex, visit all neighbors at distance 1, then all neighbors at distance 2, and so on. Uses a queue (FIFO). Level-by-level exploration naturally finds the shortest path in unweighted graphs. Time: O(V+E), Space: O(V) for the queue and visited set.\n\nDFS (Depth-First Search): start at a source vertex, go as deep as possible before backtracking. Uses a stack (LIFO) or recursion. Time: O(V+E), Space: O(V) for the stack and visited set.\n\nBFS is preferred for: shortest path in unweighted graphs, level-order traversal, finding connected components, bipartite checking, and problems where the answer is at a minimum distance.\n\nDFS is preferred for: topological sorting, cycle detection, strongly connected components (Tarjan's/Kosaraju's), maze solving, backtracking problems, and finding all paths between two vertices.\n\nBidirectional BFS: search from both source and target simultaneously, meeting in the middle. Reduces time from O(b^d) to O(b^(d/2)) where b is branching factor and d is depth.",
    bestAnswer: "BFS uses a queue to explore level by level — it's ideal for shortest path in unweighted graphs, level-order traversal, and finding minimum distance. Space: O(V).\n\nDFS uses a stack (or recursion) to explore depth first — it's ideal for topological sort, cycle detection, finding all paths, and backtracking. Space: O(V).\n\nBoth are O(V+E) time. The choice depends on the problem: BFS when you need shortest path or level information, DFS when you need to explore all possibilities or detect cycles. In practice, BFS is easier to implement iteratively; DFS is easier to implement recursively.\n\nFor weighted graphs with positive weights, neither is sufficient — use Dijkstra's. For negative weights, use Bellman-Ford.",
    alternativeAnswers: [
      "Iterative Deepening DFS combines DFS's space efficiency with BFS's shortest-path guarantee — it repeatedly runs DFS with increasing depth limits.",
      "A* search extends BFS with a heuristic to guide exploration toward the goal, dramatically reducing the search space."
    ],
    commonMistakes: [
      "Using DFS to find shortest path in an unweighted graph — DFS does NOT guarantee shortest path. Use BFS.",
      "Forgetting to mark nodes as visited to avoid infinite loops in cyclic graphs.",
      "Using a Set for visited in DFS when the graph is large — consider a boolean array for O(1) access."
    ],
    followUpQuestions: [
      "How would you detect a cycle in a directed graph using DFS?",
      "Explain topological sort and give an example of when it's used.",
      "What is A* search and how does it differ from BFS?"
    ],
    relatedQuestionIds: ["cs-012", "cs-006", "cs-010"],
    references: [
      { title: "Visualgo - BFS/DFS", url: "https://visualgo.net/en/dfsbfs" },
      { title: "CLRS - Graph Algorithms", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-012",
    title: "What is a Graph Algorithm? Explain Dijkstra's and its limitations.",
    content: "Explain Dijkstra's shortest path algorithm. What is its time complexity? What are its limitations? What alternatives exist?",
    difficulty: "advanced",
    track: "cs-fundamentals",
    topic: "Algorithms",
    category: "Algorithms",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Dijkstra's finds the shortest path from a source to all vertices in a weighted graph with non-negative weights. It uses a priority queue, greedily visiting the unvisited vertex with the smallest known distance. Time: O((V+E) log V) with a binary heap. Limitation: doesn't work with negative weight edges — use Bellman-Ford instead.",
    detailedExplanation: "Dijkstra's algorithm maintains a distance array (initially infinity for all vertices except source which is 0) and a priority queue. At each step: extract the vertex u with minimum distance, relax all its edges — for each neighbor v with edge weight w, if dist[u] + w < dist[v], update dist[v].\n\nThe greedy approach works because once a vertex is extracted from the priority queue, its distance is finalized (since all edge weights are non-negative).\n\nTime complexity: O((V+E) log V) with a binary heap for the priority queue. With a Fibonacci heap: O(E + V log V). With a simple array: O(V²).\n\nLimitations: (1) Negative weight edges break the greedy assumption — a shorter path might be found later through a negative edge. Use Bellman-Ford O(VE) or SPFA. (2) Negative cycles cause shortest path to be undefined (can loop infinitely to decrease distance).\n\nAlternatives: Bellman-Ford handles negative weights O(VE). A* uses a heuristic for point-to-point shortest path. Floyd-Warshall finds all-pairs shortest paths O(V³).",
    bestAnswer: "Dijkstra's is a greedy algorithm for shortest path in graphs with non-negative edge weights. It maintains a priority queue of vertices sorted by tentative distance. At each step, it extracts the minimum-distance vertex, marks it as visited, and relaxes all outgoing edges.\n\nTime: O((V+E) log V) with binary heap. Space: O(V).\n\nKey limitation: fails with negative edge weights. The greedy assumption — once a vertex is extracted, its distance is final — breaks when negative edges exist. A path through a negative edge might later produce a shorter distance.\n\nFor negative weights: Bellman-Ford O(VE) detects negative cycles. For all-pairs: Floyd-Warshall O(V³). For point-to-point with heuristic: A* — guides search toward the goal, reducing explored nodes.",
    alternativeAnswers: [
      "Bidirectional Dijkstra searches from both source and target, potentially halving the search space for point-to-point queries.",
      "Johnson's algorithm combines Bellman-Ford with Dijkstra's to find all-pairs shortest paths in sparse graphs with negative weights — O(VE + V² log V)."
    ],
    commonMistakes: [
      "Using Dijkstra's on a graph with negative edges — this gives wrong results silently.",
      "Forgetting to handle disconnected components — vertices unreachable from the source should remain at infinity.",
      "Not recognizing that Dijkstra's works on directed graphs too, not just undirected."
    ],
    followUpQuestions: [
      "How would you find the shortest path in a graph with negative edge weights?",
      "Explain Bellman-Ford and how it detects negative cycles.",
      "How does A* search improve on Dijkstra's?"
    ],
    relatedQuestionIds: ["cs-011", "cs-006", "cs-010"],
    references: [
      { title: "CLRS - Single-Source Shortest Paths", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Visualgo - Dijkstra", url: "https://visualgo.net/en/dfsbfs" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Big O (cs-013 – cs-016)
  // ──────────────────────────────────────────────
  {
    id: "cs-013",
    title: "What is Big O notation? How do you analyze time complexity?",
    content: "Explain Big O notation. How do you determine the time complexity of an algorithm? What are the common complexity classes?",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Big O",
    category: "Big O Notation",
    companyTags: ["Google", "Amazon", "Microsoft", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Big O describes the upper bound of an algorithm's growth rate as input size increases. Common classes: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2ⁿ) exponential, O(n!) factorial. We analyze by counting the number of operations relative to input size.",
    detailedExplanation: "Big O notation (O) describes the worst-case growth rate. It ignores constants and lower-order terms because for large enough n, they become insignificant. For example, 3n² + 5n + 100 is O(n²).\n\nRules for analysis:\n1. Drop constants: O(2n) → O(n).\n2. Drop lower-order terms: O(n² + n) → O(n²).\n3. For loops: a single loop over n elements is O(n). Nested loops are O(n²). A loop that halves the input each iteration is O(log n).\n4. Multiple inputs: for two arrays of sizes m and n, nested loops are O(m × n).\n5. Sequential code: add the complexities (dominant term wins).\n6. Recursive code: use the Master Theorem or recurrence relations.\n\nCommon complexities from fastest to slowest: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!).\n\nAmortized analysis considers the average cost over a sequence of operations (e.g., dynamic array push is O(1) amortized even though occasional resizing is O(n)).",
    bestAnswer: "Big O describes the worst-case growth rate of an algorithm's running time (or space) as input size n approaches infinity. It captures the dominant term, ignoring constants.\n\nAnalysis rules:\n- Loops: O(n) for iterating n elements, O(log n) for halving.\n- Nested loops: O(n²) for two nested loops over n, O(m×n) for different sizes.\n- Recursion: use Master Theorem or draw the recursion tree.\n- Sequential operations: take the maximum complexity.\n\nImportant classes:\n- O(1): hash map lookup, array access.\n- O(log n): binary search.\n- O(n): linear scan.\n- O(n log n): merge sort, efficient sorting.\n- O(n²): nested loops, bubble sort.\n- O(2ⁿ): brute-force subsets.\n\nFor interviews, always state both worst-case and average-case when relevant.",
    alternativeAnswers: [
      "Big O is worst case. Big Theta (Θ) is tight bound. Big Omega (Ω) is best case. In interviews, 'Big O' colloquially means tight bound, not just upper bound.",
      "Space complexity is equally important — an algorithm using O(n) extra space might be unacceptable for streaming data, even if it's O(n) time."
    ],
    commonMistakes: [
      "Saying O(2n) is different from O(n) — constants are dropped in Big O.",
      "Confusing time complexity with actual runtime — O(n²) can be faster than O(n) for small inputs due to constant factors.",
      "Not considering all inputs — analyze based on the right variable (e.g., string length, number of elements)."
    ],
    followUpQuestions: [
      "What is the Master Theorem and how do you use it?",
      "Explain amortized analysis with a dynamic array example.",
      "What is the time complexity of building a heap?"
    ],
    relatedQuestionIds: ["cs-014", "cs-015", "cs-016"],
    references: [
      { title: "CLRS - Asymptotic Notations", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Big O Cheat Sheet", url: "https://www.bigocheatsheet.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-014",
    title: "What is Space Complexity and how do you analyze it?",
    content: "What is space complexity? How does it differ from time complexity? What counts as 'extra' space? Give examples.",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Big O",
    category: "Big O Notation",
    companyTags: ["Google", "Microsoft", "Amazon"],
    interviewRound: "Phone Screen",
    frequency: 3,
    expectedAnswer: "Space complexity measures the total memory an algorithm uses relative to input size. It includes input space, auxiliary space (extra data structures, recursion stack), and sometimes output space. We typically focus on auxiliary space — the extra memory beyond the input.",
    detailedExplanation: "Space complexity counts the memory an algorithm needs. It has three components:\n\n1. Input space: the memory for the input itself — usually excluded from analysis since it's the same for all algorithms solving the same problem.\n2. Auxiliary space: extra memory used by the algorithm — this is what we typically analyze.\n3. Output space: memory for the result — sometimes included.\n\nExamples:\n- Iterative variables (counters, pointers): O(1) auxiliary space.\n- A hash map storing all elements: O(n) auxiliary space.\n- Merge sort's temporary array: O(n) auxiliary space.\n- Recursion: the call stack depth counts. Recursive binary search: O(log n) stack space. Recursive Fibonacci without memoization: O(n) stack space.\n- In-place sorting (heap sort): O(1) auxiliary space.\n\nA tradeoff exists between time and space: memoization trades O(n) or more space for exponential time savings. Dynamic programming tables can often be optimized from O(n²) to O(n) by only keeping the last row.",
    bestAnswer: "Space complexity measures the total memory an algorithm needs as input grows. We typically count auxiliary space — memory beyond the input.\n\nKey examples:\n- O(1): pointer-based iteration, swap variables.\n- O(n): a hash set of all elements, a copy of the array.\n- O(n²): a 2D adjacency matrix.\n- O(log n): binary search recursion stack.\n- O(n) recursion: unoptimized recursive Fibonacci, linked list recursion.\n\nIn-place algorithms (like heap sort) use O(1) auxiliary space. Out-of-place algorithms (like merge sort) use O(n).\n\nSpace-time tradeoff: caching results (DP/memoization) uses more space but reduces time. Choosing the right balance depends on the constraints — competitive programming often emphasizes time, while embedded systems emphasize space.",
    alternativeAnswers: [
      "Stack space is often overlooked — a recursive function with O(n) depth uses O(n) space even if it has no other data structures.",
      "Garbage-collected languages may have hidden space costs — temporary objects, closures capturing variables, and string concatenation all allocate memory."
    ],
    commonMistakes: [
      "Forgetting that recursion uses stack space — each recursive call adds a frame to the call stack.",
      "Confusing in-place with O(1) space — some in-place algorithms still use O(log n) stack space (e.g., quicksort).",
      "Ignoring that creating a copy of the input counts as O(n) space."
    ],
    followUpQuestions: [
      "How would you optimize merge sort's space from O(n) to O(1)?",
      "What is the space complexity of a recursive binary tree traversal?",
      "How do you trade space for time in dynamic programming?"
    ],
    relatedQuestionIds: ["cs-013", "cs-015", "cs-016"],
    references: [
      { title: "GeeksforGeeks - Space Complexity", url: "https://www.geeksforgeeks.org/how-to-calculate-space-complexity/" },
      { title: "CLRS - Space Complexity", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-015",
    title: "What is Amortized Analysis? Give examples.",
    content: "What is amortized analysis? How does it differ from average-case analysis? Give examples like dynamic arrays and splay trees.",
    difficulty: "advanced",
    track: "cs-fundamentals",
    topic: "Big O",
    category: "Big O Notation",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Amortized analysis gives the average cost per operation over a worst-case sequence of operations. Unlike average-case analysis (which assumes a probability distribution), amortized analysis guarantees the bound for ANY sequence. Example: dynamic array push is O(1) amortized because resizing (O(n)) happens infrequently.",
    detailedExplanation: "Amortized analysis differs from average-case analysis:\n- Average-case: assumes a probability distribution over inputs. The average might be good but worst case is still bad.\n- Amortized: guarantees the average cost over a sequence of operations, regardless of distribution. No bad worst case.\n\nThree methods:\n1. Aggregate method: total cost of n operations / n.\n2. Accounting method: assign different charges to operations — overpay for cheap ones, use the surplus to 'pay' for expensive ones.\n3. Potential method: define a potential function Φ on the data structure state. Amortized cost = actual cost + ΔΦ.\n\nClassic examples:\n- Dynamic array (ArrayList, vector): push is usually O(1) (just increment size), but occasionally O(n) (resize and copy). Amortized cost: O(1) per push. The array doubles when full, so n pushes cost O(n) total for copies + O(n) for the pushes themselves = O(2n) total, O(1) amortized.\n- Splay trees: individual operations can be O(n), but any sequence of m operations on an n-node tree is O(m log n).\n- Union-Find with path compression: individual find can be O(n), but m operations on n elements is O(m α(n)) where α is the inverse Ackermann function (effectively constant).",
    bestAnswer: "Amortized analysis computes the average cost per operation over a worst-case sequence — it's a guarantee, not a probability estimate.\n\nThe classic example is a dynamic array (like ArrayList). Push is O(1) most of the time, but when the array is full, it resizes by doubling — copying all n elements takes O(n). The key insight: after doubling to size 2n, you need n more pushes before the next resize. So the O(n) copy cost is spread over n pushes: O(n)/n = O(1) amortized per push.\n\nThree analysis methods: (1) Aggregate — total cost / number of operations. (2) Accounting — prepay for expensive operations using surplus from cheap ones. (3) Potential method — define a 'stored energy' in the data structure.\n\nAmortized ≠ average case: average case needs a probability distribution; amortized analysis guarantees the bound for ANY sequence of operations.",
    alternativeAnswers: [
      "The potential method is the most powerful: define Φ(Dᵢ) = potential after i-th operation. Amortized cost âᵢ = cᵢ + Φ(Dᵢ) - Φ(Dᵢ₋₁). The total actual cost = total amortized cost - Φ(Dₙ) + Φ(D₀).",
      "Some data structures like Fibonacci heaps achieve O(1) amortized decrease-key, which is critical for Dijkstra's algorithm efficiency."
    ],
    commonMistakes: [
      "Confusing amortized with average case — amortized is a worst-case guarantee over sequences, not a probabilistic average.",
      "Thinking amortized O(1) means every operation is O(1) — some operations are expensive, but they're infrequent enough that the average is O(1).",
      "Not understanding that amortized analysis applies to sequences, not individual operations."
    ],
    followUpQuestions: [
      "How would you prove that dynamic array push is O(1) amortized using the potential method?",
      "What is the amortized complexity of splay tree operations?",
      "How does path compression in Union-Find achieve near-constant amortized time?"
    ],
    relatedQuestionIds: ["cs-013", "cs-014", "cs-003"],
    references: [
      { title: "CLRS - Amortized Analysis", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Wikipedia - Amortized Analysis", url: "https://en.wikipedia.org/wiki/Amortized_analysis" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-016",
    title: "How do you analyze the time complexity of a recursive function?",
    content: "How do you determine the time complexity of a recursive function? Explain recurrence relations and the Master Theorem.",
    difficulty: "advanced",
    track: "cs-fundamentals",
    topic: "Big O",
    category: "Big O Notation",
    companyTags: ["Google", "Microsoft", "Amazon"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Recursive time complexity is described by recurrence relations — equations that define T(n) in terms of T on smaller inputs. The Master Theorem provides a shortcut for recurrences of the form T(n) = aT(n/b) + O(n^d). If log_b(a) < d, T(n) = O(n^d). If log_b(a) = d, T(n) = O(n^d log n). If log_b(a) > d, T(n) = O(n^(log_b(a))).",
    detailedExplanation: "A recurrence relation defines the total work T(n) as the work done at the current level plus the work done by recursive calls.\n\nExamples:\n- Binary search: T(n) = T(n/2) + O(1). Solution: O(log n).\n- Merge sort: T(n) = 2T(n/2) + O(n). Solution: O(n log n).\n- Fibonacci (naive): T(n) = T(n-1) + T(n-2) + O(1). Solution: O(2^n).\n- Tower of Hanoi: T(n) = 2T(n-1) + O(1). Solution: O(2^n).\n\nThe Master Theorem handles recurrences of the form T(n) = aT(n/b) + f(n) where a ≥ 1, b > 1:\n- Case 1: If f(n) = O(n^c) where c < log_b(a), then T(n) = Θ(n^(log_b(a))).\n- Case 2: If f(n) = Θ(n^c) where c = log_b(a), then T(n) = Θ(n^c log n).\n- Case 3: If f(n) = Ω(n^c) where c > log_b(a), and a·f(n/b) ≤ k·f(n) for some k < 1, then T(n) = Θ(f(n)).\n\nFor non-standard recurrences (like T(n) = T(n-1) + T(n-2)), use the recursion tree method: draw the tree, compute work per level, sum all levels.",
    bestAnswer: "Recurrence relations describe recursive complexity: T(n) = work at current level + work from recursive calls.\n\nThe Master Theorem is a shortcut for T(n) = aT(n/b) + O(n^d):\n- If a < b^d → O(n^d) — work at top dominates.\n- If a = b^d → O(n^d log n) — equal work at each level.\n- If a > b^d → O(n^(log_b a)) — leaves dominate.\n\nExamples: Merge sort T(n) = 2T(n/2) + O(n) → a=2, b=2, d=1 → O(n log n). Binary search T(n) = T(n/2) + O(1) → a=1, b=2, d=0 → O(log n).\n\nFor non-Master-Theorem recurrences (like T(n) = T(n-1) + T(n-2)), use the recursion tree: the naive Fibonacci tree has 2^n nodes → O(2^n).",
    alternativeAnswers: [
      "The recursion tree method is more general than the Master Theorem — draw the tree, sum work at each level, and sum across levels.",
      "Akra-Bazzi extends the Master Theorem to handle non-integer divisions and additive terms, useful for more complex recurrences."
    ],
    commonMistakes: [
      "Incorrectly identifying a and b in the Master Theorem — a is the number of recursive calls, b is the factor by which input shrinks.",
      "Forgetting that the Master Theorem only applies to divide-and-conquer recurrences, not recurrences like T(n) = T(n-1) + O(1).",
      "Not checking all three cases of the Master Theorem — the relationship between log_b(a) and d determines which case applies."
    ],
    followUpQuestions: [
      "Solve the recurrence T(n) = 4T(n/2) + n using the Master Theorem.",
      "What is the time complexity of the naive recursive Fibonacci and how does memoization change it?",
      "How would you solve a recurrence that doesn't fit the Master Theorem?"
    ],
    relatedQuestionIds: ["cs-013", "cs-014", "cs-009"],
    references: [
      { title: "CLRS - The Master Method", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
      { title: "Wikipedia - Master Theorem", url: "https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Memory (cs-017 – cs-019)
  // ──────────────────────────────────────────────
  {
    id: "cs-017",
    title: "What is the difference between Stack and Heap memory?",
    content: "Explain stack and heap memory. What is stored on each? What are the performance implications? When does each grow?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Memory",
    category: "Memory Management",
    companyTags: ["Google", "Amazon", "Microsoft", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Stack memory stores local variables, function parameters, and return addresses in a LIFO manner. It's fast (just pointer movement) but limited (typically 1-8 MB). Heap memory stores dynamically allocated objects and is larger but slower (requires allocation/deallocation). Stack is thread-private; heap is shared across threads.",
    detailedExplanation: "Stack memory:\n- Automatically managed (LIFO — push on function call, pop on return).\n- Stores: primitive types (int, float, bool), local variables, function parameters, return addresses.\n- Very fast — just increment/decrement a stack pointer.\n- Limited size (typically 1-8 MB per thread). Exceeding it causes stack overflow.\n- Thread-local — each thread has its own stack, no synchronization needed.\n- Lifetime: variables exist only while the function is executing.\n\nHeap memory:\n- Manually managed (C/C++) or garbage-collected (Java, Python, JavaScript).\n- Stores: dynamically allocated objects, arrays larger than a threshold, objects whose lifetime exceeds the function scope.\n- Slower — allocation requires finding free memory blocks, deallocation requires garbage collection or manual free().\n- Large — limited only by available system memory.\n- Shared across threads — requires synchronization for concurrent access.\n- Lifetime: persists until explicitly freed or garbage collected.\n\nPass-by-value (primitives) copies from stack to stack. Pass-by-reference (objects/pointers) copies a pointer on the stack that references heap data. This is why modifying an object inside a function affects the original — both stack pointers reference the same heap object.",
    bestAnswer: "Stack is a fast, thread-local, LIFO memory region for function frames — local variables, parameters, return addresses. It's limited (1-8 MB) and automatically managed. Heap is a larger, slower, shared memory region for dynamically allocated objects — it persists beyond function scope.\n\nStack allocation is essentially free — just moving a pointer. Heap allocation requires finding free blocks and may trigger garbage collection. Stack variables are destroyed when the function returns; heap objects persist until freed.\n\nKey tradeoff: stack is fast but limited and scoped. Heap is flexible but slower and requires management. In C++, `int x = 5` goes on the stack; `int* p = new int(5)` puts the int on the heap with p on the stack. In Java, all objects go on the heap; primitives go on the stack.",
    alternativeAnswers: [
      "Escape analysis in Java determines if an object can be stack-allocated (if it doesn't escape the method) — a significant optimization that avoids GC pressure.",
      "Memory pools and arena allocators pre-allocate large heap blocks and allocate within them, reducing allocation overhead in performance-critical code."
    ],
    commonMistakes: [
      "Thinking stack is always faster — for very large data, stack allocation fails (stack overflow) while heap succeeds.",
      "Confusing stack memory with the call stack data structure — they're related (the call stack lives in stack memory) but distinct concepts.",
      "Forgetting that returning a pointer/reference to a local variable is undefined behavior (dangling pointer) because the stack frame is destroyed."
    ],
    followUpQuestions: [
      "What is stack overflow and how do you prevent it?",
      "How does garbage collection work in Java vs JavaScript?",
      "What is a memory leak and how do you detect one?"
    ],
    relatedQuestionIds: ["cs-018", "cs-019", "cs-013"],
    references: [
      { title: "Java Memory Management", url: "https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html" },
      { title: "Stack vs Heap - GeeksforGeeks", url: "https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-018",
    title: "What is Garbage Collection? How do different GC algorithms work?",
    content: "What is garbage collection? Compare reference counting, mark-and-sweep, and generational GC. What are the tradeoffs?",
    difficulty: "advanced",
    track: "cs-fundamentals",
    topic: "Memory",
    category: "Memory Management",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Garbage collection automatically reclaims memory occupied by objects that are no longer reachable. Reference counting tracks how many references point to an object (fails with cycles). Mark-and-sweep traces from root references, marks reachable objects, and sweeps (frees) the rest. Generational GC exploits the 'most objects die young' observation by separating young and old generations.",
    detailedExplanation: "Reference counting: each object has a counter of incoming references. When the count drops to zero, the object is freed. Simple but: (1) can't detect cycles (A→B→A), (2) has overhead on every reference assignment. Python uses reference counting + a cyclic GC as a fallback.\n\nMark-and-sweep: two phases. Mark phase: start from roots (global variables, stack variables, registers), follow all references, mark reachable objects. Sweep phase: iterate the heap, free unmarked objects. Handles cycles naturally. Downside: causes 'stop-the-world' pauses.\n\nGenerational GC (Java, .NET, V8): based on the observation that most objects die young. Divides heap into generations: Young (Eden + Survivor spaces) and Old. Young gen is collected frequently (minor GC) — most objects die here. Survivors are promoted to Old gen. Old gen is collected less frequently (major GC). Reduces pause times.\n\nConcurrent/concurrent-mark-sweep (Java's CMS, G1, ZGC): performs most GC work concurrently with application threads, minimizing pauses. ZGC targets <10ms pauses regardless of heap size.\n\nReference counting + cycle collection: Python's approach — ref counting for immediate cleanup, periodic cycle detection for cyclic garbage.",
    bestAnswer: "Garbage collection automatically reclaims unreachable memory. Three main approaches:\n\n1. Reference counting: object freed when reference count hits zero. Simple, deterministic. But can't handle cycles (A→B→A) and has per-assignment overhead.\n\n2. Mark-and-sweep: traces from roots, marks reachable objects, frees the rest. Handles cycles. But causes stop-the-world pauses.\n\n3. Generational: divides heap into young (frequent minor GC) and old (infrequent major GC) based on the observation that most objects die young. Java and V8 use this — minor GC is fast because most Eden objects are garbage.\n\nModern JVMs use G1 or ZGC: concurrent collection that overlaps with application execution to minimize pauses. ZGC guarantees <10ms pauses even on multi-GB heaps.",
    alternativeAnswers: [
      "Escape analysis can stack-allocate objects that don't escape a method, avoiding GC entirely for those objects.",
      "Boehm GC is a conservative, non-moving collector used in C/C++ — it scans memory for pointers and doesn't compact, so it can miss interior pointers."
    ],
    commonMistakes: [
      "Assuming reference counting handles cycles — it doesn't. A cyclic reference keeps both objects alive.",
      "Thinking GC eliminates all memory management concerns — memory leaks can still occur via unintentional references (event listeners, closures).",
      "Confusing 'stop-the-world' with 'the entire application freezes' — modern GCs minimize pause times with concurrent collection."
    ],
    followUpQuestions: [
      "What is a generational hypothesis and why does it matter for GC?",
      "How do you detect a memory leak in a Java application?",
      "What is the difference between G1 and ZGC garbage collectors?"
    ],
    relatedQuestionIds: ["cs-017", "cs-019", "cs-020"],
    references: [
      { title: "Oracle - Java GC Tuning", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html" },
      { title: "V8 Garbage Collection", url: "https://v8.dev/blog/garbage-collection-2015" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-019",
    title: "What are Memory Leaks? How do you detect and prevent them?",
    content: "What is a memory leak? What causes them? How do you detect memory leaks in different languages? How do you prevent them?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Memory",
    category: "Memory Management",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A memory leak occurs when allocated memory is no longer needed but not released — the program retains references to objects that should be freed. Causes include unclosed resources, event listener leaks, unintentional global references, and closures capturing large objects. Detect with profilers (Java VisualVM, Chrome DevTools), AddressSanitizer, or monitoring memory growth over time.",
    detailedExplanation: "Memory leaks in managed languages (Java, JavaScript, Python):\n- Event listeners not removed (DOM elements referenced after removal).\n- Closures capturing large objects that are no longer needed.\n- Static collections growing without bounds (cache without eviction).\n- Detached DOM nodes still referenced in JavaScript.\n- Thread-local storage not cleaned up.\n\nMemory leaks in unmanaged languages (C, C++):\n- malloc/new without corresponding free/delete.\n- Lost pointers (pointer overwritten before freeing).\n- Double free (undefined behavior, not a leak but corruption).\n- File handles, sockets not closed.\n\nDetection tools:\n- JavaScript: Chrome DevTools Memory tab — heap snapshots, allocation timelines, leak detection.\n- Java: VisualVM, Eclipse MAT, JProfiler — heap dumps, dominator trees.\n- C/C++: Valgrind, AddressSanitizer (ASan), LeakSanitizer.\n- General: monitor process memory over time — steady growth = likely leak.\n\nPrevention: use RAII (C++), try-with-resources (Java), using statements (C#), weak references for caches, bounded caches (LRU), and static analysis tools.",
    bestAnswer: "A memory leak is when allocated memory can no longer be accessed but hasn't been freed. The process's memory grows over time, eventually causing performance degradation or OOM.\n\nCommon causes in JavaScript: event listeners not removed on component unmount, closures holding references, detached DOM nodes. In Java: static collections that grow unbounded, unclosed database connections, inner classes holding outer class references. In C++: missing delete calls, lost pointers.\n\nDetection: Chrome DevTools heap snapshots (JS), VisualVM/MAT (Java), Valgrind/ASan (C++). Look for monotonic memory growth over time.\n\nPrevention: RAII pattern (C++), try-with-resources (Java), weak references for caches, bounded data structures, linters that detect unused references, and proper cleanup in component lifecycle methods.",
    alternativeAnswers: [
      "Weak references and WeakMap/WeakSet in JavaScript allow objects to be garbage collected even if a reference exists — useful for caches and DOM node tracking.",
      "Memory pools pre-allocate fixed-size blocks and reuse them, eliminating fragmentation and making deallocation O(1)."
    ],
    commonMistakes: [
      "Thinking garbage collection prevents all memory leaks — GC only frees unreachable objects; leaks happen when you accidentally keep references alive.",
      "Not considering that a small leak in a short-running script is fine — leaks matter in long-running applications (servers, SPAs).",
      "Forgetting that circular references are handled by modern GCs — they're only a problem with reference counting."
    ],
    followUpQuestions: [
      "How would you debug a memory leak in a long-running Node.js server?",
      "What is a weak reference and when would you use one?",
      "How does a memory profiler work internally?"
    ],
    relatedQuestionIds: ["cs-017", "cs-018", "cs-020"],
    references: [
      { title: "Chrome DevTools Memory Profiling", url: "https://developer.chrome.com/docs/devtools/memory-problems/" },
      { title: "Valgrind Memcheck", url: "https://valgrind.org/docs/manual/mc-manual.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // System Concepts (cs-020 – cs-022)
  // ──────────────────────────────────────────────
  {
    id: "cs-020",
    title: "What is Concurrency? How does it differ from Parallelism?",
    content: "What is concurrency? What is parallelism? What is the difference between processes and threads? What are common concurrency primitives?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "System Concepts",
    category: "Concurrency & Parallelism",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Concurrency is dealing with multiple things at once (interleaving). Parallelism is doing multiple things at once (simultaneous). A process is an isolated program with its own memory space. A thread is a lightweight unit of execution within a process, sharing the same memory. Common primitives: mutexes, semaphores, locks, atomics, channels, and message queues.",
    detailedExplanation: "Concurrency: multiple tasks making progress during overlapping time periods. On a single core, the OS interleaves threads via context switching — they appear simultaneous but aren't. Concurrency handles I/O-bound tasks well (one thread waits for network while another runs).\n\nParallelism: multiple tasks executing simultaneously on multiple cores. True simultaneous execution. Handles CPU-bound tasks well (split work across cores).\n\nRob Pike: 'Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.'\n\nProcesses: independent programs with separate memory spaces, protected by the OS. Communication via IPC (pipes, shared memory, sockets). Heavy to create and switch.\n\nThreads: lightweight execution units within a process, sharing the same address space. Cheaper to create/switch. Shared memory enables fast communication but introduces race conditions.\n\nConcurrency primitives: Mutex (mutual exclusion — only one thread accesses a resource at a time), Semaphore (counting semaphore — limits concurrent access to N threads), Lock (higher-level abstraction over mutex), Atomic operations (hardware-guaranteed indivisible operations), Channel (Go-style message passing), Condition variable (wait for a condition to be true).",
    bestAnswer: "Concurrency is structuring a program to handle multiple tasks making progress during overlapping time periods — it's about composition. Parallelism is executing multiple tasks simultaneously on multiple hardware cores — it's about execution.\n\nA single-threaded program can be concurrent (async I/O: process one request while another waits for network). A multi-threaded program can be concurrent but not parallel (one core, threads interleaved). True parallelism requires multiple cores.\n\nProcesses are isolated (separate memory), communicate via IPC. Threads share memory within a process — faster communication but prone to race conditions.\n\nPrimitives: Mutex (mutual exclusion), Semaphore (counting access), Lock (high-level mutex), Atomic operations (CAS — compare-and-swap), Channels (message passing, Go model), Monitor (encapsulated lock + condition variables).",
    alternativeAnswers: [
      "The Go model (CSP) uses goroutines and channels for concurrency without shared state — each goroutine communicates via typed channels, avoiding locks entirely.",
      "Event loops (Node.js, browser) achieve concurrency on a single thread via non-blocking I/O and callbacks/promises — no threads needed for I/O-bound work."
    ],
    commonMistakes: [
      "Confusing concurrency with parallelism — concurrency is about structure, parallelism is about execution.",
      "Assuming more threads always improve performance — context switching overhead and contention can make multi-threaded code slower.",
      "Forgetting that JavaScript is single-threaded — concurrency is achieved via the event loop, not threads (Web Workers are separate)."
    ],
    followUpQuestions: [
      "What is a race condition and how do you prevent it?",
      "Explain the difference between a mutex and a semaphore.",
      "What is the dining philosophers problem and how do you solve it?"
    ],
    relatedQuestionIds: ["cs-021", "cs-022", "cs-017"],
    references: [
      { title: "Go Concurrency Patterns", url: "https://go.dev/talks/2012/concurrency.slide" },
      { title: "MDN - Concurrency Model", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-021",
    title: "What is Thread Safety? How do you achieve it?",
    content: "What does it mean for code to be thread-safe? What are race conditions? How do you achieve thread safety with locks, atomics, and immutable data?",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "System Concepts",
    category: "Concurrency & Parallelism",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Thread-safe code produces correct results regardless of the interleaving of thread execution. Race conditions occur when multiple threads access shared mutable state without synchronization, and the result depends on execution order. Achieve thread safety via: locks/mutexes (serialize access), atomic operations (hardware-guaranteed indivisible operations), and immutable data (no mutation = no races).",
    detailedExplanation: "Thread safety: a function is thread-safe if it can be called from multiple threads simultaneously without causing data races or producing incorrect results.\n\nRace condition: two or more threads access shared mutable state, at least one writes, and the result depends on the order of execution. Classic example: two threads incrementing a counter — `count++` is actually three operations (read, increment, write) that can interleave.\n\nAchieving thread safety:\n1. Locks/Mutexes: wrap critical sections in lock/unlock. Only one thread can hold the lock at a time. Java: synchronized blocks, ReentrantLock. Python: threading.Lock. JavaScript: no native locks (single-threaded).\n2. Atomic operations: hardware-guaranteed indivisible operations. Java: AtomicInteger, AtomicReference. C++: std::atomic. JavaScript: Atomics for SharedArrayBuffer.\n3. Immutable data: if data can't be modified after creation, there's nothing to race on. Java: final fields, String immutability. Functional programming: all data is immutable.\n4. Thread-local storage: each thread has its own copy — no sharing, no races.\n5. Message passing: threads communicate via messages (Go channels, Erlang actors) instead of shared state.\n\nLock-free and wait-free algorithms use atomic CAS (compare-and-swap) loops instead of locks — higher throughput but harder to implement correctly.",
    bestAnswer: "Thread-safe code produces correct results regardless of thread scheduling. The core problem is race conditions — concurrent read/write to shared mutable state where the outcome depends on timing.\n\nSolutions:\n1. Locks: Mutex or synchronized blocks serialize access. Simple but can cause deadlocks and reduce parallelism.\n2. Atoms: AtomicReference, AtomicInteger use hardware CAS (compare-and-swap) for lock-free operations. Faster than locks for simple operations.\n3. Immutability: if data can't change after creation, no synchronization needed. Functional programming's core advantage for concurrency.\n4. Message passing: threads share nothing — communicate via channels (Go) or actors (Erlang). Eliminates shared state entirely.\n5. Thread-local storage: each thread has its own copy. Good for caching per-thread data.\n\nIn JavaScript, Web Workers communicate via structured cloning (message passing), not shared memory — inherently safe. SharedArrayBuffer + Atomics enable shared-memory concurrency in JS but are rarely used.",
    alternativeAnswers: [
      "Software Transactional Memory (STM) applies database-like transactions to memory operations — atomic blocks that retry on conflict. Used in Clojure and Haskell.",
      "Read-write locks allow concurrent reads but exclusive writes — better than mutex when reads dominate (e.g., ReentrantReadWriteLock in Java)."
    ],
    commonMistakes: [
      "Using synchronized on the wrong granularity — too coarse kills parallelism, too fine misses race conditions.",
      "Thinking volatile in Java ensures atomicity — it ensures visibility but not atomicity (use AtomicInteger instead).",
      "Forgetting that collections like ArrayList are not thread-safe — use CopyOnWriteArrayList or synchronized collections."
    ],
    followUpQuestions: [
      "What is the difference between a mutex and a semaphore?",
      "How does compare-and-swap (CAS) work?",
      "What is the producer-consumer problem and how do you solve it?"
    ],
    relatedQuestionIds: ["cs-020", "cs-022", "cs-017"],
    references: [
      { title: "Java Concurrency in Practice", url: "https://jcip.net/" },
      { title: "MDN - Web Workers", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-022",
    title: "What is a Deadlock? What are the four conditions and how do you prevent them?",
    content: "What is a deadlock? What are the four necessary conditions? How do you detect and prevent deadlocks? Give examples.",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "System Concepts",
    category: "Concurrency & Parallelism",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a resource. The four necessary conditions (Coffman conditions) are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Prevent by breaking any one of these conditions — e.g., always acquire locks in a consistent global order to break circular wait.",
    detailedExplanation: "Deadlock example: Thread 1 holds Lock A and waits for Lock B. Thread 2 holds Lock B and waits for Lock A. Neither can proceed — deadlock.\n\nFour necessary conditions (all must hold for deadlock):\n1. Mutual Exclusion: at least one resource is non-shareable (only one thread can use it at a time).\n2. Hold and Wait: a thread holds at least one resource while waiting to acquire additional resources.\n3. No Preemption: resources cannot be forcibly taken from a thread — only released voluntarily.\n4. Circular Wait: a circular chain of threads exists where each waits for a resource held by the next.\n\nPrevention strategies (break one condition):\n- Break Mutual Exclusion: use shareable resources where possible (read-only data).\n- Break Hold and Wait: require threads to request all resources at once (all or nothing).\n- Break No Preemption: allow the OS to forcibly reclaim resources (not always practical).\n- Break Circular Wait: impose a global ordering on resource acquisition (always lock A before B). This is the most practical approach.\n\nDetection and recovery: the OS can build a resource allocation graph and detect cycles (deadlock detection algorithms). Recovery: terminate one thread or preempt resources (with rollback).\n\nAvoidance: Banker's algorithm (Dijkstra) checks if a resource allocation state is safe before granting a request.",
    bestAnswer: "A deadlock is a state where two or more threads are permanently blocked, each holding a resource the other needs.\n\nFour Coffman conditions (all required):\n1. Mutual Exclusion — resource is non-shareable.\n2. Hold and Wait — thread holds one resource while waiting for another.\n3. No Preemption — can't forcibly take a resource.\n4. Circular Wait — circular chain of waiting threads.\n\nPrevention (break one condition):\n- Most practical: break circular wait by imposing a global lock ordering. If every thread acquires locks in the same order (e.g., always Lock A then Lock B), circular wait is impossible.\n- Break hold-and-wait: acquire all locks atomically (using tryLock).\n\nDetection: periodic cycle detection in the wait-for graph. Recovery: kill a thread or preempt a resource.\n\nIn practice, lock ordering + timeouts (tryLock with deadline) is the standard defense.",
    alternativeAnswers: [
      "Lock timeouts prevent deadlocks but not livelocks — a thread might repeatedly try and fail to acquire a lock, wasting CPU.",
      "Deadlock-free designs use message passing (no shared locks) or lock-free data structures (CAS-based) to avoid the problem entirely."
    ],
    commonMistakes: [
      "Confusing deadlock with livelock — in livelock, threads keep changing state in response to each other but make no progress.",
      "Not considering that deadlocks can involve more than two threads (circular wait among N threads).",
      "Forgetting that lock ordering must be globally consistent — if thread 1 locks A then B, and thread 2 locks B then A, deadlock occurs."
    ],
    followUpQuestions: [
      "What is a livelock and how is it different from a deadlock?",
      "How would you implement a global lock ordering in a large codebase?",
      "What is the Banker's algorithm and when would you use it?"
    ],
    relatedQuestionIds: ["cs-020", "cs-021", "cs-017"],
    references: [
      { title: "Wikipedia - Deadlock", url: "https://en.wikipedia.org/wiki/Deadlock" },
      { title: "Java Concurrency - Deadlock", url: "https://docs.oracle.com/javase/tutorial/essential/concurrency/deadlock.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Problem Solving (cs-023 – cs-025)
  // ──────────────────────────────────────────────
  {
    id: "cs-023",
    title: "What are common coding patterns for solving interview problems?",
    content: "What are the most common coding patterns used in technical interviews? Explain sliding window, two pointers, fast/slow pointers, and merge intervals.",
    difficulty: "intermediate",
    track: "cs-fundamentals",
    topic: "Problem Solving",
    category: "Problem Solving Patterns",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Common patterns: (1) Sliding Window — maintain a window over a subarray/string, expand/contract to meet conditions. (2) Two Pointers — use two indices to traverse sorted data from both ends. (3) Fast/Slow Pointers — detect cycles, find middle of linked list. (4) Merge Intervals — sort intervals by start time, merge overlapping. (5) Cyclic Sort — for arrays with numbers in a known range. (6) In-place Reversal — reverse linked list segments. (7) Tree BFS/DFS — level-order traversal, path-sum. (8) Top K Elements — use a heap. (9) Subsets/Permutations — backtracking. (10) Binary Search — search space reduction.",
    detailedExplanation: "Sliding Window: used for contiguous subarray/substring problems. Maintain start and end pointers, expand end to include elements, contract start to remove. Example: maximum sum subarray of size k, longest substring without repeating characters.\n\nTwo Pointers: for sorted arrays or when you need to compare pairs. Left and right pointers move toward each other. Example: two-sum in sorted array, container with most water, trapping rain water.\n\nFast/Slow Pointers (Floyd's): fast moves 2 steps, slow moves 1 step. If there's a cycle, they'll meet. Also finds the middle of a linked list (fast reaches end when slow is at middle). Example: detect cycle in linked list, find cycle start, happy number.\n\nMerge Intervals: sort by start time, iterate and merge overlapping intervals. Example: merge intervals, insert interval, meeting rooms.\n\nTop K Elements: use a min-heap of size k. For each element, if it's larger than the heap's min, replace. Example: k-th largest element, top k frequent elements.\n\nSubsets/Perbinations: backtracking — make a choice, recurse, undo choice. Example: subsets, permutations, combination sum, N-queens.\n\nCyclic Sort: for arrays containing numbers 1 to n — place each number at its correct index. Example: find all missing numbers, find the duplicate number.",
    bestAnswer: "Recognizing patterns turns interview problems into template applications:\n\n1. Sliding Window: contiguous subarray/string problems. Two pointers (start, end) maintain a window. Expand end, contract start. O(n). Examples: max subarray sum, longest substring without repeating chars.\n\n2. Two Pointers: sorted data or pair-finding. Left/right converge. O(n). Examples: two-sum sorted, container with most water.\n\n3. Fast/Slow Pointers: cycle detection and linked list middle finding. Floyd's algorithm. O(n).\n\n4. Merge Intervals: sort by start, merge overlaps. O(n log n). Example: merge overlapping intervals.\n\n5. Top K: min-heap of size k. O(n log k). Example: k-th largest element.\n\n6. Backtracking: explore all choices, prune invalid paths. Example: permutations, N-queens.\n\n7. Binary Search on Answer: when the answer space is monotonic. O(n log m) where m is answer range.\n\nMaster these patterns and most interview problems become variations of one of them.",
    alternativeAnswers: [
      "Union-Find (Disjoint Set) is essential for problems involving connected components: number of islands, accounts merge, redundant connection.",
      "Trie (prefix tree) is the go-to pattern for string prefix problems: autocomplete, word search, IP routing."
    ],
    commonMistakes: [
      "Jumping to code without identifying the pattern — spend 2-3 minutes classifying the problem first.",
      "Using the wrong pattern — sliding window requires monotonic/contiguous constraint; two pointers require sorted data or pair-finding.",
      "Not considering the time complexity of the pattern — brute force is O(2^n) but the pattern might achieve O(n) or O(n log n)."
    ],
    followUpQuestions: [
      "How would you solve the 'two sum' problem with each pattern?",
      "When would you use backtracking vs dynamic programming?",
      "Explain the monotonic stack pattern and give a problem example."
    ],
    relatedQuestionIds: ["cs-008", "cs-010", "cs-011"],
    references: [
      { title: "Educative - Grokking the Coding Interview Patterns", url: "https://www.educative.io/courses/grokking-the-coding-interview" },
      { title: "LeetCode Top Interview Questions", url: "https://leetcode.com/explore/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-024",
    title: "How do you approach a coding problem you've never seen before?",
    content: "Walk through your problem-solving approach for an unfamiliar coding question. How do you clarify requirements, analyze the problem, and arrive at a solution?",
    difficulty: "beginner",
    track: "cs-fundamentals",
    topic: "Problem Solving",
    category: "Problem Solving Patterns",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Use a structured approach: (1) Clarify — ask questions about edge cases, constraints, input format. (2) Examples — walk through 1-2 examples manually. (3) Brute Force — state the naive solution and its complexity. (4) Optimize — identify patterns, reduce complexity. (5) Code — implement the optimized solution. (6) Test — trace through examples, check edge cases. (7) Analyze — state time and space complexity.",
    detailedExplanation: "A structured approach demonstrates systematic thinking and communication skills:\n\n1. Clarify (1-2 minutes): Ask about input size, constraints, edge cases. 'Can the array be empty? Are all elements positive? What's the maximum size?' This prevents solving the wrong problem.\n\n2. Examples (2-3 minutes): Work through 1-2 examples by hand. Trace through the expected input/output. This reveals patterns and edge cases.\n\n3. Brute Force (2-3 minutes): State the simplest correct solution. Example: 'I could check all pairs — that's O(n²).' This shows you understand the problem and gives a baseline.\n\n4. Optimize (5-10 minutes): Look for patterns. Can you sort? Use a hash map? Apply binary search? Identify the pattern from cs-023. Discuss tradeoffs of different approaches.\n\n5. Code (10-15 minutes): Write clean, readable code. Use meaningful variable names. Handle edge cases. Think out loud.\n\n6. Test (3-5 minutes): Trace through your code with the examples. Check edge cases (empty input, single element, maximum size). Look for off-by-one errors.\n\n7. Analyze (1-2 minutes): State time and space complexity. Explain why.\n\nCommunication is key — interviewers want to see your thought process, not just the answer. If stuck, say so and try a different approach.",
    bestAnswer: "A systematic approach: (1) Understand: ask clarifying questions — input format, constraints, edge cases, expected output. (2) Examples: trace through 1-2 cases manually. (3) Brute force: state the naive O(n²) or O(2ⁿ) solution — this is a starting point. (4) Optimize: identify the pattern (sliding window, hash map, DP, etc.). Discuss tradeoffs. (5) Code: implement with clean, readable code. (6) Test: trace through examples and edge cases. (7) Analyze: state Big O.\n\nCritical: think out loud. If stuck, verbalize what you're considering. Interviewers value the process more than the answer. If you need a hint, ask — it's better than silently struggling.\n\nTime management: don't spend more than 5 minutes without making progress. If an approach isn't working, step back and try a different angle.",
    alternativeAnswers: [
      "Some candidates prefer to identify the pattern first (from a mental catalog of patterns) before diving into specifics — this can save time if you recognize the right pattern early.",
      "Drawing diagrams (for graph/tree problems) or writing out the state transition (for DP) helps organize thoughts and catches errors early."
    ],
    commonMistakes: [
      "Jumping into code without understanding the problem — this wastes time if you solve the wrong thing.",
      "Spending too long on optimization before coding anything — get a working brute force first.",
      "Not testing edge cases — empty input, single element, large input, negative numbers.",
      "Staying silent during the problem-solving process — interviewers can't help if they don't know what you're thinking."
    ],
    followUpQuestions: [
      "How do you handle it when you're completely stuck on a problem?",
      "How do you balance between brute force and optimized solutions in terms of time?",
      "What's your approach for system design questions vs algorithmic questions?"
    ],
    relatedQuestionIds: ["cs-023", "cs-013", "cs-008"],
    references: [
      { title: "Cracking the Coding Interview - Problem Solving", url: "https://www.crackingthecodinginterview.com/" },
      { title: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cs-025",
    title: "How do you optimize code and analyze trade-offs?",
    content: "How do you identify performance bottlenecks? What are common optimization techniques? How do you balance readability vs performance?",
    difficulty: "advanced",
    track: "cs-fundamentals",
    topic: "Problem Solving",
    category: "Problem Solving Patterns",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Optimize by first measuring (profile) to find the actual bottleneck, not guessing. Common techniques: reduce algorithmic complexity (O(n²) → O(n log n)), use appropriate data structures (hash map for O(1) lookups), memoization/caching, avoid unnecessary work (early termination, lazy evaluation). Balance readability vs performance — optimize only when profiling shows it's needed.",
    detailedExplanation: "Optimization process:\n1. Profile first: use a profiler (Chrome DevTools, Python cProfile, Java JProfiler) to find the actual bottleneck. Don't guess.\n2. Algorithmic optimization: the biggest wins. Reducing O(n²) to O(n log n) dwarfs any micro-optimization.\n3. Data structure optimization: use the right tool — hash map for O(1) lookup, heap for priority, trie for prefix search.\n4. Caching/memoization: store results of expensive computations. LRU cache, Redis, CDN.\n5. Reduce allocations: object pooling, avoid unnecessary copies, use builders.\n6. Lazy evaluation: compute only when needed. Short-circuit evaluation, generators/iterators.\n7. Parallelism: split work across cores for CPU-bound tasks.\n8. I/O optimization: batch operations, async I/O, compression.\n\nReadability vs performance:\n- Write clear code first, optimize only when profiling shows it's needed.\n- Premature optimization is the root of all evil (Knuth).\n- Performance-critical code (hot paths) deserves optimization; cold paths should be readable.\n- Document why non-obvious optimizations exist.\n- Use benchmarks, not intuition, to measure improvement.",
    bestAnswer: "Profile before optimizing — find the actual bottleneck, not what you think is slow. Tools: Chrome DevTools (JS), cProfile (Python), perf (Linux), VTune (Java).\n\nOptimization hierarchy (biggest impact first):\n1. Algorithmic: O(n²) → O(n log n) is the largest possible win. Choose the right algorithm.\n2. Data structures: hash map (O(1) lookup) vs array (O(n) lookup). This is often the easiest fix.\n3. Caching: memoization, LRU cache, Redis. Avoid recomputing expensive results.\n4. Lazy evaluation: don't compute until needed. Short-circuit boolean expressions.\n5. Batching: combine I/O operations, bulk database inserts.\n6. Memory: reduce allocations, use object pools, avoid copies.\n\nReadability first, optimize second. 'Premature optimization is the root of all evil.' Optimize the 3% of code that runs 97% of the time (the 90/10/90 rule: 90% of time is spent in 10% of the code).",
    alternativeAnswers: [
      "Profile-guided optimization (PGO) uses runtime data to guide compiler optimizations — the compiler inlines hot functions and reorders branches based on actual execution patterns.",
      "SIMD (Single Instruction, Multiple Data) can process multiple data points simultaneously — 4x speedup for vectorizable operations like image processing."
    ],
    commonMistakes: [
      "Optimizing without profiling — you might optimize the wrong thing entirely.",
      "Premature optimization — making code unreadable for a 2% speedup on cold paths.",
      "Confusing constant-factor improvements with algorithmic improvements — O(n²) with a 2x speedup is still O(n²).",
      "Ignoring I/O — the most common bottleneck in real systems is disk/network I/O, not CPU."
    ],
    followUpQuestions: [
      "How would you optimize a slow database query?",
      "What is memoization and when would you use it?",
      "How do you decide when to use lazy evaluation?"
    ],
    relatedQuestionIds: ["cs-013", "cs-014", "cs-010"],
    references: [
      { title: "Knuth - Premature Optimization", url: "https://en.wikipedia.org/wiki/Program_optimization#When_to_optimize" },
      { title: "Google - Performance Best Practices", url: "https://developers.google.com/speed" }
    ],
    createdAt: now,
    updatedAt: now,
  },
];
