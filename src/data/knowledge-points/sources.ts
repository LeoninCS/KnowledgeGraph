import type { CategoryId } from "../types.ts";

export const knowledgeSources = {
  "go-docs": {
    title: "Go Documentation",
    url: "https://go.dev/doc/",
  },
  "go-faq-goroutines": {
    title: "Go FAQ: Why goroutines instead of threads?",
    url: "https://go.dev/doc/faq#goroutines",
  },
  "go-runtime-hacking": {
    title: "Go runtime: HACKING",
    url: "https://go.dev/src/runtime/HACKING",
  },
  "cppreference-coroutines": {
    title: "cppreference: Coroutines (C++20)",
    url: "https://en.cppreference.com/cpp/language/coroutines",
  },
  "python-asyncio-tasks": {
    title: "Python Docs: Coroutines and Tasks",
    url: "https://docs.python.org/3/library/asyncio-task.html",
  },
  "libuv-design": {
    title: "libuv Docs: Design overview",
    url: "https://docs.libuv.org/en/v1.x/design.html",
  },
  "rust-async-book-execution": {
    title: "Asynchronous Programming in Rust: Executing Futures and Tasks",
    url: "https://rust-lang.github.io/async-book/02_execution/01_chapter.html",
  },
  "go-command": {
    title: "cmd/go: go command",
    url: "https://pkg.go.dev/cmd/go",
  },
  "go-toolchains": {
    title: "Go Toolchains",
    url: "https://go.dev/doc/toolchain",
  },
  "go-gofmt-command": {
    title: "cmd/gofmt: gofmt command",
    url: "https://pkg.go.dev/cmd/gofmt",
  },
  "go-blog-gofmt": {
    title: "Go Blog: go fmt your code",
    url: "https://go.dev/blog/gofmt",
  },
  "go-spec": {
    title: "The Go Programming Language Specification",
    url: "https://go.dev/ref/spec",
  },
  "go-effective-go": {
    title: "Effective Go",
    url: "https://go.dev/doc/effective_go",
  },
  "go-modules-reference": {
    title: "Go Modules Reference",
    url: "https://go.dev/ref/mod",
  },
  "go-managing-dependencies": {
    title: "Managing dependencies",
    url: "https://go.dev/doc/modules/managing-dependencies",
  },
  "go-mod-tidy-reference": {
    title: "Go Modules Reference: go mod tidy",
    url: "https://go.dev/ref/mod#go-mod-tidy",
  },
  "go-create-module": {
    title: "Tutorial: Create a Go module",
    url: "https://go.dev/doc/tutorial/create-module",
  },
  "go-how-to-write-code": {
    title: "How to Write Go Code",
    url: "https://go.dev/doc/code",
  },
  "go-module-layout": {
    title: "Organizing a Go module",
    url: "https://go.dev/doc/modules/layout",
  },
  "go-blog-package-names": {
    title: "Go Blog: Package names",
    url: "https://go.dev/blog/package-names",
  },
  "go-doc-comments": {
    title: "Go Doc Comments",
    url: "https://go.dev/doc/comment",
  },
  "go-os-exit": {
    title: "os.Exit",
    url: "https://pkg.go.dev/os#Exit",
  },
  "go-os-signal": {
    title: "os/signal",
    url: "https://pkg.go.dev/os/signal",
  },
  "go-faq-stack-heap": {
    title: "Go FAQ: stack or heap",
    url: "https://go.dev/doc/faq#stack_or_heap",
  },
  "go-unsafe-package": {
    title: "unsafe package",
    url: "https://pkg.go.dev/unsafe",
  },
  "go-sync-map": {
    title: "sync.Map",
    url: "https://pkg.go.dev/sync#Map",
  },
  "go-sync-atomic": {
    title: "sync/atomic",
    url: "https://pkg.go.dev/sync/atomic",
  },
  "go-race-detector": {
    title: "Data Race Detector",
    url: "https://go.dev/doc/articles/race_detector",
  },
  "go-sync-mutex": {
    title: "sync.Mutex",
    url: "https://pkg.go.dev/sync#Mutex",
  },
  "go-sync-waitgroup": {
    title: "sync.WaitGroup",
    url: "https://pkg.go.dev/sync#WaitGroup",
  },
  "go-sync-once": {
    title: "sync.Once",
    url: "https://pkg.go.dev/sync#Once",
  },
  "go-sync-oncefunc": {
    title: "sync.OnceFunc and OnceValue",
    url: "https://pkg.go.dev/sync#OnceFunc",
  },
  "go-errgroup": {
    title: "errgroup package",
    url: "https://pkg.go.dev/golang.org/x/sync/errgroup",
  },
  "go-time-package": {
    title: "time package",
    url: "https://pkg.go.dev/time",
  },
  "go-runtime-package": {
    title: "runtime package",
    url: "https://pkg.go.dev/runtime",
  },
  "go-memory-model": {
    title: "The Go Memory Model",
    url: "https://go.dev/ref/mem",
  },
  "go-context-package": {
    title: "context package",
    url: "https://pkg.go.dev/context",
  },
  "go-encoding-json": {
    title: "encoding/json",
    url: "https://pkg.go.dev/encoding/json",
  },
  "go-blog-constants": {
    title: "Go Blog: Constants",
    url: "https://go.dev/blog/constants",
  },
  "go-blog-strings": {
    title: "Go Blog: Strings, bytes, runes and characters in Go",
    url: "https://go.dev/blog/strings",
  },
  "go-blog-slices": {
    title: "Go Blog: Go Slices: usage and internals",
    url: "https://go.dev/blog/slices-intro",
  },
  "go-blog-loopvar": {
    title: "Go Blog: Fixing For Loops in Go 1.22",
    url: "https://go.dev/blog/loopvar-preview",
  },
  "go-builtin-error": {
    title: "builtin: error",
    url: "https://pkg.go.dev/builtin#error",
  },
  "go-errors-package": {
    title: "errors package",
    url: "https://pkg.go.dev/errors",
  },
  "go-blog-errors-1-13": {
    title: "Go Blog: Working with Errors in Go 1.13",
    url: "https://go.dev/blog/go1.13-errors",
  },
  "go-blog-defer-panic-recover": {
    title: "Go Blog: Defer, Panic, and Recover",
    url: "https://go.dev/blog/defer-panic-and-recover",
  },
  "go-generics-tutorial": {
    title: "Tutorial: Getting started with generics",
    url: "https://go.dev/doc/tutorial/generics",
  },
  "go-blog-intro-generics": {
    title: "Go Blog: An Introduction To Generics",
    url: "https://go.dev/blog/intro-generics",
  },
  "go-mvs": {
    title: "Minimal Version Selection",
    url: "https://research.swtch.com/vgo-mvs",
  },
  "go-std-lib": {
    title: "Go Standard Library",
    url: "https://pkg.go.dev/std",
  },
  "go-diagnostics": {
    title: "Go Diagnostics",
    url: "https://go.dev/doc/diagnostics",
  },
  "go-concurrency-pipelines": {
    title: "Go Blog: Pipelines and cancellation",
    url: "https://go.dev/blog/pipelines",
  },
  "cs-notes": {
    title: "CS-Notes 技术面试必备基础知识",
    url: "https://github.com/CyC2018/CS-Notes",
  },
  javaguide: {
    title: "JavaGuide Java 面试与后端通用面试指南",
    url: "https://github.com/Snailclimb/JavaGuide",
  },
  "nist-dads-array": {
    title: "NIST DADS: array",
    url: "https://xlinux.nist.gov/dads/HTML/array.html",
  },
  "oracle-java-arrays": {
    title: "Oracle Java Tutorials: Arrays",
    url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html",
  },
  "open-data-structures-arrays": {
    title: "Open Data Structures: Array-Based Lists",
    url: "https://opendatastructures.org/newhtml/ods/latex/arrays.html",
  },
  "hello-algo-array": {
    title: "Hello 算法: 数组",
    url: "https://www.hello-algo.com/chapter_array_and_linkedlist/array/",
  },
  "usaco-guide-two-pointers": {
    title: "USACO Guide: Two Pointers",
    url: "https://usaco.guide/silver/two-pointers",
  },
  "competitive-programmers-handbook": {
    title: "Competitive Programmer's Handbook",
    url: "https://usaco.guide/CPH.pdf",
  },
  "labuladong-two-pointers": {
    title: "labuladong 的算法笔记: 双指针技巧",
    url: "https://gitee.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E5%8F%8C%E6%8C%87%E9%92%88%E6%8A%80%E5%B7%A7.md",
  },
  "cp-algorithms-tortoise-hare": {
    title: "cp-algorithms: Tortoise and Hare Algorithm",
    url: "https://cp-algorithms.com/others/tortoise_and_hare.html",
  },
  "usaco-guide-functional-graphs": {
    title: "USACO Guide: Introduction to Functional Graphs",
    url: "https://usaco.guide/silver/func-graphs",
  },
  "leetcode-hard-way-sliding-window": {
    title: "LeetCode The Hard Way: Sliding Window",
    url: "https://leetcodethehardway.com/tutorials/basic-topics/sliding-window",
  },
  "cp-algorithms-minimum-queue": {
    title: "cp-algorithms: Minimum Stack / Minimum Queue",
    url: "https://cp-algorithms.com/data_structures/stack_queue_modification.html",
  },
  "labuladong-monotonic-queue": {
    title: "labuladong 的算法笔记: 单调队列结构解决滑动窗口问题",
    url: "https://labuladong.online/zh/algo/data-structure/monotonic-queue/",
  },
  "usaco-guide-sliding-window": {
    title: "USACO Guide: Sliding Window",
    url: "https://usaco.guide/gold/sliding-window",
  },
  "labuladong-sliding-window": {
    title: "labuladong 的算法笔记: 滑动窗口算法",
    url: "https://gitee.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%8A%80%E5%B7%A7.md",
  },
  "usaco-guide-prefix-sums": {
    title: "USACO Guide: Introduction to Prefix Sums",
    url: "https://usaco.guide/silver/prefix-sums",
  },
  "usaco-guide-more-prefix-sums": {
    title: "USACO Guide: More on Prefix Sums",
    url: "https://usaco.guide/silver/more-prefix-sums",
  },
  "oi-wiki-prefix-sum": {
    title: "OI Wiki: 前缀和 & 差分",
    url: "https://oi-wiki.org/basic/prefix-sum/",
  },
  "cppreference-partial-sum": {
    title: "cppreference: std::partial_sum",
    url: "https://en.cppreference.com/w/cpp/algorithm/partial_sum",
  },
  "cppreference-adjacent-difference": {
    title: "cppreference: std::adjacent_difference",
    url: "https://en.cppreference.com/w/cpp/algorithm/adjacent_difference",
  },
  "open-data-structures-book": {
    title: "Open Data Structures",
    url: "https://opendatastructures.org/",
  },
  "mit-ocw-introduction-to-algorithms": {
    title: "MIT OpenCourseWare: Introduction to Algorithms",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
  },
  "mit-press-introduction-to-algorithms": {
    title: "MIT Press: Introduction to Algorithms",
    url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
  },
  "mit-ocw-asymptotic-complexity": {
    title: "MIT OpenCourseWare: 6.006 Recitation 1 Notes, Asymptotic Complexity",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/ce8348ec64dce3841ced6a9d0c9e48f2_MIT6_006F11_rec01.pdf",
  },
  "khan-academy-big-o": {
    title: "Khan Academy: Big-O notation",
    url: "https://www.khanacademy.org/computing/computer-science/algorithms/big-o-notation",
  },
  "jhu-dsa-space-complexity": {
    title: "JHU DSA: Space Complexity",
    url: "https://jhu-dsa.github.io/notes/10-asymptotics/step02.html",
  },
  "khan-academy-recursion": {
    title: "Khan Academy: Recursion",
    url: "https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion",
  },
  "khan-academy-recursive-factorial": {
    title: "Khan Academy: Recursive factorial",
    url: "https://www.khanacademy.org/computing/grade-10-computer-science-pakistan-national-curriculum/xa40329e704bba224%3Acomputational-thinking-and-algorithms/xa40329e704bba224%3Arecursive-algorithms/a/recursive-factorial",
  },
  "python-sys-recursionlimit": {
    title: "Python Docs: sys.setrecursionlimit",
    url: "https://docs.python.org/3/library/sys.html#sys.setrecursionlimit",
  },
  "mdn-too-much-recursion": {
    title: "MDN: InternalError too much recursion",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion",
  },
  "mit-6046-divide-conquer": {
    title: "MIT OCW 6.046J: Divide and Conquer",
    url: "https://ocw.mit.edu/courses/6-046j-introduction-to-algorithms-sma-5503-fall-2005/9cdb6914be3e87215cb86f327ee4180b_lec3.pdf",
  },
  "khan-academy-divide-conquer": {
    title: "Khan Academy: Divide-and-conquer algorithms",
    url: "https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms",
  },
  "geeksforgeeks-divide-conquer": {
    title: "GeeksforGeeks: Introduction to Divide and Conquer Algorithm",
    url: "https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm/",
  },
  "stanford-cs161-divide-conquer": {
    title: "Stanford CS161: Divide-and-Conquer Algorithms",
    url: "https://web.stanford.edu/class/archive/cs/cs161/cs161.1138/lectures/08/Small08.pdf",
  },
  "cp-algorithms-binary-search": {
    title: "cp-algorithms: Binary Search",
    url: "https://cp-algorithms.com/num_methods/binary_search.html",
  },
  "cppreference-binary-search": {
    title: "cppreference: std::binary_search",
    url: "https://en.cppreference.com/w/cpp/algorithm/binary_search",
  },
  "cppreference-lower-bound": {
    title: "cppreference: std::lower_bound",
    url: "https://en.cppreference.com/w/cpp/algorithm/lower_bound",
  },
  "cppreference-upper-bound": {
    title: "cppreference: std::upper_bound",
    url: "https://en.cppreference.com/w/cpp/algorithm/upper_bound",
  },
  "python-bisect": {
    title: "Python Docs: bisect",
    url: "https://docs.python.org/3/library/bisect.html",
  },
  "geeksforgeeks-lower-upper-bound": {
    title: "GeeksforGeeks: Lower Bound and Upper Bound in Binary Search",
    url: "https://www.geeksforgeeks.org/dsa/implementing-upper_bound-and-lower_bound-in-c/",
  },
  "usaco-guide-binary-search": {
    title: "USACO Guide: Binary Search",
    url: "https://usaco.guide/silver/binary-search",
  },
  "nist-dads-search": {
    title: "NIST DADS: search",
    url: "https://xlinux.nist.gov/dads/HTML/search.html",
  },
  "nist-dads-linear-search": {
    title: "NIST DADS: linear search",
    url: "https://xlinux.nist.gov/dads/HTML/linearSearch.html",
  },
  "princeton-algs4-searching": {
    title: "Princeton Algorithms, 4th Edition: Searching",
    url: "https://algs4.cs.princeton.edu/30searching/",
  },
  "cppreference-find": {
    title: "cppreference: std::find",
    url: "https://en.cppreference.com/w/cpp/algorithm/find",
  },
  "khan-academy-algorithms": {
    title: "Khan Academy: Algorithms",
    url: "https://www.khanacademy.org/computing/computer-science/algorithms",
  },
  "geeksforgeeks-linear-search": {
    title: "GeeksforGeeks: Linear Search Algorithm",
    url: "https://www.geeksforgeeks.org/dsa/linear-search/",
  },
  "geeksforgeeks-binary-search-answer": {
    title: "GeeksforGeeks: Binary Search on Answer Tutorial with Problems",
    url: "https://www.geeksforgeeks.org/dsa/binary-search-on-answer-tutorial-with-problems/",
  },
  "geeksforgeeks-binary-search-technique": {
    title: "GeeksforGeeks: Binary Search Technique",
    url: "https://www.geeksforgeeks.org/dsa/binary-search-identify-solve-and-interview-questions/",
  },
  "khan-academy-binary-search": {
    title: "Khan Academy: Binary search",
    url: "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search",
  },
  "nist-dads-linked-list": {
    title: "NIST DADS: linked list",
    url: "https://xlinux.nist.gov/dads/HTML/linkedList.html",
  },
  "open-data-structures-linked-lists": {
    title: "Open Data Structures: Linked Lists",
    url: "https://opendatastructures.org/newhtml/ods/latex/linkedlists.html",
  },
  "oracle-java-linked-list": {
    title: "Oracle Java API: LinkedList",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedList.html",
  },
  "hello-algo-linked-list": {
    title: "Hello 算法: 链表",
    url: "https://www.hello-algo.com/chapter_array_and_linkedlist/linked_list/",
  },
  "algolist-singly-linked-list-insertion": {
    title: "Algorithms and Data Structures: Singly-linked list insertion",
    url: "https://www.algolist.net/Data_structures/Singly-linked_list/Insertion",
  },
  "niu-doubly-linked-list": {
    title: "NIU CS: Doubly-Linked List Insertion and Deletion",
    url: "https://faculty.cs.niu.edu/~winans/CS501/Notes/Data_Structures/doubly_linked.html",
  },
  "libretexts-stack": {
    title: "Engineering LibreTexts: Stack Data Structure",
    url: "https://eng.libretexts.org/Courses/Delta_College/C_-_Data_Structures/09%3A_Lesson_5_-_Stack_Data_Structure/9.01%3A_Lesson_5-1_-_Stacks",
  },
  "nist-dads-stack": {
    title: "NIST DADS: stack",
    url: "https://xlinux.nist.gov/dads/HTML/stack.html",
  },
  "oracle-java-deque": {
    title: "Oracle Java API: Deque",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Deque.html",
  },
  "cppreference-deque": {
    title: "cppreference: std::deque",
    url: "https://en.cppreference.com/w/cpp/container/deque.html",
  },
  "python-collections-deque": {
    title: "Python Docs: collections.deque",
    url: "https://docs.python.org/3/library/collections.html#collections.deque",
  },
  "rust-vecdeque": {
    title: "Rust std::collections::VecDeque",
    url: "https://doc.rust-lang.org/std/collections/struct.VecDeque.html",
  },
  "open-data-structures-arraydeque": {
    title: "Open Data Structures: ArrayDeque",
    url: "https://opendatastructures.org/newhtml/ods/latex/arrays.html#section:2.4",
  },
  "open-data-structures-dualarraydeque": {
    title: "Open Data Structures: DualArrayDeque",
    url: "https://opendatastructures.org/newhtml/ods/latex/arrays.html#section:2.5",
  },
  "oi-wiki-monotonous-queue": {
    title: "OI Wiki: 单调队列",
    url: "https://oi-wiki.org/ds/monotonous-queue/",
  },
  "oracle-java-stack": {
    title: "Oracle Java API: Stack",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Stack.html",
  },
  "hello-algo-stack": {
    title: "Hello 算法: 栈",
    url: "https://www.hello-algo.com/chapter_stack_and_queue/stack/",
  },
  "oi-wiki-monotonous-stack": {
    title: "OI Wiki: Monotonous Stack",
    url: "https://en.oi-wiki.org/ds/monotonous-stack/",
  },
  "usaco-guide-stacks": {
    title: "USACO Guide: Stacks",
    url: "https://usaco.guide/gold/stacks",
  },
  "warwick-stacks-queues": {
    title: "Warwick Guide: Stacks and Queues",
    url: "https://warwick.guide/modules/CS126/Primary_Notes/stacks-and-queues",
  },
  "weber-stack-operations": {
    title: "Weber State CS1410: Stacks And Stack Operations",
    url: "https://icarus.cs.weber.edu/~dab/cs1410/textbook/7.Arrays/stack.html",
  },
  "yale-cpsc223-stack": {
    title: "Yale CPSC 223: Stack implementation notes",
    url: "https://www.cs.yale.edu/homes/aspnes/classes/223/notes.html",
  },
  "nist-dads-fifo": {
    title: "NIST DADS: first-in, first-out",
    url: "https://xlinux.nist.gov/dads/HTML/firstinfrstt.html",
  },
  "nist-dads-circular-queue": {
    title: "NIST DADS: circular queue",
    url: "https://xlinux.nist.gov/dads/HTML/circularQueue.html",
  },
  "oracle-java-queue": {
    title: "Oracle Java API: Queue",
    url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Queue.html",
  },
  "open-data-structures-arrayqueue": {
    title: "Open Data Structures: ArrayQueue",
    url: "https://opendatastructures.org/newhtml/ods/latex/arrays.html#SECTION00530000000000000000",
  },
  "hello-algo-queue": {
    title: "Hello 算法: 队列",
    url: "https://www.hello-algo.com/chapter_stack_and_queue/queue/",
  },
  "nist-dads-hash-table": {
    title: "NIST DADS: hash table",
    url: "https://xlinux.nist.gov/dads/HTML/hashtab.html",
  },
  "nist-csrc-hash-function": {
    title: "NIST CSRC Glossary: hash function",
    url: "https://csrc.nist.gov/glossary/term/hash_function",
  },
  "nist-csrc-collision": {
    title: "NIST CSRC Glossary: collision",
    url: "https://csrc.nist.gov/glossary/term/collision",
  },
  "nist-dads-load-factor": {
    title: "NIST DADS: load factor",
    url: "https://xlinux.nist.gov/dads/HTML/loadfactor.html",
  },
  "open-data-structures-chained-hash-table": {
    title: "Open Data Structures: Hashing with Chaining",
    url: "https://opendatastructures.org/ods-cpp/5_1_Hashing_with_Chaining.html",
  },
  "oracle-java-hashmap": {
    title: "Oracle Java API: HashMap",
    url: "https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html",
  },
  "oracle-java-linkedhashmap": {
    title: "Oracle Java API: LinkedHashMap",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedHashMap.html",
  },
  "oracle-java-set": {
    title: "Oracle Java API: Set",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Set.html",
  },
  "oracle-java-hashset": {
    title: "Oracle Java API: HashSet",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/HashSet.html",
  },
  "oracle-java-object-hashcode": {
    title: "Oracle Java API: Object.hashCode",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html#hashCode()",
  },
  "oracle-java8-collections-changes": {
    title: "Oracle Java 8: Collections Framework Enhancements",
    url: "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/changes8.html",
  },
  "python-dict": {
    title: "Python Docs: Mapping Types - dict",
    url: "https://docs.python.org/3/library/stdtypes.html#mapping-types-dict",
  },
  "python-set-types": {
    title: "Python Docs: Set Types - set, frozenset",
    url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset",
  },
  "python-datamodel-hash": {
    title: "Python Data Model: object.__hash__",
    url: "https://docs.python.org/3/reference/datamodel.html#object.__hash__",
  },
  "python-functools-lru-cache": {
    title: "Python Docs: functools.lru_cache",
    url: "https://docs.python.org/3/library/functools.html#functools.lru_cache",
  },
  "cppreference-unordered-map": {
    title: "cppreference: std::unordered_map",
    url: "https://en.cppreference.com/w/cpp/container/unordered_map.html",
  },
  "cppreference-unordered-set": {
    title: "cppreference: std::unordered_set",
    url: "https://en.cppreference.com/w/cpp/container/unordered_set.html",
  },
  "cppreference-std-hash": {
    title: "cppreference: std::hash",
    url: "https://en.cppreference.com/w/cpp/utility/hash.html",
  },
  "hello-algo-hash-map": {
    title: "Hello 算法: 哈希表",
    url: "https://www.hello-algo.com/chapter_hashing/hash_map/",
  },
  "mdn-javascript-set": {
    title: "MDN Web Docs: Set",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
  },
  "oi-wiki-tree-basic": {
    title: "OI Wiki: 树基础",
    url: "https://oi-wiki.org/graph/tree-basic/",
  },
  "open-data-structures-binary-trees": {
    title: "Open Data Structures: Binary Trees",
    url: "https://opendatastructures.org/ods-cpp/6_Binary_Trees.html",
  },
  "hello-algo-binary-tree": {
    title: "Hello 算法: 二叉树",
    url: "https://www.hello-algo.com/chapter_tree/binary_tree/",
  },
  "opendsa-binary-tree": {
    title: "OpenDSA: Binary Trees",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/BinaryTree.html",
  },
  "opendsa-binary-tree-traversal": {
    title: "OpenDSA: Binary Tree Traversals",
    url: "https://opendsa.cs.vt.edu/ODSA/Books/wmu/cs3310/fall-2018/TR_100pm/html/BinaryTreeTraversal.html",
  },
  "opendsa-binary-search-trees": {
    title: "OpenDSA: Binary Search Trees",
    url: "https://opendsa.cs.vt.edu/ODSA/Books/Everything/html/BST.html",
  },
  "open-data-structures-binary-search-trees": {
    title: "Open Data Structures: BinarySearchTree",
    url: "https://opendatastructures.org/ods-java/6_2_BinarySearchTree_Unbala.html",
  },
  "hello-algo-binary-search-tree": {
    title: "Hello 算法: 二叉搜索树",
    url: "https://www.hello-algo.com/chapter_tree/binary_search_tree/",
  },
  "oi-wiki-bst": {
    title: "OI Wiki: 二叉搜索树与平衡树",
    url: "https://oi-wiki.org/ds/bst/",
  },
  "visualgo-bst": {
    title: "VisuAlgo: Binary Search Tree",
    url: "https://visualgo.net/en/bst",
  },
  "opendsa-avl-tree": {
    title: "OpenDSA: The AVL Tree",
    url: "https://opendsa.cs.vt.edu/ODSA/Books/Everything/html/AVL.html",
  },
  "hello-algo-avl-tree": {
    title: "Hello 算法: AVL 树",
    url: "https://www.hello-algo.com/chapter_tree/avl_tree/",
  },
  "oracle-java-treemap": {
    title: "Oracle Java API: TreeMap",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/TreeMap.html",
  },
  "open-data-structures-red-black-tree": {
    title: "Open Data Structures: RedBlackTree",
    url: "https://opendatastructures.org/ods-java/9_2_RedBlackTree_Simulated_.html",
  },
  "cp-algorithms-treap": {
    title: "cp-algorithms: Treap",
    url: "https://cp-algorithms.com/data_structures/treap.html",
  },
  "geeksforgeeks-tree-traversals": {
    title: "GeeksforGeeks: Tree Traversal Techniques",
    url: "https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/",
  },
  "princeton-algs4-tries": {
    title: "Princeton Algorithms: Tries",
    url: "https://algs4.cs.princeton.edu/52trie/",
  },
  "oi-wiki-trie": {
    title: "OI Wiki: 字典树 (Trie)",
    url: "https://oi-wiki.org/string/trie/",
  },
  "geeksforgeeks-trie": {
    title: "GeeksforGeeks: Trie Data Structure",
    url: "https://www.geeksforgeeks.org/dsa/trie-insert-and-search/",
  },
  "cp-algorithms-aho-corasick": {
    title: "cp-algorithms: Aho-Corasick algorithm",
    url: "https://cp-algorithms.com/string/aho_corasick.html",
  },
  "princeton-algs4-union-find": {
    title: "Princeton Algorithms: Union-Find",
    url: "https://algs4.cs.princeton.edu/15uf/",
  },
  "cp-algorithms-dsu": {
    title: "cp-algorithms: Disjoint Set Union",
    url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html",
  },
  "oi-wiki-dsu": {
    title: "OI Wiki: 并查集",
    url: "https://oi-wiki.org/ds/dsu/",
  },
  "opendsa-union-find": {
    title: "OpenDSA: Union/FIND",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/UnionFind.html",
  },
  "uiuc-cs225-disjoint-sets": {
    title: "UIUC CS 225: Disjoint Sets",
    url: "https://courses.grainger.illinois.edu/cs225/sp2024/resources/disjoint-sets/",
  },
  "princeton-algs4-priority-queues": {
    title: "Princeton Algorithms: Priority Queues",
    url: "https://algs4.cs.princeton.edu/24pq/",
  },
  "open-data-structures-heaps": {
    title: "Open Data Structures: Heaps",
    url: "https://opendatastructures.org/newhtml/ods/latex/heaps.html",
  },
  "python-heapq": {
    title: "Python Docs: heapq - Heap queue algorithm",
    url: "https://docs.python.org/3/library/heapq.html",
  },
  "oracle-java-priorityqueue": {
    title: "Oracle Java API: PriorityQueue",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/PriorityQueue.html",
  },
  "cppreference-priority-queue": {
    title: "cppreference: std::priority_queue",
    url: "https://en.cppreference.com/w/cpp/container/priority_queue.html",
  },
  "oi-wiki-binary-heap": {
    title: "OI Wiki: 二叉堆",
    url: "https://oi-wiki.org/ds/binary-heap/",
  },
  "opendsa-graph-intro": {
    title: "OpenDSA: Graphs",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/GraphIntro.html",
  },
  "princeton-algs4-undirected-graphs": {
    title: "Princeton Algorithms: Undirected Graphs",
    url: "https://algs4.cs.princeton.edu/41graph/",
  },
  "oi-wiki-graph-concepts": {
    title: "OI Wiki: 图论概念",
    url: "https://oi-wiki.org/graph/concept/",
  },
  "oi-wiki-graph-save": {
    title: "OI Wiki: 图的存储",
    url: "https://oi-wiki.org/graph/save/",
  },
  "networkx-graph": {
    title: "NetworkX: Graph",
    url: "https://networkx.org/documentation/stable/reference/classes/graph.html",
  },
  "jgrapht-overview": {
    title: "JGraphT: Overview for Application Developers",
    url: "https://jgrapht.org/guide/UserOverview",
  },
  "open-data-structures-adjacency-matrix": {
    title: "Open Data Structures: AdjacencyMatrix",
    url: "https://opendatastructures.org/ods-java/12_1_AdjacencyMatrix_Repres.html",
  },
  "open-data-structures-adjacency-lists": {
    title: "Open Data Structures: AdjacencyLists",
    url: "https://opendatastructures.org/ods-java/12_2_AdjacencyLists_Graph_a.html",
  },
  "networkx-graph-adjacency": {
    title: "NetworkX: Graph.adjacency",
    url: "https://networkx.org/documentation/stable/reference/classes/generated/networkx.Graph.adjacency.html",
  },
  "cp-algorithms-dfs": {
    title: "cp-algorithms: Depth First Search",
    url: "https://cp-algorithms.com/graph/depth-first-search.html",
  },
  "oi-wiki-graph-dfs": {
    title: "OI Wiki: DFS（图论）",
    url: "https://oi-wiki.org/graph/dfs/",
  },
  "opendsa-graph-traversal": {
    title: "OpenDSA: Graph Traversals",
    url: "https://opendsa.org/OpenDSA/Books/Everything/html/GraphTraversal.html",
  },
  "princeton-algs4-depth-first-search": {
    title: "Princeton Algorithms: DepthFirstSearch",
    url: "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/DepthFirstSearch.html",
  },
  "open-data-structures-graph-traversal": {
    title: "Open Data Structures: Graph Traversal",
    url: "https://opendatastructures.org/ods-python/12_3_Graph_Traversal.html",
  },
  "cp-algorithms-bfs": {
    title: "cp-algorithms: Breadth First Search",
    url: "https://cp-algorithms.com/graph/breadth-first-search.html",
  },
  "cp-algorithms-01-bfs": {
    title: "cp-algorithms: 0-1 BFS",
    url: "https://cp-algorithms.com/graph/01_bfs.html",
  },
  "oi-wiki-search-bfs": {
    title: "OI Wiki: BFS（搜索）",
    url: "https://oi-wiki.org/search/bfs/",
  },
  "princeton-algs4-breadth-first-paths": {
    title: "Princeton Algorithms: BreadthFirstPaths",
    url: "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/BreadthFirstPaths.html",
  },
  "cp-algorithms-topological-sort": {
    title: "cp-algorithms: Topological Sorting",
    url: "https://cp-algorithms.com/graph/topological-sort.html",
  },
  "oi-wiki-topological-sort": {
    title: "OI Wiki: 拓扑排序",
    url: "https://oi.wiki/graph/topo/",
  },
  "princeton-algs4-topological": {
    title: "Princeton Algorithms: Topological",
    url: "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/Topological.html",
  },
  "networkx-topological-sort": {
    title: "NetworkX: topological_sort",
    url: "https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.dag.topological_sort.html",
  },
  "networkx-dag": {
    title: "NetworkX: Directed Acyclic Graphs",
    url: "https://networkx.org/documentation/stable/reference/algorithms/dag.html",
  },
  "cp-algorithms-dijkstra": {
    title: "cp-algorithms: Dijkstra Algorithm",
    url: "https://cp-algorithms.com/graph/dijkstra.html",
  },
  "oi-wiki-shortest-path": {
    title: "OI Wiki: 最短路",
    url: "https://oi-wiki.org/graph/shortest-path/",
  },
  "princeton-algs4-shortest-paths": {
    title: "Princeton Algorithms: Shortest Paths",
    url: "https://algs4.cs.princeton.edu/44sp/",
  },
  "networkx-dijkstra-path": {
    title: "NetworkX: dijkstra_path",
    url: "https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.weighted.dijkstra_path.html",
  },
  "networkx-shortest-paths": {
    title: "NetworkX: Shortest Paths",
    url: "https://networkx.org/documentation/stable/reference/algorithms/shortest_paths.html",
  },
  "mit-6006-dijkstra": {
    title: "MIT 6.006: Dijkstra",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ec187276db0faaa047d655979a44de7f_MIT6_006S20_r13.pdf",
  },
  "princeton-algs4-mst": {
    title: "Princeton Algorithms: Minimum Spanning Trees",
    url: "https://algs4.cs.princeton.edu/43mst/",
  },
  "cp-algorithms-mst-kruskal": {
    title: "cp-algorithms: Minimum Spanning Tree - Kruskal",
    url: "https://cp-algorithms.com/graph/mst_kruskal.html",
  },
  "cp-algorithms-mst-prim": {
    title: "cp-algorithms: Minimum Spanning Tree - Prim",
    url: "https://cp-algorithms.com/graph/mst_prim.html",
  },
  "oi-wiki-mst": {
    title: "OI Wiki: 最小生成树",
    url: "https://oi-wiki.org/graph/mst/",
  },
  "networkx-minimum-spanning-tree": {
    title: "NetworkX: minimum_spanning_tree",
    url: "https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.tree.mst.minimum_spanning_tree.html",
  },
  "princeton-algs4-prim-mst": {
    title: "Princeton Algorithms: PrimMST",
    url: "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/PrimMST.html",
  },
  "princeton-algs4-sorting": {
    title: "Princeton Algorithms: Sorting",
    url: "https://algs4.cs.princeton.edu/20sorting/",
  },
  "princeton-algs4-sorting-applications": {
    title: "Princeton Algorithms: Sorting Applications",
    url: "https://algs4.cs.princeton.edu/25applications/",
  },
  "princeton-algs4-elementary-sorts": {
    title: "Princeton Algorithms: Elementary Sorts",
    url: "https://algs4.cs.princeton.edu/21elementary/",
  },
  "python-sorting-howto": {
    title: "Python Docs: Sorting Techniques",
    url: "https://docs.python.org/3/howto/sorting.html",
  },
  "oracle-java-arrays-sort": {
    title: "Oracle Java API: Arrays.sort",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html",
  },
  "oracle-java-comparator": {
    title: "Oracle Java API: Comparator",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Comparator.html",
  },
  "cppreference-sort": {
    title: "cppreference: std::sort",
    url: "https://en.cppreference.com/w/cpp/algorithm/sort.html",
  },
  "cppreference-stable-sort": {
    title: "cppreference: std::stable_sort",
    url: "https://en.cppreference.com/w/cpp/algorithm/stable_sort.html",
  },
  "opendsa-sorting-lower-bound": {
    title: "OpenDSA: Sorting Lower Bound",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/SortingLowerBound.html",
  },
  "oi-wiki-sort-intro": {
    title: "OI Wiki: 排序简介",
    url: "https://oi-wiki.org/basic/sort-intro/",
  },
  "opendsa-bubble-sort": {
    title: "OpenDSA: Bubble Sort",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/BubbleSort.html",
  },
  "oi-wiki-bubble-sort": {
    title: "OI Wiki: 冒泡排序",
    url: "https://oi-wiki.org/basic/bubble-sort/",
  },
  "visualgo-sorting-bubble": {
    title: "VisuAlgo: Sorting - Bubble Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-bubble-sort": {
    title: "GeeksforGeeks: Bubble Sort",
    url: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
  },
  "hello-algo-bubble-sort": {
    title: "Hello 算法: 冒泡排序",
    url: "https://www.hello-algo.com/chapter_sorting/bubble_sort/",
  },
  "opendsa-selection-sort": {
    title: "OpenDSA: Selection Sort",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/SelectionSort.html",
  },
  "oi-wiki-selection-sort": {
    title: "OI Wiki: 选择排序",
    url: "https://oi-wiki.org/basic/selection-sort/",
  },
  "visualgo-sorting-selection": {
    title: "VisuAlgo: Sorting - Selection Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-selection-sort": {
    title: "GeeksforGeeks: Selection Sort",
    url: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm-2/",
  },
  "opendsa-insertion-sort": {
    title: "OpenDSA: Insertion Sort",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/InsertionSort.html",
  },
  "oi-wiki-insertion-sort": {
    title: "OI Wiki: 插入排序",
    url: "https://oi-wiki.org/basic/insertion-sort/",
  },
  "visualgo-sorting-insertion": {
    title: "VisuAlgo: Sorting - Insertion Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-insertion-sort": {
    title: "GeeksforGeeks: Insertion Sort",
    url: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
  },
  "princeton-algs4-merge-sort": {
    title: "Princeton Algorithms: Mergesort",
    url: "https://algs4.cs.princeton.edu/22mergesort/",
  },
  "opendsa-merge-sort-concepts": {
    title: "OpenDSA: Mergesort Concepts",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/Mergesort.html",
  },
  "opendsa-merge-sort-implementation": {
    title: "OpenDSA: Implementing Mergesort",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/MergesortImpl.html",
  },
  "oi-wiki-merge-sort": {
    title: "OI Wiki: 归并排序",
    url: "https://oi-wiki.org/basic/merge-sort/",
  },
  "visualgo-sorting-merge": {
    title: "VisuAlgo: Sorting - Merge Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-merge-sort": {
    title: "GeeksforGeeks: Merge Sort",
    url: "https://www.geeksforgeeks.org/dsa/merge-sort/",
  },
  "princeton-algs4-quick-sort": {
    title: "Princeton Algorithms: Quicksort",
    url: "https://algs4.cs.princeton.edu/23quicksort/",
  },
  "opendsa-quick-sort": {
    title: "OpenDSA: Quicksort",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/Quicksort.html",
  },
  "oi-wiki-quick-sort": {
    title: "OI Wiki: 快速排序",
    url: "https://oi-wiki.org/basic/quick-sort/",
  },
  "visualgo-sorting-quick": {
    title: "VisuAlgo: Sorting - Quick Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-quick-sort": {
    title: "GeeksforGeeks: Quick Sort",
    url: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
  },
  "cp-algorithms-kth-order-statistic": {
    title: "cp-algorithms: K-th order statistic in O(N)",
    url: "https://cp-algorithms.com/sequences/k-th.html",
  },
  "geeksforgeeks-quickselect": {
    title: "GeeksforGeeks: Quickselect Algorithm",
    url: "https://www.geeksforgeeks.org/dsa/quickselect-algorithm/",
  },
  "oregonstate-quickselect": {
    title: "Oregon State Algorithms Course: Quickselect",
    url: "https://web.engr.oregonstate.edu/~huanlian/algorithms_course/1-datastructures/quickselect.html",
  },
  "opendsa-heap-sort": {
    title: "OpenDSA: Heapsort",
    url: "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/Heapsort.html",
  },
  "oi-wiki-heap-sort": {
    title: "OI Wiki: 堆排序",
    url: "https://oi-wiki.org/basic/heap-sort/",
  },
  "visualgo-sorting-heap": {
    title: "VisuAlgo: Sorting - Heap Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-heap-sort": {
    title: "GeeksforGeeks: Heap Sort",
    url: "https://www.geeksforgeeks.org/dsa/heap-sort/",
  },
  "oi-wiki-counting-sort": {
    title: "OI Wiki: 计数排序",
    url: "https://oi-wiki.org/basic/counting-sort/",
  },
  "visualgo-sorting-counting": {
    title: "VisuAlgo: Sorting - Counting Sort",
    url: "https://visualgo.net/en/sorting",
  },
  "geeksforgeeks-counting-sort": {
    title: "GeeksforGeeks: Counting Sort",
    url: "https://www.geeksforgeeks.org/dsa/counting-sort/",
  },
  "oi-wiki-bucket-sort": {
    title: "OI Wiki: 桶排序",
    url: "https://oi-wiki.org/basic/bucket-sort/",
  },
  "geeksforgeeks-bucket-sort": {
    title: "GeeksforGeeks: Bucket Sort",
    url: "https://www.geeksforgeeks.org/dsa/bucket-sort-2/",
  },
  "programiz-bucket-sort": {
    title: "Programiz: Bucket Sort",
    url: "https://www.programiz.com/dsa/bucket-sort",
  },
  "oi-wiki-greedy": {
    title: "OI Wiki: 贪心",
    url: "https://oi-wiki.org/basic/greedy/",
  },
  "geeksforgeeks-greedy-algorithms": {
    title: "GeeksforGeeks: Greedy Algorithms Tutorial",
    url: "https://www.geeksforgeeks.org/dsa/greedy-algorithms/",
  },
  "programiz-greedy-algorithm": {
    title: "Programiz: Greedy Algorithm",
    url: "https://www.programiz.com/dsa/greedy-algorithm",
  },
  "cp-algorithms-scheduling-one-machine": {
    title: "cp-algorithms: Scheduling jobs on one machine",
    url: "https://cp-algorithms.com/schedules/schedule_one_machine.html",
  },
  "geeksforgeeks-activity-selection": {
    title: "GeeksforGeeks: Activity Selection",
    url: "https://www.geeksforgeeks.org/dsa/activity-selection-problem-greedy-algo-1/",
  },
  "hope-greedy-interval-scheduling": {
    title: "Hope College Algorithms: Greedy Interval Scheduling",
    url: "https://cusack.hope.edu/Algorithms/Content/Algorithms/Greedy/Interval%20Scheduling.html?path=Problems%2FOptimization%2FInterval+Scheduling",
  },
  "cse102-greedy-algorithms": {
    title: "CSE102 Notes: Greedy Algorithms",
    url: "https://cse102-notes.readthedocs.io/en/latest/greedy.html",
  },
  "wikipedia-interval-scheduling": {
    title: "Wikipedia: Interval scheduling",
    url: "https://en.wikipedia.org/wiki/Interval_scheduling",
  },
  "geeksforgeeks-backtracking-algorithms": {
    title: "GeeksforGeeks: Backtracking Algorithm",
    url: "https://www.geeksforgeeks.org/dsa/backtracking-algorithms/",
  },
  "geeksforgeeks-intro-backtracking": {
    title: "GeeksforGeeks: Introduction to Backtracking",
    url: "https://www.geeksforgeeks.org/dsa/introduction-to-backtracking-2/",
  },
  "programiz-backtracking-algorithm": {
    title: "Programiz: Backtracking Algorithm",
    url: "https://www.programiz.com/dsa/backtracking-algorithm",
  },
  "oi-wiki-backtracking": {
    title: "OI Wiki Next: 回溯法",
    url: "https://next.oi-wiki.org/search/backtracking/",
  },
  "stanford-cs106b-recursive-backtracking": {
    title: "Stanford CS106B: Recursive Backtracking Examples",
    url: "https://see.stanford.edu/materials/icspacs106b/H19-RecBacktrackExamples.pdf",
  },
  "oi-wiki-search-optimization": {
    title: "OI Wiki: 搜索优化",
    url: "https://oi-wiki.org/search/opt/",
  },
  "nist-dads-branch-and-bound": {
    title: "NIST DADS: branch and bound",
    url: "https://xlinux.nist.gov/dads/HTML/branchNbound.html",
  },
  "nist-dads-prune-and-search": {
    title: "NIST DADS: prune and search",
    url: "https://xlinux.nist.gov/dads/HTML/pruneNsearch.html",
  },
  "geeksforgeeks-branch-and-bound": {
    title: "GeeksforGeeks: Introduction to Branch and Bound",
    url: "https://www.geeksforgeeks.org/dsa/introduction-to-branch-and-bound-data-structures-and-algorithms-tutorial/",
  },
  "geeksforgeeks-alpha-beta-pruning": {
    title: "GeeksforGeeks: Alpha-Beta Pruning",
    url: "https://www.geeksforgeeks.org/dsa/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/",
  },
  "oi-wiki-combination": {
    title: "OI Wiki: 排列组合",
    url: "https://oi-wiki.org/math/combinatorics/combination/",
  },
  "python-itertools-combinatoric": {
    title: "Python docs: itertools combinatoric iterators",
    url: "https://docs.python.org/3/library/itertools.html",
  },
  "cp-algorithms-generating-combinations": {
    title: "cp-algorithms: Generating all K-combinations",
    url: "https://cp-algorithms.com/combinatorics/generating_combinations.html",
  },
  "geeksforgeeks-array-subsets": {
    title: "GeeksforGeeks: Subsets of a given Array",
    url: "https://www.geeksforgeeks.org/dsa/backtracking-to-find-all-subsets/",
  },
  "geeksforgeeks-distinct-permutations-duplicates": {
    title: "GeeksforGeeks: All Distinct Permutations with Duplicate Elements",
    url: "https://www.geeksforgeeks.org/dsa/print-all-possible-permutations-of-an-array-with-duplicates-using-backtracking/",
  },
  "oi-wiki-dp-basic": {
    title: "OI Wiki: 动态规划基础",
    url: "https://oi-wiki.org/dp/basic/",
  },
  "oi-wiki-dp-memo": {
    title: "OI Wiki: 记忆化搜索",
    url: "https://oi-wiki.org/dp/memo/",
  },
  "geeksforgeeks-dp-introduction": {
    title: "GeeksforGeeks: Dynamic Programming (DP) Introduction",
    url: "https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials/",
  },
  "geeksforgeeks-memoization": {
    title: "GeeksforGeeks: Memoization (1D, 2D and 3D)",
    url: "https://www.geeksforgeeks.org/dsa/memoization-1d-2d-and-3d/",
  },
  "cp-algorithms-intro-dp": {
    title: "cp-algorithms: Introduction to Dynamic Programming",
    url: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html",
  },
  "cp-algorithms-knapsack": {
    title: "cp-algorithms: Knapsack Problem",
    url: "https://cp-algorithms.com/dynamic_programming/knapsack.html",
  },
  "oi-wiki-dp-knapsack": {
    title: "OI Wiki: 背包 DP",
    url: "https://oi-wiki.org/dp/knapsack/",
  },
  "usaco-guide-knapsack": {
    title: "USACO Guide: Knapsack DP",
    url: "https://usaco.guide/gold/knapsack?lang=cpp",
  },
  "geeksforgeeks-01-knapsack": {
    title: "GeeksforGeeks: 0/1 Knapsack Problem",
    url: "https://www.geeksforgeeks.org/dsa/0-1-knapsack-problem-dp-10/",
  },
  "oi-wiki-space-optimization": {
    title: "OI Wiki: 空间优化简介",
    url: "https://oi.wiki/misc/space-optimization/",
  },
  "labuladong-dp-space-optimization": {
    title: "labuladong 的算法笔记: 对动态规划进行空间压缩",
    url: "https://labuladong.online/algo/dynamic-programming/space-optimization/",
  },
  "geeksforgeeks-dp-space-optimization": {
    title: "GeeksforGeeks: How to Optimize Auxiliary Space Of a DP Solution",
    url: "https://www.geeksforgeeks.org/dsa/how-to-optimize-auxiliary-space-of-a-dp-solution/",
  },
  "pegwiki-dynamic-programming": {
    title: "PEGWiki: Dynamic programming",
    url: "https://wcipeg.com/wiki/Dynamic_programming",
  },
  "erickson-dynamic-programming": {
    title: "Jeff Erickson: Algorithms, Dynamic Programming",
    url: "https://jeffe.cs.illinois.edu/teaching/algorithms/book/03-dynprog.pdf",
  },
  "usaco-guide-intro-dp": {
    title: "USACO Guide: Introduction to DP",
    url: "https://usaco.guide/gold/intro-dp?lang=cpp",
  },
  "mit-6006-dynamic-programming": {
    title: "MIT 6.006: Dynamic Programming I",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/",
  },
  "mit-6046-universal-perfect-hashing": {
    title: "MIT 6.046J: Universal & Perfect Hashing",
    url: "https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/5e4c05ec33ad4e733c1e6a247f21d1de_MIT6_046JS15_lec08.pdf",
  },
  "xiaolin-coding": {
    title: "小林 coding 图解网络与操作系统",
    url: "https://xiaolincoding.com/",
  },
  "xiaolin-what-happen-url": {
    title: "小林 coding：键入网址到网页显示，期间发生了什么？",
    url: "https://xiaolincoding.com/network/1_base/what_happen_url.html",
  },
  "xiaolincoding-tcp-feature": {
    title: "小林 coding：TCP 重传、滑动窗口、流量控制、拥塞控制",
    url: "https://xiaolincoding.com/network/3_tcp/tcp_feature.html",
  },
  "xiaolincoding-tcp-interview": {
    title: "小林 coding：TCP 三次握手与四次挥手面试题",
    url: "https://xiaolincoding.com/network/3_tcp/tcp_interview.html",
  },
  "xiaolincoding-tcp-optimize": {
    title: "小林 coding：如何优化 TCP",
    url: "https://xiaolincoding.com/network/3_tcp/tcp_optimize.html",
  },
  "rfc1122-internet-layers": {
    title: "RFC 1122 Requirements for Internet Hosts: Communication Layers",
    url: "https://www.rfc-editor.org/rfc/rfc1122#page-8",
  },
  "cloudflare-how-internet-works": {
    title: "Cloudflare Learning Center: How does the Internet work?",
    url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/",
  },
  "cloudflare-ssl-certificate": {
    title: "Cloudflare Learning Center: What is an SSL certificate?",
    url: "https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/",
  },
  "cloudflare-ssl-concepts": {
    title: "Cloudflare SSL/TLS Docs: Concepts",
    url: "https://developers.cloudflare.com/ssl/concepts/",
  },
  "letsencrypt-docs": {
    title: "Let's Encrypt Docs",
    url: "https://letsencrypt.org/docs/",
  },
  "certbot-instructions": {
    title: "Certbot: Instructions",
    url: "https://certbot.eff.org/instructions",
  },
  "mdn-how-internet-works": {
    title: "MDN Web Docs: How does the Internet work?",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work",
  },
  "cisco-network-basics": {
    title: "Cisco: Networking Basics",
    url: "https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html",
  },
  "microsoft-tcpip-networking": {
    title: "Microsoft Learn: Introduction to TCP/IP networking",
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting",
  },
  "microsoft-port-exhaustion": {
    title: "Microsoft Learn: Troubleshoot port exhaustion issues",
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcp-ip-port-exhaustion-troubleshooting",
  },
  "microsoft-windows-network-adapter-performance": {
    title: "Microsoft Learn: Network adapter performance tuning in Windows Server",
    url: "https://learn.microsoft.com/en-us/windows-server/networking/technologies/network-subsystem/net-sub-performance-tuning-nics",
  },
  "microsoft-windows-tcp-features": {
    title: "Microsoft Learn: Description of Windows TCP features",
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/description-tcp-features",
  },
  "oracle-packet-encapsulation": {
    title: "Oracle Solaris: Data Encapsulation and the TCP/IP Protocol Stack",
    url: "https://docs.oracle.com/pls/topic/lookup?ctx=E23823&id=SYSADV3ipov-32",
  },
  "itu-x200-osi": {
    title: "ITU-T X.200: Open Systems Interconnection Basic Reference Model",
    url: "https://www.itu.int/rec/T-REC-X.200-199407-I/en",
  },
  "iso-7498-1-osi": {
    title: "ISO/IEC 7498-1:1994 OSI Basic Reference Model",
    url: "https://www.iso.org/standard/20269.html",
  },
  "cloudflare-osi-model": {
    title: "Cloudflare Learning Center: What is the OSI Model?",
    url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
  },
  "aws-osi-model": {
    title: "AWS: What is the OSI Model?",
    url: "https://aws.amazon.com/what-is/osi-model/",
  },
  "wireshark-display-filters": {
    title: "Wireshark User's Guide: Building Display Filter Expressions",
    url: "https://www.wireshark.org/docs/wsug_html_chunked/ChWorkBuildDisplayFilterSection.html",
  },
  "wireshark-tcp-analysis": {
    title: "Wireshark User's Guide: TCP Analysis",
    url: "https://www.wireshark.org/docs/wsug_html_chunked/ChAdvTCPAnalysis.html",
  },
  "man7-tcpdump": {
    title: "tcpdump(8) - Linux manual page",
    url: "https://man7.org/linux/man-pages/man8/tcpdump.8.html",
  },
  "cilium-hubble-network-observability": {
    title: "Cilium Docs: Network Observability with Hubble",
    url: "https://docs.cilium.io/en/stable/observability/hubble/",
  },
  "cloudflare-network-layer": {
    title: "Cloudflare Learning Center: What is the network layer?",
    url: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/",
  },
  "cloudflare-ip-routing": {
    title: "Cloudflare Learning Center: What is routing? | IP routing",
    url: "https://www.cloudflare.com/en-ca/learning/network-layer/what-is-routing/",
  },
  "cloudflare-internet-protocol": {
    title: "Cloudflare Learning Center: What is the Internet Protocol?",
    url: "https://www.cloudflare.com/learning/network-layer/internet-protocol/",
  },
  "iana-ipv4-special-registry": {
    title: "IANA: IPv4 Special-Purpose Address Registry",
    url: "https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml",
  },
  "rfc6890-special-addresses": {
    title: "RFC 6890: Special-Purpose IP Address Registries",
    url: "https://www.rfc-editor.org/rfc/rfc6890",
  },
  "cloudflare-computer-port": {
    title: "Cloudflare Learning Center: What is a computer port?",
    url: "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/",
  },
  "rfc791-ip": {
    title: "RFC 791: Internet Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc791",
  },
  "rfc1191-pmtud": {
    title: "RFC 1191: Path MTU Discovery",
    url: "https://www.rfc-editor.org/rfc/rfc1191",
  },
  "rfc8201-ipv6-pmtud": {
    title: "RFC 8201: Path MTU Discovery for IP version 6",
    url: "https://www.rfc-editor.org/rfc/rfc8201",
  },
  "cloudflare-mtu": {
    title: "Cloudflare Learning Center: What is MTU?",
    url: "https://www.cloudflare.com/learning/network-layer/what-is-mtu/",
  },
  "cloudflare-icmp-protocol": {
    title: "Cloudflare Learning Center: What is ICMP?",
    url: "https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/",
  },
  "man7-ping": {
    title: "ping(8) - Linux manual page",
    url: "https://man7.org/linux/man-pages/man8/ping.8.html",
  },
  "man7-traceroute": {
    title: "traceroute(8) - Linux manual page",
    url: "https://man7.org/linux/man-pages/man8/traceroute.8.html",
  },
  "man7-ip": {
    title: "ip(7) - Linux IPv4 protocol implementation",
    url: "https://man7.org/linux/man-pages/man7/ip.7.html",
  },
  "man7-socket": {
    title: "socket(7) - Linux socket interface",
    url: "https://man7.org/linux/man-pages/man7/socket.7.html",
  },
  "man7-tcp": {
    title: "tcp(7) - Linux TCP protocol implementation",
    url: "https://man7.org/linux/man-pages/man7/tcp.7.html",
  },
  "man7-ss": {
    title: "ss(8) - Linux socket statistics",
    url: "https://man7.org/linux/man-pages/man8/ss.8.html",
  },
  "man7-listen": {
    title: "listen(2) - Linux manual page",
    url: "https://man7.org/linux/man-pages/man2/listen.2.html",
  },
  "linux-ip-sysctl": {
    title: "Linux kernel documentation: IP sysctl",
    url: "https://docs.kernel.org/networking/ip-sysctl.html",
  },
  "man7-ip-route": {
    title: "ip-route(8) - Linux routing table management",
    url: "https://man7.org/linux/man-pages/man8/ip-route.8.html",
  },
  "man7-ip-rule": {
    title: "ip-rule(8) - Linux routing policy database management",
    url: "https://man7.org/linux/man-pages/man8/ip-rule.8.html",
  },
  "rfc1812-router-requirements": {
    title: "RFC 1812: Requirements for IP Version 4 Routers",
    url: "https://www.rfc-editor.org/rfc/rfc1812",
  },
  "rfc2328-ospf": {
    title: "RFC 2328: OSPF Version 2",
    url: "https://www.rfc-editor.org/rfc/rfc2328",
  },
  "rfc4271-bgp": {
    title: "RFC 4271: A Border Gateway Protocol 4 (BGP-4)",
    url: "https://www.rfc-editor.org/rfc/rfc4271",
  },
  "frr-zebra": {
    title: "FRRouting Docs: Zebra",
    url: "https://docs.frrouting.org/en/latest/zebra.html",
  },
  "rfc8200-ipv6": {
    title: "RFC 8200: Internet Protocol, Version 6 (IPv6) Specification",
    url: "https://www.rfc-editor.org/rfc/rfc8200",
  },
  "rfc5952-ipv6-text": {
    title: "RFC 5952: A Recommendation for IPv6 Address Text Representation",
    url: "https://www.rfc-editor.org/rfc/rfc5952",
  },
  "iana-ipv6-special-registry": {
    title: "IANA: IPv6 Special-Purpose Address Registry",
    url: "https://www.iana.org/assignments/iana-ipv6-special-registry/iana-ipv6-special-registry.xhtml",
  },
  "rfc4193-ula": {
    title: "RFC 4193: Unique Local IPv6 Unicast Addresses",
    url: "https://www.rfc-editor.org/rfc/rfc4193",
  },
  "rfc4443-icmpv6": {
    title: "RFC 4443: Internet Control Message Protocol (ICMPv6)",
    url: "https://www.rfc-editor.org/rfc/rfc4443",
  },
  "rfc4890-icmpv6-firewall": {
    title: "RFC 4890: Recommendations for Filtering ICMPv6 Messages in Firewalls",
    url: "https://www.rfc-editor.org/rfc/rfc4890",
  },
  "rfc4291-ipv6-addressing": {
    title: "RFC 4291: IPv6 Addressing Architecture",
    url: "https://www.rfc-editor.org/rfc/rfc4291",
  },
  "rfc4861-ndp": {
    title: "RFC 4861: Neighbor Discovery for IPv6",
    url: "https://www.rfc-editor.org/rfc/rfc4861",
  },
  "rfc4862-slaac": {
    title: "RFC 4862: IPv6 Stateless Address Autoconfiguration",
    url: "https://www.rfc-editor.org/rfc/rfc4862",
  },
  "rfc6724-ipv6-address-selection": {
    title: "RFC 6724: Default Address Selection for IPv6",
    url: "https://www.rfc-editor.org/rfc/rfc6724",
  },
  "rfc8305-happy-eyeballs": {
    title: "RFC 8305: Happy Eyeballs Version 2",
    url: "https://www.rfc-editor.org/rfc/rfc8305",
  },
  "man7-ipv6": {
    title: "ipv6(7) - Linux IPv6 protocol implementation",
    url: "https://man7.org/linux/man-pages/man7/ipv6.7.html",
  },
  "rfc4632-cidr": {
    title: "RFC 4632: Classless Inter-domain Routing (CIDR)",
    url: "https://www.rfc-editor.org/rfc/rfc4632",
  },
  "rfc3021-31-bit-prefixes": {
    title: "RFC 3021: Using 31-Bit Prefixes on IPv4 Point-to-Point Links",
    url: "https://www.rfc-editor.org/rfc/rfc3021",
  },
  "rfc1918-private-address": {
    title: "RFC 1918: Address Allocation for Private Internets",
    url: "https://www.rfc-editor.org/rfc/rfc1918",
  },
  "rfc792-icmp": {
    title: "RFC 792: Internet Control Message Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc792",
  },
  "rfc3022-nat": {
    title: "RFC 3022: Traditional IP Network Address Translator",
    url: "https://www.rfc-editor.org/rfc/rfc3022",
  },
  "aws-vpc-route-tables": {
    title: "AWS VPC: Subnet route tables",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/subnet-route-tables.html",
  },
  "aws-vpc-subnet-sizing": {
    title: "AWS VPC: Subnet sizing",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/subnet-sizing.html",
  },
  "aws-vpc-ipv6-addressing": {
    title: "AWS VPC: IP addressing for your VPCs and subnets",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html",
  },
  "aws-vpc-subnets": {
    title: "AWS VPC: Subnets for your VPC",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html",
  },
  "aws-vpc-route-priority": {
    title: "AWS VPC: How route priority works",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/route-tables-priority.html",
  },
  "aws-vpc-route-options": {
    title: "AWS VPC: Example routing options",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html",
  },
  "aws-vpc-reachability-analyzer": {
    title: "AWS VPC: Troubleshoot reachability issues using Reachability Analyzer",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/reachability-analyzer.html",
  },
  "aws-vpc-nat-gateway": {
    title: "AWS VPC: NAT gateways",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
  },
  "aws-vpc-nat-gateway-metrics": {
    title: "AWS VPC: NAT gateway metrics and dimensions",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/metrics-dimensions-nat-gateway.html",
  },
  "aws-vpc-nat-gateway-troubleshooting": {
    title: "AWS VPC: Troubleshoot NAT gateways",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html",
  },
  "rfc4787-nat-udp": {
    title: "RFC 4787: NAT Behavioral Requirements for Unicast UDP",
    url: "https://www.rfc-editor.org/rfc/rfc4787",
  },
  "rfc6888-cgn": {
    title: "RFC 6888: Common Requirements for Carrier-Grade NATs",
    url: "https://www.rfc-editor.org/rfc/rfc6888",
  },
  "netfilter-nat-howto": {
    title: "Netfilter NAT HOWTO",
    url: "https://www.netfilter.org/documentation/HOWTO/NAT-HOWTO.html",
  },
  "kubernetes-source-ip": {
    title: "Kubernetes: Using Source IP",
    url: "https://kubernetes.io/docs/tutorials/services/source-ip/",
  },
  "linuxstory-nat-tracing": {
    title: "LinuxStory: 网络地址转换（NAT）之报文跟踪",
    url: "https://linuxstory.org/network-address-translation-nat-message-tracking/",
  },
  "aws-vpc-internet-gateway": {
    title: "AWS VPC: Internet gateways",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",
  },
  "aliyun-vpc-network-planning": {
    title: "Alibaba Cloud VPC: Network planning",
    url: "https://www.alibabacloud.com/help/en/vpc/user-guide/network-planning",
  },
  "cisco-ipv4-addressing": {
    title: "Cisco IOS XE: IP Addressing Services Configuration Guide",
    url: "https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr/configuration/xe-3s/iad-xe-3s-book.html",
  },
  "rfc5798-vrrp": {
    title: "RFC 5798: VRRP Version 3 for IPv4 and IPv6",
    url: "https://www.rfc-editor.org/rfc/rfc5798",
  },
  "rfc768-udp": {
    title: "RFC 768: User Datagram Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc768",
  },
  "rfc8085-udp-guidelines": {
    title: "RFC 8085: UDP Usage Guidelines",
    url: "https://www.rfc-editor.org/rfc/rfc8085",
  },
  "rfc8899-dplpmtud": {
    title: "RFC 8899: Packetization Layer Path MTU Discovery for Datagram Transports",
    url: "https://www.rfc-editor.org/rfc/rfc8899",
  },
  "man7-udp": {
    title: "udp(7) - Linux manual page",
    url: "https://man7.org/linux/man-pages/man7/udp.7.html",
  },
  "cloudflare-udp": {
    title: "Cloudflare Learning Center: What is the User Datagram Protocol (UDP)?",
    url: "https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/",
  },
  "cloudflare-dns-amplification": {
    title: "Cloudflare Learning Center: DNS amplification DDoS attack",
    url: "https://www.cloudflare.com/learning/ddos/dns-amplification-ddos-attack/",
  },
  "iana-service-port-registry": {
    title: "IANA: Service Name and Transport Protocol Port Number Registry",
    url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml",
  },
  "rfc6335-port-registry-procedures": {
    title: "RFC 6335: Internet Assigned Numbers Authority (IANA) Procedures for the Management of the Service Name and Transport Protocol Port Number Registry",
    url: "https://www.rfc-editor.org/rfc/rfc6335",
  },
  "rfc9293-tcp": {
    title: "RFC 9293: Transmission Control Protocol (TCP)",
    url: "https://www.rfc-editor.org/rfc/rfc9293",
  },
  "rfc1337-time-wait-assassination": {
    title: "RFC 1337: TIME-WAIT Assassination Hazards in TCP",
    url: "https://datatracker.ietf.org/doc/html/rfc1337",
  },
  "rfc6191-time-wait-timestamps": {
    title: "RFC 6191: Reducing the TIME-WAIT State Using TCP Timestamps",
    url: "https://www.rfc-editor.org/rfc/rfc6191",
  },
  "cloudflare-tcp-ip": {
    title: "Cloudflare Learning Center: What is TCP/IP?",
    url: "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/",
  },
  "cloudflare-syn-flood": {
    title: "Cloudflare Learning Center: SYN Flood Attack",
    url: "https://www.cloudflare.com/learning/ddos/syn-flood-ddos-attack/",
  },
  "rfc6056-port-randomization": {
    title: "RFC 6056: Recommendations for Transport-Protocol Port Randomization",
    url: "https://www.rfc-editor.org/rfc/rfc6056",
  },
  "rfc6528-tcp-isn": {
    title: "RFC 6528: Defending against Sequence Number Attacks",
    url: "https://www.rfc-editor.org/rfc/rfc6528",
  },
  "rfc6298-tcp-rto": {
    title: "RFC 6298: Computing TCP's Retransmission Timer",
    url: "https://www.rfc-editor.org/rfc/rfc6298",
  },
  "rfc5681-tcp-congestion": {
    title: "RFC 5681: TCP Congestion Control",
    url: "https://www.rfc-editor.org/rfc/rfc5681",
  },
  "rfc6349-tcp-throughput": {
    title: "RFC 6349: Framework for TCP Throughput Testing",
    url: "https://www.rfc-editor.org/rfc/rfc6349",
  },
  "rfc6928-tcp-initial-window": {
    title: "RFC 6928: Increasing TCP's Initial Window",
    url: "https://www.rfc-editor.org/rfc/rfc6928",
  },
  "rfc3168-ecn": {
    title: "RFC 3168: The Addition of Explicit Congestion Notification (ECN) to IP",
    url: "https://www.rfc-editor.org/rfc/rfc3168",
  },
  "rfc9438-cubic": {
    title: "RFC 9438: CUBIC for Fast and Long-Distance Networks",
    url: "https://www.rfc-editor.org/rfc/rfc9438",
  },
  "rfc9743-congestion-control-algorithms": {
    title: "RFC 9743: Specifying New Congestion Control Algorithms",
    url: "https://www.rfc-editor.org/rfc/rfc9743",
  },
  "acmqueue-bbr": {
    title: "ACM Queue: BBR Congestion-Based Congestion Control",
    url: "https://queue.acm.org/detail.cfm?id=3022184",
  },
  "wikimedia-tcp-slow-start-congestion-avoidance": {
    title: "Wikimedia Commons: TCP Slow-Start and Congestion Avoidance",
    url: "https://commons.wikimedia.org/wiki/File:TCP_Slow-Start_and_Congestion_Avoidance.svg",
  },
  "wustl-tcp-udp-congestion-slide": {
    title: "Washington University: Transport Layer TCP and UDP - TCP Congestion Control Slide",
    url: "https://www.cs.wustl.edu/~jain/cse473-16/ftp/i_3tcp_slide47.pdf",
  },
  "rfc2018-tcp-sack": {
    title: "RFC 2018: TCP Selective Acknowledgment Options",
    url: "https://www.rfc-editor.org/rfc/rfc2018",
  },
  "rfc6675-sack-recovery": {
    title: "RFC 6675: SACK-Based Loss Recovery Algorithm for TCP",
    url: "https://www.rfc-editor.org/rfc/rfc6675",
  },
  "rfc8985-rack-tlp": {
    title: "RFC 8985: The RACK-TLP Loss Detection Algorithm for TCP",
    url: "https://www.rfc-editor.org/rfc/rfc8985",
  },
  "rfc7323-tcp-high-performance": {
    title: "RFC 7323: TCP Extensions for High Performance",
    url: "https://www.rfc-editor.org/rfc/rfc7323",
  },
  "rfc7413-tcp-fast-open": {
    title: "RFC 7413: TCP Fast Open",
    url: "https://www.rfc-editor.org/rfc/rfc7413",
  },
  "rfc4987-syn-flood": {
    title: "RFC 4987: TCP SYN Flooding Attacks and Common Mitigations",
    url: "https://www.rfc-editor.org/rfc/rfc4987",
  },
  "rfc1034-dns": {
    title: "RFC 1034: Domain Names - Concepts and Facilities",
    url: "https://www.rfc-editor.org/rfc/rfc1034",
  },
  "rfc1035-dns": {
    title: "RFC 1035: Domain Names - Implementation and Specification",
    url: "https://www.rfc-editor.org/rfc/rfc1035",
  },
  "rfc2308-dns-negative-caching": {
    title: "RFC 2308: Negative Caching of DNS Queries (DNS NCACHE)",
    url: "https://www.rfc-editor.org/rfc/rfc2308",
  },
  "rfc7766-dns-tcp": {
    title: "RFC 7766: DNS Transport over TCP - Implementation Requirements",
    url: "https://www.rfc-editor.org/rfc/rfc7766",
  },
  "rfc6891-edns0": {
    title: "RFC 6891: Extension Mechanisms for DNS (EDNS(0))",
    url: "https://www.rfc-editor.org/rfc/rfc6891",
  },
  "rfc7871-edns-client-subnet": {
    title: "RFC 7871: Client Subnet in DNS Queries",
    url: "https://www.rfc-editor.org/rfc/rfc7871",
  },
  "rfc4033-dnssec-intro": {
    title: "RFC 4033: DNS Security Introduction and Requirements",
    url: "https://www.rfc-editor.org/rfc/rfc4033",
  },
  "cloudflare-dns-ttl": {
    title: "Cloudflare DNS Docs: Time to Live (TTL)",
    url: "https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/",
  },
  "cloudflare-dnssec-troubleshooting": {
    title: "Cloudflare DNS Docs: Troubleshooting DNSSEC",
    url: "https://developers.cloudflare.com/dns/dnssec/troubleshooting/",
  },
  "google-cloud-dns-zones": {
    title: "Google Cloud DNS: DNS zones overview",
    url: "https://cloud.google.com/dns/docs/zones/zones-overview",
  },
  "bind9-dig-manual": {
    title: "BIND 9 Manual Pages: dig - DNS lookup utility",
    url: "https://bind9.readthedocs.io/en/v9.18.42/manpages.html#dig-dns-lookup-utility",
  },
  "rfc9110-http": {
    title: "RFC 9110: HTTP Semantics",
    url: "https://www.rfc-editor.org/rfc/rfc9110",
  },
  "rfc9112-http1": {
    title: "RFC 9112: HTTP/1.1",
    url: "https://www.rfc-editor.org/rfc/rfc9112",
  },
  "rfc9111-http-cache": {
    title: "RFC 9111: HTTP Caching",
    url: "https://www.rfc-editor.org/rfc/rfc9111",
  },
  "rfc5861-http-stale-controls": {
    title: "RFC 5861: HTTP Cache-Control Extensions for Stale Content",
    url: "https://www.rfc-editor.org/rfc/rfc5861",
  },
  "rfc9113-http2": {
    title: "RFC 9113: HTTP/2",
    url: "https://www.rfc-editor.org/rfc/rfc9113",
  },
  "rfc7541-hpack": {
    title: "RFC 7541: HPACK - Header Compression for HTTP/2",
    url: "https://www.rfc-editor.org/rfc/rfc7541",
  },
  "rfc9218-http-priority": {
    title: "RFC 9218: Extensible Prioritization Scheme for HTTP",
    url: "https://www.rfc-editor.org/rfc/rfc9218",
  },
  "rfc9114-http3": {
    title: "RFC 9114: HTTP/3",
    url: "https://www.rfc-editor.org/rfc/rfc9114",
  },
  "rfc9000-quic": {
    title: "RFC 9000: QUIC",
    url: "https://www.rfc-editor.org/rfc/rfc9000",
  },
  "rfc9001-quic-tls": {
    title: "RFC 9001: Using TLS to Secure QUIC",
    url: "https://www.rfc-editor.org/rfc/rfc9001",
  },
  "rfc9002-quic-recovery": {
    title: "RFC 9002: QUIC Loss Detection and Congestion Control",
    url: "https://www.rfc-editor.org/rfc/rfc9002",
  },
  "rfc9204-qpack": {
    title: "RFC 9204: QPACK - Field Compression for HTTP/3",
    url: "https://www.rfc-editor.org/rfc/rfc9204",
  },
  "rfc7838-alt-svc": {
    title: "RFC 7838: HTTP Alternative Services",
    url: "https://www.rfc-editor.org/rfc/rfc7838",
  },
  "mdn-alt-svc": {
    title: "MDN: Alt-Svc header",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Alt-Svc",
  },
  "cloudflare-http3-docs": {
    title: "Cloudflare Docs: HTTP/3 with QUIC",
    url: "https://developers.cloudflare.com/speed/optimization/protocol/http3/",
  },
  "cloudflare-http3-past-present-future": {
    title: "Cloudflare Blog: HTTP/3 - the past, the present, and the future",
    url: "https://blog.cloudflare.com/http3-the-past-present-and-future/",
  },
  "curl-http3": {
    title: "curl: HTTP/3 with curl",
    url: "https://curl.se/docs/http3.html",
  },
  "nginx-http3-module": {
    title: "NGINX Docs: ngx_http_v3_module",
    url: "https://nginx.org/en/docs/http/ngx_http_v3_module.html",
  },
  "http3-explained": {
    title: "HTTP/3 explained by Daniel Stenberg",
    url: "https://http3-explained.haxx.se/en/",
  },
  "rfc8446-tls13": {
    title: "RFC 8446: TLS 1.3",
    url: "https://www.rfc-editor.org/rfc/rfc8446",
  },
  "rfc6066-tls-sni": {
    title: "RFC 6066: TLS Extensions - Server Name Indication",
    url: "https://www.rfc-editor.org/rfc/rfc6066",
  },
  "rfc7301-tls-alpn": {
    title: "RFC 7301: TLS Application-Layer Protocol Negotiation",
    url: "https://www.rfc-editor.org/rfc/rfc7301",
  },
  "mdn-tls": {
    title: "MDN: Transport Layer Security (TLS)",
    url: "https://developer.mozilla.org/docs/Web/Security/Transport_Layer_Security",
  },
  "mozilla-ssl-config": {
    title: "Mozilla SSL Configuration Generator",
    url: "https://ssl-config.mozilla.org/",
  },
  "openssl-s-client": {
    title: "OpenSSL Docs: openssl s_client",
    url: "https://docs.openssl.org/3.0/man1/openssl-s_client/",
  },
  "owasp-tls-cheat-sheet": {
    title: "OWASP: Transport Layer Security Cheat Sheet",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html",
  },
  "cloudflare-tls-handshake": {
    title: "Cloudflare: What happens in a TLS handshake?",
    url: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/",
  },
  "cloudflare-mtls": {
    title: "Cloudflare: What is mutual TLS (mTLS)?",
    url: "https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/",
  },
  "nginx-https-servers": {
    title: "NGINX Docs: Configuring HTTPS servers",
    url: "https://nginx.org/en/docs/http/configuring_https_servers.html",
  },
  "rfc6797-hsts": {
    title: "RFC 6797: HTTP Strict Transport Security (HSTS)",
    url: "https://www.rfc-editor.org/rfc/rfc6797",
  },
  "rfc6960-ocsp": {
    title: "RFC 6960: Online Certificate Status Protocol (OCSP)",
    url: "https://www.rfc-editor.org/rfc/rfc6960",
  },
  "ruanyifeng-tls13": {
    title: "阮一峰: TLS 1.3 协议详解",
    url: "https://www.ruanyifeng.com/blog/2018/08/tls_1_3.html",
  },
  "ruanyifeng-https-upgrade": {
    title: "阮一峰: HTTPS 升级指南",
    url: "https://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html",
  },
  "rfc5280-pkix": {
    title: "RFC 5280: Internet X.509 PKI Certificate and CRL Profile",
    url: "https://www.rfc-editor.org/rfc/rfc5280",
  },
  "cabforum-tls-baseline-requirements": {
    title: "CA/Browser Forum: TLS Baseline Requirements",
    url: "https://cabforum.org/working-groups/server/baseline-requirements/documents/",
  },
  "xiaolincoding-http-interview": {
    title: "小林 coding: HTTP 常见面试题",
    url: "https://xiaolincoding.com/network/2_http/http_interview.html",
  },
  "aliyun-ssl-chain-incomplete": {
    title: "阿里云: SSL 证书链不完整的原因及解决方法",
    url: "https://help.aliyun.com/zh/ssl-certificate/support/the-certificate-chain-is-incomplete",
  },
  "mdn-http-overview": {
    title: "MDN: An overview of HTTP",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
  },
  "twelve-factor-app": {
    title: "The Twelve-Factor App",
    url: "https://12factor.net/",
  },
  "martin-fowler-immutable-server": {
    title: "Martin Fowler: Immutable Server",
    url: "https://martinfowler.com/bliki/ImmutableServer.html",
  },
  "martin-fowler-blue-green-deployment": {
    title: "Martin Fowler: Blue Green Deployment",
    url: "https://martinfowler.com/bliki/BlueGreenDeployment.html",
  },
  "cncf-cloud-native-definition": {
    title: "CNCF: Cloud Native Definition",
    url: "https://github.com/cncf/toc/blob/main/DEFINITION.md",
  },
  "google-api-design-guide": {
    title: "Google Cloud: API Design Guide",
    url: "https://cloud.google.com/apis/design",
  },
  "google-aip-185-api-versioning": {
    title: "Google AIP-185: API Versioning",
    url: "https://google.aip.dev/185",
  },
  "google-aip-180-backwards-compatibility": {
    title: "Google AIP-180: Backwards Compatibility",
    url: "https://google.aip.dev/180",
  },
  "microsoft-rest-api-guidelines": {
    title: "Microsoft REST API Guidelines",
    url: "https://github.com/microsoft/api-guidelines",
  },
  "zalando-restful-api-guidelines": {
    title: "Zalando RESTful API and Event Guidelines",
    url: "https://opensource.zalando.com/restful-api-guidelines/",
  },
  "openapi-specification": {
    title: "OpenAPI Specification",
    url: "https://spec.openapis.org/oas/latest.html",
  },
  "openapi-initiative-what-is-openapi": {
    title: "OpenAPI Initiative: What is OpenAPI?",
    url: "https://www.openapis.org/what-is-openapi",
  },
  "learn-openapi-paths": {
    title: "Learn OpenAPI: API Endpoints",
    url: "https://learn.openapis.org/specification/paths.html",
  },
  "swagger-openapi-paths": {
    title: "Swagger Docs: Paths and Operations",
    url: "https://swagger.io/docs/specification/v3_0/paths-and-operations/",
  },
  "json-schema-docs": {
    title: "JSON Schema Documentation",
    url: "https://json-schema.github.io/json-schema/documentation.html",
  },
  "rfc9457-problem-details": {
    title: "RFC 9457: Problem Details for HTTP APIs",
    url: "https://www.rfc-editor.org/rfc/rfc9457",
  },
  "pact-docs-contract-testing": {
    title: "Pact Docs: Contract Testing",
    url: "https://docs.pact.io/",
  },
  "pact-docs-consumer-tests": {
    title: "Pact Docs: Consumer Tests",
    url: "https://docs.pact.io/implementation_guides/javascript/docs/consumer",
  },
  "martin-fowler-consumer-driven-contracts": {
    title: "Martin Fowler: Consumer-Driven Contracts",
    url: "https://martinfowler.com/articles/consumerDrivenContracts.html",
  },
  "spring-cloud-contract-reference": {
    title: "Spring Cloud Contract Reference Documentation",
    url: "https://docs.spring.io/spring-cloud-contract/docs/current/reference/htmlsingle/",
  },
  "microsoft-aspnetcore-integration-tests": {
    title: "Microsoft Learn: Integration tests in ASP.NET Core",
    url: "https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-10.0",
  },
  "spring-boot-testing": {
    title: "Spring Boot Reference: Testing",
    url: "https://docs.spring.io/spring-boot/reference/testing/index.html",
  },
  "spring-boot-testcontainers": {
    title: "Spring Boot Reference: Testcontainers",
    url: "https://docs.spring.io/spring-boot/reference/testing/testcontainers.html",
  },
  "testcontainers-java": {
    title: "Testcontainers for Java Documentation",
    url: "https://java.testcontainers.org/",
  },
  "martin-fowler-practical-test-pyramid": {
    title: "Martin Fowler: The Practical Test Pyramid",
    url: "https://martinfowler.com/articles/practical-test-pyramid.html",
  },
  "google-testing-flaky-tests": {
    title: "Google Testing Blog: Flaky Tests at Google and How We Mitigate Them",
    url: "https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html",
  },
  "semver-spec": {
    title: "Semantic Versioning 2.0.0",
    url: "https://semver.org/",
  },
  "rfc9745-deprecation": {
    title: "RFC 9745: The Deprecation HTTP Response Header Field",
    url: "https://www.rfc-editor.org/rfc/rfc9745",
  },
  "rfc8594-sunset": {
    title: "RFC 8594: The Sunset HTTP Header Field",
    url: "https://www.rfc-editor.org/rfc/rfc8594",
  },
  "stripe-api-versioning": {
    title: "Stripe Docs: API Versioning",
    url: "https://docs.stripe.com/api/versioning",
  },
  "github-rest-api-versioning": {
    title: "GitHub Docs: REST API Versions",
    url: "https://docs.github.com/rest/about-the-rest-api/api-versions",
  },
  "nist-sp-800-63-4-digital-identity": {
    title: "NIST SP 800-63-4: Digital Identity Guidelines",
    url: "https://pages.nist.gov/800-63-4/sp800-63.html",
  },
  "nist-sp-800-63b-4-authentication": {
    title: "NIST SP 800-63B-4: Authentication and Authenticator Management",
    url: "https://pages.nist.gov/800-63-4/sp800-63b.html",
  },
  "nist-sp-800-63c-4-federation": {
    title: "NIST SP 800-63C-4: Federation and Assertions",
    url: "https://pages.nist.gov/800-63-4/sp800-63c.html",
  },
  "owasp-authentication-cheat-sheet": {
    title: "OWASP Cheat Sheet: Authentication",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
  },
  "owasp-password-storage-cheat-sheet": {
    title: "OWASP Cheat Sheet: Password Storage",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
  },
  "owasp-session-management-cheat-sheet": {
    title: "OWASP Cheat Sheet: Session Management",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
  },
  "owasp-authorization-cheat-sheet": {
    title: "OWASP Cheat Sheet: Authorization",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
  },
  "owasp-access-control-cheat-sheet": {
    title: "OWASP Cheat Sheet: Access Control",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html",
  },
  "owasp-logging-cheat-sheet": {
    title: "OWASP Cheat Sheet: Logging",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
  },
  "nist-sp-800-92-log-management": {
    title: "NIST SP 800-92: Guide to Computer Security Log Management",
    url: "https://csrc.nist.gov/pubs/sp/800/92/final",
  },
  "nist-rbac-project": {
    title: "NIST: Role Based Access Control",
    url: "https://csrc.nist.gov/projects/role-based-access-control",
  },
  "nist-rbac-faqs": {
    title: "NIST: Role Based Access Control FAQs",
    url: "https://csrc.nist.gov/projects/role-based-access-control/faqs",
  },
  "kubernetes-rbac-authorization": {
    title: "Kubernetes Docs: Using RBAC Authorization",
    url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
  },
  "kubernetes-rbac-authorization-zh": {
    title: "Kubernetes 文档：使用 RBAC 鉴权",
    url: "https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/rbac/",
  },
  "nist-sp-800-162-abac": {
    title: "NIST SP 800-162: Guide to Attribute Based Access Control (ABAC)",
    url: "https://csrc.nist.gov/pubs/sp/800/162/upd2/final",
  },
  "nist-nccoe-abac": {
    title: "NIST NCCoE: Attribute Based Access Control",
    url: "https://www.nccoe.nist.gov/publication/1800-3/VolB/",
  },
  "aws-iam-abac": {
    title: "AWS IAM: Attribute-based access control",
    url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
  },
  "aws-iam-policy-evaluation": {
    title: "AWS IAM: Policy Evaluation Logic",
    url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
  },
  "open-policy-agent-docs": {
    title: "Open Policy Agent Documentation",
    url: "https://www.openpolicyagent.org/docs/latest/",
  },
  "opa-policy-language": {
    title: "Open Policy Agent Docs: Policy Language",
    url: "https://www.openpolicyagent.org/docs/policy-language",
  },
  "opa-bundles": {
    title: "Open Policy Agent Docs: Bundles",
    url: "https://www.openpolicyagent.org/docs/management-bundles",
  },
  "cedar-policy-docs": {
    title: "Cedar Policy Language Reference Guide",
    url: "https://docs.cedarpolicy.com/",
  },
  "cedar-authorization": {
    title: "Cedar Policy Language: Authorization",
    url: "https://docs.cedarpolicy.com/auth/authorization.html",
  },
  "aws-verified-permissions": {
    title: "Amazon Verified Permissions Documentation",
    url: "https://docs.aws.amazon.com/verifiedpermissions/",
  },
  "google-zanzibar-paper": {
    title: "Google Research: Zanzibar, Google's Consistent, Global Authorization System",
    url: "https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/",
  },
  "openfga-concepts": {
    title: "OpenFGA Docs: Concepts",
    url: "https://openfga.dev/docs/concepts",
  },
  "openfga-modeling": {
    title: "OpenFGA Docs: Define Your Authorization Model",
    url: "https://openfga.dev/docs/modeling",
  },
  "openfga-model-testing": {
    title: "OpenFGA Docs: Testing Models",
    url: "https://openfga.dev/docs/modeling/testing",
  },
  "rfc6749-oauth2": {
    title: "RFC 6749: The OAuth 2.0 Authorization Framework",
    url: "https://www.rfc-editor.org/rfc/rfc6749",
  },
  "rfc9700-oauth2-security": {
    title: "RFC 9700: Best Current Practice for OAuth 2.0 Security",
    url: "https://www.rfc-editor.org/rfc/rfc9700",
  },
  "rfc7636-pkce": {
    title: "RFC 7636: Proof Key for Code Exchange by OAuth Public Clients",
    url: "https://www.rfc-editor.org/rfc/rfc7636",
  },
  "rfc8252-oauth-native-apps": {
    title: "RFC 8252: OAuth 2.0 for Native Apps",
    url: "https://www.rfc-editor.org/rfc/rfc8252",
  },
  "rfc8628-oauth-device-grant": {
    title: "RFC 8628: OAuth 2.0 Device Authorization Grant",
    url: "https://www.rfc-editor.org/rfc/rfc8628",
  },
  "rfc7009-token-revocation": {
    title: "RFC 7009: OAuth 2.0 Token Revocation",
    url: "https://www.rfc-editor.org/rfc/rfc7009",
  },
  "rfc7662-token-introspection": {
    title: "RFC 7662: OAuth 2.0 Token Introspection",
    url: "https://www.rfc-editor.org/rfc/rfc7662",
  },
  "auth0-refresh-token-rotation": {
    title: "Auth0 Docs: Refresh Token Rotation",
    url: "https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation",
  },
  "okta-refresh-tokens": {
    title: "Okta Developer: Refresh Access Tokens and Rotate Refresh Tokens",
    url: "https://developer.okta.com/docs/guides/refresh-tokens/main/",
  },
  "openid-connect-core": {
    title: "OpenID Connect Core 1.0",
    url: "https://openid.net/specs/openid-connect-core-1_0.html",
  },
  "openid-connect-discovery": {
    title: "OpenID Connect Discovery 1.0",
    url: "https://openid.net/specs/openid-connect-discovery-1_0.html",
  },
  "openid-connect-rp-initiated-logout": {
    title: "OpenID Connect RP-Initiated Logout 1.0",
    url: "https://openid.net/specs/openid-connect-rpinitiated-1_0.html",
  },
  "openid-connect-session-management": {
    title: "OpenID Connect Session Management 1.0",
    url: "https://openid.net/specs/openid-connect-session-1_0.html",
  },
  "openid-connect-frontchannel-logout": {
    title: "OpenID Connect Front-Channel Logout 1.0",
    url: "https://openid.net/specs/openid-connect-frontchannel-1_0.html",
  },
  "openid-connect-backchannel-logout": {
    title: "OpenID Connect Back-Channel Logout 1.0",
    url: "https://openid.net/specs/openid-connect-backchannel-1_0.html",
  },
  "rfc8414-oauth-authorization-server-metadata": {
    title: "RFC 8414: OAuth 2.0 Authorization Server Metadata",
    url: "https://www.rfc-editor.org/rfc/rfc8414",
  },
  "saml2-technical-overview": {
    title: "OASIS: SAML 2.0 Technical Overview",
    url: "https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html",
  },
  "rfc7519-jwt": {
    title: "RFC 7519: JSON Web Token (JWT)",
    url: "https://www.rfc-editor.org/rfc/rfc7519",
  },
  "rfc8725-jwt-bcp": {
    title: "RFC 8725: JSON Web Token Best Current Practices",
    url: "https://www.rfc-editor.org/rfc/rfc8725",
  },
  "rfc7515-jws": {
    title: "RFC 7515: JSON Web Signature (JWS)",
    url: "https://www.rfc-editor.org/rfc/rfc7515",
  },
  "rfc7517-jwk": {
    title: "RFC 7517: JSON Web Key (JWK)",
    url: "https://www.rfc-editor.org/rfc/rfc7517",
  },
  "owasp-jwt-java-cheat-sheet": {
    title: "OWASP Cheat Sheet: JSON Web Token for Java",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html",
  },
  "webauthn-level-3": {
    title: "W3C: Web Authentication Level 3",
    url: "https://www.w3.org/TR/webauthn-3/",
  },
  "rfc6265-cookies": {
    title: "RFC 6265: HTTP State Management Mechanism",
    url: "https://www.rfc-editor.org/rfc/rfc6265",
  },
  "mdn-set-cookie": {
    title: "MDN: Set-Cookie Header",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie",
  },
  "mdn-http-cookies": {
    title: "MDN: Using HTTP Cookies",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
  },
  "owasp-csrf-prevention-cheat-sheet": {
    title: "OWASP Cheat Sheet: Cross-Site Request Forgery Prevention",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
  },
  "mdn-samesite-cookies": {
    title: "MDN: SameSite cookies",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value",
  },
  "webdev-samesite-cookies": {
    title: "web.dev: SameSite cookies explained",
    url: "https://web.dev/articles/samesite-cookies-explained",
  },
  "w3c-fetch-metadata": {
    title: "W3C: Fetch Metadata Request Headers",
    url: "https://www.w3.org/TR/fetch-metadata/",
  },
  "mdn-cors": {
    title: "MDN: Cross-Origin Resource Sharing (CORS)",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
  },
  "whatwg-fetch": {
    title: "WHATWG Fetch Standard",
    url: "https://fetch.spec.whatwg.org/",
  },
  "mdn-access-control-allow-origin": {
    title: "MDN: Access-Control-Allow-Origin header",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin",
  },
  "mdn-access-control-allow-credentials": {
    title: "MDN: Access-Control-Allow-Credentials header",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials",
  },
  "mdn-preflight-request": {
    title: "MDN: Preflight request",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request",
  },
  "fielding-rest-dissertation": {
    title: "Roy Fielding: Architectural Styles and the Design of Network-based Software Architectures",
    url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm",
  },
  "mdn-http-methods": {
    title: "MDN: HTTP request methods",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
  },
  "mdn-http-status-codes": {
    title: "MDN: HTTP response status codes",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
  },
  "mdn-http-101": {
    title: "MDN: 101 Switching Protocols",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/101",
  },
  "rfc6455-websocket": {
    title: "RFC 6455: The WebSocket Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc6455",
  },
  "whatwg-websockets": {
    title: "WHATWG: WebSockets Standard",
    url: "https://websockets.spec.whatwg.org/",
  },
  "mdn-websocket-api": {
    title: "MDN: WebSocket API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
  "mdn-websocket-bufferedamount": {
    title: "MDN: WebSocket bufferedAmount",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/bufferedAmount",
  },
  "rfc8441-websocket-http2": {
    title: "RFC 8441: Bootstrapping WebSockets with HTTP/2",
    url: "https://www.rfc-editor.org/rfc/rfc8441",
  },
  "nginx-websocket-proxying": {
    title: "NGINX Docs: WebSocket proxying",
    url: "https://nginx.org/en/docs/http/websocket.html",
  },
  "ruanyifeng-websocket": {
    title: "阮一峰: WebSocket 教程",
    url: "https://www.ruanyifeng.com/blog/2017/05/websocket.html",
  },
  "grpc-core-concepts": {
    title: "gRPC Docs: Core concepts, architecture and lifecycle",
    url: "https://grpc.io/docs/what-is-grpc/core-concepts/",
  },
  "grpc-protocol-http2": {
    title: "gRPC GitHub: gRPC over HTTP/2",
    url: "https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md",
  },
  "grpc-deadlines": {
    title: "gRPC Docs: Deadlines",
    url: "https://grpc.io/docs/guides/deadlines/",
  },
  "grpc-error-handling": {
    title: "gRPC Docs: Error handling",
    url: "https://grpc.io/docs/guides/error/",
  },
  "grpc-metadata": {
    title: "gRPC Docs: Metadata",
    url: "https://grpc.io/docs/guides/metadata/",
  },
  "grpc-service-config": {
    title: "gRPC Docs: Service Config",
    url: "https://grpc.io/docs/guides/service-config/",
  },
  "grpc-health-checking": {
    title: "gRPC Docs: Health Checking",
    url: "https://grpc.io/docs/guides/health-checking/",
  },
  "grpc-keepalive": {
    title: "gRPC Docs: Keepalive",
    url: "https://grpc.io/docs/guides/keepalive/",
  },
  "grpc-auth": {
    title: "gRPC Docs: Authentication",
    url: "https://grpc.io/docs/guides/auth/",
  },
  "grpc-performance": {
    title: "gRPC Docs: Performance Best Practices",
    url: "https://grpc.io/docs/guides/performance/",
  },
  "grpc-debugging": {
    title: "gRPC Docs: Debugging",
    url: "https://grpc.io/docs/guides/debugging/",
  },
  "grpc-web-basics": {
    title: "gRPC Docs: gRPC-Web Basics",
    url: "https://grpc.io/docs/platforms/web/basics/",
  },
  "grpc-load-balancing-blog": {
    title: "gRPC Blog: Load Balancing in gRPC",
    url: "https://grpc.io/blog/grpc-load-balancing/",
  },
  "quant67-grpc-internals": {
    title: "Quant67: gRPC 深度剖析",
    url: "https://quant67.com/post/grpc/grpc.html",
  },
  "protobuf-overview": {
    title: "Protocol Buffers Documentation: Overview",
    url: "https://protobuf.dev/overview/",
  },
  "protobuf-proto3-guide": {
    title: "Protocol Buffers Documentation: Language Guide (proto 3)",
    url: "https://protobuf.dev/programming-guides/proto3/",
  },
  "protobuf-encoding": {
    title: "Protocol Buffers Documentation: Encoding",
    url: "https://protobuf.dev/programming-guides/encoding/",
  },
  "protobuf-best-practices": {
    title: "Protocol Buffers Documentation: Proto Best Practices",
    url: "https://protobuf.dev/best-practices/dos-donts/",
  },
  "protobuf-field-presence": {
    title: "Protocol Buffers Documentation: Field Presence",
    url: "https://protobuf.dev/programming-guides/field_presence/",
  },
  "protobuf-json-format": {
    title: "Protocol Buffers Documentation: ProtoJSON Format",
    url: "https://protobuf.dev/programming-guides/json/",
  },
  "protobuf-go-generated": {
    title: "Protocol Buffers Documentation: Go Generated Code Guide",
    url: "https://protobuf.dev/reference/go/go-generated/",
  },
  "protobuf-mime-types": {
    title: "Protocol Buffers Documentation: MIME Types",
    url: "https://protobuf.dev/reference/protobuf/mime-types/",
  },
  "buf-breaking-overview": {
    title: "Buf Docs: Breaking Change Detection",
    url: "https://buf.build/docs/breaking/overview/",
  },
  "victoriametrics-go-protobuf": {
    title: "VictoriaMetrics: How Protobuf Works - The Art of Data Encoding",
    url: "https://victoriametrics.com/blog/go-protobuf/",
  },
  "cnblogs-protobuf-encoding": {
    title: "博客园：Protocol Buffers 编码详解",
    url: "https://www.cnblogs.com/fullsail/p/4220293.html",
  },
  "aws-elb-overview": {
    title: "AWS Elastic Load Balancing: What is Elastic Load Balancing?",
    url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  },
  "aws-elb-target-groups": {
    title: "AWS Elastic Load Balancing: Target groups",
    url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html",
  },
  "nginx-http-load-balancing": {
    title: "NGINX Documentation: HTTP Load Balancing",
    url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",
  },
  "aws-elb-how-it-works": {
    title: "AWS Elastic Load Balancing: How Elastic Load Balancing works",
    url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html",
  },
  "envoy-load-balancing-overview": {
    title: "Envoy Docs: Load Balancing Overview",
    url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/load_balancing/overview",
  },
  "envoy-outlier-detection": {
    title: "Envoy Docs: Outlier detection",
    url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/outlier",
  },
  "aliyun-clb-features": {
    title: "阿里云负载均衡 CLB: 功能特性",
    url: "https://help.aliyun.com/zh/slb/classic-load-balancer/product-overview/functional-characteristics",
  },
  "tencent-clb-overview": {
    title: "腾讯云负载均衡 CLB: 产品概述",
    url: "https://cloud.tencent.com/document/product/214/524",
  },
  "meituan-mgw-l4-load-balancing": {
    title: "美团技术团队: MGW 高性能四层负载均衡",
    url: "https://tech.meituan.com/2017/01/05/mgw.html",
  },
  "microservices-io-api-gateway": {
    title: "Microservices.io: API Gateway / Backends for Frontends",
    url: "https://microservices.io/patterns/apigateway.html",
  },
  "aws-api-gateway-overview": {
    title: "AWS Docs: What is Amazon API Gateway?",
    url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html",
  },
  "google-cloud-api-gateway": {
    title: "Google Cloud Docs: About API Gateway",
    url: "https://cloud.google.com/api-gateway/docs/about-api-gateway",
  },
  "azure-api-management-concepts": {
    title: "Microsoft Learn: Azure API Management concepts",
    url: "https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts",
  },
  "kong-gateway-docs": {
    title: "Kong Docs: Kong Gateway",
    url: "https://docs.konghq.com/gateway/latest/",
  },
  "envoy-architecture-overview": {
    title: "Envoy Docs: Architecture overview",
    url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/arch_overview",
  },
  "nginx-reverse-proxy": {
    title: "NGINX Documentation: Reverse Proxy",
    url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/",
  },
  "nginx-control-docs": {
    title: "NGINX Documentation: Controlling nginx",
    url: "https://nginx.org/en/docs/control.html",
  },
  "owasp-api-security-top-10": {
    title: "OWASP API Security Top 10",
    url: "https://owasp.org/API-Security/",
  },
  "rfc6585-http-additional-status-codes": {
    title: "RFC 6585: Additional HTTP Status Codes",
    url: "https://www.rfc-editor.org/rfc/rfc6585",
  },
  "ietf-ratelimit-header-fields": {
    title: "IETF: RateLimit header fields for HTTP",
    url: "https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/",
  },
  "aws-api-gateway-throttling": {
    title: "AWS Docs: API Gateway request throttling",
    url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
  },
  "envoy-global-rate-limiting": {
    title: "Envoy Docs: Global rate limiting",
    url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_features/global_rate_limiting",
  },
  "envoyproxy-ratelimit-service": {
    title: "Envoyproxy Ratelimit: Go/gRPC rate limit service",
    url: "https://github.com/envoyproxy/ratelimit",
  },
  "nginx-rate-limiting": {
    title: "NGINX Documentation: Rate limiting proxied HTTP resources",
    url: "https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-proxied-http/",
  },
  "nginx-limit-req-module": {
    title: "NGINX Docs: ngx_http_limit_req_module",
    url: "https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",
  },
  "nginx-rate-limiting-blog": {
    title: "NGINX Blog: Rate Limiting with NGINX",
    url: "https://blog.nginx.org/blog/rate-limiting-nginx",
  },
  "github-rest-rate-limits": {
    title: "GitHub Docs: Rate limits for the REST API",
    url: "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api",
  },
  "stripe-rate-limits": {
    title: "Stripe Docs: Rate limits",
    url: "https://docs.stripe.com/rate-limits",
  },
  "cloudflare-rate-limiting-rules": {
    title: "Cloudflare Docs: Rate limiting rules",
    url: "https://developers.cloudflare.com/waf/rate-limiting-rules/",
  },
  "cloudflare-rate-limiting-scale": {
    title: "Cloudflare Blog: How we built rate limiting capable of scaling to millions of domains",
    url: "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/",
  },
  "kong-rate-limiting-advanced": {
    title: "Kong Docs: Rate Limiting Advanced plugin",
    url: "https://developer.konghq.com/plugins/rate-limiting-advanced/",
  },
  "microsoft-aspnetcore-rate-limiting": {
    title: "Microsoft Learn: Rate limiting middleware in ASP.NET Core",
    url: "https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit",
  },
  "rfc2697-srtcm": {
    title: "RFC 2697: A Single Rate Three Color Marker",
    url: "https://www.rfc-editor.org/rfc/rfc2697",
  },
  "rfc2698-trtcm": {
    title: "RFC 2698: A Two Rate Three Color Marker",
    url: "https://www.rfc-editor.org/rfc/rfc2698",
  },
  "rfc3290-diffserv-model": {
    title: "RFC 3290: An Informal Management Model for Diffserv Routers",
    url: "https://www.rfc-editor.org/rfc/rfc3290",
  },
  "envoy-local-rate-limit": {
    title: "Envoy Docs: HTTP local rate limit filter",
    url: "https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/local_rate_limit_filter",
  },
  "guava-ratelimiter": {
    title: "Guava: RateLimiter",
    url: "https://github.com/google/guava/blob/master/guava/src/com/google/common/util/concurrent/RateLimiter.java",
  },
  "sentinel-flow-control-zh": {
    title: "Sentinel Docs: 流量控制",
    url: "https://sentinelguard.io/zh-cn/docs/flow-control.html",
  },
  "sentinel-golang-flow-control-zh": {
    title: "Sentinel Go Docs: 流量控制",
    url: "https://sentinelguard.io/zh-cn/docs/golang/flow-control.html",
  },
  "wikipedia-leaky-bucket": {
    title: "Wikipedia: Leaky bucket",
    url: "https://en.wikipedia.org/wiki/Leaky_bucket",
  },
  "martin-fowler-circuit-breaker": {
    title: "Martin Fowler: Circuit Breaker",
    url: "https://martinfowler.com/bliki/CircuitBreaker.html",
  },
  "microsoft-circuit-breaker-pattern": {
    title: "Microsoft Learn: Circuit Breaker pattern",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker",
  },
  "resilience4j-circuitbreaker": {
    title: "Resilience4j Docs: CircuitBreaker",
    url: "https://resilience4j.readme.io/docs/circuitbreaker",
  },
  "sentinel-circuit-breaking-zh": {
    title: "Sentinel Docs: 熔断降级",
    url: "https://sentinelguard.io/zh-cn/docs/circuit-breaking.html",
  },
  "polly-circuit-breaker": {
    title: "Polly Docs: Circuit breaker resilience strategy",
    url: "https://www.pollydocs.org/strategies/circuit-breaker.html",
  },
  "microsoft-bulkhead-pattern": {
    title: "Microsoft Learn: Bulkhead pattern",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead",
  },
  "resilience4j-bulkhead": {
    title: "Resilience4j Docs: Bulkhead",
    url: "https://resilience4j.readme.io/docs/bulkhead",
  },
  "netflix-hystrix-how-it-works": {
    title: "Netflix Hystrix Wiki: How it Works",
    url: "https://github.com/Netflix/Hystrix/wiki/How-it-Works",
  },
  "oracle-threadpoolexecutor": {
    title: "Oracle Java Docs: ThreadPoolExecutor",
    url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
  },
  "oracle-blockingqueue": {
    title: "Oracle Java Docs: BlockingQueue",
    url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html",
  },
  "oracle-rejectedexecutionhandler": {
    title: "Oracle Java Docs: RejectedExecutionHandler",
    url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/RejectedExecutionHandler.html",
  },
  "go-blog-pipelines": {
    title: "Go Blog: Pipelines and cancellation",
    url: "https://go.dev/blog/pipelines",
  },
  "go-database-sql-manage-connections": {
    title: "Go Docs: Managing database connections",
    url: "https://go.dev/doc/database/manage-connections",
  },
  "go-database-sql-package": {
    title: "Go Package Docs: database/sql",
    url: "https://pkg.go.dev/database/sql",
  },
  "microsoft-ado-net-connection-pooling": {
    title: "Microsoft Learn: SQL Server connection pooling",
    url: "https://learn.microsoft.com/en-us/sql/connect/ado-net/sql-server-connection-pooling",
  },
  "mysql-connectorj-connection-pooling": {
    title: "MySQL Connector/J: Connection Pooling",
    url: "https://dev.mysql.com/doc/connectors/en/connector-j-usagenotes-j2ee-concepts-connection-pooling.html",
  },
  "netflix-hystrix-configuration": {
    title: "Netflix Hystrix Wiki: Configuration",
    url: "https://github.com/Netflix/Hystrix/wiki/Configuration",
  },
  "polly-fallback": {
    title: "Polly Docs: Fallback resilience strategy",
    url: "https://www.pollydocs.org/strategies/fallback.html",
  },
  "aws-wellarchitected-graceful-degradation": {
    title: "AWS Well-Architected: Graceful degradation",
    url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_mitigate_interaction_failure_graceful_degradation.html",
  },
  "amazon-builders-library-fallback": {
    title: "Amazon Builders' Library: Avoiding fallback in distributed systems",
    url: "https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/",
  },
  "kubernetes-probes": {
    title: "Kubernetes Docs: Configure Liveness, Readiness and Startup Probes",
    url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
  },
  "kubernetes-pod-lifecycle": {
    title: "Kubernetes Docs: Pod Lifecycle",
    url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/",
  },
  "gke-crashloopbackoff-playbook": {
    title: "Google Kubernetes Engine: Troubleshoot CrashLoopBackOff events",
    url: "https://docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/crashloopbackoff-events",
  },
  "sysdig-crashloopbackoff": {
    title: "Sysdig: Debugging Kubernetes CrashLoopBackOff",
    url: "https://sysdig.com/blog/debug-kubernetes-crashloopbackoff/",
  },
  "komodor-kubernetes-errors": {
    title: "Komodor: Troubleshooting Kubernetes Errors",
    url: "https://komodor.com/learn/how-to-fix-crashloopbackoff-kubernetes-error/",
  },
  "kubernetes-hpa": {
    title: "Kubernetes Docs: Horizontal Pod Autoscaling",
    url: "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/",
  },
  "kubernetes-hpa-walkthrough": {
    title: "Kubernetes Docs: Horizontal Pod Autoscaling Walkthrough",
    url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/",
  },
  "kubernetes-resource-metrics-pipeline": {
    title: "Kubernetes Docs: Resource Metrics Pipeline",
    url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/",
  },
  "kubernetes-api-scale": {
    title: "Kubernetes API Reference: Scale",
    url: "https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/scale-v1/",
  },
  "gke-hpa": {
    title: "Google Kubernetes Engine: Horizontal Pod autoscaling",
    url: "https://cloud.google.com/kubernetes-engine/docs/concepts/horizontalpodautoscaler",
  },
  "learnk8s-autoscaling": {
    title: "Learnk8s: Kubernetes Autoscaling",
    url: "https://learnk8s.io/kubernetes-autoscaling-strategies",
  },
  "aws-elb-health-checks": {
    title: "AWS Elastic Load Balancing: Health checks for target groups",
    url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html",
  },
  "envoy-health-checking": {
    title: "Envoy Docs: Health Checking",
    url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/health_checking",
  },
  "spring-boot-actuator-health": {
    title: "Spring Boot Docs: Kubernetes Probes and Actuator Health Groups",
    url: "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.kubernetes-probes",
  },
  "azure-health-endpoint-monitoring": {
    title: "Azure Architecture Center: Health Endpoint Monitoring pattern",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring",
  },
  "aliyun-alb-health-checks": {
    title: "阿里云 ALB：健康检查",
    url: "https://help.aliyun.com/zh/slb/application-load-balancer/user-guide/health-checks",
  },
  "aliyun-alb-health-check-troubleshooting": {
    title: "阿里云 ALB：健康检查异常排查",
    url: "https://help.aliyun.com/zh/slb/application-load-balancer/support/troubleshoot-health-check-errors",
  },
  "aws-security-groups": {
    title: "AWS VPC: Control traffic using security groups",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",
  },
  "aws-security-group-connection-tracking": {
    title: "Amazon EC2: Security group connection tracking",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html",
  },
  "aws-network-acls": {
    title: "AWS VPC: Control subnet traffic with network ACLs",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  "aliyun-vpc-access-control": {
    title: "阿里云 VPC：访问控制",
    url: "https://help.aliyun.com/zh/vpc/access-control",
  },
  "microsoft-windows-firewall": {
    title: "Microsoft Learn: Windows Firewall overview",
    url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/",
  },
  "netfilter-docs": {
    title: "netfilter/iptables project: Documentation",
    url: "https://www.nftables.org/documentation/index.html",
  },
  "nftables-conntrack": {
    title: "nftables wiki: Connection Tracking System",
    url: "https://wiki.nftables.org/wiki-nftables/index.php/Connection_Tracking_System",
  },
  "nftables-netfilter-hooks": {
    title: "nftables wiki: Netfilter hooks",
    url: "https://wiki.nftables.org/wiki-nftables/index.php/Netfilter_hooks",
  },
  "debian-conntrack-manpage": {
    title: "Debian Manpages: conntrack(8)",
    url: "https://manpages.debian.org/testing/conntrack/conntrack.8.en.html",
  },
  "debian-nft-manpage": {
    title: "Debian Manpages: nft(8)",
    url: "https://manpages.debian.org/testing/nftables/nft.8.en.html",
  },
  "kubernetes-network-policies": {
    title: "Kubernetes Docs: Network Policies",
    url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
  },
  "cloudflare-waf-docs": {
    title: "Cloudflare Docs: Web Application Firewall",
    url: "https://developers.cloudflare.com/waf/",
  },
  "tcpinfo-nf-conntrack-format": {
    title: "TCP.info：nf_conntrack 格式详解",
    url: "https://tcp.info/posts/2017-08/nf_conntrack-format/",
  },
  "thebyte-conntrack": {
    title: "深入高可用系统原理与设计：连接跟踪模块 conntrack",
    url: "https://www.thebyte.com.cn/network/conntrack.html",
  },
  "opentelemetry-observability-primer": {
    title: "OpenTelemetry Docs: Observability Primer",
    url: "https://opentelemetry.io/docs/concepts/observability-primer/",
  },
  "opentelemetry-components": {
    title: "OpenTelemetry Docs: Components",
    url: "https://opentelemetry.io/docs/concepts/components/",
  },
  "opentelemetry-instrumentation": {
    title: "OpenTelemetry Docs: Instrumentation",
    url: "https://opentelemetry.io/docs/concepts/instrumentation/",
  },
  "opentelemetry-code-instrumentation": {
    title: "OpenTelemetry Docs: Code-based instrumentation",
    url: "https://opentelemetry.io/docs/concepts/instrumentation/code-based/",
  },
  "opentelemetry-otlp": {
    title: "OpenTelemetry Docs: OTLP Specification",
    url: "https://opentelemetry.io/docs/specs/otlp/",
  },
  "opentelemetry-semantics": {
    title: "OpenTelemetry Docs: Semantic Conventions",
    url: "https://opentelemetry.io/docs/specs/semconv/",
  },
  "opentelemetry-resource-semantics": {
    title: "OpenTelemetry Docs: Resource semantic conventions",
    url: "https://opentelemetry.io/docs/specs/semconv/resource/",
  },
  "opentelemetry-logs-data-model": {
    title: "OpenTelemetry Docs: Logs Data Model",
    url: "https://opentelemetry.io/docs/specs/otel/logs/data-model/",
  },
  "aws-cloudtrail-user-guide": {
    title: "AWS CloudTrail User Guide",
    url: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  "google-cloud-audit-logs": {
    title: "Google Cloud Docs: Cloud Audit Logs overview",
    url: "https://cloud.google.com/logging/docs/audit",
  },
  "google-cloud-structured-logging": {
    title: "Google Cloud Docs: Structured logging",
    url: "https://cloud.google.com/logging/docs/structured-logging",
  },
  "logback-mdc": {
    title: "Logback Manual: Mapped Diagnostic Context",
    url: "https://logback.qos.ch/manual/mdc.html",
  },
  "logback-architecture": {
    title: "Logback Manual: Architecture",
    url: "https://logback.qos.ch/manual/architecture.html",
  },
  "log4j-levels": {
    title: "Apache Log4j 2 Manual: Levels",
    url: "https://logging.apache.org/log4j/2.x/manual/customloglevels.html",
  },
  "slf4j-manual": {
    title: "SLF4J Manual",
    url: "https://www.slf4j.org/manual.html",
  },
  "python-logging-howto": {
    title: "Python Docs: Logging HOWTO",
    url: "https://docs.python.org/3/howto/logging.html",
  },
  "elastic-common-schema": {
    title: "Elastic Common Schema: ECS reference",
    url: "https://www.elastic.co/docs/reference/ecs",
  },
  "opentelemetry-collector": {
    title: "OpenTelemetry Docs: Collector",
    url: "https://opentelemetry.io/docs/collector/",
  },
  "opentelemetry-collector-processors": {
    title: "OpenTelemetry Docs: Collector processors",
    url: "https://opentelemetry.io/docs/collector/components/processor/",
  },
  "fluent-bit-pipeline": {
    title: "Fluent Bit Manual: Stream processing overview",
    url: "https://docs.fluentbit.io/manual/stream-processing/get-started",
  },
  "fluent-bit-concepts": {
    title: "Fluent Bit Manual: Key concepts",
    url: "https://docs.fluentbit.io/manual/concepts/key-concepts",
  },
  "logstash-introduction": {
    title: "Elastic Docs: Logstash introduction",
    url: "https://www.elastic.co/docs/reference/logstash/introduction",
  },
  "elastic-stack-docs": {
    title: "Elastic Docs: The Elastic Stack",
    url: "https://www.elastic.co/guide/en/kibana/current/index.html",
  },
  "elasticsearch-data-lifecycle": {
    title: "Elastic Docs: Data lifecycle",
    url: "https://www.elastic.co/docs/manage-data/lifecycle",
  },
  "elasticsearch-data-streams": {
    title: "Elastic Docs: Data streams",
    url: "https://www.elastic.co/docs/manage-data/data-store/data-streams",
  },
  "elasticsearch-mapping": {
    title: "Elastic Docs: Mapping",
    url: "https://www.elastic.co/docs/manage-data/data-store/mapping",
  },
  "kibana-discover": {
    title: "Elastic Docs: Discover",
    url: "https://www.elastic.co/docs/explore-analyze/discover",
  },
  "grafana-loki-labels": {
    title: "Grafana Loki Docs: Understand labels",
    url: "https://grafana.com/docs/loki/latest/get-started/labels/",
  },
  "grafana-loki-overview": {
    title: "Grafana Loki Docs: Overview",
    url: "https://grafana.com/docs/loki/latest/",
  },
  "grafana-loki-architecture": {
    title: "Grafana Loki Docs: Architecture",
    url: "https://grafana.com/docs/loki/latest/get-started/architecture/",
  },
  "grafana-loki-logql": {
    title: "Grafana Loki Docs: LogQL",
    url: "https://grafana.com/docs/loki/latest/query/",
  },
  "grafana-loki-retention": {
    title: "Grafana Loki Docs: Retention",
    url: "https://grafana.com/docs/loki/latest/operations/storage/retention/",
  },
  "grafana-loki-storage": {
    title: "Grafana Loki Docs: Storage",
    url: "https://grafana.com/docs/loki/latest/operations/storage/",
  },
  "grafana-loki-structured-metadata": {
    title: "Grafana Loki Docs: Structured metadata",
    url: "https://grafana.com/docs/loki/latest/get-started/labels/structured-metadata/",
  },
  "google-sre-monitoring": {
    title: "Google SRE Book: Monitoring Distributed Systems",
    url: "https://sre.google/sre-book/monitoring-distributed-systems/",
  },
  "google-sre-service-level-objectives": {
    title: "Google SRE Book: Service Level Objectives",
    url: "https://sre.google/sre-book/service-level-objectives/",
  },
  "google-sre-implementing-slos": {
    title: "Google SRE Workbook: Implementing SLOs",
    url: "https://sre.google/workbook/implementing-slos/",
  },
  "google-sre-error-budget-policy": {
    title: "Google SRE Workbook: Example Error Budget Policy",
    url: "https://sre.google/workbook/error-budget-policy/",
  },
  "google-sre-practical-alerting": {
    title: "Google SRE Workbook: Alerting on SLOs",
    url: "https://sre.google/workbook/alerting-on-slos/",
  },
  "google-cloud-slo-monitoring": {
    title: "Google Cloud Docs: Service monitoring SLO concepts",
    url: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring",
  },
  "google-cloud-burn-rate-alerts": {
    title: "Google Cloud Docs: Alerting on your burn rate",
    url: "https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
  },
  "google-sre-managing-incidents": {
    title: "Google SRE Book: Managing Incidents",
    url: "https://sre.google/sre-book/managing-incidents/",
  },
  "google-sre-postmortem-culture": {
    title: "Google SRE Book: Postmortem Culture",
    url: "https://sre.google/sre-book/postmortem-culture/",
  },
  "google-sre-workbook-postmortem-culture": {
    title: "Google SRE Workbook: Postmortem Culture",
    url: "https://sre.google/workbook/postmortem-culture/",
  },
  "google-sre-incident-metrics": {
    title: "Google SRE: Incident Metrics in SRE",
    url: "https://sre.google/static/pdf/IncidentMetricsInSRE.pdf",
  },
  "google-sre-being-on-call": {
    title: "Google SRE Book: Being On-Call",
    url: "https://sre.google/sre-book/being-on-call/",
  },
  "pagerduty-incident-response": {
    title: "PagerDuty Docs: Incident response",
    url: "https://support.pagerduty.com/main/docs/incident-response",
  },
  "pagerduty-escalation-policies": {
    title: "PagerDuty Docs: Escalation policies",
    url: "https://support.pagerduty.com/main/docs/escalation-policies",
  },
  "atlassian-incident-runbook": {
    title: "Atlassian: Incident management runbook",
    url: "https://www.atlassian.com/incident-management/incident-response/runbook",
  },
  "atlassian-postmortem-template": {
    title: "Atlassian: Incident postmortem process",
    url: "https://www.atlassian.com/incident-management/postmortem/templates",
  },
  "pagerduty-postmortem-guide": {
    title: "PagerDuty: Postmortem documentation guide",
    url: "https://www.pagerduty.com/resources/insights/learn/how-to-write-postmortem/",
  },
  "google-sre-emergency-response": {
    title: "Google SRE Book: Emergency Response",
    url: "https://sre.google/sre-book/emergency-response/",
  },
  "azure-automation-runbooks": {
    title: "Microsoft Learn: Azure Automation runbooks",
    url: "https://learn.microsoft.com/en-us/azure/automation/automation-runbook-types",
  },
  "google-sre-handling-overload": {
    title: "Google SRE Book: Handling Overload",
    url: "https://sre.google/sre-book/handling-overload/",
  },
  "google-sre-cascading-failures": {
    title: "Google SRE Book: Addressing Cascading Failures",
    url: "https://sre.google/sre-book/addressing-cascading-failures/",
  },
  "aws-load-shedding": {
    title: "AWS Builders' Library: Using load shedding to avoid overload",
    url: "https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/",
  },
  "envoy-overload-manager": {
    title: "Envoy Docs: Overload manager",
    url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/operations/overload_manager",
  },
  "netflix-concurrency-limits": {
    title: "Netflix Concurrency Limits",
    url: "https://github.com/Netflix/concurrency-limits",
  },
  "reactive-streams-spec": {
    title: "Reactive Streams Specification",
    url: "https://www.reactive-streams.org/",
  },
  "nodejs-backpressuring-streams": {
    title: "Node.js Docs: Backpressuring in Streams",
    url: "https://nodejs.org/en/learn/modules/backpressuring-in-streams",
  },
  "rabbitmq-flow-control": {
    title: "RabbitMQ Docs: Flow Control",
    url: "https://www.rabbitmq.com/docs/flow-control",
  },
  "spring-kafka-pause-resume": {
    title: "Spring Kafka Docs: Pausing and Resuming Listener Containers",
    url: "https://docs.spring.io/spring-kafka/reference/kafka/pause-resume.html",
  },
  "launchdarkly-kill-switch": {
    title: "LaunchDarkly Docs: Kill switch flags",
    url: "https://launchdarkly.com/docs/home/flags/killswitch/",
  },
  "openfeature-introduction": {
    title: "OpenFeature Docs: Introduction",
    url: "https://openfeature.dev/docs/reference/intro/",
  },
  "microsoft-feature-management": {
    title: "Microsoft Learn: Feature management overview",
    url: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
  },
  "unleash-feature-flag-best-practices": {
    title: "Unleash Docs: Feature flag best practices",
    url: "https://docs.getunleash.io/topics/feature-flags/feature-flag-best-practices",
  },
  "martin-fowler-feature-toggles": {
    title: "Martin Fowler: Feature Toggles",
    url: "https://martinfowler.com/articles/feature-toggles.html",
  },
  "google-sre-canarying-releases": {
    title: "Google SRE Workbook: Canarying Releases",
    url: "https://sre.google/workbook/canarying-releases/",
  },
  "argo-rollouts-canary": {
    title: "Argo Rollouts Docs: Canary Deployment Strategy",
    url: "https://argoproj.github.io/argo-rollouts/features/canary/",
  },
  "flagger-deployment-strategies": {
    title: "Flagger Docs: Deployment Strategies",
    url: "https://docs.flagger.app/main/usage/deployment-strategies",
  },
  "google-cloud-deploy-canary": {
    title: "Google Cloud Deploy: Use a canary deployment strategy",
    url: "https://cloud.google.com/deploy/docs/deployment-strategies/canary",
  },
  "aliyun-alb-canary-release": {
    title: "阿里云帮助中心：使用 ALB 实现灰度发布",
    url: "https://help.aliyun.com/zh/slb/application-load-balancer/use-cases/use-alb-to-implement-canary-releases/",
  },
  "kubernetes-deployment-rollback": {
    title: "Kubernetes Docs: Update a Deployment Without Downtime",
    url: "https://kubernetes.io/docs/tasks/run-application/update-deployment-rolling/",
  },
  "aws-codedeploy-rollback": {
    title: "AWS CodeDeploy Docs: Redeploy and roll back a deployment",
    url: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
  },
  "google-cloud-deploy-rollback": {
    title: "Google Cloud Deploy Docs: Roll back a target",
    url: "https://cloud.google.com/deploy/docs/roll-back",
  },
  "argo-rollouts-rollback": {
    title: "Argo Rollouts Docs: Rollback Window",
    url: "https://argoproj.github.io/argo-rollouts/features/rollback/",
  },
  "liquibase-rollback": {
    title: "Liquibase Docs: rollback",
    url: "https://docs.liquibase.com/commands/rollback/rollback.html",
  },
  "prisma-expand-contract-migration": {
    title: "Prisma Docs: Data migrations with expand and contract",
    url: "https://docs.prisma.io/docs/guides/database/data-migration",
  },
  "flyway-migrations": {
    title: "Redgate Flyway Docs: Migrations",
    url: "https://documentation.red-gate.com/flyway/flyway-concepts/migrations",
  },
  "flyway-migrate-command": {
    title: "Redgate Flyway Docs: Migrate",
    url: "https://documentation.red-gate.com/flyway/reference/commands/migrate",
  },
  "rails-active-record-migrations": {
    title: "Ruby on Rails Guides: Active Record Migrations",
    url: "https://guides.rubyonrails.org/active_record_migrations.html",
  },
  "django-migrations": {
    title: "Django Documentation: Migrations",
    url: "https://docs.djangoproject.com/en/dev/topics/migrations/",
  },
  "mysql-online-ddl-performance": {
    title: "MySQL 8.0 Reference Manual: Online DDL Performance and Concurrency",
    url: "https://dev.mysql.com/doc/mysql/8.0/en/innodb-online-ddl-performance.html",
  },
  "martin-fowler-evolutionary-database-design": {
    title: "Martin Fowler: Evolutionary Database Design",
    url: "https://martinfowler.com/articles/evodb.html",
  },
  "prometheus-metric-naming": {
    title: "Prometheus Docs: Metric and label naming",
    url: "https://prometheus.io/docs/practices/naming/",
  },
  "prometheus-overview": {
    title: "Prometheus Docs: Overview",
    url: "https://prometheus.io/docs/introduction/overview/",
  },
  "prometheus-data-model": {
    title: "Prometheus Docs: Data model",
    url: "https://prometheus.io/docs/concepts/data_model/",
  },
  "prometheus-querying-basics": {
    title: "Prometheus Docs: Querying basics",
    url: "https://prometheus.io/docs/prometheus/latest/querying/basics/",
  },
  "prometheus-recording-rules": {
    title: "Prometheus Docs: Recording rules",
    url: "https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/",
  },
  "prometheus-alerting-rules": {
    title: "Prometheus Docs: Alerting rules",
    url: "https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/",
  },
  "prometheus-metric-types": {
    title: "Prometheus Docs: Metric types",
    url: "https://prometheus.io/docs/concepts/metric_types/",
  },
  "prometheus-histograms": {
    title: "Prometheus Docs: Histograms and summaries",
    url: "https://prometheus.io/docs/practices/histograms/",
  },
  "prometheus-alertmanager": {
    title: "Prometheus Docs: Alertmanager",
    url: "https://prometheus.io/docs/alerting/latest/alertmanager/",
  },
  "prometheus-alertmanager-config": {
    title: "Prometheus Docs: Alertmanager configuration",
    url: "https://prometheus.io/docs/alerting/latest/configuration/",
  },
  "opentelemetry-metrics": {
    title: "OpenTelemetry Docs: Metrics",
    url: "https://opentelemetry.io/docs/concepts/signals/metrics/",
  },
  "opentelemetry-traces": {
    title: "OpenTelemetry Docs: Traces",
    url: "https://opentelemetry.io/docs/concepts/signals/traces/",
  },
  "opentelemetry-trace-api": {
    title: "OpenTelemetry Spec: Tracing API",
    url: "https://opentelemetry.io/docs/specs/otel/trace/api/",
  },
  "opentelemetry-context-propagation": {
    title: "OpenTelemetry Docs: Context propagation",
    url: "https://opentelemetry.io/docs/concepts/context-propagation/",
  },
  "opentelemetry-logging-trace-context": {
    title: "OpenTelemetry Spec: Trace Context in non-OTLP Log Formats",
    url: "https://opentelemetry.io/docs/specs/otel/compatibility/logging_trace_context/",
  },
  "opentelemetry-sampling": {
    title: "OpenTelemetry Docs: Sampling",
    url: "https://opentelemetry.io/docs/concepts/sampling/",
  },
  "w3c-trace-context": {
    title: "W3C Recommendation: Trace Context",
    url: "https://www.w3.org/TR/trace-context/",
  },
  "jaeger-architecture": {
    title: "Jaeger Docs: Architecture",
    url: "https://www.jaegertracing.io/docs/latest/architecture/",
  },
  "jaeger-terminology": {
    title: "Jaeger Docs: Terminology",
    url: "https://www.jaegertracing.io/docs/latest/architecture/terminology/",
  },
  "jaeger-deployment": {
    title: "Jaeger Docs: Deployment",
    url: "https://www.jaegertracing.io/docs/latest/deployment/",
  },
  "jaeger-sampling": {
    title: "Jaeger Docs: Sampling",
    url: "https://www.jaegertracing.io/docs/latest/architecture/sampling/",
  },
  "jaeger-spm": {
    title: "Jaeger Docs: Service Performance Monitoring",
    url: "https://www.jaegertracing.io/docs/latest/spm/",
  },
  "jaeger-performance-tuning": {
    title: "Jaeger Docs: Performance Tuning",
    url: "https://www.jaegertracing.io/docs/latest/performance-tuning/",
  },
  "jaeger-opentelemetry-migration": {
    title: "Jaeger Docs: Migration to OpenTelemetry",
    url: "https://www.jaegertracing.io/docs/latest/migration/",
  },
  "grafana-dashboards": {
    title: "Grafana Docs: Dashboards",
    url: "https://grafana.com/docs/grafana/latest/dashboards/",
  },
  "grafana-panels": {
    title: "Grafana Docs: Panels and visualizations",
    url: "https://grafana.com/docs/grafana/latest/panels-visualizations/",
  },
  "grafana-variables": {
    title: "Grafana Docs: Variables",
    url: "https://grafana.com/docs/grafana/latest/dashboards/variables/",
  },
  "grafana-data-sources": {
    title: "Grafana Docs: Data sources",
    url: "https://grafana.com/docs/grafana/latest/datasources/",
  },
  "grafana-prometheus-data-source": {
    title: "Grafana Docs: Prometheus data source",
    url: "https://grafana.com/docs/grafana/latest/datasources/prometheus/",
  },
  "grafana-alerting": {
    title: "Grafana Docs: Alerting",
    url: "https://grafana.com/docs/grafana/latest/alerting/",
  },
  "grafana-notification-policies": {
    title: "Grafana Docs: Notification policies",
    url: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/notifications/notification-policies/",
  },
  "grafana-silences": {
    title: "Grafana Docs: Silences",
    url: "https://grafana.com/docs/grafana/latest/alerting/configure-notifications/create-silence/",
  },
  "grafana-provisioning": {
    title: "Grafana Docs: Provision Grafana",
    url: "https://grafana.com/docs/grafana/latest/administration/provisioning/",
  },
  "khan-bandwidth-latency": {
    title: "Khan Academy: Bit rate, bandwidth, and latency",
    url: "https://www.khanacademy.org/a/bit-rate-bandwidth-and-latency",
  },
  "cloudflare-latency": {
    title: "Cloudflare Learning Center: What is latency?",
    url: "https://www.cloudflare.com/learning/performance/glossary/what-is-latency/",
  },
  "ibm-latency": {
    title: "IBM Think: What is latency?",
    url: "https://www.ibm.com/think/topics/latency",
  },
  "microsoft-latency-throughput": {
    title: "Microsoft Learn: Network Latency and Throughput",
    url: "https://learn.microsoft.com/en-us/windows/win32/rpc/network-latency-and-throughput",
  },
  "bitag-latency-explained": {
    title: "BITAG: Latency Explained",
    url: "https://www.bitag.org/documents/BITAG_latency_explained.pdf",
  },
  "chrome-devtools-network-reference": {
    title: "Chrome DevTools: Network features reference",
    url: "https://developer.chrome.com/docs/devtools/network/reference",
  },
  "webdev-ttfb": {
    title: "web.dev: Time to First Byte (TTFB)",
    url: "https://web.dev/articles/ttfb",
  },
  "learnemc-time-frequency-domain": {
    title: "LearnEMC: Time and Frequency Domain",
    url: "https://learnemc.com/time-frequency-domain",
  },
  "academyofemc-time-vs-frequency-domain": {
    title: "Academy of EMC: Time vs Frequency Domain",
    url: "https://www.academyofemc.com/time-vs-frequency-domain",
  },
  "shannon-1948-mathematical-theory": {
    title: "Claude Shannon: A Mathematical Theory of Communication",
    url: "https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf",
  },
  "iperf3-docs": {
    title: "ESnet: iperf3 Documentation",
    url: "https://software.es.net/iperf/",
  },
  "linux-interface-statistics": {
    title: "Linux Kernel Docs: Interface statistics",
    url: "https://kernel.org/doc/html/next/networking/statistics.html",
  },
  "cisco-ethernet-troubleshooting": {
    title: "Cisco: Troubleshooting Ethernet",
    url: "https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html",
  },
  "cisco-nexus-crc-errors": {
    title: "Cisco: Understand Cyclic Redundancy Check Errors on Nexus Switches",
    url: "https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/nx-os-software/217554-understand-cyclic-redundancy-check-crc.html",
  },
  "ieee-8023-ethernet": {
    title: "IEEE 802.3 Ethernet Working Group",
    url: "https://www.ieee802.org/3/",
  },
  "ieee-ra-faq": {
    title: "IEEE SA: IEEE Registration Authority FAQs",
    url: "https://standards.ieee.org/faqs/regauth/",
  },
  "rfc9542-ieee802-parameters": {
    title: "RFC 9542: IANA Considerations for IEEE 802 Parameters",
    url: "https://www.rfc-editor.org/rfc/rfc9542",
  },
  "iana-ieee-802-numbers": {
    title: "IANA: IEEE 802 Numbers",
    url: "https://www.iana.org/assignments/ieee-802-numbers/ieee-802-numbers.xhtml",
  },
  "wireshark-ethernet": {
    title: "Wireshark Wiki: Ethernet",
    url: "https://wiki.wireshark.org/Ethernet",
  },
  "cisco-ethernet-autonegotiation": {
    title: "Cisco: Troubleshooting Ethernet Autonegotiation",
    url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html",
  },
  "intel-ethernet-speed-duplex": {
    title: "Intel Ethernet Products: Speed and Duplex Configuration",
    url: "https://www.intel.com/content/www/us/en/support/articles/000006967/ethernet-products.html",
  },
  "ibm-network-crc-errors": {
    title: "IBM Support: Network CRC Errors and Link Issues",
    url: "https://www.ibm.com/support/pages/ethernet-crc-errors-and-troubleshooting",
  },
  "networkacademy-switching-logic": {
    title: "NetworkAcademy.IO: Overview of Switching Logic",
    url: "https://www.networkacademy.io/ccna/ethernet/switching-logic",
  },
  "cisco-mac-address-table": {
    title: "Cisco Catalyst 3560: Managing the MAC Address Table",
    url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/15-0_2_se/configuration/guide/scg3560/swadmin.html",
  },
  "cisco-arp-cam-troubleshooting": {
    title: "Cisco: Catalyst ARP or CAM Table Issues Troubleshooting",
    url: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/71079-arp-cam-tableissues.html",
  },
  "cisco-unicast-flooding": {
    title: "Cisco: Unicast Flooding in Switched Campus Networks",
    url: "https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6000-series-switches/23563-143.html",
  },
  "ieee-8021q-2022-bridges": {
    title: "IEEE SA: IEEE 802.1Q-2022 Bridges and Bridged Networks",
    url: "https://standards.ieee.org/ieee/802.1Q/10323/",
  },
  "linux-kernel-bridge": {
    title: "Linux Kernel Docs: Ethernet Bridging",
    url: "https://www.kernel.org/doc/html/latest/networking/bridge.html",
  },
  "cisco-network-switching-operation": {
    title: "Cisco Community: Network Switching Operation",
    url: "https://community.cisco.com/t5/networking-knowledge-base/network-switching-operation/ta-p/4193160",
  },
  "h3c-mac-address-table": {
    title: "H3C: MAC 地址表命令",
    url: "https://www.h3c.com/cn/d_201908/1219357_30005_0.htm",
  },
  "gfg-switch-functions-layer2": {
    title: "GeeksForGeeks: Switch functions at layer 2",
    url: "https://www.geeksforgeeks.org/computer-networks/switch-functions-at-layer-2/",
  },
  "networklessons-arp": {
    title: "NetworkLessons: ARP explained",
    url: "https://networklessons.com/ip-services/arp-address-resolution-protocol-explained",
  },
  "networklessons-ip-routing": {
    title: "NetworkLessons: IP Routing Explained",
    url: "https://networklessons.com/cisco/ccna-200-301/ip-routing-explained",
  },
  "networklessons-longest-prefix": {
    title: "NetworkLessons: Longest Prefix Match Routing",
    url: "https://networklessons.com/cisco/ccna-200-301/longest-prefix-match-routing",
  },
  "rfc826-arp": {
    title: "RFC 826: An Ethernet Address Resolution Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc826",
  },
  "rfc5227-ipv4-acd": {
    title: "RFC 5227: IPv4 Address Conflict Detection",
    url: "https://www.rfc-editor.org/rfc/rfc5227",
  },
  "wireshark-arp": {
    title: "Wireshark Wiki: Address Resolution Protocol",
    url: "https://wiki.wireshark.org/AddressResolutionProtocol",
  },
  "man7-ip-neighbour": {
    title: "Linux man-pages: ip-neighbour",
    url: "https://man7.org/linux/man-pages/man8/ip-neighbour.8.html",
  },
  "cisco-arp-config": {
    title: "Cisco: Configuring ARP",
    url: "https://www.cisco.com/c/en/us/td/docs/routers/asr920/configuration/guide/ip/ip-arp.html",
  },
  "cisco-dynamic-arp-inspection": {
    title: "Cisco Catalyst 9400: Configuring Dynamic ARP Inspection",
    url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9400/software/release/17-9/configuration_guide/sec/b_179_sec_9400_cg/configuring_dynamic_arp_inspection.html",
  },
  "h3c-arp-configuration": {
    title: "H3C: ARP Configuration",
    url: "https://wwwsg.h3c.com/en/d_202407/2225015_294551_0.htm",
  },
  "geeksforgeeks-ethernet-frame": {
    title: "GeeksForGeeks: Ethernet Frame Format",
    url: "https://www.geeksforgeeks.org/computer-networks/ethernet-frame-format/",
  },
  "ibm-ethernet-frame-format": {
    title: "IBM i: Ethernet frame format",
    url: "https://www.ibm.com/docs/en/i/7.6.0?topic=support-ethernet-frame-format",
  },
  "cisco-8021q-frame-format": {
    title: "Cisco: Inter-Switch Link and IEEE 802.1Q Frame Format",
    url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/8021q/17056-741-4.html",
  },
  "cisco-access-trunk-interfaces": {
    title: "Cisco Nexus 3000: Configuring Access and Trunk Interfaces",
    url: "https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus3000/sw/layer2/503_U3_1/b_Cisco_n3k_Layer_2_Switching_Config_503_U31_chapter_0111.html",
  },
  "cisco-vlan-trunking-guide": {
    title: "Cisco C9350: Configure VLAN Trunks",
    url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html",
  },
  "cisco-meraki-8021q-vlan-tagging": {
    title: "Cisco Meraki: Fundamentals of 802.1Q VLAN Tagging",
    url: "https://documentation.meraki.com/Platform_Management/Dashboard_Administration/Design_and_Configure/Configuration_Guides/Routing_and_Firewall/Fundamentals_of_802.1Q_VLAN_Tagging",
  },
  "cisco-campus-lan-l2-cvd": {
    title: "Cisco Validated Design: Campus LAN Layer 2 Access Deployment",
    url: "https://www.cisco.com/c/dam/en/us/td/docs/solutions/CVD/Oct2015/CVD-Campus_LAN_L2_Access_Simplified_Dist_Deployment-Oct2015.pdf",
  },
  "huawei-vlan-basic-concepts": {
    title: "Huawei: Basic Concepts of VLAN",
    url: "https://support.huawei.com/enterprise/en/doc/EDOC1000089036/60b1f2f0/basic-concepts-of-vlan",
  },
  "redhat-linux-bridge-vlan-filter": {
    title: "Red Hat Developer: An introduction to Linux bridging commands and features",
    url: "https://developers.redhat.com/articles/2022/04/06/introduction-linux-bridging-commands-and-features",
  },
  "networkacademy-vlan-trunking": {
    title: "NetworkAcademy.IO: VLAN Trunking",
    url: "https://www.networkacademy.io/ccna/ethernet/vlan-trunking",
  },
  "omnisecu-8021q-tagging": {
    title: "OmniSecu: IEEE 802.1Q VLAN Tagging",
    url: "https://www.omnisecu.com/cisco-certified-network-associate-ccna/ieee-802.1q-vlan-tagging.php",
  },
  "computernetworkingnotes-ethernet-frame": {
    title: "ComputerNetworkingNotes: Ethernet Frame Format Explained",
    url: "https://www.computernetworkingnotes.com/ccna-study-guide/ethernet-frame-format-explained.html",
  },
  "fortinet-osi-model": {
    title: "Fortinet: What Is the OSI Model?",
    url: "https://www.fortinet.com/resources/cyberglossary/osi-model",
  },
  "cloudmylab-tcp-handshake": {
    title: "CloudMyLab TCP 3-Way Handshake: SYN, SYN-ACK, ACK Explained",
    url: "https://blog.cloudmylab.com/tcp-ip-3-way-handshake",
  },
  "guru99-tcp-handshake": {
    title: "Guru99 TCP 3-Way Handshake",
    url: "https://www.guru99.com/tcp-3-way-handshake.html",
  },
  "geeksforgeeks-tcp-handshake": {
    title: "GeeksForGeeks TCP 3-Way Handshake Process",
    url: "https://www.geeksforgeeks.org/computer-networks/tcp-3-way-handshake-process/",
  },
  "geeksforgeeks-tcp-termination": {
    title: "GeeksForGeeks TCP Connection Termination",
    url: "https://www.geeksforgeeks.org/computer-networks/tcp-connection-termination/",
  },
  "ipwithease-tcp-termination": {
    title: "IP With Ease TCP Connection Termination",
    url: "https://ipwithease.com/tcp-connection-termination/",
  },
  "tcpipguide-tcp-termination": {
    title: "The TCP/IP Guide TCP Connection Termination",
    url: "http://www.tcpipguide.com/free/t_TCPConnectionTermination-2.htm",
  },
  "tcpipguide-time-wait": {
    title: "The TCP/IP Guide The TIME-WAIT State",
    url: "http://www.tcpipguide.com/free/t_TCPConnectionTermination-3.htm",
  },
  "rfc9293-tcp-state-machine": {
    title: "RFC 9293 State Machine Overview",
    url: "https://www.rfc-editor.org/info/rfc9293/#section-3.3.2",
  },
  "tcpipguide-tcp-fsm": {
    title: "The TCP/IP Guide TCP Finite State Machine",
    url: "http://www.tcpipguide.com/free/t_TCPOperationalOverviewandtheTCPFiniteStateMachineF-2.htm",
  },
  "ibm-tcp-connection-status": {
    title: "IBM TCP Connection Status",
    url: "https://www.ibm.com/docs/en/zos/2.1.0?topic=SSLTBW_2.1.0/com.ibm.zos.v2r1.halu101/constatus.html",
  },
  "krownet-tcp-states": {
    title: "TCP State Transition Diagram",
    url: "https://srg-ics-uplb.github.io/krownet/modules/tcp-states/index.html",
  },
  "bcc-tcpstates": {
    title: "BCC tools: tcpstates",
    url: "https://github.com/iovisor/bcc/blob/master/tools/tcpstates.py",
  },
  "cloudflare-cdn-overview": {
    title: "Cloudflare Learning Center: What is a CDN?",
    url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
  },
  "cloudflare-cdn-reference-architecture": {
    title: "Cloudflare Reference Architecture: CDN",
    url: "https://developers.cloudflare.com/reference-architecture/architectures/cdn/",
  },
  "aws-cloudfront-delivers-content": {
    title: "AWS CloudFront: How CloudFront Delivers Content",
    url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html",
  },
  "aws-cloudfront-origin-shield": {
    title: "AWS CloudFront: Origin Shield",
    url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html",
  },
  "akamai-cdn-overview": {
    title: "Akamai: What is a CDN?",
    url: "https://www.akamai.com/our-thinking/cdn/what-is-a-cdn",
  },
  "akamai-content-delivery": {
    title: "Akamai TechDocs: How Akamai Works",
    url: "https://techdocs.akamai.com/start/docs/how-akamai-works",
  },
  "mdn-http-caching": {
    title: "MDN Web Docs: HTTP caching",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
  },
  "mdn-http2": {
    title: "MDN Web Docs: HTTP/2",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2",
  },
  "nginx-http2-module": {
    title: "NGINX Docs: Module ngx_http_v2_module",
    url: "https://nginx.org/en/docs/http/ngx_http_v2_module.html",
  },
  "nghttp2-docs": {
    title: "nghttp2 Documentation",
    url: "https://nghttp2.org/documentation/",
  },
  "curl-http2": {
    title: "curl Docs: HTTP/2",
    url: "https://curl.se/docs/http2.html",
  },
  "wireshark-http2": {
    title: "Wireshark Display Filter Reference: HTTP2",
    url: "https://www.wireshark.org/docs/dfref/h/http2.html",
  },
  "mdn-cache-control": {
    title: "MDN Web Docs: Cache-Control",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control",
  },
  "webdev-http-cache": {
    title: "web.dev: Prevent unnecessary network requests with the HTTP Cache",
    url: "https://web.dev/articles/http-cache",
  },
  "cloudflare-cache-revalidation": {
    title: "Cloudflare Cache: Revalidation",
    url: "https://developers.cloudflare.com/cache/concepts/revalidation/",
  },
  "cloudflare-cache-responses": {
    title: "Cloudflare Cache: Cache responses",
    url: "https://developers.cloudflare.com/cache/concepts/cache-responses/",
  },
  "fastly-cache-control-headers": {
    title: "Fastly Docs: About cache control headers",
    url: "https://www.fastly.com/documentation/guides/full-site-delivery/caching/about-cache-control-headers/",
  },
  "nginx-content-caching": {
    title: "NGINX Documentation: Content Caching",
    url: "https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/",
  },
  "portswigger-web-cache-poisoning": {
    title: "PortSwigger Web Security Academy: Web cache poisoning",
    url: "https://portswigger.net/web-security/web-cache-poisoning",
  },
  "xiaolin-mysql": {
    title: "小林 coding 图解 MySQL",
    url: "https://www.xiaolincoding.com/mysql/",
  },
  "xiaolin-redis": {
    title: "小林 coding Redis 面试题",
    url: "https://xiaolincoding.com/redis/base/redis_interview.html",
  },
  "doocs-advanced-java": {
    title: "doocs advanced-java",
    url: "https://github.com/doocs/advanced-java",
  },
  "aws-backoff-jitter": {
    title: "AWS Builders' Library: Timeouts, Retries, and Backoff with Jitter",
    url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",
  },
  "aws-architecture-exponential-backoff-jitter": {
    title: "AWS Architecture Blog: Exponential Backoff and Jitter",
    url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/",
  },
  "polly-timeout": {
    title: "Polly Docs: Timeout resilience strategy",
    url: "https://www.pollydocs.org/strategies/timeout.html",
  },
  "polly-retry": {
    title: "Polly Docs: Retry resilience strategy",
    url: "https://www.pollydocs.org/strategies/retry",
  },
  "google-cloud-retry-strategy": {
    title: "Google Cloud Docs: Retry strategy",
    url: "https://cloud.google.com/storage/docs/retry-strategy",
  },
  "grpc-retry": {
    title: "gRPC Docs: Retry",
    url: "https://grpc.io/docs/guides/retry/",
  },
  "grpc-status-codes": {
    title: "gRPC Docs: Status Codes",
    url: "https://grpc.io/docs/guides/status-codes/",
  },
  "microsoft-httpclient": {
    title: "Microsoft Learn: System.Net.Http.HttpClient class",
    url: "https://learn.microsoft.com/en-us/dotnet/fundamentals/runtime-libraries/system-net-http-httpclient",
  },
  "rfc-9110-http-semantics": {
    title: "RFC 9110: HTTP Semantics",
    url: "https://www.rfc-editor.org/rfc/rfc9110",
  },
  "stripe-idempotent-requests": {
    title: "Stripe Docs: Idempotent requests",
    url: "https://docs.stripe.com/api/idempotent_requests",
  },
  "paypal-idempotency": {
    title: "PayPal Docs: Idempotency",
    url: "https://developer.paypal.com/api/rest/reference/idempotency/",
  },
  "aws-idempotent-api-requests": {
    title: "AWS EC2 Docs: Ensuring idempotency in API requests",
    url: "https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html",
  },
  "ietf-idempotency-key-header": {
    title: "IETF Datatracker: The Idempotency-Key HTTP Header Field",
    url: "https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header",
  },
  "mdn-idempotency-key": {
    title: "MDN Web Docs: Idempotency-Key header",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Idempotency-Key",
  },
  "keda-rabbitmq-scaler": {
    title: "KEDA Docs: RabbitMQ Queue Scaler",
    url: "https://keda.sh/docs/2.19/scalers/rabbitmq-queue/",
  },
  "microservices-idempotent-consumer": {
    title: "Microservices.io: Idempotent Consumer Pattern",
    url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html",
  },
  "microservices-transactional-outbox": {
    title: "Microservices.io: Transactional Outbox Pattern",
    url: "https://microservices.io/patterns/data/transactional-outbox.html",
  },
  "debezium-outbox-event-router": {
    title: "Debezium Docs: Outbox Event Router",
    url: "https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html",
  },
  "eventuate-tram-outbox": {
    title: "Eventuate Tram: Transactional Outbox",
    url: "https://eventuate.io/docs/manual/eventuate-tram/latest/getting-started-eventuate-tram.html",
  },
  "microservices-transaction-log-tailing": {
    title: "Microservices.io: Transaction Log Tailing Pattern",
    url: "https://microservices.io/patterns/data/transaction-log-tailing.html",
  },
  "debezium-mysql-connector": {
    title: "Debezium Docs: MySQL Connector",
    url: "https://debezium.io/documentation/reference/stable/connectors/mysql.html",
  },
  "debezium-postgresql-connector": {
    title: "Debezium Docs: PostgreSQL Connector",
    url: "https://debezium.io/documentation/reference/stable/connectors/postgresql.html",
  },
  "debezium-incremental-snapshots": {
    title: "Debezium Docs: Incremental Snapshots",
    url: "https://debezium.io/documentation/reference/stable/connectors/mysql.html#mysql-incremental-snapshots",
  },
  "confluent-schema-registry": {
    title: "Confluent Docs: Schema Registry",
    url: "https://docs.confluent.io/platform/current/schema-registry/index.html",
  },
  "confluent-schema-evolution": {
    title: "Confluent Docs: Schema Evolution and Compatibility",
    url: "https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html",
  },
  "apache-avro-spec": {
    title: "Apache Avro Specification",
    url: "https://avro.apache.org/docs/current/specification/",
  },
  "rabbitmq-exchanges": {
    title: "RabbitMQ Docs: Exchanges",
    url: "https://www.rabbitmq.com/docs/exchanges",
  },
  "rabbitmq-amqp-concepts": {
    title: "RabbitMQ Tutorials: AMQP 0-9-1 Model Explained",
    url: "https://www.rabbitmq.com/tutorials/amqp-concepts",
  },
  "rabbitmq-queues": {
    title: "RabbitMQ Docs: Queues",
    url: "https://www.rabbitmq.com/docs/queues",
  },
  "rabbitmq-priority-queues": {
    title: "RabbitMQ Docs: Priority Support in Queues",
    url: "https://www.rabbitmq.com/docs/priority",
  },
  "rabbitmq-consumers": {
    title: "RabbitMQ Docs: Consumers",
    url: "https://www.rabbitmq.com/docs/consumers",
  },
  "rabbitmq-consumer-prefetch": {
    title: "RabbitMQ Docs: Consumer Prefetch",
    url: "https://www.rabbitmq.com/docs/consumer-prefetch",
  },
  "rabbitmq-confirms": {
    title: "RabbitMQ Docs: Consumer Acknowledgements and Publisher Confirms",
    url: "https://www.rabbitmq.com/docs/confirms",
  },
  "rabbitmq-negative-acknowledgements": {
    title: "RabbitMQ Docs: Negative Acknowledgements",
    url: "https://www.rabbitmq.com/docs/nack",
  },
  "rabbitmq-dead-letter-exchanges": {
    title: "RabbitMQ Docs: Dead Letter Exchanges",
    url: "https://www.rabbitmq.com/docs/dlx",
  },
  "enterprise-integration-patterns-dead-letter": {
    title: "Enterprise Integration Patterns: Dead Letter Channel",
    url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/DeadLetterChannel.html",
  },
  "enterprise-integration-patterns-correlation-id": {
    title: "Enterprise Integration Patterns: Correlation Identifier",
    url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html",
  },
  "rabbitmq-publishers": {
    title: "RabbitMQ Docs: Publishers",
    url: "https://www.rabbitmq.com/docs/publishers",
  },
  "rabbitmq-reliability": {
    title: "RabbitMQ Docs: Reliability Guide",
    url: "https://www.rabbitmq.com/docs/reliability",
  },
  "rabbitmq-ha-dr-101": {
    title: "RabbitMQ Blog: Disaster Recovery and High Availability 101",
    url: "https://www.rabbitmq.com/blog/2020/07/07/disaster-recovery-and-high-availability-101",
  },
  "rabbitmq-java-client-api-guide": {
    title: "RabbitMQ Docs: Java Client API Guide",
    url: "https://www.rabbitmq.com/client-libraries/java-api-guide",
  },
  "rabbitmq-work-queues-tutorial": {
    title: "RabbitMQ Tutorials: Work Queues",
    url: "https://www.rabbitmq.com/tutorials/tutorial-two-java",
  },
  "rabbitmq-publish-subscribe-tutorial": {
    title: "RabbitMQ Tutorials: Publish/Subscribe",
    url: "https://www.rabbitmq.com/tutorials/tutorial-three-java",
  },
  "rabbitmq-rpc-tutorial": {
    title: "RabbitMQ Tutorials: Remote Procedure Call (RPC)",
    url: "https://www.rabbitmq.com/tutorials/tutorial-six-java",
  },
  "rabbitmq-direct-reply-to": {
    title: "RabbitMQ Docs: Direct Reply-to",
    url: "https://www.rabbitmq.com/docs/direct-reply-to",
  },
  "rabbitmq-publisher-confirms-tutorial": {
    title: "RabbitMQ Tutorials: Reliable Publishing with Publisher Confirms",
    url: "https://www.rabbitmq.com/tutorials/tutorial-seven-java",
  },
  "rabbitmq-message-ttl": {
    title: "RabbitMQ Docs: Time-To-Live and Expiration",
    url: "https://www.rabbitmq.com/docs/ttl",
  },
  "rabbitmq-delayed-message-exchange": {
    title: "RabbitMQ Plugin: Delayed Message Exchange",
    url: "https://github.com/rabbitmq/rabbitmq-delayed-message-exchange",
  },
  "rabbitmq-modulus-hash-exchange": {
    title: "RabbitMQ Docs: Modulus Hash Exchange",
    url: "https://www.rabbitmq.com/docs/modulus-hash-exchange",
  },
  "rabbitmq-persistence-conf": {
    title: "RabbitMQ Docs: Persistence Configuration",
    url: "https://www.rabbitmq.com/docs/persistence-conf",
  },
  "rabbitmq-disk-alarms": {
    title: "RabbitMQ Docs: Free Disk Space Alarms",
    url: "https://www.rabbitmq.com/docs/disk-alarms",
  },
  "rabbitmq-flow-control-docs": {
    title: "RabbitMQ Docs: Flow Control",
    url: "https://www.rabbitmq.com/docs/flow-control",
  },
  "rabbitmq-memory-alarms": {
    title: "RabbitMQ Docs: Memory Alarms",
    url: "https://www.rabbitmq.com/docs/memory",
  },
  "rabbitmq-lazy-queues-313": {
    title: "RabbitMQ 3.13 Docs: Lazy Queues",
    url: "https://www.rabbitmq.com/docs/3.13/lazy-queues",
  },
  "rabbitmq-classic-queues": {
    title: "RabbitMQ Docs: Classic Queues",
    url: "https://www.rabbitmq.com/docs/classic-queues",
  },
  "rabbitmq-quorum-queues": {
    title: "RabbitMQ Docs: Quorum Queues",
    url: "https://www.rabbitmq.com/docs/quorum-queues",
  },
  "rabbitmq-312-blog": {
    title: "RabbitMQ Blog: Native MQTT, New Classic Queue Storage, and More",
    url: "https://www.rabbitmq.com/blog/2023/05/17/rabbitmq-3.12-performance-improvements",
  },
  "rabbitmq-connections": {
    title: "RabbitMQ Docs: Connections",
    url: "https://www.rabbitmq.com/docs/connections",
  },
  "rabbitmq-channels": {
    title: "RabbitMQ Docs: Channels",
    url: "https://www.rabbitmq.com/docs/channels",
  },
  "rabbitmq-heartbeats": {
    title: "RabbitMQ Docs: Heartbeats",
    url: "https://www.rabbitmq.com/docs/heartbeats",
  },
  "rabbitmq-networking": {
    title: "RabbitMQ Docs: Networking",
    url: "https://www.rabbitmq.com/docs/networking",
  },
  "rabbitmq-clustering": {
    title: "RabbitMQ Docs: Clustering Guide",
    url: "https://www.rabbitmq.com/docs/clustering",
  },
  "rabbitmq-cluster-formation": {
    title: "RabbitMQ Docs: Cluster Formation and Peer Discovery",
    url: "https://www.rabbitmq.com/docs/cluster-formation",
  },
  "rabbitmq-network-partitions": {
    title: "RabbitMQ Docs: Clustering and Network Partitions",
    url: "https://www.rabbitmq.com/docs/partitions",
  },
  "rabbitmq-limits": {
    title: "RabbitMQ Docs: Configurable Limits",
    url: "https://www.rabbitmq.com/docs/limits",
  },
  "rabbitmq-amqp-1": {
    title: "RabbitMQ Docs: AMQP 1.0",
    url: "https://www.rabbitmq.com/docs/amqp",
  },
  "rabbitmq-protocols": {
    title: "RabbitMQ Docs: Protocols",
    url: "https://www.rabbitmq.com/docs/protocols",
  },
  "rabbitmq-management": {
    title: "RabbitMQ Docs: Management Plugin",
    url: "https://www.rabbitmq.com/docs/management",
  },
  "rabbitmq-monitoring": {
    title: "RabbitMQ Docs: Monitoring",
    url: "https://www.rabbitmq.com/docs/monitoring",
  },
  "rabbitmq-vhosts": {
    title: "RabbitMQ Docs: Virtual Hosts",
    url: "https://www.rabbitmq.com/docs/vhosts",
  },
  "rabbitmq-access-control": {
    title: "RabbitMQ Docs: Authentication, Authorisation, Access Control",
    url: "https://www.rabbitmq.com/docs/access-control",
  },
  "rabbitmq-alternate-exchanges": {
    title: "RabbitMQ Docs: Alternate Exchanges",
    url: "https://www.rabbitmq.com/docs/ae",
  },
  "rabbitmq-exchange-to-exchange-bindings": {
    title: "RabbitMQ Docs: Exchange to Exchange Bindings",
    url: "https://www.rabbitmq.com/docs/e2e",
  },
  "cloudamqp-exchanges-routing-bindings": {
    title: "CloudAMQP: RabbitMQ Exchanges, Routing Keys and Bindings",
    url: "https://www.cloudamqp.com/blog/part4-rabbitmq-for-beginners-exchanges-routing-keys-bindings.html",
  },
  "devinterview-docker": {
    title: "Devinterview Docker Interview Questions",
    url: "https://github.com/Devinterview-io/docker-interview-questions",
  },
  "tencent-tsf-blue-green-release": {
    title: "腾讯云文档：微服务平台 TSF 蓝绿发布",
    url: "https://cloud.tencent.com/document/product/649/116499",
  },
  "devinterview-kubernetes": {
    title: "Devinterview Kubernetes Interview Questions",
    url: "https://github.com/Devinterview-io/kubernetes-interview-questions",
  },
  "kubernetes-components": {
    title: "Kubernetes Docs: Kubernetes Components",
    url: "https://kubernetes.io/docs/concepts/overview/components/",
  },
  "kubernetes-architecture": {
    title: "Kubernetes Docs: Cluster Architecture",
    url: "https://kubernetes.io/docs/concepts/architecture/",
  },
  "kubernetes-statefulset": {
    title: "Kubernetes Docs: StatefulSets",
    url: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
  },
  "kubernetes-statefulset-basic": {
    title: "Kubernetes Tutorial: Basic StatefulSet",
    url: "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/",
  },
  "k8s-guide-statefulsets": {
    title: "K8s Guide: StatefulSets",
    url: "https://www.k8s.guide/statefulsets/",
  },
  "diagrams-k8s-statefulset-database": {
    title: "Diagrams.so: Kubernetes StatefulSet Database",
    url: "https://diagrams.so/d/k8s-statefulset-database",
  },
  "kubernetes-service": {
    title: "Kubernetes Docs: Service",
    url: "https://kubernetes.io/docs/concepts/services-networking/service/",
  },
  "kubernetes-service-cidr": {
    title: "Kubernetes Docs: Service IP addresses",
    url: "https://kubernetes.io/docs/concepts/services-networking/service/#service-ip-addresses",
  },
  "kubernetes-controller-manager": {
    title: "Kubernetes Docs: kube-controller-manager",
    url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
  },
  "kubernetes-ingress": {
    title: "Kubernetes Docs: Ingress",
    url: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
  },
  "kubernetes-ingress-controllers": {
    title: "Kubernetes Docs: Ingress Controllers",
    url: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
  },
  "kubernetes-virtual-ips": {
    title: "Kubernetes Docs: Virtual IPs and Service Proxies",
    url: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
  },
  "dustinspecker-k8s-iptables": {
    title: "Dustin Specker: iptables - How Kubernetes Services Direct Traffic to Pods",
    url: "https://dustinspecker.com/posts/iptables-how-kubernetes-services-direct-traffic-to-pods/",
  },
  "dustinspecker-k8s-ipvs": {
    title: "Dustin Specker: IPVS - How Kubernetes Services Direct Traffic to Pods",
    url: "https://dustinspecker.com/posts/ipvs-how-kubernetes-services-direct-traffic-to-pods/",
  },
  "kubernetes-endpoint-slices": {
    title: "Kubernetes Docs: EndpointSlices",
    url: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
  },
  "kubernetes-topology-aware-routing": {
    title: "Kubernetes Docs: Topology Aware Routing",
    url: "https://kubernetes.io/docs/concepts/services-networking/topology-aware-routing/",
  },
  "aws-eks-cost-opt-networking": {
    title: "Amazon EKS Best Practices: Optimize networking costs",
    url: "https://docs.aws.amazon.com/eks/latest/best-practices/cost-opt-networking.html",
  },
  "kubernetes-endpointslice-kep": {
    title: "Kubernetes KEP 752: EndpointSlices",
    url: "https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/0752-endpointslices",
  },
  "tkng-clusterip": {
    title: "The Kubernetes Networking Guide: ClusterIP",
    url: "https://www.tkng.io/services/clusterip/",
  },
  "nginx-ingress-controller-design": {
    title: "NGINX Docs: The design of NGINX Ingress Controller",
    url: "https://docs.nginx.com/nginx-ingress-controller/overview/design/",
  },
  "ingress-nginx-how-it-works": {
    title: "Ingress-NGINX Controller: How it works",
    url: "https://kubernetes.github.io/ingress-nginx/how-it-works/",
  },
  "aws-eks-alb-ingress": {
    title: "Amazon EKS: Route application and HTTP traffic with Application Load Balancers",
    url: "https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html",
  },
  "aws-load-balancer-ingress-spec": {
    title: "AWS Load Balancer Controller: Ingress specification",
    url: "https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/guide/ingress/spec/",
  },
  "kubernetes-dns": {
    title: "Kubernetes Docs: DNS for Services and Pods",
    url: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
  },
  "kubernetes-scheduler": {
    title: "Kubernetes Docs: Kubernetes Scheduler",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
  },
  "kubernetes-scheduling-framework": {
    title: "Kubernetes Docs: Scheduling Framework",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/",
  },
  "kubernetes-assign-pod-node": {
    title: "Kubernetes Docs: Assigning Pods to Nodes",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
  },
  "kubernetes-taints-tolerations": {
    title: "Kubernetes Docs: Taints and Tolerations",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
  },
  "outshift-k8s-affinity": {
    title: "Cisco Outshift: K8s Taints, Tolerations, and Affinities",
    url: "https://outshift.cisco.com/blog/in-depth-tech/k8s-taints-tolerations-affinities",
  },
  "k8s-info-scheduling-affinity": {
    title: "Kubernetes Visual Handbook: Scheduling Affinity",
    url: "https://k8s.info/docs/intermediate/scheduling-affinity",
  },
  "kubernetes-node-affinity-task": {
    title: "Kubernetes Docs: Assign Pods to Nodes using Node Affinity",
    url: "https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes-using-node-affinity/",
  },
  "kubernetes-node-labels": {
    title: "Kubernetes Docs: Well-Known Labels, Annotations and Taints",
    url: "https://kubernetes.io/docs/reference/labels-annotations-taints/",
  },
  "kubex-taints-tolerations": {
    title: "Kubex: Taints and Tolerations",
    url: "https://kubex.ai/blog/kubernetes-taints/",
  },
  "aws-eks-hybrid-pod-failover": {
    title: "Amazon EKS Best Practices: Hybrid nodes Kubernetes pod failover",
    url: "https://docs.aws.amazon.com/eks/latest/best-practices/hybrid-nodes-kubernetes-pod-failover.html",
  },
  "komodor-taints-tolerations": {
    title: "Komodor: Kubernetes Taints and Tolerations - A Practical Guide",
    url: "https://komodor.com/learn/kubernetes-taints-and-tolerations-a-practical-guide/",
  },
  "kubecost-taints-tolerations": {
    title: "Kubecost: Kubernetes Taints and Tolerations",
    url: "https://www.kubecost.com/kubernetes-devops-tools/kubernetes-taints/",
  },
  "kubernetes-topology-spread": {
    title: "Kubernetes Docs: Pod Topology Spread Constraints",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
  },
  "kubernetes-pod-topology-spread-blog": {
    title: "Kubernetes Blog: Introducing PodTopologySpread",
    url: "https://kubernetes.io/blog/2020/05/introducing-podtopologyspread/",
  },
  "aws-eks-spread-workloads": {
    title: "AWS Prescriptive Guidance: Spread workloads across Availability Zones",
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/ha-resiliency-amazon-eks-apps/spread-workloads.html",
  },
  "castai-topology-spread": {
    title: "CAST AI: Kubernetes Topology Spread Constraints",
    url: "https://cast.ai/blog/topology-spread-constraints-for-increased-cluster-availability-and-efficiency-and-a-much-better-cost/",
  },
  "kubernetes-priority-preemption": {
    title: "Kubernetes Docs: Pod Priority and Preemption",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
  },
  "kubernetes-priorityclass-blog": {
    title: "Kubernetes Blog: Protect mission-critical Pods with PriorityClass",
    url: "https://kubernetes.io/blog/2023/01/12/protect-mission-critical-pods-priorityclass/",
  },
  "kubernetes-pdb": {
    title: "Kubernetes Docs: Pod Disruption Budgets",
    url: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/",
  },
  "devopscube-priorityclass": {
    title: "DevOpsCube: Kubernetes Pod PriorityClass and Preemption",
    url: "https://devopscube.com/pod-priorityclass-preemption/",
  },
  "dair-prompt-guide": {
    title: "DAIR.AI Prompt Engineering Guide",
    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
  },
  "awesome-context-engineering": {
    title: "Awesome Context Engineering",
    url: "https://github.com/Meirtz/Awesome-Context-Engineering",
  },
  "openai-structured-outputs": {
    title: "OpenAI: Introducing Structured Outputs in the API",
    url: "https://openai.com/index/introducing-structured-outputs-in-the-api/",
  },
  "anthropic-tool-use": {
    title: "Claude API Docs: How tool use works",
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works",
  },
  "langchain-tool-calling": {
    title: "LangChain Docs: Models - Tool calling",
    url: "https://docs.langchain.com/oss/python/langchain-models#tool-calling",
  },
  "linux-man-pages": {
    title: "Linux man-pages project",
    url: "https://www.kernel.org/doc/man-pages/",
  },
  "linux-kernel-docs": {
    title: "The Linux Kernel documentation",
    url: "https://docs.kernel.org/",
  },
  "linux-kernel-scheduler": {
    title: "Linux Kernel Documentation: Scheduler",
    url: "https://docs.kernel.org/scheduler/",
  },
  "linux-kernel-cfs-scheduler": {
    title: "Linux Kernel Documentation: CFS Scheduler",
    url: "https://www.kernel.org/doc/html/latest/scheduler/sched-design-CFS.html",
  },
  "linux-kernel-eevdf-scheduler": {
    title: "Linux Kernel Documentation: EEVDF Scheduler",
    url: "https://www.kernel.org/doc/html/latest/scheduler/sched-eevdf.html",
  },
  "linux-kernel-sched-stats": {
    title: "Linux Kernel Documentation: Scheduler Statistics",
    url: "https://www.kernel.org/doc/html/latest/scheduler/sched-stats.html",
  },
  "linux-kernel-sched-nice-design": {
    title: "Linux Kernel Documentation: Scheduler Nice Design",
    url: "https://www.kernel.org/doc/html/latest/scheduler/sched-nice-design.html",
  },
  "linux-kernel-psi": {
    title: "Linux Kernel Documentation: Pressure Stall Information",
    url: "https://www.kernel.org/doc/html/latest/accounting/psi.html",
  },
  "linux-kernel-mm-docs": {
    title: "Linux Kernel Documentation: Memory Management",
    url: "https://docs.kernel.org/mm/",
  },
  "linux-kernel-mm-concepts": {
    title: "Linux Kernel Documentation: Memory Management Concepts",
    url: "https://docs.kernel.org/admin-guide/mm/concepts.html",
  },
  "linux-kernel-process-addresses": {
    title: "Linux Kernel Documentation: Process Addresses",
    url: "https://www.kernel.org/doc/html/latest/mm/process_addrs.html",
  },
  "linux-kernel-page-tables": {
    title: "Linux Kernel Documentation: Page Tables",
    url: "https://docs.kernel.org/mm/page_tables.html",
  },
  "linux-kernel-cachetlb": {
    title: "Linux Kernel Documentation: Cache and TLB Flushing Under Linux",
    url: "https://www.kernel.org/doc/html/latest/core-api/cachetlb.html",
  },
  "linux-kernel-x86-tlb": {
    title: "Linux Kernel Documentation: The TLB",
    url: "https://docs.kernel.org/arch/x86/tlb.html",
  },
  "linux-kernel-pagemap": {
    title: "Linux Kernel Documentation: Examining Process Page Tables",
    url: "https://docs.kernel.org/admin-guide/mm/pagemap.html",
  },
  "linux-kernel-transparent-hugepage": {
    title: "Linux Kernel Documentation: Transparent Hugepage Support",
    url: "https://docs.kernel.org/admin-guide/mm/transhuge.html",
  },
  "linux-kernel-userfaultfd": {
    title: "Linux Kernel Documentation: Userfaultfd",
    url: "https://docs.kernel.org/admin-guide/mm/userfaultfd.html",
  },
  "linux-kernel-overcommit-accounting": {
    title: "Linux Kernel Documentation: Overcommit Accounting",
    url: "https://docs.kernel.org/mm/overcommit-accounting.html",
  },
  "linux-kernel-oom": {
    title: "Linux Kernel Documentation: Out Of Memory Handling",
    url: "https://docs.kernel.org/mm/oom.html",
  },
  "linux-kernel-vfs": {
    title: "Linux Kernel Documentation: Virtual File System",
    url: "https://docs.kernel.org/filesystems/vfs.html",
  },
  "linux-kernel-ext4-journal": {
    title: "Linux Kernel Documentation: Ext4 Journal",
    url: "https://docs.kernel.org/filesystems/ext4/journal.html",
  },
  "linux-block-writeback-cache-control": {
    title: "Linux Kernel Documentation: Explicit Volatile Write Back Cache Control",
    url: "https://docs.kernel.org/block/writeback_cache_control.html",
  },
  "linux-man-syscalls": {
    title: "Linux man-pages: syscalls(2)",
    url: "https://man7.org/linux/man-pages/man2/syscalls.2.html",
  },
  "linux-man-proc": {
    title: "Linux man-pages: proc(5)",
    url: "https://man7.org/linux/man-pages/man5/proc.5.html",
  },
  "linux-man-pages-fork": {
    title: "Linux man-pages: fork(2)",
    url: "https://man7.org/linux/man-pages/man2/fork.2.html",
  },
  "linux-man-pages-clone": {
    title: "Linux man-pages: clone(2)",
    url: "https://man7.org/linux/man-pages/man2/clone.2.html",
  },
  "linux-man-pages-execve": {
    title: "Linux man-pages: execve(2)",
    url: "https://man7.org/linux/man-pages/man2/execve.2.html",
  },
  "linux-man-pages-wait": {
    title: "Linux man-pages: wait(2)",
    url: "https://man7.org/linux/man-pages/man2/wait.2.html",
  },
  "linux-man-pages-credentials": {
    title: "Linux man-pages: credentials(7)",
    url: "https://man7.org/linux/man-pages/man7/credentials.7.html",
  },
  "linux-man-pages-signal": {
    title: "Linux man-pages: signal(7)",
    url: "https://man7.org/linux/man-pages/man7/signal.7.html",
  },
  "linux-man-pages-malloc": {
    title: "Linux man-pages: malloc(3)",
    url: "https://man7.org/linux/man-pages/man3/malloc.3.html",
  },
  "linux-man-pages-brk": {
    title: "Linux man-pages: brk(2)",
    url: "https://man7.org/linux/man-pages/man2/brk.2.html",
  },
  "linux-man-pages-mallopt": {
    title: "Linux man-pages: mallopt(3)",
    url: "https://man7.org/linux/man-pages/man3/mallopt.3.html",
  },
  "glibc-malloc-tunables": {
    title: "GNU C Library Manual: Memory Allocation Tunables",
    url: "https://sourceware.org/glibc/manual/latest/html_node/Memory-Allocation-Tunables.html",
  },
  "linux-man-pages-getrlimit": {
    title: "Linux man-pages: getrlimit(2)",
    url: "https://man7.org/linux/man-pages/man2/getrlimit.2.html",
  },
  "linux-kernel-sysctl-fs": {
    title: "Linux Kernel Documentation: /proc/sys/fs",
    url: "https://docs.kernel.org/admin-guide/sysctl/fs.html",
  },
  "linux-man-pages-path-resolution": {
    title: "Linux man-pages: path_resolution(7)",
    url: "https://man7.org/linux/man-pages/man7/path_resolution.7.html",
  },
  "linux-man-pages-inode": {
    title: "Linux man-pages: inode(7)",
    url: "https://man7.org/linux/man-pages/man7/inode.7.html",
  },
  "linux-man-pages-open": {
    title: "Linux man-pages: open(2)",
    url: "https://man7.org/linux/man-pages/man2/open.2.html",
  },
  "linux-man-pages-close": {
    title: "Linux man-pages: close(2)",
    url: "https://man7.org/linux/man-pages/man2/close.2.html",
  },
  "linux-man-pages-dup": {
    title: "Linux man-pages: dup(2)",
    url: "https://man7.org/linux/man-pages/man2/dup.2.html",
  },
  "linux-man-pages-fcntl": {
    title: "Linux man-pages: fcntl(2)",
    url: "https://man7.org/linux/man-pages/man2/fcntl.2.html",
  },
  "linux-man-pages-proc-pid-fd": {
    title: "Linux man-pages: proc_pid_fd(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_fd.5.html",
  },
  "linux-man-pages-pipe": {
    title: "Linux man-pages: pipe(2)",
    url: "https://man7.org/linux/man-pages/man2/pipe.2.html",
  },
  "linux-man-pages-socket": {
    title: "Linux man-pages: socket(2)",
    url: "https://man7.org/linux/man-pages/man2/socket.2.html",
  },
  "linux-man-pages-socket7": {
    title: "Linux man-pages: socket(7)",
    url: "https://man7.org/linux/man-pages/man7/socket.7.html",
  },
  "linux-man-pages-accept": {
    title: "Linux man-pages: accept(2)",
    url: "https://man7.org/linux/man-pages/man2/accept.2.html",
  },
  "linux-man-pages-connect": {
    title: "Linux man-pages: connect(2)",
    url: "https://man7.org/linux/man-pages/man2/connect.2.html",
  },
  "linux-man-pages-recv": {
    title: "Linux man-pages: recv(2)",
    url: "https://man7.org/linux/man-pages/man2/recv.2.html",
  },
  "linux-man-pages-send": {
    title: "Linux man-pages: send(2)",
    url: "https://man7.org/linux/man-pages/man2/send.2.html",
  },
  "linux-man-pages-read": {
    title: "Linux man-pages: read(2)",
    url: "https://man7.org/linux/man-pages/man2/read.2.html",
  },
  "linux-man-pages-write": {
    title: "Linux man-pages: write(2)",
    url: "https://man7.org/linux/man-pages/man2/write.2.html",
  },
  "linux-man-pages-select": {
    title: "Linux man-pages: select(2)",
    url: "https://man7.org/linux/man-pages/man2/select.2.html",
  },
  "linux-man-pages-select-tut": {
    title: "Linux man-pages: select_tut(2)",
    url: "https://man7.org/linux/man-pages/man2/select_tut.2.html",
  },
  "linux-man-pages-poll": {
    title: "Linux man-pages: poll(2)",
    url: "https://man7.org/linux/man-pages/man2/poll.2.html",
  },
  "linux-man-pages-fsync": {
    title: "Linux man-pages: fsync(2)",
    url: "https://man7.org/linux/man-pages/man2/fsync.2.html",
  },
  "linux-man-pages-lseek": {
    title: "Linux man-pages: lseek(2)",
    url: "https://man7.org/linux/man-pages/man2/lseek.2.html",
  },
  "linux-man-pages-pread": {
    title: "Linux man-pages: pread(2) and pwrite(2)",
    url: "https://man7.org/linux/man-pages/man2/pread.2.html",
  },
  "linux-man-pages-readv": {
    title: "Linux man-pages: readv(2) and writev(2)",
    url: "https://man7.org/linux/man-pages/man2/readv.2.html",
  },
  "linux-man-pages-sync": {
    title: "Linux man-pages: sync(2)",
    url: "https://man7.org/linux/man-pages/man2/sync.2.html",
  },
  "linux-man-pages-aio": {
    title: "Linux man-pages: aio(7)",
    url: "https://man7.org/linux/man-pages/man7/aio.7.html",
  },
  "linux-man-pages-io-uring": {
    title: "Linux man-pages: io_uring(7)",
    url: "https://man7.org/linux/man-pages/man7/io_uring.7.html",
  },
  "linux-man-pages-io-uring-setup": {
    title: "Linux man-pages: io_uring_setup(2)",
    url: "https://man7.org/linux/man-pages/man2/io_uring_setup.2.html",
  },
  "linux-man-pages-proc-pid-io": {
    title: "Linux man-pages: proc_pid_io(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_io.5.html",
  },
  "meituan-linux-io": {
    title: "美团技术团队: Linux I/O 原理和 Zero-copy 技术全面揭秘",
    url: "https://tech.meituan.com/2017/05/19/about-desk-io.html",
  },
  "linux-man-pages-statfs": {
    title: "Linux man-pages: statfs(2)",
    url: "https://man7.org/linux/man-pages/man2/statfs.2.html",
  },
  "linux-man-pages-unlink": {
    title: "Linux man-pages: unlink(2)",
    url: "https://man7.org/linux/man-pages/man2/unlink.2.html",
  },
  "linux-man-pages-rename": {
    title: "Linux man-pages: rename(2)",
    url: "https://man7.org/linux/man-pages/man2/rename.2.html",
  },
  "linux-man-pages-mount": {
    title: "Linux man-pages: mount(8)",
    url: "https://man7.org/linux/man-pages/man8/mount.8.html",
  },
  "lsof-man-page": {
    title: "lsof manual page",
    url: "https://www.man7.org/linux/man-pages/man8/lsof.8.html",
  },
  "linux-fasionchan-file-descriptor": {
    title: "学习 Linux: 文件描述符",
    url: "https://linux.fasionchan.com/zh_CN/latest/system-programming/file-io/file-descriptor.html",
  },
  "linux-man-pages-mmap": {
    title: "Linux man-pages: mmap(2)",
    url: "https://man7.org/linux/man-pages/man2/mmap.2.html",
  },
  "linux-man-pages-getpagesize": {
    title: "Linux man-pages: getpagesize(2)",
    url: "https://man7.org/linux/man-pages/man2/getpagesize.2.html",
  },
  "linux-man-pages-mprotect": {
    title: "Linux man-pages: mprotect(2)",
    url: "https://man7.org/linux/man-pages/man2/mprotect.2.html",
  },
  "linux-man-pages-madvise": {
    title: "Linux man-pages: madvise(2)",
    url: "https://man7.org/linux/man-pages/man2/madvise.2.html",
  },
  "linux-man-pages-mincore": {
    title: "Linux man-pages: mincore(2)",
    url: "https://man7.org/linux/man-pages/man2/mincore.2.html",
  },
  "linux-man-pages-mlock": {
    title: "Linux man-pages: mlock(2)",
    url: "https://man7.org/linux/man-pages/man2/mlock.2.html",
  },
  "linux-man-pages-getrusage": {
    title: "Linux man-pages: getrusage(2)",
    url: "https://man7.org/linux/man-pages/man2/getrusage.2.html",
  },
  "linux-man-pages-proc-pid-maps": {
    title: "Linux man-pages: proc_pid_maps(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_maps.5.html",
  },
  "linux-man-pages-proc-pid-limits": {
    title: "Linux man-pages: proc_pid_limits(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_limits.5.html",
  },
  "linux-man-pages-proc-meminfo": {
    title: "Linux man-pages: proc_meminfo(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_meminfo.5.html",
  },
  "linux-man-pages-proc-vmstat": {
    title: "Linux man-pages: proc_vmstat(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_vmstat.5.html",
  },
  "linux-man-pages-proc-pid-stat": {
    title: "Linux man-pages: proc_pid_stat(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_stat.5.html",
  },
  "linux-man-pages-proc-pid-status": {
    title: "Linux man-pages: proc_pid_status(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_status.5.html",
  },
  "linux-man-pages-proc-pid-smaps": {
    title: "Linux man-pages: proc_pid_smaps(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_smaps.5.html",
  },
  "linux-man-pages-ps": {
    title: "Linux man-pages: ps(1)",
    url: "https://man7.org/linux/man-pages/man1/ps.1.html",
  },
  "linux-man-pages-top": {
    title: "Linux man-pages: top(1)",
    url: "https://man7.org/linux/man-pages/man1/top.1.html",
  },
  "linux-man-pages-free": {
    title: "Linux man-pages: free(1)",
    url: "https://man7.org/linux/man-pages/man1/free.1.html",
  },
  "linux-man-pages-vmstat": {
    title: "Linux man-pages: vmstat(8)",
    url: "https://man7.org/linux/man-pages/man8/vmstat.8.html",
  },
  "linux-man-pages-pgrep": {
    title: "Linux man-pages: pgrep(1)",
    url: "https://man7.org/linux/man-pages/man1/pgrep.1.html",
  },
  "linux-man-pages-pthreads": {
    title: "Linux man-pages: pthreads(7)",
    url: "https://man7.org/linux/man-pages/man7/pthreads.7.html",
  },
  "linux-man-pages-attributes": {
    title: "Linux man-pages: attributes(7)",
    url: "https://man7.org/linux/man-pages/man7/attributes.7.html",
  },
  "linux-man-pages-sem-overview": {
    title: "Linux man-pages: sem_overview(7)",
    url: "https://man7.org/linux/man-pages/man7/sem_overview.7.html",
  },
  "linux-man-pages-sem-init": {
    title: "Linux man-pages: sem_init(3)",
    url: "https://man7.org/linux/man-pages/man3/sem_init.3.html",
  },
  "linux-man-pages-sem-wait": {
    title: "Linux man-pages: sem_wait(3)",
    url: "https://man7.org/linux/man-pages/man3/sem_wait.3.html",
  },
  "linux-man-pages-sem-post": {
    title: "Linux man-pages: sem_post(3)",
    url: "https://man7.org/linux/man-pages/man3/sem_post.3.html",
  },
  "linux-man-pages-sem-getvalue": {
    title: "Linux man-pages: sem_getvalue(3)",
    url: "https://man7.org/linux/man-pages/man3/sem_getvalue.3.html",
  },
  "linux-man-pages-sem-open": {
    title: "Linux man-pages: sem_open(3)",
    url: "https://man7.org/linux/man-pages/man3/sem_open.3.html",
  },
  "linux-man-pages-sem-destroy": {
    title: "Linux man-pages: sem_destroy(3)",
    url: "https://man7.org/linux/man-pages/man3/sem_destroy.3.html",
  },
  "linux-man-pages-pthread-mutex-init": {
    title: "Linux man-pages: pthread_mutex_init(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_mutex_init.3.html",
  },
  "linux-man-pages-pthread-mutex-lock": {
    title: "Linux man-pages: pthread_mutex_lock(3p)",
    url: "https://man7.org/linux/man-pages/man3/pthread_mutex_lock.3p.html",
  },
  "linux-man-pages-pthread-mutexattr-gettype": {
    title: "Linux man-pages: pthread_mutexattr_gettype(3p)",
    url: "https://man7.org/linux/man-pages/man3/pthread_mutexattr_gettype.3p.html",
  },
  "linux-man-pages-pthread-mutexattr-setrobust": {
    title: "Linux man-pages: pthread_mutexattr_setrobust(3p)",
    url: "https://man7.org/linux/man-pages/man3/pthread_mutexattr_setrobust.3p.html",
  },
  "linux-man-pages-pthread-cond-init": {
    title: "Linux man-pages: pthread_cond_init(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_cond_init.3.html",
  },
  "linux-man-pages-pthread-condattr-init": {
    title: "Linux man-pages: pthread_condattr_init(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_condattr_init.3.html",
  },
  "linux-man-pages-pthread-create": {
    title: "Linux man-pages: pthread_create(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_create.3.html",
  },
  "linux-man-pages-pthread-join": {
    title: "Linux man-pages: pthread_join(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_join.3.html",
  },
  "linux-man-pages-pthread-detach": {
    title: "Linux man-pages: pthread_detach(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_detach.3.html",
  },
  "linux-man-pages-pthread-stacksize": {
    title: "Linux man-pages: pthread_attr_setstacksize(3)",
    url: "https://man7.org/linux/man-pages/man3/pthread_attr_setstacksize.3.html",
  },
  "linux-man-pages-gettid": {
    title: "Linux man-pages: gettid(2)",
    url: "https://man7.org/linux/man-pages/man2/gettid.2.html",
  },
  "linux-man-pages-futex": {
    title: "Linux man-pages: futex(2)",
    url: "https://man7.org/linux/man-pages/man2/futex.2.html",
  },
  "linux-man-pages-nptl": {
    title: "Linux man-pages: nptl(7)",
    url: "https://man7.org/linux/man-pages/man7/nptl.7.html",
  },
  "linux-man-pages-sched": {
    title: "Linux man-pages: sched(7)",
    url: "https://man7.org/linux/man-pages/man7/sched.7.html",
  },
  "linux-man-pages-sched-rr-get-interval": {
    title: "Linux man-pages: sched_rr_get_interval(2)",
    url: "https://man7.org/linux/man-pages/man2/sched_rr_get_interval.2.html",
  },
  "linux-man-proc-pid-task": {
    title: "Linux man-pages: proc_pid_task(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_task.5.html",
  },
  "linux-man-proc-pid-stat": {
    title: "Linux man-pages: proc_pid_stat(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_stat.5.html",
  },
  "linux-man-proc-pid-status": {
    title: "Linux man-pages: proc_pid_status(5)",
    url: "https://man7.org/linux/man-pages/man5/proc_pid_status.5.html",
  },
  "linux-kernel-genericirq": {
    title: "Linux Kernel Documentation: Linux generic IRQ handling",
    url: "https://docs.kernel.org/core-api/genericirq.html",
  },
  "linux-kernel-irq-affinity": {
    title: "Linux Kernel Documentation: SMP IRQ affinity",
    url: "https://docs.kernel.org/core-api/irq/irq-affinity.html",
  },
  "linux-kernel-networking-scaling": {
    title: "Linux Kernel Documentation: Scaling in the Linux Networking Stack",
    url: "https://docs.kernel.org/networking/scaling.html",
  },
  "linux-kernel-msi-howto": {
    title: "Linux Kernel Documentation: The MSI Driver Guide HOWTO",
    url: "https://docs.kernel.org/PCI/msi-howto.html",
  },
  "linux-kernel-hacking-softirqs": {
    title: "Linux Kernel Documentation: Unreliable Guide To Hacking The Linux Kernel",
    url: "https://docs.kernel.org/kernel-hacking/hacking.html",
  },
  "linux-kernel-per-cpu-kthreads": {
    title: "Linux Kernel Documentation: Reducing OS jitter due to per-cpu kthreads",
    url: "https://docs.kernel.org/admin-guide/kernel-per-CPU-kthreads.html",
  },
  "linux-kernel-labs-interrupts": {
    title: "Linux Kernel Labs: Interrupts",
    url: "https://linux-kernel-labs.github.io/refs/heads/master/lectures/interrupts.html",
  },
  "linux-kernel-driver-basics": {
    title: "Linux Kernel Documentation: Driver Basics and Wait Queues",
    url: "https://docs.kernel.org/driver-api/basics.html",
  },
  "brendan-gregg-linux-load-averages": {
    title: "Brendan Gregg: Linux Load Averages - Solving the Mystery",
    url: "https://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html",
  },
  "baeldung-linux-process-states": {
    title: "Baeldung: Linux Process States",
    url: "https://www.baeldung.com/linux/process-states",
  },
  "ostep-introduction": {
    title: "Operating Systems: Three Easy Pieces - Introduction",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf",
  },
  "ostep-vm-intro": {
    title: "Operating Systems: Three Easy Pieces - The Abstraction: Address Spaces",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf",
  },
  "ostep-vm-api": {
    title: "Operating Systems: Three Easy Pieces - Memory API",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-api.pdf",
  },
  "ostep-vm-mechanism": {
    title: "Operating Systems: Three Easy Pieces - Mechanism: Address Translation",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf",
  },
  "ostep-vm-paging": {
    title: "Operating Systems: Three Easy Pieces - Paging: Introduction",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf",
  },
  "ostep-vm-tlbs": {
    title: "Operating Systems: Three Easy Pieces - Paging: Faster Translations (TLBs)",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf",
  },
  "ostep-file-implementation": {
    title: "Operating Systems: Three Easy Pieces - File System Implementation",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf",
  },
  "ostep-file-ffs": {
    title: "Operating Systems: Three Easy Pieces - Fast File System",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/file-ffs.pdf",
  },
  "ostep-file-journaling": {
    title: "Operating Systems: Three Easy Pieces - Crash Consistency: FSCK and Journaling",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf",
  },
  "ostep-processes": {
    title: "Operating Systems: Three Easy Pieces - The Abstraction: The Process",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf",
  },
  "ostep-process-api": {
    title: "Operating Systems: Three Easy Pieces - Process API",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf",
  },
  "ostep-cpu-scheduling": {
    title: "Operating Systems: Three Easy Pieces - Scheduling: Introduction",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf",
  },
  "ostep-mlfq": {
    title: "Operating Systems: Three Easy Pieces - Scheduling: MLFQ",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf",
  },
  "ostep-threads-intro": {
    title: "Operating Systems: Three Easy Pieces - Concurrency: An Introduction",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf",
  },
  "ostep-threads-api": {
    title: "Operating Systems: Three Easy Pieces - Thread API",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-api.pdf",
  },
  "ostep-threads-locks": {
    title: "Operating Systems: Three Easy Pieces - Locks",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
  },
  "ostep-threads-semaphores": {
    title: "Operating Systems: Three Easy Pieces - Semaphores",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
  },
  "ostep-threads-cv": {
    title: "Operating Systems: Three Easy Pieces - Condition Variables",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
  },
  "ostep-threads-deadlock": {
    title: "Operating Systems: Three Easy Pieces - Deadlock",
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-deadlock.pdf",
  },
  "unix-thread-safety-paper": {
    title: "The Open Group: Threads and the Single UNIX Specification",
    url: "https://unix.org/version2/whatsnew/threadspaper.pdf",
  },
  "oracle-multithread-guide": {
    title: "Oracle Solaris Multithreaded Programming Guide",
    url: "https://docs.oracle.com/cd/E37838_01/html/E61057/index.html",
  },
  "oracle-multithread-mt-safety": {
    title: "Oracle Solaris Multithreaded Programming Guide: MT Interface Safety Levels",
    url: "https://docs.oracle.com/cd/E53394_01/html/E54803/compat-59005.html",
  },
  "oracle-multithread-debugging": {
    title: "Oracle Solaris Multithreaded Programming Guide: Debugging a Multithreaded Program",
    url: "https://docs.oracle.com/cd/E37838_01/html/E61057/compile-19263.html",
  },
  "oracle-multithread-deadlock": {
    title: "Oracle Solaris Multithreaded Programming Guide: Using Locking Hierarchies",
    url: "https://docs.oracle.com/cd/E19683-01/806-6867/sync-ex-3/index.html",
  },
  "cpp-draft-intro-races": {
    title: "C++ Working Draft: Multi-threaded executions and data races",
    url: "https://eel.is/c++draft/intro.races",
  },
  "cppreference-multithread": {
    title: "cppreference: Multi-threaded executions and data races",
    url: "https://en.cppreference.com/w/cpp/language/multithread",
  },
  "cppreference-memory-order": {
    title: "cppreference: std::memory_order",
    url: "https://en.cppreference.com/w/cpp/atomic/memory_order",
  },
  "clang-threadsanitizer": {
    title: "Clang Docs: ThreadSanitizer",
    url: "https://clang.llvm.org/docs/ThreadSanitizer.html",
  },
  "google-threadsanitizer-cpp-manual": {
    title: "Google Sanitizers Wiki: ThreadSanitizer C++ Manual",
    url: "https://github.com/google/sanitizers/wiki/ThreadSanitizerCppManual",
  },
  "gcc-instrumentation-options": {
    title: "GCC Docs: Instrumentation Options",
    url: "https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html",
  },
  "glibc-sem-wait-source": {
    title: "glibc source: sem_wait.c",
    url: "https://codebrowser.dev/glibc/glibc/nptl/sem_wait.c.html",
  },
  "glibc-sem-post-source": {
    title: "glibc source: sem_post.c",
    url: "https://codebrowser.dev/glibc/glibc/nptl/sem_post.c.html",
  },
  "glibc-pthread-cond-wait-source": {
    title: "glibc source: pthread_cond_wait.c",
    url: "https://codebrowser.dev/glibc/glibc/nptl/pthread_cond_wait.c.html",
  },
  "glibc-pthread-cond-signal-source": {
    title: "glibc source: pthread_cond_signal.c",
    url: "https://codebrowser.dev/glibc/glibc/nptl/pthread_cond_signal.c.html",
  },
  "glibc-pthread-cond-common-source": {
    title: "glibc source: pthread_cond_common.c",
    url: "https://codebrowser.dev/glibc/glibc/nptl/pthread_cond_common.c.html",
  },
  "brendan-gregg-use-linux": {
    title: "Brendan Gregg: USE Method Linux Performance Checklist",
    url: "https://www.brendangregg.com/USEmethod/use-linux.html",
  },
  "gnu-coreutils-manual": {
    title: "GNU Coreutils Manual",
    url: "https://www.gnu.org/software/coreutils/manual/coreutils.html",
  },
  "gnu-grep-manual": {
    title: "GNU Grep Manual",
    url: "https://www.gnu.org/software/grep/manual/grep.html",
  },
  "gnu-findutils-manual": {
    title: "GNU Findutils Manual",
    url: "https://www.gnu.org/software/findutils/manual/html_mono/find.html",
  },
  "gnu-sed-manual": {
    title: "GNU sed Manual",
    url: "https://www.gnu.org/software/sed/manual/sed.html",
  },
  "gnu-gawk-manual": {
    title: "GNU Awk User's Guide",
    url: "https://www.gnu.org/software/gawk/manual/gawk.html",
  },
  "brendan-gregg-perf-sched": {
    title: "Brendan Gregg: perf sched",
    url: "https://www.brendangregg.com/blog/2017-03-16/perf-sched.html",
  },
  "microsoft-linux-performance-bottlenecks": {
    title: "Microsoft Learn: Troubleshoot Linux performance bottlenecks",
    url: "https://learn.microsoft.com/zh-cn/troubleshoot/azure/virtual-machines/linux/troubleshoot-performance-bottlenecks-linux",
  },
  "intel-sdm": {
    title: "Intel 64 and IA-32 Architectures Software Developer Manuals",
    url: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html",
  },
  "redhat-rhel-irq-tuning": {
    title: "Red Hat Enterprise Linux Performance Tuning Guide: IRQ tuning",
    url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/single/performance_tuning_guide/sec-tuna-irq-tuning",
  },
  "meituan-redis-interrupt-optimization": {
    title: "美团技术团队: Redis 高负载下的中断优化",
    url: "https://tech.meituan.com/2018/03/16/redis-high-concurrency-optimization.html",
  },
  "arthurchiao-linux-net-stack-rx-tuning": {
    title: "Arthur Chiao: Linux 网络栈接收数据（RX）配置调优",
    url: "https://arthurchiao.art/blog/linux-net-stack-tuning-rx-zh/",
  },
  "ibm-linux-kernel-anatomy": {
    title: "IBM Developer: Anatomy of the Linux kernel",
    url: "https://developer.ibm.com/articles/l-linux-kernel/",
  },
  "linux-kernel-entry-exit": {
    title: "Linux Kernel Documentation: Entry/exit handling",
    url: "https://www.kernel.org/doc/html/latest/core-api/entry.html",
  },
  "linux-kernel-labs-syscalls": {
    title: "Linux Kernel Labs: System Calls",
    url: "https://linux-kernel-labs.github.io/refs/heads/master/lectures/syscalls.html",
  },
  "gnu-libc-system-calls": {
    title: "The GNU C Library Manual: System Calls",
    url: "https://www.gnu.org/software/libc/manual/html_node/System-Calls.html",
  },
  "linux-kernel-threat-model": {
    title: "Linux Kernel Documentation: The Linux Kernel threat model",
    url: "https://docs.kernel.org/next/process/threat-model.html",
  },
  "linux-kernel-locking-index": {
    title: "Linux Kernel Documentation: Locking",
    url: "https://docs.kernel.org/locking/index.html",
  },
  "linux-kernel-locking-guide": {
    title: "Linux Kernel Documentation: Unreliable Guide To Locking",
    url: "https://docs.kernel.org/kernel-hacking/locking.html",
  },
  "linux-kernel-mutex-design": {
    title: "Linux Kernel Documentation: Generic Mutex Subsystem",
    url: "https://www.kernel.org/doc/html/latest/locking/mutex-design.html",
  },
  "linux-kernel-locktypes": {
    title: "Linux Kernel Documentation: Lock types and their rules",
    url: "https://www.kernel.org/doc/html/latest/locking/locktypes.html",
  },
  "linux-kernel-lockdep-design": {
    title: "Linux Kernel Documentation: Runtime locking correctness validator",
    url: "https://docs.kernel.org/locking/lockdep-design.html",
  },
  "linux-kernel-ww-mutex-design": {
    title: "Linux Kernel Documentation: Wound/Wait Deadlock-Proof Mutex Design",
    url: "https://docs.kernel.org/locking/ww-mutex-design.html",
  },
  "linux-kernel-kcsan": {
    title: "Linux Kernel Documentation: Kernel Concurrency Sanitizer",
    url: "https://docs.kernel.org/dev-tools/kcsan.html",
  },
  "linux-kernel-seqlock": {
    title: "Linux Kernel Documentation: Sequence counters and sequential locks",
    url: "https://docs.kernel.org/locking/seqlock.html",
  },
  "linux-man-pages-syscall": {
    title: "Linux man-pages: syscall(2)",
    url: "https://man7.org/linux/man-pages/man2/syscall.2.html",
  },
  "linux-man-pages-errno": {
    title: "Linux man-pages: errno(3)",
    url: "https://man7.org/linux/man-pages/man3/errno.3.html",
  },
  "linux-man-pages-vdso": {
    title: "Linux man-pages: vdso(7)",
    url: "https://man7.org/linux/man-pages/man7/vdso.7.html",
  },
  "linux-man-pages-capabilities": {
    title: "Linux man-pages: capabilities(7)",
    url: "https://man7.org/linux/man-pages/man7/capabilities.7.html",
  },
  "linux-man-pages-seccomp": {
    title: "Linux man-pages: seccomp(2)",
    url: "https://man7.org/linux/man-pages/man2/seccomp.2.html",
  },
  "linux-man-pages-strace": {
    title: "Linux man-pages: strace(1)",
    url: "https://man7.org/linux/man-pages/man1/strace.1.html",
  },
  "linux-man-pages-perf-stat": {
    title: "Linux man-pages: perf-stat(1)",
    url: "https://man7.org/linux/man-pages/man1/perf-stat.1.html",
  },
  "linux-man-pages-perf-lock": {
    title: "Linux man-pages: perf-lock(1)",
    url: "https://man7.org/linux/man-pages/man1/perf-lock.1.html",
  },
  "ruanyifeng-user-kernel-space": {
    title: "阮一峰的网络日志: User space 与 Kernel space",
    url: "https://www.ruanyifeng.com/blog/2016/12/user_space_vs_kernel_space.html",
  },
  "xiaolincoding-os-interview": {
    title: "小林 coding: 操作系统面试题",
    url: "https://xiaolincoding.com/interview/os.html",
  },
  "senlin-pthread-inside": {
    title: "Senlin's Blog: 深入 Linux 多线程编程",
    url: "https://senlinzhan.github.io/2017/06/10/pthread-inside/",
  },
  "linux-man-pages-epoll": {
    title: "Linux man-pages: epoll(7)",
    url: "https://man7.org/linux/man-pages/man7/epoll.7.html",
  },
  "linux-man-pages-epoll-ctl": {
    title: "Linux man-pages: epoll_ctl(2)",
    url: "https://man7.org/linux/man-pages/man2/epoll_ctl.2.html",
  },
  "linux-man-pages-epoll-create": {
    title: "Linux man-pages: epoll_create(2)",
    url: "https://man7.org/linux/man-pages/man2/epoll_create.2.html",
  },
  "linux-man-pages-epoll-wait": {
    title: "Linux man-pages: epoll_wait(2)",
    url: "https://man7.org/linux/man-pages/man2/epoll_wait.2.html",
  },
  "man7-training-epoll": {
    title: "man7.org Training: epoll API",
    url: "https://man7.org/training/download/epoll_API.pdf",
  },
  "arthurchiao-io-multiplexing": {
    title: "Arthur Chiao: IO Multiplexing and epoll",
    url: "https://arthurchiao.art/blog/io-multiplexing-epoll-zh/",
  },
  "xiaolincoding-socket-c10k": {
    title: "小林 coding：高性能网络模式",
    url: "https://xiaolincoding.com/os/8_network_system/selete_poll_epoll.html",
  },
  "eklitzke-nonblocking-io-epoll": {
    title: "Eric K. Litzke: Blocking I/O, Nonblocking I/O, And Epoll",
    url: "https://eklitzke.org/blocking-io-nonblocking-io-and-epoll",
  },
  "kegel-c10k": {
    title: "Dan Kegel: The C10K problem",
    url: "http://www.kegel.com/c10k.html",
  },
  "libevent-book": {
    title: "The Libevent Book",
    url: "https://libevent.org/libevent-book/",
  },
  "gnu-bash-manual": {
    title: "GNU Bash Reference Manual",
    url: "https://www.gnu.org/software/bash/manual/bash.html",
  },
  "posix-base-spec": {
    title: "The Open Group Base Specifications Issue 8",
    url: "https://pubs.opengroup.org/onlinepubs/9799919799/",
  },
  "posix-sem-init": {
    title: "The Open Group POSIX: sem_init",
    url: "https://pubs.opengroup.org/onlinepubs/9799919799.2024edition/functions/sem_init.html",
  },
  "posix-sem-wait": {
    title: "The Open Group POSIX: sem_wait",
    url: "https://pubs.opengroup.org/onlinepubs/9799919799.2024edition/functions/sem_wait.html",
  },
  "posix-sem-post": {
    title: "The Open Group POSIX: sem_post",
    url: "https://pubs.opengroup.org/onlinepubs/9799919799.2024edition/functions/sem_post.html",
  },
  "cp-algorithms": {
    title: "cp-algorithms",
    url: "https://cp-algorithms.com/",
  },
  "visualgo": {
    title: "VisuAlgo",
    url: "https://visualgo.net/en",
  },
  "redis-docs": {
    title: "Redis Documentation",
    url: "https://redis.io/docs/latest/",
  },
  "redis-about": {
    title: "Redis Docs: About Redis",
    url: "https://redis.io/docs/latest/develop/get-started/about/",
  },
  "redis-data-types-docs": {
    title: "Redis Docs: Data types",
    url: "https://redis.io/docs/latest/develop/data-types/",
  },
  "redis-compare-data-types": {
    title: "Redis Docs: Compare data types",
    url: "https://redis.io/docs/latest/develop/data-types/compare-data-types/",
  },
  "redis-strings-docs": {
    title: "Redis Docs: Strings",
    url: "https://redis.io/docs/latest/develop/data-types/strings/",
  },
  "redis-sds-internals": {
    title: "Redis Docs: String internals",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/reference/internals/internals-sds/",
  },
  "redisbook-sds": {
    title: "Redis 设计与实现: 简单动态字符串",
    url: "https://redisbook.readthedocs.io/en/latest/internal-datastruct/sds.html",
  },
  "javaguide-redis-data-structures": {
    title: "JavaGuide: Redis 5 种基本数据类型详解",
    url: "https://javaguide.cn/database/redis/redis-data-structures-01.html",
  },
  "redis-set-command": {
    title: "Redis Commands: SET",
    url: "https://redis.io/docs/latest/commands/set/",
  },
  "redis-incr-command": {
    title: "Redis Commands: INCR",
    url: "https://redis.io/docs/latest/commands/incr/",
  },
  "redis-hashes-docs": {
    title: "Redis Docs: Hashes",
    url: "https://redis.io/docs/latest/develop/data-types/hashes/",
  },
  "redis-hset-command": {
    title: "Redis Commands: HSET",
    url: "https://redis.io/docs/latest/commands/hset/",
  },
  "redis-hget-command": {
    title: "Redis Commands: HGET",
    url: "https://redis.io/docs/latest/commands/hget/",
  },
  "redis-hmget-command": {
    title: "Redis Commands: HMGET",
    url: "https://redis.io/docs/latest/commands/hmget/",
  },
  "redis-hgetall-command": {
    title: "Redis Commands: HGETALL",
    url: "https://redis.io/docs/latest/commands/hgetall/",
  },
  "redis-hlen-command": {
    title: "Redis Commands: HLEN",
    url: "https://redis.io/docs/latest/commands/hlen/",
  },
  "redis-hincrby-command": {
    title: "Redis Commands: HINCRBY",
    url: "https://redis.io/docs/latest/commands/hincrby/",
  },
  "redis-hscan-command": {
    title: "Redis Commands: HSCAN",
    url: "https://redis.io/docs/latest/commands/hscan/",
  },
  "redis-hexpire-command": {
    title: "Redis Commands: HEXPIRE",
    url: "https://redis.io/docs/latest/commands/hexpire/",
  },
  "redis-hsetex-command": {
    title: "Redis Commands: HSETEX",
    url: "https://redis.io/docs/latest/commands/hsetex/",
  },
  "redis-lists-docs": {
    title: "Redis Docs: Lists",
    url: "https://redis.io/docs/latest/develop/data-types/lists/",
  },
  "redis-lpush-command": {
    title: "Redis Commands: LPUSH",
    url: "https://redis.io/docs/latest/commands/lpush/",
  },
  "redis-rpush-command": {
    title: "Redis Commands: RPUSH",
    url: "https://redis.io/docs/latest/commands/rpush/",
  },
  "redis-lpop-command": {
    title: "Redis Commands: LPOP",
    url: "https://redis.io/docs/latest/commands/lpop/",
  },
  "redis-rpop-command": {
    title: "Redis Commands: RPOP",
    url: "https://redis.io/docs/latest/commands/rpop/",
  },
  "redis-blpop-command": {
    title: "Redis Commands: BLPOP",
    url: "https://redis.io/docs/latest/commands/blpop/",
  },
  "redis-lrange-command": {
    title: "Redis Commands: LRANGE",
    url: "https://redis.io/docs/latest/commands/lrange/",
  },
  "redis-ltrim-command": {
    title: "Redis Commands: LTRIM",
    url: "https://redis.io/docs/latest/commands/ltrim/",
  },
  "redis-llen-command": {
    title: "Redis Commands: LLEN",
    url: "https://redis.io/docs/latest/commands/llen/",
  },
  "redis-lmove-command": {
    title: "Redis Commands: LMOVE",
    url: "https://redis.io/docs/latest/commands/lmove/",
  },
  "redis-blmove-command": {
    title: "Redis Commands: BLMOVE",
    url: "https://redis.io/docs/latest/commands/blmove/",
  },
  "redis-lrem-command": {
    title: "Redis Commands: LREM",
    url: "https://redis.io/docs/latest/commands/lrem/",
  },
  "redis-quicklist-source": {
    title: "Redis Source: quicklist.c",
    url: "https://github.com/redis/redis/blob/unstable/src/quicklist.c",
  },
  "redis-listpack-source": {
    title: "Redis Source: listpack.c",
    url: "https://github.com/redis/redis/blob/unstable/src/listpack.c",
  },
  "redis-sets-docs": {
    title: "Redis Docs: Sets",
    url: "https://redis.io/docs/latest/develop/data-types/sets/",
  },
  "redis-sadd-command": {
    title: "Redis Commands: SADD",
    url: "https://redis.io/docs/latest/commands/sadd/",
  },
  "redis-srem-command": {
    title: "Redis Commands: SREM",
    url: "https://redis.io/docs/latest/commands/srem/",
  },
  "redis-sismember-command": {
    title: "Redis Commands: SISMEMBER",
    url: "https://redis.io/docs/latest/commands/sismember/",
  },
  "redis-scard-command": {
    title: "Redis Commands: SCARD",
    url: "https://redis.io/docs/latest/commands/scard/",
  },
  "redis-smembers-command": {
    title: "Redis Commands: SMEMBERS",
    url: "https://redis.io/docs/latest/commands/smembers/",
  },
  "redis-sinter-command": {
    title: "Redis Commands: SINTER",
    url: "https://redis.io/docs/latest/commands/sinter/",
  },
  "redis-sintercard-command": {
    title: "Redis Commands: SINTERCARD",
    url: "https://redis.io/docs/latest/commands/sintercard/",
  },
  "redis-sunion-command": {
    title: "Redis Commands: SUNION",
    url: "https://redis.io/docs/latest/commands/sunion/",
  },
  "redis-sdiff-command": {
    title: "Redis Commands: SDIFF",
    url: "https://redis.io/docs/latest/commands/sdiff/",
  },
  "redis-sscan-command": {
    title: "Redis Commands: SSCAN",
    url: "https://redis.io/docs/latest/commands/sscan/",
  },
  "redis-srandmember-command": {
    title: "Redis Commands: SRANDMEMBER",
    url: "https://redis.io/docs/latest/commands/srandmember/",
  },
  "redis-spop-command": {
    title: "Redis Commands: SPOP",
    url: "https://redis.io/docs/latest/commands/spop/",
  },
  "redis-sorted-sets-docs": {
    title: "Redis Docs: Sorted sets",
    url: "https://redis.io/docs/latest/develop/data-types/sorted-sets/",
  },
  "redis-rate-limiter-docs": {
    title: "Redis Docs: Rate limiter",
    url: "https://redis.io/docs/latest/develop/use-cases/rate-limiter/",
  },
  "redis-zadd-command": {
    title: "Redis Commands: ZADD",
    url: "https://redis.io/docs/latest/commands/zadd/",
  },
  "redis-zincrby-command": {
    title: "Redis Commands: ZINCRBY",
    url: "https://redis.io/docs/latest/commands/zincrby/",
  },
  "redis-zremrangebyscore-command": {
    title: "Redis Commands: ZREMRANGEBYSCORE",
    url: "https://redis.io/docs/latest/commands/zremrangebyscore/",
  },
  "redis-zcard-command": {
    title: "Redis Commands: ZCARD",
    url: "https://redis.io/docs/latest/commands/zcard/",
  },
  "redis-zcount-command": {
    title: "Redis Commands: ZCOUNT",
    url: "https://redis.io/docs/latest/commands/zcount/",
  },
  "redis-rate-limiting-dotnet": {
    title: "Redis Tutorial: Rate limiting in .NET with Redis",
    url: "https://redis.io/tutorials/rate-limiting-in-dotnet-with-redis/",
  },
  "redis-zrange-command": {
    title: "Redis Commands: ZRANGE",
    url: "https://redis.io/docs/latest/commands/zrange/",
  },
  "redis-zrank-command": {
    title: "Redis Commands: ZRANK",
    url: "https://redis.io/docs/latest/commands/zrank/",
  },
  "redis-zrevrank-command": {
    title: "Redis Commands: ZREVRANK",
    url: "https://redis.io/docs/latest/commands/zrevrank/",
  },
  "redis-zscore-command": {
    title: "Redis Commands: ZSCORE",
    url: "https://redis.io/docs/latest/commands/zscore/",
  },
  "redis-zrem-command": {
    title: "Redis Commands: ZREM",
    url: "https://redis.io/docs/latest/commands/zrem/",
  },
  "redis-zscan-command": {
    title: "Redis Commands: ZSCAN",
    url: "https://redis.io/docs/latest/commands/zscan/",
  },
  "redis-zpopmin-command": {
    title: "Redis Commands: ZPOPMIN",
    url: "https://redis.io/docs/latest/commands/zpopmin/",
  },
  "redis-source-t-zset": {
    title: "Redis source: t_zset.c",
    url: "https://github.com/redis/redis/blob/7.2/src/t_zset.c",
  },
  "redis-bitmaps-docs": {
    title: "Redis Docs: Bitmaps",
    url: "https://redis.io/docs/latest/develop/data-types/strings/bitmaps/",
  },
  "redis-setbit-command": {
    title: "Redis Commands: SETBIT",
    url: "https://redis.io/docs/latest/commands/setbit/",
  },
  "redis-bitcount-command": {
    title: "Redis Commands: BITCOUNT",
    url: "https://redis.io/docs/latest/commands/bitcount/",
  },
  "redis-hyperloglog-docs": {
    title: "Redis Docs: HyperLogLog",
    url: "https://redis.io/docs/latest/develop/data-types/probabilistic/hyperloglogs/",
  },
  "redis-pfadd-command": {
    title: "Redis Commands: PFADD",
    url: "https://redis.io/docs/latest/commands/pfadd/",
  },
  "redis-pfcount-command": {
    title: "Redis Commands: PFCOUNT",
    url: "https://redis.io/docs/latest/commands/pfcount/",
  },
  "redis-pfmerge-command": {
    title: "Redis Commands: PFMERGE",
    url: "https://redis.io/docs/latest/commands/pfmerge/",
  },
  "redis-geospatial-docs": {
    title: "Redis Docs: Geospatial",
    url: "https://redis.io/docs/latest/develop/data-types/geospatial/",
  },
  "redis-geoadd-command": {
    title: "Redis Commands: GEOADD",
    url: "https://redis.io/docs/latest/commands/geoadd/",
  },
  "redis-geosearch-command": {
    title: "Redis Commands: GEOSEARCH",
    url: "https://redis.io/docs/latest/commands/geosearch/",
  },
  "redis-geodist-command": {
    title: "Redis Commands: GEODIST",
    url: "https://redis.io/docs/latest/commands/geodist/",
  },
  "redis-streams-docs": {
    title: "Redis Docs: Streams",
    url: "https://redis.io/docs/latest/develop/data-types/streams/",
  },
  "redis-streaming-use-case": {
    title: "Redis Docs: Redis streaming",
    url: "https://redis.io/docs/latest/develop/use-cases/streaming/",
  },
  "redis-xread-command": {
    title: "Redis Commands: XREAD",
    url: "https://redis.io/docs/latest/commands/xread/",
  },
  "redis-xreadgroup-command": {
    title: "Redis Commands: XREADGROUP",
    url: "https://redis.io/docs/latest/commands/xreadgroup/",
  },
  "redis-xack-command": {
    title: "Redis Commands: XACK",
    url: "https://redis.io/docs/latest/commands/xack/",
  },
  "redis-xpending-command": {
    title: "Redis Commands: XPENDING",
    url: "https://redis.io/docs/latest/commands/xpending/",
  },
  "redis-xgroup-command": {
    title: "Redis Commands: XGROUP",
    url: "https://redis.io/docs/latest/commands/xgroup/",
  },
  "redis-xautoclaim-command": {
    title: "Redis Commands: XAUTOCLAIM",
    url: "https://redis.io/docs/latest/commands/xautoclaim/",
  },
  "redis-pubsub-docs": {
    title: "Redis Docs: Pub/Sub",
    url: "https://redis.io/docs/latest/develop/pubsub/",
  },
  "redis-pubsub-use-case": {
    title: "Redis Docs: Pub/sub messaging",
    url: "https://redis.io/docs/latest/develop/use-cases/pub-sub/",
  },
  "redis-publish-command": {
    title: "Redis Commands: PUBLISH",
    url: "https://redis.io/docs/latest/commands/publish/",
  },
  "redis-subscribe-command": {
    title: "Redis Commands: SUBSCRIBE",
    url: "https://redis.io/docs/latest/commands/subscribe/",
  },
  "redis-pubsub-command": {
    title: "Redis Commands: PUBSUB",
    url: "https://redis.io/docs/latest/commands/pubsub/",
  },
  "redis-persistence-docs": {
    title: "Redis Docs: Persistence",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
  },
  "redis-persistence-learn": {
    title: "Redis Learn: Persistence and durability",
    url: "https://redis.io/learn/operate/redis-at-scale/persistence-and-durability",
  },
  "redis-configuration-docs": {
    title: "Redis Docs: Redis configuration",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/config/",
  },
  "redis-misconf-rdb-kb": {
    title: "Redis KB: Fix MISCONF Redis is configured to save RDB snapshots",
    url: "https://redis.io/kb/doc/296s7bo3im/",
  },
  "redis-source-rdb": {
    title: "Redis Source: rdb.c",
    url: "https://github.com/redis/redis/blob/unstable/src/rdb.c",
  },
  "oneuptime-redis-rdb": {
    title: "OneUptime: Redis RDB Snapshots Step by Step",
    url: "https://oneuptime.com/blog/post/2026-03-31-redis-rdb-snapshots-step-by-step/view",
  },
  "bytebytego-redis-persistence": {
    title: "ByteByteGo: How does Redis persist data?",
    url: "https://bytebytego.com/guides/guides/how-does-redis-persist-data/",
  },
  "redis-bgsave-command": {
    title: "Redis Commands: BGSAVE",
    url: "https://redis.io/docs/latest/commands/bgsave/",
  },
  "redis-save-command": {
    title: "Redis Commands: SAVE",
    url: "https://redis.io/docs/latest/commands/save/",
  },
  "redis-lastsave-command": {
    title: "Redis Commands: LASTSAVE",
    url: "https://redis.io/docs/latest/commands/lastsave/",
  },
  "redis-bgrewriteaof-command": {
    title: "Redis Commands: BGREWRITEAOF",
    url: "https://redis.io/docs/latest/commands/bgrewriteaof/",
  },
  "redis-config-get-command": {
    title: "Redis Commands: CONFIG GET",
    url: "https://redis.io/docs/latest/commands/config-get/",
  },
  "redis-config-set-command": {
    title: "Redis Commands: CONFIG SET",
    url: "https://redis.io/docs/latest/commands/config-set/",
  },
  "redis-source-aof": {
    title: "Redis Source: aof.c",
    url: "https://github.com/redis/redis/blob/unstable/src/aof.c",
  },
  "redis-source-check-aof": {
    title: "Redis Source: redis-check-aof.c",
    url: "https://github.com/redis/redis/blob/unstable/src/redis-check-aof.c",
  },
  "redisbook-aof": {
    title: "Redis Design and Implementation: AOF",
    url: "https://redisbook.readthedocs.io/en/latest/internal/aof.html",
  },
  "deepwiki-redis-aof": {
    title: "DeepWiki Redis: AOF Persistence",
    url: "https://deepwiki.com/redis/redis/4.1-aof-persistence",
  },
  "nootcode-redis-aof": {
    title: "NootCode: Redis Persistence",
    url: "https://www.nootcode.com/knowledge/en/redis-aof-rdb-persistence",
  },
  "redis-latency-docs": {
    title: "Redis Docs: Diagnosing latency issues",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/latency/",
  },
  "redis-latency-monitor-docs": {
    title: "Redis Docs: Latency monitoring",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/latency-monitor/",
  },
  "redis-info-command": {
    title: "Redis Commands: INFO",
    url: "https://redis.io/docs/latest/commands/info/",
  },
  "redisgate-copy-on-write": {
    title: "RedisGate: Redis Copy-on-Write",
    url: "https://www.redisgate.jp/redis/configuration/copy-on-write.php",
  },
  "linux-kernel-labs-copy-on-write": {
    title: "Linux Kernel Labs: Copy on Write",
    url: "https://linux-kernel-labs.github.io/refs/heads/master/so2/lec9-memory.html",
  },
  "redis-replication-docs": {
    title: "Redis Docs: Replication",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/replication/",
  },
  "redis-replicaof-command": {
    title: "Redis Commands: REPLICAOF",
    url: "https://redis.io/docs/latest/commands/replicaof/",
  },
  "redis-basic-replication-learn": {
    title: "Redis Learn: High Availability - Basic Replication",
    url: "https://redis.io/learn/operate/redis-at-scale/high-availability/basic-replication",
  },
  "redis-wait-command": {
    title: "Redis Commands: WAIT",
    url: "https://redis.io/docs/latest/commands/wait/",
  },
  "redis-replication-consistency-docs": {
    title: "Redis Docs: Consistency during replication",
    url: "https://redis.io/docs/latest/operate/rs/databases/durability-ha/consistency/",
  },
  "redis-role-command": {
    title: "Redis Commands: ROLE",
    url: "https://redis.io/docs/latest/commands/role/",
  },
  "redis-psync-command": {
    title: "Redis Commands: PSYNC",
    url: "https://redis.io/docs/latest/commands/psync/",
  },
  "oneuptime-redis-replication-lag": {
    title: "OneUptime: How to Monitor Redis Replication Lag",
    url: "https://oneuptime.com/blog/post/2026-03-31-redis-how-to-monitor-redis-replication-lag/view",
  },
  "redis-sentinel-docs": {
    title: "Redis Docs: High availability with Redis Sentinel",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/",
  },
  "redis-sentinel-client-spec": {
    title: "Redis Docs: Sentinel client spec",
    url: "https://redis.io/docs/latest/develop/reference/sentinel-clients/",
  },
  "redis-sentinel-learn": {
    title: "Redis Learn: Understanding Sentinels",
    url: "https://redis.io/learn/operate/redis-at-scale/high-availability/understanding-sentinels",
  },
  "redis-cluster-docs": {
    title: "Redis Docs: Scale with Redis Cluster",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/",
  },
  "redis-cluster-spec": {
    title: "Redis Docs: Redis Cluster specification",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
  },
  "redis-cluster-keyslot-command": {
    title: "Redis Commands: CLUSTER KEYSLOT",
    url: "https://redis.io/docs/latest/commands/cluster-keyslot/",
  },
  "redis-cluster-shards-command": {
    title: "Redis Commands: CLUSTER SHARDS",
    url: "https://redis.io/docs/latest/commands/cluster-shards/",
  },
  "redis-cluster-info-command": {
    title: "Redis Commands: CLUSTER INFO",
    url: "https://redis.io/docs/latest/commands/cluster-info/",
  },
  "redis-cluster-nodes-command": {
    title: "Redis Commands: CLUSTER NODES",
    url: "https://redis.io/docs/latest/commands/cluster-nodes/",
  },
  "redis-cluster-slot-stats-command": {
    title: "Redis Commands: CLUSTER SLOT-STATS",
    url: "https://redis.io/docs/latest/commands/cluster-slot-stats/",
  },
  "redis-cluster-countkeysinslot-command": {
    title: "Redis Commands: CLUSTER COUNTKEYSINSLOT",
    url: "https://redis.io/docs/latest/commands/cluster-countkeysinslot/",
  },
  "redis-cluster-getkeysinslot-command": {
    title: "Redis Commands: CLUSTER GETKEYSINSLOT",
    url: "https://redis.io/docs/latest/commands/cluster-getkeysinslot/",
  },
  "redis-cluster-setslot-command": {
    title: "Redis Commands: CLUSTER SETSLOT",
    url: "https://redis.io/docs/latest/commands/cluster-setslot/",
  },
  "redis-multi-key-operations": {
    title: "Redis Docs: Multi-key operations",
    url: "https://redis.io/docs/latest/develop/using-commands/multi-key-operations/",
  },
  "redis-clustering-best-practices-keys": {
    title: "Redis Blog: Redis Clustering Best Practices With Multiple Keys",
    url: "https://redis.io/blog/redis-clustering-best-practices-with-keys/",
  },
  "severalnines-redis-cluster": {
    title: "Severalnines Docs: Redis Cluster",
    url: "https://docs.severalnines.com/clustercontrol/latest/getting-started/tutorials/day-1-operations/your-first-cluster/redis/redis-cluster/",
  },
  "oneuptime-redis-cluster": {
    title: "OneUptime: Redis Cluster Architecture",
    url: "https://oneuptime.com/blog/post/2026-04-01-redis-cluster-architecture-explained/view",
  },
  "oneuptime-redis-hash-slots": {
    title: "OneUptime: How Redis Cluster Hash Slots Work",
    url: "https://oneuptime.com/blog/post/2026-03-31-redis-cluster-hash-slots-16384/view",
  },
  "oneuptime-redis-hash-tags": {
    title: "OneUptime: Redis Cluster Hash Tags Key Co-Location",
    url: "https://oneuptime.com/blog/post/2026-03-31-redis-cluster-hash-tags-key-colocation/view",
  },
  "redis-readonly-command": {
    title: "Redis Commands: READONLY",
    url: "https://redis.io/docs/latest/commands/readonly/",
  },
  "redis-readwrite-command": {
    title: "Redis Commands: READWRITE",
    url: "https://redis.io/docs/latest/commands/readwrite/",
  },
  "redis-migrate-command": {
    title: "Redis Commands: MIGRATE",
    url: "https://redis.io/docs/latest/commands/migrate/",
  },
  "redis-asking-command": {
    title: "Redis Commands: ASKING",
    url: "https://redis.io/docs/latest/commands/asking/",
  },
  "redis-slowlog-command": {
    title: "Redis Commands: SLOWLOG",
    url: "https://redis.io/docs/latest/commands/slowlog/",
  },
  "redis-slowlog-get-command": {
    title: "Redis Commands: SLOWLOG GET",
    url: "https://redis.io/docs/latest/commands/slowlog-get/",
  },
  "redis-slowlog-len-command": {
    title: "Redis Commands: SLOWLOG LEN",
    url: "https://redis.io/docs/latest/commands/slowlog-len/",
  },
  "redis-slowlog-reset-command": {
    title: "Redis Commands: SLOWLOG RESET",
    url: "https://redis.io/docs/latest/commands/slowlog-reset/",
  },
  "redis-software-slow-log": {
    title: "Redis Docs: View and manage Redis slow log",
    url: "https://redis.io/docs/latest/operate/rs/clusters/logging/redis-slow-log/",
  },
  "redis-source-slowlog": {
    title: "Redis Source: slowlog.c",
    url: "https://github.com/redis/redis/blob/unstable/src/slowlog.c",
  },
  "redisbook-slowlog": {
    title: "Redis Design and Implementation: Slow Log",
    url: "https://redisbook.readthedocs.io/en/latest/feature/slowlog.html",
  },
  "redis-monitor-command": {
    title: "Redis Commands: MONITOR",
    url: "https://redis.io/docs/latest/commands/monitor/",
  },
  "redis-client-list-command": {
    title: "Redis Commands: CLIENT LIST",
    url: "https://redis.io/docs/latest/commands/client-list/",
  },
  "redis-kb-del-latency": {
    title: "Redis Knowledge Base: Reducing Latency from DEL Command Usage",
    url: "https://support.redislabs.com/hc/en-us/articles/30697090147730-Reducing-Latency-from-DEL-Command-Usage",
  },
  "tencent-cloud-redis-big-hot-key": {
    title: "Tencent Cloud Docs: Hot Key and Big Key",
    url: "https://intl.cloud.tencent.com/ind/document/product/239/54756",
  },
  "huawei-cloud-redis-big-hot-key": {
    title: "Huawei Cloud Docs: How Do I Detect Big Keys and Hot Keys in Advance?",
    url: "https://support.huaweicloud.com/intl/en-us/dcs_faq/dcs-faq-0606002.html",
  },
  "aliyun-redis-hot-key-diagnostics": {
    title: "Alibaba Cloud Docs: Identify and handle hotkeys and large keys",
    url: "https://www.alibabacloud.com/help/en/redis/user-guide/identify-and-handle-hotkeys-and-large-keys",
  },
  "oneuptime-redis-large-key": {
    title: "OneUptime: How to Troubleshoot Redis Large Key Problems",
    url: "https://oneuptime.com/blog/post/2026-03-31-redis-troubleshoot-redis-large-key-problems/view",
  },
  "aws-redis-caching-strategies": {
    title: "AWS Whitepaper: Database Caching Strategies Using Redis",
    url: "https://d1.awsstatic.com/whitepapers/Database/database-caching-strategies-using-redis.73adbc8708febc9f3e5efc88382ab86f092bda82.pdf",
  },
  "redis-key-eviction-docs": {
    title: "Redis Docs: Key eviction",
    url: "https://redis.io/docs/latest/develop/reference/eviction/",
  },
  "redis-memory-optimization-docs": {
    title: "Redis Docs: Memory optimization",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/memory-optimization/",
  },
  "redis-memory-usage-command": {
    title: "Redis Commands: MEMORY USAGE",
    url: "https://redis.io/docs/latest/commands/memory-usage/",
  },
  "redis-memory-doctor-command": {
    title: "Redis Commands: MEMORY DOCTOR",
    url: "https://redis.io/docs/latest/commands/memory-doctor/",
  },
  "redis-memory-stats-command": {
    title: "Redis Commands: MEMORY STATS",
    url: "https://redis.io/docs/latest/commands/memory-stats/",
  },
  "redis-object-freq-command": {
    title: "Redis Commands: OBJECT FREQ",
    url: "https://redis.io/docs/latest/commands/object-freq/",
  },
  "redis-object-encoding-command": {
    title: "Redis Commands: OBJECT ENCODING",
    url: "https://redis.io/docs/latest/commands/object-encoding/",
  },
  "redis-unlink-command": {
    title: "Redis Commands: UNLINK",
    url: "https://redis.io/docs/latest/commands/unlink/",
  },
  "redis-hotkeys-command": {
    title: "Redis Commands: HOTKEYS",
    url: "https://redis.io/docs/latest/commands/hotkeys/",
  },
  "redis-observability-docs": {
    title: "Redis Docs: Observability and monitoring guidance",
    url: "https://redis.io/docs/latest/operate/rs/monitoring/observability/",
  },
  "redis-security-docs": {
    title: "Redis Docs: Security",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/security/",
  },
  "redis-cache-aside-docs": {
    title: "Redis Docs: Cache-aside",
    url: "https://redis.io/docs/latest/develop/use-cases/cache-aside/",
  },
  "redis-client-side-caching-docs": {
    title: "Redis Docs: Client-side caching",
    url: "https://redis.io/docs/latest/develop/reference/client-side-caching/",
  },
  "redis-cache-consistency-blog": {
    title: "Redis Blog: Three Ways to Maintain Cache Consistency",
    url: "https://redis.io/blog/three-ways-to-maintain-cache-consistency/",
  },
  "alibaba-cache-consistency": {
    title: "阿里云开发者社区：Redis 缓存与数据库双写一致性",
    url: "https://developer.aliyun.com/article/1732763",
  },
  "aws-cloudfront-swr": {
    title: "AWS CloudFront: stale-while-revalidate and stale-if-error",
    url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html",
  },
  "aws-architecture-jitter": {
    title: "AWS Architecture Blog: Exponential Backoff and Jitter",
    url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/",
  },
  "azure-cache-aside-pattern": {
    title: "Microsoft Azure Architecture: Cache-Aside pattern",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
  },
  "caffeine-eviction": {
    title: "Caffeine Wiki: Eviction",
    url: "https://github.com/ben-manes/caffeine/wiki/Eviction",
  },
  "caffeine-refresh": {
    title: "Caffeine Wiki: Refresh",
    url: "https://github.com/ben-manes/caffeine/wiki/Refresh",
  },
  "caffeine-statistics": {
    title: "Caffeine Wiki: Statistics",
    url: "https://github.com/ben-manes/caffeine/wiki/Statistics",
  },
  "guava-caches-explained": {
    title: "Guava Wiki: Caches Explained",
    url: "https://github.com/google/guava/wiki/CachesExplained",
  },
  "spring-cache-abstraction": {
    title: "Spring Framework Docs: Cache Abstraction",
    url: "https://docs.spring.io/spring-framework/reference/integration/cache.html",
  },
  "redis-caching-use-case": {
    title: "Redis Solutions: Caching",
    url: "https://redis.io/solutions/use-cases/caching/",
  },
  "redis-bloom-filter-docs": {
    title: "Redis Docs: Bloom filter",
    url: "https://redis.io/docs/latest/develop/data-types/probabilistic/bloom-filter/",
  },
  "redis-bf-reserve-command": {
    title: "Redis Commands: BF.RESERVE",
    url: "https://redis.io/docs/latest/commands/bf.reserve/",
  },
  "redis-bf-add-command": {
    title: "Redis Commands: BF.ADD",
    url: "https://redis.io/docs/latest/commands/bf.add/",
  },
  "redis-bf-exists-command": {
    title: "Redis Commands: BF.EXISTS",
    url: "https://redis.io/docs/latest/commands/bf.exists/",
  },
  "redis-distributed-locks-docs": {
    title: "Redis Docs: Distributed locks with Redis",
    url: "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
  },
  "etcd-locks": {
    title: "etcd Docs: How to create locks",
    url: "https://etcd.io/docs/v3.6/tasks/developer/how-to-create-locks/",
  },
  "zookeeper-recipes-locks": {
    title: "ZooKeeper Docs: Recipes and Solutions - Locks",
    url: "https://zookeeper.apache.org/doc/current/recipes.html",
  },
  "curator-shared-reentrant-lock": {
    title: "Apache Curator Docs: Shared Reentrant Lock",
    url: "https://curator.apache.org/docs/recipes-shared-reentrant-lock/",
  },
  "kleppmann-redlock-critique": {
    title: "Martin Kleppmann: How to do distributed locking",
    url: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html",
  },
  "antirez-redlock-safe": {
    title: "antirez: Is Redlock safe?",
    url: "https://antirez.com/news/101",
  },
  "etcd-concurrency-api": {
    title: "etcd Docs: Concurrency API Reference",
    url: "https://etcd.io/docs/v3.2/dev-guide/api_concurrency_reference_v3/",
  },
  "etcd-why": {
    title: "etcd Docs: Why etcd?",
    url: "https://etcd.io/docs/v3.6/learning/why/",
  },
  "dynamodb-optimistic-locking": {
    title: "Amazon DynamoDB Docs: Optimistic locking with version number",
    url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BestPractices_OptimisticLocking.html",
  },
  "hibernate-optimistic-locking": {
    title: "Hibernate User Guide: Locking",
    url: "https://docs.jboss.org/hibernate/orm/5.0/userguide/en-US/html/ch08.html",
  },
  "microsoft-ef-core-concurrency": {
    title: "Microsoft Learn: Handling Concurrency Conflicts in EF Core",
    url: "https://learn.microsoft.com/en-us/ef/core/saving/concurrency",
  },
  "elasticsearch-optimistic-concurrency": {
    title: "Elastic Docs: Optimistic concurrency control",
    url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/optimistic-concurrency-control.html",
  },
  "martin-fowler-optimistic-offline-lock": {
    title: "Martin Fowler: Optimistic Offline Lock",
    url: "https://martinfowler.com/eaaCatalog/optimisticOfflineLock.html",
  },
  "redis-lua-scripting-docs": {
    title: "Redis Docs: Scripting with Lua",
    url: "https://redis.io/docs/latest/develop/programmability/eval-intro/",
  },
  "redis-eval-command": {
    title: "Redis Commands: EVAL",
    url: "https://redis.io/docs/latest/commands/eval/",
  },
  "redis-script-command": {
    title: "Redis Commands: SCRIPT",
    url: "https://redis.io/docs/latest/commands/script/",
  },
  "redis-del-command": {
    title: "Redis Commands: DEL",
    url: "https://redis.io/docs/latest/commands/del/",
  },
  "redis-get-command": {
    title: "Redis Commands: GET",
    url: "https://redis.io/docs/latest/commands/get/",
  },
  "redis-expire-command": {
    title: "Redis Commands: EXPIRE",
    url: "https://redis.io/docs/latest/commands/expire/",
  },
  "redis-pexpire-command": {
    title: "Redis Commands: PEXPIRE",
    url: "https://redis.io/docs/latest/commands/pexpire/",
  },
  "redis-ttl-command": {
    title: "Redis Commands: TTL",
    url: "https://redis.io/docs/latest/commands/ttl/",
  },
  "redis-keyspace-docs": {
    title: "Redis Docs: Keys and values",
    url: "https://redis.io/docs/latest/develop/using-commands/keyspace/",
  },
  "redisson-locks": {
    title: "Redisson Reference Guide: Locks and synchronizers",
    url: "https://redisson.pro/docs/data-and-services/locks-and-synchronizers/index.html",
  },
  "redis-persist-command": {
    title: "Redis Commands: PERSIST",
    url: "https://redis.io/docs/latest/commands/persist/",
  },
  "redis-keyspace-notifications": {
    title: "Redis Docs: Keyspace notifications",
    url: "https://redis.io/docs/latest/develop/pubsub/keyspace-notifications/",
  },
  "redis-commands": {
    title: "Redis Commands",
    url: "https://redis.io/docs/latest/commands/",
  },
  "redis-cli-docs": {
    title: "Redis Docs: Redis CLI",
    url: "https://redis.io/docs/latest/develop/tools/cli/",
  },
  "redis-acl-docs": {
    title: "Redis Docs: Access Control List",
    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/",
  },
  "redis-scan-command": {
    title: "Redis Commands: SCAN",
    url: "https://redis.io/docs/latest/commands/scan/",
  },
  "mysql-reference": {
    title: "MySQL 8.4 Reference Manual",
    url: "https://dev.mysql.com/doc/refman/8.4/en/",
  },
  "mysql-sql-statements": {
    title: "MySQL Reference Manual: SQL Statements",
    url: "https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html",
  },
  "mysql-select-statement": {
    title: "MySQL Reference Manual: SELECT Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/select.html",
  },
  "mysql-join-clause": {
    title: "MySQL Reference Manual: JOIN Clause",
    url: "https://dev.mysql.com/doc/refman/8.4/en/join.html",
  },
  "mysql-select-optimization": {
    title: "MySQL Reference Manual: Optimizing SELECT Statements",
    url: "https://dev.mysql.com/doc/refman/8.4/en/select-optimization.html",
  },
  "mysql-nested-loop-joins": {
    title: "MySQL Reference Manual: Nested-Loop Join Algorithms",
    url: "https://dev.mysql.com/doc/refman/8.4/en/nested-loop-joins.html",
  },
  "mysql-nested-join-optimization": {
    title: "MySQL Reference Manual: Nested Join Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/nested-join-optimization.html",
  },
  "mysql-outer-join-optimization": {
    title: "MySQL Reference Manual: Outer Join Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/outer-join-optimization.html",
  },
  "mysql-outer-join-simplification": {
    title: "MySQL Reference Manual: Outer Join Simplification",
    url: "https://dev.mysql.com/doc/refman/8.4/en/outer-join-simplification.html",
  },
  "mysql-hash-join-optimization": {
    title: "MySQL Reference Manual: Hash Join Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/hash-joins.html",
  },
  "mysql-bnl-bka-joins": {
    title: "MySQL Reference Manual: Block Nested-Loop and Batched Key Access Joins",
    url: "https://dev.mysql.com/doc/refman/8.4/en/bnl-bka-optimization.html",
  },
  "mysql-condition-filtering": {
    title: "MySQL Reference Manual: Condition Filtering",
    url: "https://dev.mysql.com/doc/refman/8.4/en/condition-filtering.html",
  },
  "mysql-controlling-optimizer": {
    title: "MySQL Reference Manual: Controlling the Query Optimizer",
    url: "https://dev.mysql.com/doc/refman/8.4/en/controlling-optimizer.html",
  },
  "mysql-optimizer-hints": {
    title: "MySQL Reference Manual: Optimizer Hints",
    url: "https://dev.mysql.com/doc/refman/8.4/en/optimizer-hints.html",
  },
  "mysql-optimizer-statistics": {
    title: "MySQL Reference Manual: Optimizer Statistics",
    url: "https://dev.mysql.com/doc/refman/8.4/en/optimizer-statistics.html",
  },
  "mysql-optimizer-trace": {
    title: "MySQL Reference Manual: Tracing the Optimizer",
    url: "https://dev.mysql.com/doc/refman/8.4/en/optimizer-tracing.html",
  },
  "mysql-analyze-table": {
    title: "MySQL Reference Manual: ANALYZE TABLE Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/analyze-table.html",
  },
  "mysql-invisible-indexes": {
    title: "MySQL Reference Manual: Invisible Indexes",
    url: "https://dev.mysql.com/doc/refman/8.4/en/invisible-indexes.html",
  },
  "mysql-where-optimization": {
    title: "MySQL Reference Manual: WHERE Clause Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/where-optimization.html",
  },
  "mysql-range-optimization": {
    title: "MySQL Reference Manual: Range Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/range-optimization.html",
  },
  "mysql-how-mysql-uses-indexes": {
    title: "MySQL Reference Manual: How MySQL Uses Indexes",
    url: "https://dev.mysql.com/doc/refman/8.4/en/mysql-indexes.html",
  },
  "mysql-column-indexes": {
    title: "MySQL Reference Manual: Column Indexes",
    url: "https://dev.mysql.com/doc/refman/8.4/en/column-indexes.html",
  },
  "mysql-show-index": {
    title: "MySQL Reference Manual: SHOW INDEX Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-index.html",
  },
  "mysql-multiple-column-indexes": {
    title: "MySQL Reference Manual: Multiple-Column Indexes",
    url: "https://dev.mysql.com/doc/refman/8.4/en/multiple-column-indexes.html",
  },
  "mysql-verifying-index-usage": {
    title: "MySQL Reference Manual: Verifying Index Usage",
    url: "https://dev.mysql.com/doc/refman/8.4/en/verifying-index-usage.html",
  },
  "mysql-index-condition-pushdown": {
    title: "MySQL Reference Manual: Index Condition Pushdown Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/index-condition-pushdown-optimization.html",
  },
  "mysql-index-extensions": {
    title: "MySQL Reference Manual: Use of Index Extensions",
    url: "https://dev.mysql.com/doc/refman/8.4/en/index-extensions.html",
  },
  "mysql-comparison-operators": {
    title: "MySQL Reference Manual: Comparison Functions and Operators",
    url: "https://dev.mysql.com/doc/refman/8.4/en/comparison-operators.html",
  },
  "mysql-logical-operators": {
    title: "MySQL Reference Manual: Logical Operators",
    url: "https://dev.mysql.com/doc/refman/8.4/en/logical-operators.html",
  },
  "mysql-working-with-null": {
    title: "MySQL Reference Manual: Working with NULL Values",
    url: "https://dev.mysql.com/doc/refman/8.4/en/working-with-null.html",
  },
  "mysql-order-by-optimization": {
    title: "MySQL Reference Manual: ORDER BY Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/order-by-optimization.html",
  },
  "mysql-group-by-optimization": {
    title: "MySQL Reference Manual: GROUP BY Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/group-by-optimization.html",
  },
  "mysql-limit-optimization": {
    title: "MySQL Reference Manual: LIMIT Query Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/limit-optimization.html",
  },
  "mysql-prepared-statements": {
    title: "MySQL Reference Manual: Prepared Statements",
    url: "https://dev.mysql.com/doc/refman/8.4/en/sql-prepared-statements.html",
  },
  "mysql-create-table": {
    title: "MySQL Reference Manual: CREATE TABLE Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/create-table.html",
  },
  "mysql-primary-key-optimization": {
    title: "MySQL Reference Manual: Primary Key Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/primary-key-optimization.html",
  },
  "mysql-constraint-primary-key": {
    title: "MySQL Reference Manual: PRIMARY KEY and UNIQUE Index Constraints",
    url: "https://dev.mysql.com/doc/refman/8.4/en/constraint-primary-key.html",
  },
  "mysql-data-types": {
    title: "MySQL Reference Manual: Data Types",
    url: "https://dev.mysql.com/doc/refman/8.4/en/data-types.html",
  },
  "mysql-choosing-column-types": {
    title: "MySQL Reference Manual: Choosing the Right Type for a Column",
    url: "https://dev.mysql.com/doc/refman/8.4/en/choosing-types.html",
  },
  "mysql-storage-requirements": {
    title: "MySQL Reference Manual: Data Type Storage Requirements",
    url: "https://dev.mysql.com/doc/refman/8.4/en/storage-requirements.html",
  },
  "mysql-data-size-optimization": {
    title: "MySQL Reference Manual: Optimizing Data Size",
    url: "https://dev.mysql.com/doc/refman/8.4/en/data-size.html",
  },
  "mysql-char-varchar": {
    title: "MySQL Reference Manual: The CHAR and VARCHAR Types",
    url: "https://dev.mysql.com/doc/refman/8.4/en/char.html",
  },
  "mysql-datetime-timestamp": {
    title: "MySQL Reference Manual: The DATE, DATETIME, and TIMESTAMP Types",
    url: "https://dev.mysql.com/doc/refman/8.4/en/datetime.html",
  },
  "mysql-decimal-data-type": {
    title: "MySQL Reference Manual: Fixed-Point Types DECIMAL and NUMERIC",
    url: "https://dev.mysql.com/doc/refman/8.4/en/fixed-point-types.html",
  },
  "mysql-json-data-type": {
    title: "MySQL Reference Manual: The JSON Data Type",
    url: "https://dev.mysql.com/doc/refman/8.4/en/json.html",
  },
  "mysql-character-sets": {
    title: "MySQL Reference Manual: Character Sets, Collations, Unicode",
    url: "https://dev.mysql.com/doc/refman/8.4/en/charset.html",
  },
  "mysql-type-conversion": {
    title: "MySQL Reference Manual: Type Conversion in Expression Evaluation",
    url: "https://dev.mysql.com/doc/refman/8.4/en/type-conversion.html",
  },
  "mysql-create-table-foreign-keys": {
    title: "MySQL Reference Manual: CREATE TABLE Foreign Keys",
    url: "https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html",
  },
  "mysql-show-create-table": {
    title: "MySQL Reference Manual: SHOW CREATE TABLE Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-create-table.html",
  },
  "mysql-innodb": {
    title: "MySQL Reference Manual: InnoDB Storage Engine",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-storage-engine.html",
  },
  "mysql-innodb-architecture": {
    title: "MySQL Reference Manual: InnoDB Architecture",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-architecture.html",
  },
  "mysql-innodb-limits": {
    title: "MySQL Reference Manual: InnoDB Limits",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-limits.html",
  },
  "mysql-innodb-buffer-pool": {
    title: "MySQL Reference Manual: InnoDB Buffer Pool",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-buffer-pool.html",
  },
  "mysql-innodb-buffer-pool-resize": {
    title: "MySQL Reference Manual: Online InnoDB Buffer Pool Resizing",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-buffer-pool-resize.html",
  },
  "mysql-innodb-buffer-pool-flushing": {
    title: "MySQL Reference Manual: Configuring Buffer Pool Flushing",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-buffer-pool-flushing.html",
  },
  "mysql-innodb-performance-midpoint-insertion": {
    title: "MySQL Reference Manual: Making the Buffer Pool Scan Resistant",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-performance-midpoint_insertion.html",
  },
  "mysql-innodb-performance-read-ahead": {
    title: "MySQL Reference Manual: Configuring InnoDB Buffer Pool Prefetching",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-performance-read_ahead.html",
  },
  "mysql-innodb-preload-buffer-pool": {
    title: "MySQL Reference Manual: Saving and Restoring the Buffer Pool State",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-preload-buffer-pool.html",
  },
  "mysql-information-schema-innodb-buffer-pool-stats": {
    title: "MySQL Reference Manual: The INFORMATION_SCHEMA INNODB_BUFFER_POOL_STATS Table",
    url: "https://dev.mysql.com/doc/refman/8.4/en/information-schema-innodb-buffer-pool-stats-table.html",
  },
  "mysql-innodb-physical-structure": {
    title: "MySQL Reference Manual: InnoDB Row Formats and Physical Structure",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-physical-structure.html",
  },
  "mysql-innodb-row-format": {
    title: "MySQL Reference Manual: InnoDB Row Formats",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-row-format.html",
  },
  "mysql-innodb-best-practices": {
    title: "MySQL Reference Manual: Best Practices for InnoDB Tables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-best-practices.html",
  },
  "mysql-optimizing-innodb-storage-layout": {
    title: "MySQL Reference Manual: Optimizing Storage Layout for InnoDB Tables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/optimizing-innodb-storage-layout.html",
  },
  "mysql-innodb-auto-increment": {
    title: "MySQL Reference Manual: AUTO_INCREMENT Handling in InnoDB",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-auto-increment-handling.html",
  },
  "mysql-innodb-checkpoints": {
    title: "MySQL Reference Manual: InnoDB Checkpoints",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-checkpoints.html",
  },
  "mysql-innodb-doublewrite-buffer": {
    title: "MySQL Reference Manual: InnoDB Doublewrite Buffer",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-doublewrite-buffer.html",
  },
  "mysql-innodb-change-buffer": {
    title: "MySQL Reference Manual: InnoDB Change Buffer",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-change-buffer.html",
  },
  "mysql-show-engine": {
    title: "MySQL Reference Manual: SHOW ENGINE Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-engine.html",
  },
  "mysql-generated-invisible-primary-keys": {
    title: "MySQL Reference Manual: Generated Invisible Primary Keys",
    url: "https://dev.mysql.com/doc/refman/8.4/en/create-table-gipks.html",
  },
  "mysql-sql-require-primary-key": {
    title: "MySQL Reference Manual: sql_require_primary_key System Variable",
    url: "https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_sql_require_primary_key",
  },
  "mysql-optimization": {
    title: "MySQL Reference Manual: Optimization",
    url: "https://dev.mysql.com/doc/refman/8.4/en/optimization.html",
  },
  "mysql-performance-schema": {
    title: "MySQL Reference Manual: MySQL Performance Schema",
    url: "https://dev.mysql.com/doc/refman/8.4/en/performance-schema.html",
  },
  "mysql-performance-schema-statement-tables": {
    title: "MySQL Reference Manual: Performance Schema Statement Event Tables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/performance-schema-statement-tables.html",
  },
  "mysql-slow-query-log": {
    title: "MySQL Reference Manual: The Slow Query Log",
    url: "https://dev.mysql.com/doc/refman/8.4/en/slow-query-log.html",
  },
  "mysql-log-destinations": {
    title: "MySQL Reference Manual: Selecting General Query Log and Slow Query Log Output Destinations",
    url: "https://dev.mysql.com/doc/refman/8.4/en/log-destinations.html",
  },
  "mysql-server-system-variables": {
    title: "MySQL Reference Manual: Server System Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html",
  },
  "mysql-too-many-connections": {
    title: "MySQL Reference Manual: Too Many Connections",
    url: "https://dev.mysql.com/doc/refman/8.4/en/too-many-connections.html",
  },
  "mysql-show-processlist": {
    title: "MySQL Reference Manual: SHOW PROCESSLIST Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-processlist.html",
  },
  "mysql-information-schema-processlist": {
    title: "MySQL Reference Manual: The INFORMATION_SCHEMA PROCESSLIST Table",
    url: "https://dev.mysql.com/doc/refman/8.4/en/information-schema-processlist-table.html",
  },
  "mysql-performance-schema-threads-table": {
    title: "MySQL Reference Manual: The Performance Schema threads Table",
    url: "https://dev.mysql.com/doc/refman/8.4/en/performance-schema-threads-table.html",
  },
  "hikaricp-readme": {
    title: "HikariCP: README and Configuration",
    url: "https://github.com/brettwooldridge/HikariCP",
  },
  "hikaricp-pool-sizing": {
    title: "HikariCP Wiki: About Pool Sizing",
    url: "https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing",
  },
  "aliyun-rds-mysql-connection-pool": {
    title: "阿里云 RDS: 配置 RDS MySQL 连接池",
    url: "https://www.alibabacloud.com/help/zh/doc-detail/146352.html",
  },
  "aliyun-rds-mysql-connection-full": {
    title: "阿里云 RDS: 处理 RDS MySQL 连接数被打满",
    url: "https://www.alibabacloud.com/help/zh/doc-detail/41714.html",
  },
  "mysql-log-file-maintenance": {
    title: "MySQL Reference Manual: Server Log Maintenance",
    url: "https://dev.mysql.com/doc/refman/8.4/en/log-file-maintenance.html",
  },
  "mysql-mysqldumpslow": {
    title: "MySQL Reference Manual: mysqldumpslow",
    url: "https://dev.mysql.com/doc/refman/8.4/en/mysqldumpslow.html",
  },
  "mysql-sys-statement-analysis": {
    title: "MySQL Reference Manual: The statement_analysis and x$statement_analysis Views",
    url: "https://dev.mysql.com/doc/refman/8.4/en/sys-statement-analysis.html",
  },
  "percona-pt-query-digest": {
    title: "Percona Toolkit: pt-query-digest",
    url: "https://docs.percona.com/percona-toolkit/pt-query-digest.html",
  },
  "mysql-backup-recovery": {
    title: "MySQL Reference Manual: Backup and Recovery",
    url: "https://dev.mysql.com/doc/refman/8.4/en/backup-and-recovery.html",
  },
  "mysql-security": {
    title: "MySQL Reference Manual: Security",
    url: "https://dev.mysql.com/doc/refman/8.4/en/security.html",
  },
  "jeremy-cole-innodb-btree": {
    title: "Jeremy Cole: B+Tree index structures in InnoDB",
    url: "https://blog.jcole.us/2013/01/10/btree-index-structures-in-innodb/",
  },
  "planetscale-btree-indexes": {
    title: "PlanetScale: B-trees and database indexes",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/indexes/b-trees",
  },
  "planetscale-secondary-keys": {
    title: "PlanetScale: Secondary keys",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/indexes/secondary-keys",
  },
  "oneuptime-mysql-btree-index": {
    title: "OneUptime: MySQL B-tree Indexes",
    url: "https://oneuptime.com/blog/post/2026-03-31-mysql-btree-indexes/view",
  },
  "xiaolincoding-mysql-index": {
    title: "小林 coding: MySQL 索引",
    url: "https://xiaolincoding.com/mysql/index/index_interview.html",
  },
  "javaguide-mysql-index": {
    title: "JavaGuide: MySQL 索引详解",
    url: "https://javaguide.cn/database/mysql/mysql-index.html",
  },
  "use-the-index-luke-where-clause": {
    title: "Use The Index, Luke: The WHERE Clause",
    url: "https://use-the-index-luke.com/sql/where-clause",
  },
  "planetscale-index-obfuscation": {
    title: "PlanetScale: Index obfuscation",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/queries/index-obfuscation",
  },
  "planetscale-joins-overview": {
    title: "PlanetScale: An overview of joins",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/queries/an-overview-of-joins",
  },
  "planetscale-indexing-joins": {
    title: "PlanetScale: Indexing joins",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/queries/indexing-joins",
  },
  "use-the-index-luke-sql-join": {
    title: "Use The Index, Luke: SQL Joins",
    url: "https://use-the-index-luke.com/sql/join",
  },
  "planetscale-mysql-pagination": {
    title: "PlanetScale: Pagination in MySQL",
    url: "https://planetscale.com/blog/mysql-pagination",
  },
  "planetscale-deferred-joins": {
    title: "PlanetScale: Deferred joins",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/examples/deferred-joins",
  },
  "use-the-index-luke-pagination": {
    title: "Use The Index, Luke: Paging Through Results",
    url: "https://use-the-index-luke.com/sql/partial-results/fetch-next-page",
  },
  "sqlbolt-sql-joins": {
    title: "SQLBolt: Multi-table queries with JOINs",
    url: "https://sqlbolt.com/lesson/select_queries_with_joins",
  },
  "itzhai-mysql-join-optimization": {
    title: "IT宅: 图解 MySQL join 调优原理",
    url: "https://www.itzhai.com/columns/mysql/sql/join.html",
  },
  "tencentcloud-mysql-join-principle": {
    title: "腾讯云开发者社区: MySQL 慢查询优化之联结原理",
    url: "https://cloud.tencent.com/developer/article/1705502",
  },
  "mysql-planetscale-schema-recap": {
    title: "PlanetScale: Schema recap",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/schema/recap",
  },
  "mysql-planetscale-primary-keys": {
    title: "PlanetScale: Primary keys",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/indexes/primary-keys",
  },
  "mysql-planetscale-primary-key-data-types": {
    title: "PlanetScale: Primary key data types",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/indexes/primary-key-data-types",
  },
  "planetscale-uuid-primary-key-mysql": {
    title: "PlanetScale: The problem with using a UUID primary key in MySQL",
    url: "https://planetscale.com/blog/the-problem-with-using-a-uuid-primary-key-in-mysql",
  },
  "mysql-planetscale-datetimes": {
    title: "PlanetScale: Datetimes versus timestamps in MySQL",
    url: "https://planetscale.com/blog/datetimes-vs-timestamps-in-mysql",
  },
  "mysql-planetscale-strings": {
    title: "PlanetScale: Strings",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/schema/strings",
  },
  "mysql-alibaba-java-development-manual": {
    title: "阿里巴巴 Java 开发手册",
    url: "https://github.com/alibaba/p3c",
  },
  "mysql-innodb-index-types": {
    title: "MySQL Reference Manual: Clustered and Secondary Indexes",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html",
  },
  "solarwinds-mysql-indexes": {
    title: "SolarWinds: MySQL Indexes Tutorial",
    url: "https://www.solarwinds.com/blog/mysql-indexes-tutorial",
  },
  "planetscale-covering-indexes": {
    title: "PlanetScale: Covering indexes",
    url: "https://planetscale.com/learn/courses/mysql-for-developers/indexes/covering-indexes",
  },
  "mysql-innodb-multi-versioning": {
    title: "MySQL Reference Manual: InnoDB Multi-Versioning",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html",
  },
  "mysql-innodb-consistent-read": {
    title: "MySQL Reference Manual: Consistent Nonlocking Reads",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-consistent-read.html",
  },
  "mysql-readview-class": {
    title: "MySQL Source Code Documentation: ReadView Class Reference",
    url: "https://dev.mysql.com/doc/dev/mysql-server/latest/classReadView.html",
  },
  "mysql-innodb-undo-logs": {
    title: "MySQL Reference Manual: Undo Logs",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-undo-logs.html",
  },
  "mysql-innodb-undo-tablespaces": {
    title: "MySQL Reference Manual: Undo Tablespaces",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-undo-tablespaces.html",
  },
  "mysql-innodb-purge-configuration": {
    title: "MySQL Reference Manual: Purge Configuration",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-purge-configuration.html",
  },
  "mysql-information-schema-innodb-trx": {
    title: "MySQL Reference Manual: The INFORMATION_SCHEMA INNODB_TRX Table",
    url: "https://dev.mysql.com/doc/refman/8.4/en/information-schema-innodb-trx-table.html",
  },
  "mydbops-innodb-undo-log": {
    title: "Mydbops: An Overview to InnoDB Undo Log",
    url: "https://www.mydbops.com/blog/an-overview-to-innodb-undo-log",
  },
  "percona-innodb-history-length": {
    title: "Percona: Chasing a Hung MySQL Transaction",
    url: "https://www.percona.com/blog/chasing-a-hung-transaction-in-mysql-innodb-history-length-strikes-back/",
  },
  "mysql-innodb-redo-log": {
    title: "MySQL Reference Manual: The InnoDB Redo Log",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html",
  },
  "mysql-innodb-recovery": {
    title: "MySQL Reference Manual: InnoDB Recovery",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-recovery.html",
  },
  "mysql-doxygen-redo-log": {
    title: "MySQL Server Doxygen: InnoDB Redo Log",
    url: "https://dev.mysql.com/doc/dev/mysql-server/latest/PAGE_INNODB_REDO_LOG.html",
  },
  "oracle-mysql-dynamic-redo-log": {
    title: "Oracle MySQL Blog: Dynamic redo log sizing",
    url: "https://blogs.oracle.com/mysql/post/dynamic-innodb-redo-log-in-mysql-80",
  },
  "mysql-innodb-startup-options": {
    title: "MySQL Reference Manual: InnoDB Startup Options and System Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-parameters.html",
  },
  "mysql-server-status-variables": {
    title: "MySQL Reference Manual: Server Status Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/server-status-variables.html",
  },
  "mysql-innodb-redo-log-archiving": {
    title: "MySQL Reference Manual: Redo Log Archiving",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log-archiving.html",
  },
  "percona-mysql-writing-process": {
    title: "Percona: MySQL with diagrams, the writing process",
    url: "https://www.percona.com/blog/mysql-with-diagrams-part-three-the-life-story-of-the-writing-process/",
  },
  "xiaolincoding-mysql-log": {
    title: "小林 coding: MySQL 日志",
    url: "https://xiaolincoding.com/mysql/log/how_update.html",
  },
  "mysql-binary-log": {
    title: "MySQL Reference Manual: The Binary Log",
    url: "https://dev.mysql.com/doc/refman/8.4/en/binary-log.html",
  },
  "mysql-xa-transactions": {
    title: "MySQL Reference Manual: XA Transactions",
    url: "https://dev.mysql.com/doc/refman/8.4/en/xa.html",
  },
  "mysql-binary-log-options": {
    title: "MySQL Reference Manual: Binary Logging Options and Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-options-binary-log.html",
  },
  "mysql-mysqlbinlog": {
    title: "MySQL Reference Manual: mysqlbinlog Utility for Processing Binary Log Files",
    url: "https://dev.mysql.com/doc/refman/8.4/en/mysqlbinlog.html",
  },
  "mysql-mysqlbinlog-backup": {
    title: "MySQL Reference Manual: Using mysqlbinlog to Back Up Binary Log Files",
    url: "https://dev.mysql.com/doc/refman/8.4/en/mysqlbinlog-backup.html",
  },
  "mysql-point-in-time-recovery-binlog": {
    title: "MySQL Reference Manual: Point-in-Time Recovery Using Binary Log",
    url: "https://dev.mysql.com/doc/refman/8.4/en/point-in-time-recovery-binlog.html",
  },
  "mysql-show-binary-log-status": {
    title: "MySQL Reference Manual: SHOW BINARY LOG STATUS Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-binary-log-status.html",
  },
  "mysql-show-binary-logs": {
    title: "MySQL Reference Manual: SHOW BINARY LOGS Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-binary-logs.html",
  },
  "mysql-purge-binary-logs": {
    title: "MySQL Reference Manual: PURGE BINARY LOGS Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/purge-binary-logs.html",
  },
  "mysql-binary-log-transaction-compression": {
    title: "MySQL Reference Manual: Binary Log Transaction Compression",
    url: "https://dev.mysql.com/doc/refman/8.4/en/binary-log-transaction-compression.html",
  },
  "mysql-replication-implementation": {
    title: "MySQL Reference Manual: Replication Implementation Details",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-implementation.html",
  },
  "mysql-source-replica-replication": {
    title: "MySQL Reference Manual: Source to Replica Replication",
    url: "https://dev.mysql.com/doc/refman/8.4/en/group-replication-primary-secondary-replication.html",
  },
  "mysql-semisync-replication": {
    title: "MySQL Reference Manual: Semisynchronous Replication",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-semisync.html",
  },
  "percona-mysql-replication-architecture": {
    title: "Percona: MySQL with Diagrams Part One: Replication Architecture",
    url: "https://www.percona.com/blog/mysql-with-diagrams-part-one-replication-architecture/",
  },
  "mysql-replication-formats": {
    title: "MySQL Reference Manual: Binary Logging Formats",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-formats.html",
  },
  "hackmysql-binary-log-group-commit": {
    title: "HackMySQL: MySQL Binary Log Group Commit",
    url: "https://hackmysql.com/book-4/",
  },
  "mysql-doxygen-binary-log": {
    title: "MySQL Server Doxygen: Binary Log",
    url: "https://dev.mysql.com/doc/dev/mysql-server/8.4.9/group__Binary__Log.html",
  },
  "mysql-binary-log-transaction-dependency": {
    title: "MySQL Reference Manual: Binary Log Transaction Dependency Tracking",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_tracking",
  },
  "mysql-replication-threads": {
    title: "MySQL Reference Manual: Replication Threads",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-threads.html",
  },
  "mysql-replication-threads-monitor-main": {
    title: "MySQL Reference Manual: Monitoring Replication Main Threads",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-threads-monitor-main.html",
  },
  "mysql-replication-options-replica": {
    title: "MySQL Reference Manual: Replica Server Options and Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-options-replica.html",
  },
  "mysql-replication-setup-replicas": {
    title: "MySQL Reference Manual: Setting Up Replicas",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-setup-replicas.html",
  },
  "mysql-replication-source-options": {
    title: "MySQL Reference Manual: Replication Source Options and Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-options-source.html",
  },
  "mysql-change-replication-source-to": {
    title: "MySQL Reference Manual: CHANGE REPLICATION SOURCE TO Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/change-replication-source-to.html",
  },
  "mysql-start-replica": {
    title: "MySQL Reference Manual: START REPLICA Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/start-replica.html",
  },
  "mysql-replica-logs-status": {
    title: "MySQL Reference Manual: Replica Logs and Status",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replica-logs.html",
  },
  "mysql-show-replica-status": {
    title: "MySQL Reference Manual: SHOW REPLICA STATUS Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/show-replica-status.html",
  },
  "mysql-performance-schema-replication-tables": {
    title: "MySQL Reference Manual: Performance Schema Replication Tables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/performance-schema-replication-tables.html",
  },
  "mysql-replication-scaleout": {
    title: "MySQL Reference Manual: Using Replication for Scale-Out",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-solutions-scaleout.html",
  },
  "mysql-router-read-write-splitting": {
    title: "MySQL Router Manual: Read/Write Splitting",
    url: "https://dev.mysql.com/doc/mysql-router/8.4/en/router-read-write-splitting.html",
  },
  "mysql-router-read-write-splitting-config": {
    title: "MySQL Router Manual: Configuring Read/Write Splitting",
    url: "https://dev.mysql.com/doc/mysql-router/8.4/en/router-read-write-splitting-configuration.html",
  },
  "mysql-server-variable-read-only": {
    title: "MySQL Reference Manual: read_only System Variable",
    url: "https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_read_only",
  },
  "mysql-server-variable-super-read-only": {
    title: "MySQL Reference Manual: super_read_only System Variable",
    url: "https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_super_read_only",
  },
  "shardingsphere-readwrite-splitting": {
    title: "Apache ShardingSphere Docs: 读写分离",
    url: "https://shardingsphere.apache.org/document/current/cn/features/readwrite-splitting/",
  },
  "proxysql-read-write-split": {
    title: "ProxySQL Documentation: Read/Write Split HowTo",
    url: "https://proxysql.com/documentation/proxysql-read-write-split-howto/",
  },
  "proxysql-monitor-module": {
    title: "ProxySQL Documentation: MySQL Monitor Module",
    url: "https://proxysql.com/documentation/backend-monitoring/",
  },
  "mysql-replication-delayed": {
    title: "MySQL Reference Manual: Delayed Replication",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-delayed.html",
  },
  "percona-mysql-replication-lag": {
    title: "Percona: How to identify and cure MySQL replication slave lag",
    url: "https://www.percona.com/blog/how-to-identify-and-cure-mysql-replication-slave-lag/",
  },
  "percona-pt-heartbeat": {
    title: "Percona Toolkit Documentation: pt-heartbeat",
    url: "https://docs.percona.com/percona-toolkit/pt-heartbeat.html",
  },
  "google-cloudsql-mysql-replication-lag": {
    title: "Google Cloud SQL for MySQL: Replication lag",
    url: "https://docs.cloud.google.com/sql/docs/mysql/replication/replication-lag",
  },
  "mysql-replication-gtid-lifecycle": {
    title: "MySQL Reference Manual: The GTID Life Cycle",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-lifecycle.html",
  },
  "mysql-replication-gtid-format": {
    title: "MySQL Reference Manual: GTID Format and Storage",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-concepts.html",
  },
  "mysql-replication-gtid-auto-positioning": {
    title: "MySQL Reference Manual: GTID Auto-Positioning",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-auto-positioning.html",
  },
  "mysql-replication-gtid-howto": {
    title: "MySQL Reference Manual: Setting Up Replication Using GTIDs",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-howto.html",
  },
  "mysql-replication-gtid-failover": {
    title: "MySQL Reference Manual: Using GTIDs for Failover and Scaleout",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-failover.html",
  },
  "mysql-replication-gtid-restrictions": {
    title: "MySQL Reference Manual: Restrictions on Replication with GTIDs",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-restrictions.html",
  },
  "mysql-replication-gtid-options": {
    title: "MySQL Reference Manual: Global Transaction ID System Variables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/replication-options-gtids.html",
  },
  "mysql-gtid-functions": {
    title: "MySQL Reference Manual: Functions Used with Global Transaction Identifiers",
    url: "https://dev.mysql.com/doc/refman/8.4/en/gtid-functions.html",
  },
  "oracle-mysql-ha-solutions-gtid": {
    title: "Oracle MySQL HA Solutions: GTID failover diagrams",
    url: "https://www.slideshare.net/matkeep/mysql-ha-solutions",
  },
  "hackmysql-gtid-missing-writes": {
    title: "HackMySQL: MySQL GTID Missing Writes",
    url: "https://hackmysql.com/mysql-gtid-missing-writes/",
  },
  "percona-errant-gtids": {
    title: "Percona: Errant GTIDs Breaking Replication",
    url: "https://www.percona.com/resource/errant-gtids-breaking-replication-how-detect-and-avoid-them/",
  },
  "mysql-workbench-visual-explain": {
    title: "MySQL Workbench Manual: Tutorial: Using Explain to Improve Query Performance",
    url: "https://dev.mysql.com/doc/workbench/en/wb-tutorial-visual-explain-dbt3.html",
  },
  "mysql-explain-output": {
    title: "MySQL Reference Manual: EXPLAIN Output Format",
    url: "https://dev.mysql.com/doc/refman/8.4/en/explain-output.html",
  },
  "mysql-explain-statement": {
    title: "MySQL Reference Manual: EXPLAIN Statement",
    url: "https://dev.mysql.com/doc/refman/8.4/en/explain.html",
  },
  "sqlbolt-sql-tutorial": {
    title: "SQLBolt: Learn SQL",
    url: "https://sqlbolt.com/",
  },
  "use-the-index-luke-mysql-explain": {
    title: "Use The Index, Luke: MySQL and MariaDB execution plan operations",
    url: "https://use-the-index-luke.com/sql/explain-plan/mysql/operations",
  },
  "javaguide-mysql-explain": {
    title: "JavaGuide: MySQL 执行计划分析",
    url: "https://javaguide.cn/database/mysql/mysql-query-execution-plan.html",
  },
  "xiaolincoding-mysql-select": {
    title: "小林 coding: 执行一条 select 语句期间发生了什么",
    url: "https://www.xiaolincoding.com/mysql/base/how_select.html",
  },
  "sobyte-mysql-mvcc": {
    title: "SoByte: MVCC in MySQL",
    url: "https://www.sobyte.net/post/2022-04/mysql-mvcc/",
  },
  "javaguide-mysql-mvcc": {
    title: "JavaGuide: InnoDB 存储引擎对 MVCC 的实现",
    url: "https://javaguide.cn/database/mysql/innodb-implementation-of-mvcc.html",
  },
  "planetscale-database-transactions": {
    title: "PlanetScale: Database Transactions",
    url: "https://planetscale.com/blog/database-transactions",
  },
  "xiaolincoding-mysql-mvcc": {
    title: "小林 coding: 事务隔离级别是怎么实现的？",
    url: "https://xiaolincoding.com/mysql/transaction/mvcc.html",
  },
  "postgresql-transactions": {
    title: "PostgreSQL Docs: Transactions",
    url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
  },
  "mysql-innodb-transaction-model": {
    title: "MySQL Reference Manual: InnoDB Transaction Model",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html",
  },
  "mysql-commit-rollback": {
    title: "MySQL Reference Manual: START TRANSACTION, COMMIT, and ROLLBACK",
    url: "https://dev.mysql.com/doc/refman/8.4/en/commit.html",
  },
  "microsoft-sql-transactions": {
    title: "Microsoft Learn: Transactions",
    url: "https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transactions-transact-sql",
  },
  "spring-transaction-management": {
    title: "Spring Framework Docs: Transaction Management",
    url: "https://docs.spring.io/spring-framework/reference/data-access/transaction.html",
  },
  "spring-declarative-transactions": {
    title: "Spring Framework Docs: Declarative Transaction Management",
    url: "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative.html",
  },
  "postgresql-savepoints": {
    title: "PostgreSQL Docs: SAVEPOINT",
    url: "https://www.postgresql.org/docs/current/sql-savepoint.html",
  },
  "mysql-savepoint": {
    title: "MySQL Reference Manual: SAVEPOINT, ROLLBACK TO SAVEPOINT, and RELEASE SAVEPOINT",
    url: "https://dev.mysql.com/doc/refman/8.4/en/savepoint.html",
  },
  "microsoft-sql-locking-row-versioning": {
    title: "Microsoft Learn: SQL Server transaction locking and row versioning guide",
    url: "https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide",
  },
  "postgresql-explicit-locking": {
    title: "PostgreSQL Docs: Explicit Locking",
    url: "https://www.postgresql.org/docs/current/explicit-locking.html",
  },
  "postgresql-select-locking": {
    title: "PostgreSQL Docs: SELECT locking clauses",
    url: "https://www.postgresql.org/docs/current/sql-select.html",
  },
  "mysql-innodb-locking-reads": {
    title: "MySQL Reference Manual: InnoDB Locking Reads",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking-reads.html",
  },
  "mysql-innodb-locking": {
    title: "MySQL Reference Manual: InnoDB Locking",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",
  },
  "mysql-innodb-locks-set": {
    title: "MySQL Reference Manual: Locks Set by Different SQL Statements in InnoDB",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-locks-set.html",
  },
  "mysql-innodb-phantom-rows": {
    title: "MySQL Reference Manual: Phantom Rows",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-next-key-locking.html",
  },
  "mysql-performance-schema-lock-tables": {
    title: "MySQL Reference Manual: Performance Schema Lock Tables",
    url: "https://dev.mysql.com/doc/refman/8.4/en/performance-schema-lock-tables.html",
  },
  "xiaolincoding-mysql-locking": {
    title: "小林 coding: MySQL 是怎么加锁的？",
    url: "https://xiaolincoding.com/mysql/lock/how_to_lock.html",
  },
  "postgresql-monitoring-locks": {
    title: "PostgreSQL Docs: Monitoring Locks",
    url: "https://www.postgresql.org/docs/current/monitoring-locks.html",
  },
  "mysql-innodb-deadlocks": {
    title: "MySQL Reference Manual: Deadlocks in InnoDB",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-deadlocks.html",
  },
  "mysql-innodb-deadlocks-handling": {
    title: "MySQL Reference Manual: How to Minimize and Handle Deadlocks",
    url: "https://dev.mysql.com/doc/mysql/en/innodb-deadlocks-handling.html",
  },
  "mysql-innodb-deadlock-detection": {
    title: "MySQL Reference Manual: InnoDB Deadlock Detection",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-deadlock-detection.html",
  },
  "microsoft-sql-deadlocks-guide": {
    title: "Microsoft Learn: SQL Server deadlocks guide",
    url: "https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-deadlocks-guide",
  },
  "azure-sql-analyze-prevent-deadlocks": {
    title: "Microsoft Learn: Analyze and prevent deadlocks in Azure SQL Database",
    url: "https://learn.microsoft.com/en-us/azure/azure-sql/database/analyze-prevent-deadlocks?tabs=ring-buffer&view=azuresql-db",
  },
  "wikipedia-wait-for-graph": {
    title: "Wikipedia: Wait-for graph",
    url: "https://en.wikipedia.org/wiki/Wait-for_graph",
  },
  "sobyte-mysql-innodb-deadlock": {
    title: "SoByte: Deadlock detection implementation source code analysis in MySQL",
    url: "https://www.sobyte.net/post/2022-08/mysql-innodb-deadlock/",
  },
  "oneuptime-mysql-locks": {
    title: "OneUptime: MySQL Locks",
    url: "https://oneuptime.com/blog/post/2025-08-20-mysql-locks/view",
  },
  "ibm-acid-properties": {
    title: "IBM Docs: ACID properties of transactions",
    url: "https://www.ibm.com/docs/en/cics-tx/11.1.0?topic=processing-acid-properties-transactions",
  },
  "mysql-acid-model": {
    title: "MySQL Reference Manual: InnoDB and the ACID Model",
    url: "https://dev.mysql.com/doc/refman/8.4/en/mysql-acid.html",
  },
  "postgresql-transaction-isolation": {
    title: "PostgreSQL Docs: Transaction Isolation",
    url: "https://www.postgresql.org/docs/current/transaction-iso.html",
  },
  "mysql-transaction-isolation-levels": {
    title: "MySQL Reference Manual: Transaction Isolation Levels",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html",
  },
  "microsoft-sql-set-isolation": {
    title: "Microsoft Learn: SET TRANSACTION ISOLATION LEVEL",
    url: "https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql",
  },
  "microsoft-sql-snapshot-isolation": {
    title: "Microsoft Learn: Snapshot Isolation in SQL Server",
    url: "https://learn.microsoft.com/en-us/sql/connect/ado-net/sql/snapshot-isolation-sql-server",
  },
  "martin-fowler-unit-of-work": {
    title: "Martin Fowler: Unit of Work",
    url: "https://martinfowler.com/eaaCatalog/unitOfWork.html",
  },
  "oracle-microtx-saga": {
    title: "Oracle MicroTx Docs: Saga Transaction Protocol",
    url: "https://docs.oracle.com/en/database/oracle/transaction-manager-for-microservices/24.2/tmmdg/lra-transaction-protocol.html",
  },
  "oracle-microtx-xa": {
    title: "Oracle MicroTx Docs: XA Transaction Protocol",
    url: "https://docs.oracle.com/en/database/oracle/transaction-manager-for-microservices/24.2/tmmdg/xa-transaction-protocol.html",
  },
  "microservices-saga-pattern": {
    title: "microservices.io: Saga pattern",
    url: "https://microservices.io/patterns/data/saga.html",
  },
  "azure-compensating-transaction": {
    title: "Azure Architecture Center: Compensating Transaction pattern",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction",
  },
  "aws-saga-pattern": {
    title: "AWS Prescriptive Guidance: Saga pattern",
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/saga.html",
  },
  "temporal-saga-compensations": {
    title: "Temporal Docs: Saga pattern with compensations",
    url: "https://docs.temporal.io/develop/java/saga",
  },
  "camunda-saga-pattern": {
    title: "Camunda: Saga Pattern",
    url: "https://camunda.com/blog/2020/06/camunda-bpm-and-microservices-orchestration-part-two-graphical-models/",
  },
  "camunda-compensation-events": {
    title: "Camunda Docs: Compensation Events",
    url: "https://docs.camunda.io/docs/components/modeler/bpmn/compensation-events/",
  },
  "microservices-idempotent-consumer-pattern": {
    title: "microservices.io: Idempotent Consumer pattern",
    url: "https://microservices.io/patterns/communication-style/idempotent-consumer.html",
  },
  "seata-tcc-mode": {
    title: "Apache Seata Docs: TCC Mode",
    url: "https://seata.apache.org/docs/user/mode/tcc/",
  },
  "seata-tcc-design": {
    title: "Apache Seata Docs: TCC Transaction Mode",
    url: "https://seata.apache.org/docs/dev/mode/tcc-mode/",
  },
  "oracle-microtx-tcc": {
    title: "Oracle MicroTx Docs: TCC Transaction Protocol",
    url: "https://docs.oracle.com/en/database/oracle/transaction-manager-for-microservices/24.2/tmmdg/tcc-transaction-protocol.html",
  },
  "ibm-saga-microservices": {
    title: "IBM Developer: Manage microservice transactions with Saga pattern",
    url: "https://developer.ibm.com/articles/use-saga-to-solve-distributed-transaction-management-problems-in-a-microservices-architecture/",
  },
  "rabbitmq-docs": {
    title: "RabbitMQ Documentation",
    url: "https://www.rabbitmq.com/docs",
  },
  "apache-kafka-docs": {
    title: "Apache Kafka Documentation",
    url: "https://kafka.apache.org/documentation/",
  },
  "kafka-design-docs": {
    title: "Apache Kafka Documentation: Design",
    url: "https://kafka.apache.org/documentation/#design",
  },
  "kafka-producer-configs": {
    title: "Apache Kafka Documentation: Producer Configs",
    url: "https://kafka.apache.org/documentation/#producerconfigs",
  },
  "kafka-consumer-configs": {
    title: "Apache Kafka Documentation: Consumer Configs",
    url: "https://kafka.apache.org/documentation/#consumerconfigs",
  },
  "confluent-kafka-consumer": {
    title: "Confluent Docs: Kafka Consumer",
    url: "https://docs.confluent.io/platform/current/clients/consumer.html",
  },
  "confluent-consumer-design": {
    title: "Confluent Docs: Kafka Consumer Design",
    url: "https://docs.confluent.io/kafka/design/consumer-design.html",
  },
  "confluent-kafka-rebalancing": {
    title: "Confluent Learn: Kafka Rebalancing Explained",
    url: "https://www.confluent.io/learn/kafka-rebalancing/",
  },
  "kafka-transactions": {
    title: "Apache Kafka Documentation: Transactions",
    url: "https://kafka.apache.org/documentation/#transactions",
  },
  "confluent-kafka-exactly-once": {
    title: "Confluent Blog: Exactly-Once Semantics Are Possible",
    url: "https://www.confluent.io/blog/simplified-robust-exactly-one-semantics-in-kafka-2-5/",
  },
  "aws-sqs-docs": {
    title: "Amazon SQS Documentation",
    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  },
  "aws-sqs-dead-letter-queues": {
    title: "Amazon SQS Docs: Using dead-letter queues",
    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
  },
  "aws-sqs-standard-fifo": {
    title: "Amazon SQS Docs: Queue types",
    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html",
  },
  "aws-sqs-fifo-exactly-once": {
    title: "Amazon SQS Docs: Exactly-once processing in FIFO queues",
    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html",
  },
  "google-pubsub-message-ordering": {
    title: "Google Cloud Pub/Sub Docs: Ordering messages",
    url: "https://cloud.google.com/pubsub/docs/ordering",
  },
  "google-pubsub-exactly-once": {
    title: "Google Cloud Pub/Sub Docs: Exactly-once delivery",
    url: "https://cloud.google.com/pubsub/docs/exactly-once-delivery",
  },
  "google-pubsub-dead-letter-topics": {
    title: "Google Cloud Pub/Sub Docs: Dead-letter topics",
    url: "https://cloud.google.com/pubsub/docs/dead-letter-topics",
  },
  "azure-servicebus-dead-letter-queues": {
    title: "Microsoft Learn: Service Bus dead-letter queues",
    url: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
  },
  "azure-servicebus-message-transfers": {
    title: "Microsoft Learn: Service Bus messages, payloads, and serialization",
    url: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messages-payloads",
  },
  "cloudevents-spec": {
    title: "CloudEvents Specification",
    url: "https://github.com/cloudevents/spec",
  },
  "cloudevents-distributed-tracing": {
    title: "CloudEvents Extension: Distributed Tracing",
    url: "https://github.com/cloudevents/spec/blob/main/cloudevents/extensions/distributed-tracing.md",
  },
  "aws-eventbridge-docs": {
    title: "Amazon EventBridge Documentation",
    url: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html",
  },
  "google-event-driven-architecture": {
    title: "Google Cloud: Event-driven architecture",
    url: "https://cloud.google.com/eventarc/docs/event-driven-architectures",
  },
  "asyncapi-docs": {
    title: "AsyncAPI Documentation",
    url: "https://www.asyncapi.com/docs",
  },
  "asyncapi-message-docs": {
    title: "AsyncAPI Specification: Message Object",
    url: "https://www.asyncapi.com/docs/reference/specification/latest#messageObject",
  },
  "martin-fowler-domain-event": {
    title: "Martin Fowler: Domain Event",
    url: "https://martinfowler.com/eaaDev/DomainEvent.html",
  },
  "microsoft-domain-events": {
    title: "Microsoft Learn: Domain events design and implementation",
    url: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation",
  },
  "microsoft-integration-events": {
    title: "Microsoft Learn: Integration events in microservices",
    url: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications",
  },
  "udi-dahan-domain-events": {
    title: "Udi Dahan: Domain Events",
    url: "https://udidahan.com/2009/06/14/domain-events-salvation/",
  },
  "docker-docs": {
    title: "Docker Docs",
    url: "https://docs.docker.com/",
  },
  "docker-overview-docs": {
    title: "Docker Docs: Docker overview",
    url: "https://docs.docker.com/get-started/docker-overview/",
  },
  "docker-engine-docs": {
    title: "Docker Docs: Docker Engine",
    url: "https://docs.docker.com/engine/",
  },
  "docker-engine-api-docs": {
    title: "Docker Docs: Engine API",
    url: "https://docs.docker.com/reference/api/engine/",
  },
  "docker-cli-reference": {
    title: "Docker Docs: Docker CLI reference",
    url: "https://docs.docker.com/reference/cli/docker/",
  },
  "docker-cli-commandline": {
    title: "Docker Docs: Use the Docker command line",
    url: "https://docs.docker.com/engine/reference/commandline/cli/",
  },
  "docker-cli-info": {
    title: "Docker Docs: docker system info",
    url: "https://docs.docker.com/reference/cli/docker/system/info/",
  },
  "docker-cli-system-df": {
    title: "Docker Docs: docker system df",
    url: "https://docs.docker.com/reference/cli/docker/system/df/",
  },
  "docker-system-prune": {
    title: "Docker Docs: docker system prune",
    url: "https://docs.docker.com/reference/cli/docker/system/prune/",
  },
  "docker-builder-prune": {
    title: "Docker Docs: docker builder prune",
    url: "https://docs.docker.com/reference/cli/docker/builder/prune/",
  },
  "docker-image-prune": {
    title: "Docker Docs: docker image prune",
    url: "https://docs.docker.com/reference/cli/docker/image/prune/",
  },
  "docker-system-events": {
    title: "Docker Docs: docker system events",
    url: "https://docs.docker.com/reference/cli/docker/system/events/",
  },
  "docker-context-docs": {
    title: "Docker Docs: Docker contexts",
    url: "https://docs.docker.com/engine/context/working-with-contexts/",
  },
  "docker-compose-cli-docs": {
    title: "Docker Docs: docker compose",
    url: "https://docs.docker.com/reference/cli/docker/compose/",
  },
  "docker-compose-docs": {
    title: "Docker Docs: Docker Compose",
    url: "https://docs.docker.com/compose/",
  },
  "docker-compose-application-model": {
    title: "Docker Docs: How Compose works",
    url: "https://docs.docker.com/compose/intro/compose-application-model/",
  },
  "docker-compose-file-reference": {
    title: "Docker Docs: Compose file reference",
    url: "https://docs.docker.com/compose/compose-file/",
  },
  "docker-compose-interpolation": {
    title: "Docker Docs: Compose file interpolation",
    url: "https://docs.docker.com/reference/compose-file/interpolation/",
  },
  "docker-compose-merge": {
    title: "Docker Docs: Merge Compose files",
    url: "https://docs.docker.com/compose/how-tos/multiple-compose-files/merge/",
  },
  "docker-compose-include": {
    title: "Docker Docs: Include Compose files",
    url: "https://docs.docker.com/reference/compose-file/include/",
  },
  "docker-compose-up-cli": {
    title: "Docker Docs: docker compose up",
    url: "https://docs.docker.com/reference/cli/docker/compose/up/",
  },
  "docker-compose-production": {
    title: "Docker Docs: Use Compose in production",
    url: "https://docs.docker.com/compose/how-tos/production/",
  },
  "docker-compose-config-cli": {
    title: "Docker Docs: docker compose config",
    url: "https://docs.docker.com/reference/cli/docker/compose/config/",
  },
  "docker-compose-pull-cli": {
    title: "Docker Docs: docker compose pull",
    url: "https://docs.docker.com/reference/cli/docker/compose/pull/",
  },
  "docker-compose-restart-cli": {
    title: "Docker Docs: docker compose restart",
    url: "https://docs.docker.com/reference/cli/docker/compose/restart/",
  },
  "docker-compose-profiles": {
    title: "Docker Docs: Using profiles with Compose",
    url: "https://docs.docker.com/compose/how-tos/profiles/",
  },
  "docker-compose-startup-order": {
    title: "Docker Docs: Control startup and shutdown order in Compose",
    url: "https://docs.docker.com/compose/how-tos/startup-order/",
  },
  "docker-compose-networking": {
    title: "Docker Docs: Compose networking",
    url: "https://docs.docker.com/compose/how-tos/networking/",
  },
  "docker-compose-networks-reference": {
    title: "Docker Docs: Compose networks reference",
    url: "https://docs.docker.com/reference/compose-file/networks/",
  },
  "docker-login-cli": {
    title: "Docker Docs: docker login",
    url: "https://docs.docker.com/reference/cli/docker/login/",
  },
  "docker-run-cli": {
    title: "Docker Docs: docker container run",
    url: "https://docs.docker.com/reference/cli/docker/container/run/",
  },
  "docker-run-containers-docs": {
    title: "Docker Docs: Running containers",
    url: "https://docs.docker.com/engine/containers/run/",
  },
  "docker-engine-security": {
    title: "Docker Docs: Docker Engine security",
    url: "https://docs.docker.com/engine/security/",
  },
  "docker-rootless-mode": {
    title: "Docker Docs: Rootless mode",
    url: "https://docs.docker.com/engine/security/rootless/",
  },
  "docker-seccomp-profile": {
    title: "Docker Docs: Seccomp security profiles for Docker",
    url: "https://docs.docker.com/engine/security/seccomp/",
  },
  "docker-apparmor-profile": {
    title: "Docker Docs: AppArmor security profiles for Docker",
    url: "https://docs.docker.com/engine/security/apparmor/",
  },
  "owasp-docker-security-cheatsheet": {
    title: "OWASP Cheat Sheet Series: Docker Security",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html",
  },
  "docker-multi-service-container": {
    title: "Docker Docs: Run multiple processes in a container",
    url: "https://docs.docker.com/engine/containers/multi-service_container/",
  },
  "docker-restart-policy-docs": {
    title: "Docker Docs: Start containers automatically",
    url: "https://docs.docker.com/engine/containers/start-containers-automatically/",
  },
  "docker-port-publishing-docs": {
    title: "Docker Docs: Port publishing and mapping",
    url: "https://docs.docker.com/engine/network/port-publishing/",
  },
  "docker-packet-filtering-firewalls": {
    title: "Docker Docs: Packet filtering and firewalls",
    url: "https://docs.docker.com/engine/network/packet-filtering-firewalls/",
  },
  "docker-publishing-ports-guide": {
    title: "Docker Docs: Publishing and exposing ports",
    url: "https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/",
  },
  "iximiuz-docker-port-publishing": {
    title: "iximiuz: How To Publish Container Ports with Docker",
    url: "https://iximiuz.com/en/posts/docker-publish-container-ports/",
  },
  "iximiuz-multiple-containers-same-port": {
    title: "iximiuz: Multiple Containers On The Same Port With a Reverse Proxy",
    url: "https://iximiuz.com/en/posts/multiple-containers-same-port-reverse-proxy/",
  },
  "dockerlabs-bridge-network-architecture": {
    title: "DockerLabs: Docker Bridge Network Driver Architecture",
    url: "https://dockerlabs.collabnix.com/networking/concepts/05-bridge-networks.html",
  },
  "iximiuz-container-networking": {
    title: "iximiuz Labs: Container Networking From Scratch",
    url: "https://labs.iximiuz.com/tutorials/container-networking-from-scratch",
  },
  "docker-cli-docs": {
    title: "Docker Docs: Use the Docker command line",
    url: "https://docs.docker.com/engine/reference/commandline/cli/",
  },
  "docker-storage-volumes": {
    title: "Docker Docs: Volumes",
    url: "https://docs.docker.com/engine/storage/volumes/",
  },
  "docker-storage-bind-mounts": {
    title: "Docker Docs: Bind mounts",
    url: "https://docs.docker.com/engine/storage/bind-mounts/",
  },
  "docker-storage-tmpfs-mounts": {
    title: "Docker Docs: tmpfs mounts",
    url: "https://docs.docker.com/engine/storage/tmpfs/",
  },
  "docker-compose-env-vars": {
    title: "Docker Docs: Environment variables in Compose",
    url: "https://docs.docker.com/compose/environment-variables/",
  },
  "docker-compose-set-env-vars": {
    title: "Docker Docs: Set environment variables within your container's environment",
    url: "https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/",
  },
  "docker-compose-env-precedence": {
    title: "Docker Docs: Environment variables precedence in Compose",
    url: "https://docs.docker.com/compose/how-tos/environment-variables/envvars-precedence/",
  },
  "docker-compose-variable-interpolation": {
    title: "Docker Docs: Variable interpolation in Compose",
    url: "https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/",
  },
  "docker-compose-services-reference": {
    title: "Docker Docs: Compose services reference",
    url: "https://docs.docker.com/reference/compose-file/services/",
  },
  "docker-compose-build-reference": {
    title: "Docker Docs: Compose Build Specification",
    url: "https://docs.docker.com/reference/compose-file/build/",
  },
  "docker-compose-build-cli": {
    title: "Docker Docs: docker compose build",
    url: "https://docs.docker.com/reference/cli/docker/compose/build/",
  },
  "docker-compose-volumes-reference": {
    title: "Docker Docs: Compose volumes reference",
    url: "https://docs.docker.com/reference/compose-file/volumes/",
  },
  "docker-compose-down-cli": {
    title: "Docker Docs: docker compose down",
    url: "https://docs.docker.com/reference/cli/docker/compose/down/",
  },
  "docker-secrets-docs": {
    title: "Docker Docs: Secrets",
    url: "https://docs.docker.com/engine/swarm/secrets/",
  },
  "docker-container-create-cli": {
    title: "Docker Docs: docker container create",
    url: "https://docs.docker.com/reference/cli/docker/container/create/",
  },
  "docker-container-ls-cli": {
    title: "Docker Docs: docker container ls",
    url: "https://docs.docker.com/reference/cli/docker/container/ls/",
  },
  "docker-container-start-cli": {
    title: "Docker Docs: docker container start",
    url: "https://docs.docker.com/reference/cli/docker/container/start/",
  },
  "docker-container-stop-cli": {
    title: "Docker Docs: docker container stop",
    url: "https://docs.docker.com/reference/cli/docker/container/stop/",
  },
  "docker-container-restart-cli": {
    title: "Docker Docs: docker container restart",
    url: "https://docs.docker.com/reference/cli/docker/container/restart/",
  },
  "docker-container-update-cli": {
    title: "Docker Docs: docker container update",
    url: "https://docs.docker.com/reference/cli/docker/container/update/",
  },
  "docker-container-pause-cli": {
    title: "Docker Docs: docker container pause",
    url: "https://docs.docker.com/reference/cli/docker/container/pause/",
  },
  "docker-container-kill-cli": {
    title: "Docker Docs: docker container kill",
    url: "https://docs.docker.com/reference/cli/docker/container/kill/",
  },
  "docker-container-wait-cli": {
    title: "Docker Docs: docker container wait",
    url: "https://docs.docker.com/reference/cli/docker/container/wait/",
  },
  "docker-container-rm-cli": {
    title: "Docker Docs: docker container rm",
    url: "https://docs.docker.com/reference/cli/docker/container/rm/",
  },
  "docker-container-exec-cli": {
    title: "Docker Docs: docker container exec",
    url: "https://docs.docker.com/reference/cli/docker/container/exec/",
  },
  "docker-container-logs-cli": {
    title: "Docker Docs: docker container logs",
    url: "https://docs.docker.com/reference/cli/docker/container/logs/",
  },
  "docker-logging-overview": {
    title: "Docker Docs: View container logs",
    url: "https://docs.docker.com/engine/logging/",
  },
  "docker-logging-configure": {
    title: "Docker Docs: Configure logging drivers",
    url: "https://docs.docker.com/engine/logging/configure/",
  },
  "docker-json-file-logging-driver": {
    title: "Docker Docs: JSON File logging driver",
    url: "https://docs.docker.com/engine/logging/drivers/json-file/",
  },
  "docker-local-logging-driver": {
    title: "Docker Docs: Local file logging driver",
    url: "https://docs.docker.com/engine/logging/drivers/local/",
  },
  "docker-dual-logging": {
    title: "Docker Docs: Use docker logs with remote logging drivers",
    url: "https://docs.docker.com/engine/logging/dual-logging/",
  },
  "docker-compose-logs-cli": {
    title: "Docker Docs: docker compose logs",
    url: "https://docs.docker.com/reference/cli/docker/compose/logs/",
  },
  "docker-container-port-cli": {
    title: "Docker Docs: docker container port",
    url: "https://docs.docker.com/reference/cli/docker/container/port/",
  },
  "docker-inspect-cli": {
    title: "Docker Docs: docker inspect",
    url: "https://docs.docker.com/reference/cli/docker/inspect/",
  },
  "docker-container-inspect-cli": {
    title: "Docker Docs: docker container inspect",
    url: "https://docs.docker.com/reference/cli/docker/container/inspect/",
  },
  "docker-formatting-docs": {
    title: "Docker Docs: Format command and log output",
    url: "https://docs.docker.com/go/formatting/",
  },
  "docker-volume-inspect-cli": {
    title: "Docker Docs: docker volume inspect",
    url: "https://docs.docker.com/reference/cli/docker/volume/inspect/",
  },
  "docker-volume-docs": {
    title: "Docker Docs: Volumes",
    url: "https://docs.docker.com/engine/storage/volumes/",
  },
  "docker-volume-create-cli": {
    title: "Docker Docs: docker volume create",
    url: "https://docs.docker.com/reference/cli/docker/volume/create/",
  },
  "docker-volume-ls-cli": {
    title: "Docker Docs: docker volume ls",
    url: "https://docs.docker.com/reference/cli/docker/volume/ls/",
  },
  "docker-volume-prune-cli": {
    title: "Docker Docs: docker volume prune",
    url: "https://docs.docker.com/reference/cli/docker/volume/prune/",
  },
  "docker-network-cli": {
    title: "Docker Docs: docker network",
    url: "https://docs.docker.com/reference/cli/docker/network/",
  },
  "docker-daemon-docs": {
    title: "Docker Docs: dockerd",
    url: "https://docs.docker.com/reference/cli/dockerd/",
  },
  "docker-containerd-docs": {
    title: "containerd Docs: Getting started",
    url: "https://containerd.io/docs/getting-started/",
  },
  "containerd-project": {
    title: "containerd: An industry-standard container runtime",
    url: "https://containerd.io/",
  },
  "containerd-namespaces": {
    title: "containerd Docs: Namespaces",
    url: "https://github.com/containerd/containerd/blob/main/docs/namespaces.md",
  },
  "opencontainers-runc": {
    title: "Open Containers: runc",
    url: "https://github.com/opencontainers/runc",
  },
  "kubernetes-container-runtimes": {
    title: "Kubernetes Docs: Container Runtimes",
    url: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
  },
  "kubernetes-cri": {
    title: "Kubernetes Blog: Introducing CRI",
    url: "https://kubernetes.io/blog/2016/12/container-runtime-interface-cri-in-kubernetes/",
  },
  "docker-practice-architecture": {
    title: "Docker 从入门到实践: Docker 架构",
    url: "https://yeasy.gitbook.io/docker_practice/introduction/what",
  },
  "docker-practice-compose": {
    title: "Docker 从入门到实践: Docker Compose",
    url: "https://yeasy.gitbook.io/docker_practice/compose",
  },
  "docker-container-concepts": {
    title: "Docker Docs: What is a container?",
    url: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
  },
  "docker-container-resource": {
    title: "Docker: What is a Container?",
    url: "https://www.docker.com/resources/what-container/",
  },
  "docker-image-concepts": {
    title: "Docker Docs: What is an image?",
    url: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/",
  },
  "docker-image-inspect-cli": {
    title: "Docker Docs: docker image inspect",
    url: "https://docs.docker.com/reference/cli/docker/image/inspect/",
  },
  "docker-image-ls-cli": {
    title: "Docker Docs: docker image ls",
    url: "https://docs.docker.com/reference/cli/docker/image/ls/",
  },
  "docker-image-history-cli": {
    title: "Docker Docs: docker image history",
    url: "https://docs.docker.com/reference/cli/docker/image/history/",
  },
  "docker-pull-cli": {
    title: "Docker Docs: docker image pull",
    url: "https://docs.docker.com/reference/cli/docker/image/pull/",
  },
  "docker-storage-drivers": {
    title: "Docker Docs: Storage drivers",
    url: "https://docs.docker.com/engine/storage/drivers/",
  },
  "docker-overlay2-driver": {
    title: "Docker Docs: OverlayFS storage driver",
    url: "https://docs.docker.com/engine/storage/drivers/overlayfs-driver/",
  },
  "docker-select-storage-driver": {
    title: "Docker Docs: Select a storage driver",
    url: "https://docs.docker.com/engine/storage/drivers/select-storage-driver/",
  },
  "docker-container-diff-cli": {
    title: "Docker Docs: docker container diff",
    url: "https://docs.docker.com/reference/cli/docker/container/diff/",
  },
  "docker-container-commit-cli": {
    title: "Docker Docs: docker container commit",
    url: "https://docs.docker.com/reference/cli/docker/container/commit/",
  },
  "docker-container-cp-cli": {
    title: "Docker Docs: docker container cp",
    url: "https://docs.docker.com/reference/cli/docker/container/cp/",
  },
  "docker-practice-unionfs": {
    title: "Docker 从入门到实践: 联合文件系统",
    url: "https://docker-practice.github.io/zh-cn/underly/ufs.html",
  },
  "docker-build-cache": {
    title: "Docker Docs: Build cache",
    url: "https://docs.docker.com/build/cache/",
  },
  "dockerfile-overview": {
    title: "Docker Docs: Dockerfile overview",
    url: "https://docs.docker.com/build/building/packaging/",
  },
  "docker-build-cache-invalidation": {
    title: "Docker Docs: Build cache invalidation",
    url: "https://docs.docker.com/build/cache/invalidation/",
  },
  "oci-image-spec": {
    title: "Open Container Initiative: Image Specification",
    url: "https://github.com/opencontainers/image-spec",
  },
  "docker-image-tag-cli": {
    title: "Docker Docs: docker image tag",
    url: "https://docs.docker.com/reference/cli/docker/image/tag/",
  },
  "docker-image-pull-cli": {
    title: "Docker Docs: docker image pull",
    url: "https://docs.docker.com/reference/cli/docker/image/pull/",
  },
  "docker-image-push-cli": {
    title: "Docker Docs: docker image push",
    url: "https://docs.docker.com/reference/cli/docker/image/push/",
  },
  "docker-image-digests": {
    title: "Docker Docs: Image digests",
    url: "https://docs.docker.com/dhi/core-concepts/digests/",
  },
  "docker-content-trust": {
    title: "Docker Docs: Content trust in Docker",
    url: "https://docs.docker.com/engine/security/trust/",
  },
  "oci-descriptor-spec": {
    title: "OCI Image Spec: Descriptor",
    url: "https://specs.opencontainers.org/image-spec/descriptor/",
  },
  "docker-hub-images": {
    title: "Docker Docs: Repositories and images",
    url: "https://docs.docker.com/docker-hub/repos/",
  },
  "docker-hub-docs": {
    title: "Docker Docs: Docker Hub",
    url: "https://docs.docker.com/docker-hub/",
  },
  "docker-hub-usage-limits": {
    title: "Docker Docs: Docker Hub usage and limits",
    url: "https://docs.docker.com/docker-hub/usage/storage/",
  },
  "docker-hub-access-management": {
    title: "Docker Docs: Docker Hub access management",
    url: "https://docs.docker.com/docker-hub/repos/manage/access/",
  },
  "docker-hub-trusted-content": {
    title: "Docker Docs: Docker Hub trusted content",
    url: "https://docs.docker.com/docker-hub/image-library/trusted-content/",
  },
  "docker-personal-access-tokens": {
    title: "Docker Docs: Personal access tokens",
    url: "https://docs.docker.com/security/for-developers/access-tokens/",
  },
  "docker-hub-access-tokens": {
    title: "Docker Docs: Docker Hub personal access tokens",
    url: "https://docs.docker.com/docker-hub/access-tokens/",
  },
  "cncf-distribution-docs": {
    title: "CNCF Distribution: Registry",
    url: "https://distribution.github.io/distribution/",
  },
  "cncf-distribution-token-auth": {
    title: "CNCF Distribution: Token authentication",
    url: "https://distribution.github.io/distribution/spec/auth/token/",
  },
  "cncf-distribution-token-scope": {
    title: "CNCF Distribution: Token scope and access",
    url: "https://distribution.github.io/distribution/spec/auth/scope/",
  },
  "cncf-distribution-deploy": {
    title: "CNCF Distribution: Deploy a registry server",
    url: "https://distribution.github.io/distribution/about/deploying/",
  },
  "cncf-distribution-config": {
    title: "CNCF Distribution: Configuring a registry",
    url: "https://distribution.github.io/distribution/about/configuration/",
  },
  "cncf-distribution-gc": {
    title: "CNCF Distribution: Garbage collection",
    url: "https://distribution.github.io/distribution/about/garbage-collection/",
  },
  "docker-registry-certs": {
    title: "Docker Docs: Verify repository client with certificates",
    url: "https://docs.docker.com/engine/security/certificates/",
  },
  "docker-scout-docs": {
    title: "Docker Docs: Docker Scout",
    url: "https://docs.docker.com/scout/",
  },
  "docker-scout-base-images": {
    title: "Docker Docs: Docker Scout base image recommendations",
    url: "https://docs.docker.com/scout/policy/#up-to-date-base-images",
  },
  "docker-multistage-builds": {
    title: "Docker Docs: Multi-stage builds",
    url: "https://docs.docker.com/build/building/multi-stage/",
  },
  "depot-docker-multistage": {
    title: "Depot: Docker Multi-Stage Builds",
    url: "https://depot.dev/blog/docker-multi-stage-builds",
  },
  "dockerfilegraph": {
    title: "dockerfilegraph: Visualize your multi-stage Dockerfiles",
    url: "https://github.com/patrickhoefler/dockerfilegraph",
  },
  "docker-build-context": {
    title: "Docker Docs: Build context",
    url: "https://docs.docker.com/build/building/context/",
  },
  "docker-buildkit-docs": {
    title: "Docker Docs: BuildKit",
    url: "https://docs.docker.com/build/buildkit/",
  },
  "docker-build-overview": {
    title: "Docker Docs: Docker Build overview",
    url: "https://docs.docker.com/build/concepts/overview/",
  },
  "docker-builders": {
    title: "Docker Docs: Builders",
    url: "https://docs.docker.com/build/builders/",
  },
  "docker-build-drivers": {
    title: "Docker Docs: Build drivers",
    url: "https://docs.docker.com/build/builders/drivers/",
  },
  "docker-multi-platform-builds": {
    title: "Docker Docs: Multi-platform builds",
    url: "https://docs.docker.com/build/building/multi-platform/",
  },
  "docker-build-cache-optimize": {
    title: "Docker Docs: Optimize cache usage in builds",
    url: "https://docs.docker.com/build/cache/optimize/",
  },
  "docker-cache-backends": {
    title: "Docker Docs: Cache storage backends",
    url: "https://docs.docker.com/build/cache/backends/",
  },
  "docker-buildx-build-cli": {
    title: "Docker Docs: docker buildx build",
    url: "https://docs.docker.com/reference/cli/docker/buildx/build/",
  },
  "docker-build-secrets": {
    title: "Docker Docs: Build secrets",
    url: "https://docs.docker.com/build/building/secrets/",
  },
  "docker-build-variables": {
    title: "Docker Docs: Build variables",
    url: "https://docs.docker.com/build/building/variables/",
  },
  "dockerfile-best-practices": {
    title: "Docker Docs: Dockerfile best practices",
    url: "https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/",
  },
  "docker-official-images": {
    title: "Docker Docs: Docker Official Images",
    url: "https://docs.docker.com/docker-hub/image-library/",
  },
  "docker-scratch-image": {
    title: "Docker Hub: scratch Official Image",
    url: "https://hub.docker.com/_/scratch",
  },
  "docker-hardened-images": {
    title: "Docker Docs: Docker Hardened Images",
    url: "https://docs.docker.com/dhi/",
  },
  "distroless-images": {
    title: "GoogleContainerTools: Distroless images",
    url: "https://github.com/GoogleContainerTools/distroless",
  },
  "oci-runtime-spec": {
    title: "Open Container Initiative: Runtime Specification",
    url: "https://github.com/opencontainers/runtime-spec",
  },
  "linux-man-pages-namespaces": {
    title: "Linux man-pages: namespaces(7)",
    url: "https://man7.org/linux/man-pages/man7/namespaces.7.html",
  },
  "linux-man-pages-user-namespaces": {
    title: "Linux man-pages: user_namespaces(7)",
    url: "https://man7.org/linux/man-pages/man7/user_namespaces.7.html",
  },
  "linux-man-pages-network-namespaces": {
    title: "Linux man-pages: network_namespaces(7)",
    url: "https://man7.org/linux/man-pages/man7/network_namespaces.7.html",
  },
  "docker-userns-remap": {
    title: "Docker Docs: Isolate containers with a user namespace",
    url: "https://docs.docker.com/engine/security/userns-remap/",
  },
  "docker-resource-constraints": {
    title: "Docker Docs: Resource constraints",
    url: "https://docs.docker.com/engine/containers/resource_constraints/",
  },
  "enccs-containers-cgroups": {
    title: "ENCCS: Namespaces and cgroups",
    url: "https://enccs.github.io/containers/namespc-cgroup/",
  },
  "nginx-namespaces-cgroups": {
    title: "NGINX Blog: What Are Namespaces and cgroups, and How Do They Work?",
    url: "https://www.nginx.com/blog/what-are-namespaces-cgroups-how-do-they-work/",
  },
  "docker-runtime-metrics": {
    title: "Docker Docs: Runtime metrics",
    url: "https://docs.docker.com/engine/containers/runmetrics/",
  },
  "docker-container-stats": {
    title: "Docker Docs: docker container stats",
    url: "https://docs.docker.com/reference/cli/docker/container/stats/",
  },
  "linux-cfs-bandwidth": {
    title: "Linux Kernel Docs: CFS Bandwidth Control",
    url: "https://www.kernel.org/doc/html/latest/scheduler/sched-bwc.html",
  },
  "batey-cgroup-cpu-quota": {
    title: "Christopher Batey: CPU Quota for Docker and Kubernetes",
    url: "https://batey.info/cgroup-cpu-quota-for-docker.html",
  },
  "kubeblog-cpu-throttling-image": {
    title: "Kubeblog: CPU limits and throttling diagram",
    url: "https://kubeblog.com/wp-content/uploads/2023/10/running-throttled.png",
  },
  "linux-cgroup-v2": {
    title: "Linux Kernel Docs: Control Group v2",
    url: "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html",
  },
  "kubernetes-cgroup-v2": {
    title: "Kubernetes Docs: About cgroup v2",
    url: "https://kubernetes.io/docs/concepts/architecture/cgroups/",
  },
  "docker-network-docs": {
    title: "Docker Docs: Networking overview",
    url: "https://docs.docker.com/engine/network/",
  },
  "docker-dns-services": {
    title: "Docker Docs: DNS services",
    url: "https://docs.docker.com/engine/network/#dns-services",
  },
  "docker-network-drivers": {
    title: "Docker Docs: Network drivers",
    url: "https://docs.docker.com/engine/network/drivers/",
  },
  "docker-bridge-network-docs": {
    title: "Docker Docs: Bridge network driver",
    url: "https://docs.docker.com/engine/network/drivers/bridge/",
  },
  "docker-host-network-docs": {
    title: "Docker Docs: Host network driver",
    url: "https://docs.docker.com/engine/network/drivers/host/",
  },
  "docker-none-network-docs": {
    title: "Docker Docs: None network driver",
    url: "https://docs.docker.com/engine/network/drivers/none/",
  },
  "docker-overlay-network-docs": {
    title: "Docker Docs: Overlay network driver",
    url: "https://docs.docker.com/engine/network/drivers/overlay/",
  },
  "docker-swarm-networking": {
    title: "Docker Docs: Manage swarm service networks",
    url: "https://docs.docker.com/engine/swarm/networking/",
  },
  "docker-network-create-cli": {
    title: "Docker Docs: docker network create",
    url: "https://docs.docker.com/reference/cli/docker/network/create/",
  },
  "docker-network-inspect-cli": {
    title: "Docker Docs: docker network inspect",
    url: "https://docs.docker.com/reference/cli/docker/network/inspect/",
  },
  "docker-network-connect-cli": {
    title: "Docker Docs: docker network connect",
    url: "https://docs.docker.com/reference/cli/docker/network/connect/",
  },
  "docker-network-disconnect-cli": {
    title: "Docker Docs: docker network disconnect",
    url: "https://docs.docker.com/reference/cli/docker/network/disconnect/",
  },
  "docker-swarm-init-cli": {
    title: "Docker Docs: docker swarm init",
    url: "https://docs.docker.com/reference/cli/docker/swarm/init/",
  },
  "docker-service-create-cli": {
    title: "Docker Docs: docker service create",
    url: "https://docs.docker.com/reference/cli/docker/service/create/",
  },
  "docker-service-update-cli": {
    title: "Docker Docs: docker service update",
    url: "https://docs.docker.com/reference/cli/docker/service/update/",
  },
  "docker-service-rollback-cli": {
    title: "Docker Docs: docker service rollback",
    url: "https://docs.docker.com/reference/cli/docker/service/rollback/",
  },
  "docker-swarm-services-docs": {
    title: "Docker Docs: Deploy services to a swarm",
    url: "https://docs.docker.com/engine/swarm/services/",
  },
  "docker-practice-swarm-rolling-update": {
    title: "Docker 从入门到实践: Swarm mode 与滚动升级",
    url: "https://docker-practice.github.io/zh-cn/swarm_mode/rolling_update.html",
  },
  "docker-storage-docs": {
    title: "Docker Docs: Storage",
    url: "https://docs.docker.com/engine/storage/",
  },
  "dockerfile-reference": {
    title: "Dockerfile reference",
    url: "https://docs.docker.com/reference/dockerfile/",
  },
  "dockerfile-json-args-recommended": {
    title: "Docker Docs: JSONArgsRecommended build check",
    url: "https://docs.docker.com/reference/build-checks/json-args-recommended/",
  },
  "dockerfile-multiple-instructions": {
    title: "Docker Docs: MultipleInstructionsDisallowed build check",
    url: "https://docs.docker.com/reference/build-checks/multiple-instructions-disallowed/",
  },
  "dockerfile-secrets-used-in-arg-or-env": {
    title: "Docker Docs: SecretsUsedInArgOrEnv build check",
    url: "https://docs.docker.com/reference/build-checks/secrets-used-in-arg-or-env/",
  },
  "dockerfile-workdir-relative-path": {
    title: "Docker Docs: WorkdirRelativePath build check",
    url: "https://docs.docker.com/reference/build-checks/workdir-relative-path/",
  },
  "kubernetes-docs": {
    title: "Kubernetes Documentation",
    url: "https://kubernetes.io/docs/home/",
  },
  "opentelemetry-docs": {
    title: "OpenTelemetry Documentation",
    url: "https://opentelemetry.io/docs/",
  },
  "openai-agents-guide": {
    title: "OpenAI Platform Docs: Agents",
    url: "https://platform.openai.com/docs/guides/agents",
  },
  "openai-prompt-engineering": {
    title: "OpenAI Platform Docs: Prompt engineering",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
  },
  "openai-retrieval": {
    title: "OpenAI Platform Docs: File search",
    url: "https://platform.openai.com/docs/guides/tools-file-search",
  },
  "nist-ai-rmf": {
    title: "NIST AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
} as const;

export type KnowledgeSourceId = keyof typeof knowledgeSources;

export const categoryColors: Record<CategoryId, string> = {
  go: "#0f766e",
  network: "#2563eb",
  os: "#7c3aed",
  algorithm: "#ea580c",
  mysql: "#0891b2",
  redis: "#dc2626",
  rabbitmq: "#f59e0b",
  backend: "#059669",
  docker: "#0284c7",
  kubernetes: "#4f46e5",
  agent: "#9333ea",
};

export const categorySourceRefs: Record<CategoryId, KnowledgeSourceId[]> = {
  go: ["go-docs", "go-spec", "go-effective-go", "go-modules-reference"],
  network: ["cs-notes", "javaguide", "xiaolin-coding"],
  os: ["cs-notes", "javaguide", "xiaolin-coding"],
  algorithm: ["cs-notes", "javaguide"],
  mysql: ["javaguide", "xiaolin-mysql", "cs-notes"],
  redis: ["javaguide", "xiaolin-redis", "doocs-advanced-java"],
  rabbitmq: ["javaguide", "doocs-advanced-java"],
  backend: ["javaguide", "doocs-advanced-java", "cs-notes"],
  docker: ["javaguide", "devinterview-docker"],
  kubernetes: ["devinterview-kubernetes"],
  agent: ["dair-prompt-guide", "awesome-context-engineering"],
};
