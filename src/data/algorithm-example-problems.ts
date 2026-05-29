import type { GraphKnowledgePoint } from "./knowledge-points/types";

type LocalizedText = {
  zh: string;
  en: string;
};

export interface AlgorithmExampleProblem {
  id: string;
  title: LocalizedText;
  source: string;
  url: string;
  reason: LocalizedText;
}

const tx = (zh: string, en: string): LocalizedText => ({ zh, en });

const leetcode = (slug: string) => `https://leetcode.cn/problems/${slug}/`;

const lingShenList: AlgorithmExampleProblem = {
  id: "ling-shen-list",
  title: tx("灵茶山艾府题单", "EndlessCheng LeetCode List"),
  source: "LeetCode",
  url: "https://leetcode.cn/problem-list/YtBrPpEX/",
  reason: tx("按知识点系统刷题，适合作为长期题单入口。", "A structured long-term practice list grouped by techniques."),
};

function problem(
  id: string,
  zh: string,
  en: string,
  slug: string,
  reasonZh: string,
  reasonEn: string,
): AlgorithmExampleProblem {
  return {
    id,
    title: tx(zh, en),
    source: "LeetCode",
    url: leetcode(slug),
    reason: tx(reasonZh, reasonEn),
  };
}

const examplesById: Record<string, AlgorithmExampleProblem[]> = {
  "dsa-overview": [
    lingShenList,
    problem("two-sum", "1. 两数之和", "1. Two Sum", "two-sum", "入门哈希表和复杂度分析。", "A compact start for hash tables and complexity analysis."),
  ],
  "time-complexity": [
    problem("binary-search", "704. 二分查找", "704. Binary Search", "binary-search", "用 O(log n) 和 O(n) 对比增长趋势。", "Contrasts logarithmic and linear growth."),
    lingShenList,
  ],
  "space-complexity": [
    problem("single-number", "136. 只出现一次的数字", "136. Single Number", "single-number", "练习 O(1) 额外空间。", "Practices constant extra space."),
    lingShenList,
  ],
  recursion: [
    problem("climbing-stairs", "70. 爬楼梯", "70. Climbing Stairs", "climbing-stairs", "递归、记忆化和 DP 的同源例题。", "A bridge from recursion to memoization and DP."),
    problem("powx-n", "50. Pow(x, n)", "50. Pow(x, n)", "powx-n", "练习递归拆半。", "Practices recursive halving."),
  ],
  array: [
    problem("two-sum", "1. 两数之和", "1. Two Sum", "two-sum", "数组遍历和哈希索引的基础题。", "Basic array scan with hash indexing."),
    problem("remove-duplicates", "26. 删除有序数组中的重复项", "26. Remove Duplicates from Sorted Array", "remove-duplicates-from-sorted-array", "练习原地写指针。", "Practices in-place write pointers."),
  ],
  "two-pointers": [
    problem("two-sum-ii", "167. 两数之和 II", "167. Two Sum II", "two-sum-ii-input-array-is-sorted", "左右指针收缩区间。", "Shrinks a sorted interval with two pointers."),
    problem("container-water", "11. 盛最多水的容器", "11. Container With Most Water", "container-with-most-water", "练习指针移动策略。", "Practices pointer movement strategy."),
  ],
  "sliding-window": [
    problem("longest-substring", "3. 无重复字符的最长子串", "3. Longest Substring Without Repeating Characters", "longest-substring-without-repeating-characters", "窗口扩张、收缩和哈希计数。", "Window expansion, shrinking, and hash counts."),
    problem("min-subarray", "209. 长度最小的子数组", "209. Minimum Size Subarray Sum", "minimum-size-subarray-sum", "正数数组窗口模板。", "A classic positive-array window template."),
  ],
  "prefix-sum": [
    problem("subarray-sum", "560. 和为 K 的子数组", "560. Subarray Sum Equals K", "subarray-sum-equals-k", "前缀和加哈希表。", "Prefix sum with a hash table."),
    problem("range-sum", "303. 区域和检索", "303. Range Sum Query", "range-sum-query-immutable", "前缀和最小模型。", "The minimal prefix-sum model."),
  ],
  "difference-array": [
    problem("car-pooling", "1094. 拼车", "1094. Car Pooling", "car-pooling", "区间增减和差分还原。", "Range updates and difference restoration."),
    problem("flight-bookings", "1109. 航班预订统计", "1109. Corporate Flight Bookings", "corporate-flight-bookings", "差分数组标准题。", "A standard difference-array exercise."),
  ],
  "linked-list": [
    problem("reverse-list", "206. 反转链表", "206. Reverse Linked List", "reverse-linked-list", "链表指针重连基础。", "Basic pointer rewiring."),
    problem("merge-lists", "21. 合并两个有序链表", "21. Merge Two Sorted Lists", "merge-two-sorted-lists", "哨兵节点和链表合并。", "Sentinel nodes and list merge."),
  ],
  "singly-linked-list": [
    problem("reverse-list", "206. 反转链表", "206. Reverse Linked List", "reverse-linked-list", "单链表指针方向变化。", "Pointer direction changes in a singly linked list."),
  ],
  "doubly-linked-list": [
    problem("lru-cache", "146. LRU 缓存", "146. LRU Cache", "lru-cache", "哈希表加双向链表。", "Hash map plus doubly linked list."),
  ],
  "fast-slow-pointers": [
    problem("cycle", "141. 环形链表", "141. Linked List Cycle", "linked-list-cycle", "快慢指针判环。", "Cycle detection with fast and slow pointers."),
    problem("middle", "876. 链表的中间结点", "876. Middle of the Linked List", "middle-of-the-linked-list", "快慢指针找中点。", "Finds the middle with two speeds."),
  ],
  stack: [
    problem("valid-parentheses", "20. 有效的括号", "20. Valid Parentheses", "valid-parentheses", "栈匹配的基础模型。", "The basic stack-matching model."),
    problem("daily-temperatures", "739. 每日温度", "739. Daily Temperatures", "daily-temperatures", "进入单调栈。", "A gateway to monotonic stacks."),
  ],
  "monotonic-stack": [
    problem("daily-temperatures", "739. 每日温度", "739. Daily Temperatures", "daily-temperatures", "维护下一个更大元素。", "Maintains the next greater element."),
    problem("largest-rectangle", "84. 柱状图中最大的矩形", "84. Largest Rectangle in Histogram", "largest-rectangle-in-histogram", "单调栈经典难题。", "A classic hard monotonic-stack problem."),
  ],
  queue: [
    problem("queue-by-stacks", "232. 用栈实现队列", "232. Implement Queue using Stacks", "implement-queue-using-stacks", "队列先进先出的最小练习。", "Minimal FIFO practice."),
    problem("recent-counter", "933. 最近的请求次数", "933. Number of Recent Calls", "number-of-recent-calls", "按时间窗口出队。", "Dequeues by a time window."),
  ],
  deque: [
    problem("sliding-window-maximum", "239. 滑动窗口最大值", "239. Sliding Window Maximum", "sliding-window-maximum", "双端队列维护窗口最值。", "Deque maintains a window maximum."),
  ],
  "monotonic-queue": [
    problem("sliding-window-maximum", "239. 滑动窗口最大值", "239. Sliding Window Maximum", "sliding-window-maximum", "单调队列模板题。", "A monotonic-queue template problem."),
  ],
  "hash-table": [
    problem("two-sum", "1. 两数之和", "1. Two Sum", "two-sum", "哈希查找互补值。", "Hash lookup for complements."),
    problem("group-anagrams", "49. 字母异位词分组", "49. Group Anagrams", "group-anagrams", "哈希键设计练习。", "Practices hash-key design."),
  ],
  tree: [
    problem("inorder", "94. 二叉树的中序遍历", "94. Binary Tree Inorder Traversal", "binary-tree-inorder-traversal", "树遍历基础。", "Basic tree traversal."),
    problem("max-depth", "104. 二叉树的最大深度", "104. Maximum Depth of Binary Tree", "maximum-depth-of-binary-tree", "递归处理树高度。", "Recursive tree-height handling."),
  ],
  "binary-tree": [
    problem("level-order", "102. 二叉树的层序遍历", "102. Binary Tree Level Order Traversal", "binary-tree-level-order-traversal", "树上 BFS 模板。", "A BFS template on trees."),
    problem("max-depth", "104. 二叉树的最大深度", "104. Maximum Depth of Binary Tree", "maximum-depth-of-binary-tree", "递归返回子树信息。", "Returns subtree information recursively."),
  ],
  "binary-search-tree": [
    problem("validate-bst", "98. 验证二叉搜索树", "98. Validate Binary Search Tree", "validate-binary-search-tree", "用中序或上下界验证 BST。", "Validates BST with inorder order or bounds."),
    problem("kth-smallest", "230. 二叉搜索树中第 K 小的元素", "230. Kth Smallest Element in a BST", "kth-smallest-element-in-a-bst", "BST 中序有序性。", "Uses sorted inorder order."),
  ],
  "balanced-tree": [
    problem("balance-bst", "1382. 将二叉搜索树变平衡", "1382. Balance a Binary Search Tree", "balance-a-binary-search-tree", "中序重建平衡树。", "Rebuilds a balanced tree from inorder order."),
  ],
  trie: [
    problem("implement-trie", "208. 实现 Trie", "208. Implement Trie", "implement-trie-prefix-tree", "字典树节点和前缀查询。", "Trie nodes and prefix lookup."),
  ],
  "union-find": [
    problem("redundant-connection", "684. 冗余连接", "684. Redundant Connection", "redundant-connection", "并查集判环。", "Union find for cycle detection."),
    problem("number-of-islands", "200. 岛屿数量", "200. Number of Islands", "number-of-islands", "连通块建模。", "Models connected components."),
  ],
  heap: [
    problem("kth-largest", "215. 数组中的第 K 个最大元素", "215. Kth Largest Element in an Array", "kth-largest-element-in-an-array", "堆和快速选择都适用。", "Fits heap and quickselect."),
  ],
  "priority-queue": [
    problem("top-k", "347. 前 K 个高频元素", "347. Top K Frequent Elements", "top-k-frequent-elements", "频次哈希加堆。", "Frequency hash plus heap."),
    problem("merge-k-lists", "23. 合并 K 个升序链表", "23. Merge k Sorted Lists", "merge-k-sorted-lists", "优先队列多路合并。", "Priority queue for k-way merge."),
  ],
  graph: [
    problem("course-schedule", "207. 课程表", "207. Course Schedule", "course-schedule", "图建模和环检测。", "Graph modeling and cycle detection."),
    problem("number-of-islands", "200. 岛屿数量", "200. Number of Islands", "number-of-islands", "网格图搜索入门。", "Intro to grid-graph search."),
  ],
  "graph-representation": [
    problem("clone-graph", "133. 克隆图", "133. Clone Graph", "clone-graph", "邻接表和访问标记。", "Adjacency lists and visited markers."),
  ],
  dfs: [
    problem("number-of-islands", "200. 岛屿数量", "200. Number of Islands", "number-of-islands", "DFS 遍历连通块。", "DFS over connected components."),
  ],
  bfs: [
    problem("rotting-oranges", "994. 腐烂的橘子", "994. Rotting Oranges", "rotting-oranges", "多源 BFS 层序推进。", "Multi-source BFS by layers."),
    problem("level-order", "102. 二叉树的层序遍历", "102. Binary Tree Level Order Traversal", "binary-tree-level-order-traversal", "队列层序模板。", "Queue-based level-order template."),
  ],
  "topological-sort": [
    problem("course-schedule", "207. 课程表", "207. Course Schedule", "course-schedule", "入度数组和拓扑序。", "Indegree array and topological order."),
  ],
  dijkstra: [
    problem("network-delay", "743. 网络延迟时间", "743. Network Delay Time", "network-delay-time", "Dijkstra 标准建模。", "A standard Dijkstra model."),
  ],
  "minimum-spanning-tree": [
    problem("connect-points", "1584. 连接所有点的最小费用", "1584. Min Cost to Connect All Points", "min-cost-to-connect-all-points", "最小生成树应用题。", "A direct minimum-spanning-tree application."),
  ],
  search: [
    problem("binary-search", "704. 二分查找", "704. Binary Search", "binary-search", "搜索基础模板。", "A basic search template."),
  ],
  "linear-search": [
    problem("search-insert", "35. 搜索插入位置", "35. Search Insert Position", "search-insert-position", "从线性搜索过渡到二分。", "A bridge from linear scan to binary search."),
  ],
  "binary-search": [
    problem("binary-search", "704. 二分查找", "704. Binary Search", "binary-search", "闭区间和开区间模板都适合练。", "Works for both closed and half-open templates."),
    problem("rotated-search", "33. 搜索旋转排序数组", "33. Search in Rotated Sorted Array", "search-in-rotated-sorted-array", "二分判定条件升级。", "Upgrades binary-search conditions."),
  ],
  "search-boundary": [
    problem("first-last", "34. 在排序数组中查找元素的第一个和最后一个位置", "34. Find First and Last Position", "find-first-and-last-position-of-element-in-sorted-array", "左右边界二分模板。", "Left and right boundary templates."),
  ],
  "parametric-search": [
    problem("ship-days", "1011. 在 D 天内送达包裹的能力", "1011. Capacity To Ship Packages Within D Days", "capacity-to-ship-packages-within-d-days", "答案二分的可行性判定。", "Feasibility checks for binary search on answer."),
    problem("split-array", "410. 分割数组的最大值", "410. Split Array Largest Sum", "split-array-largest-sum", "最大值最小化模型。", "A minimize-the-maximum model."),
  ],
  sorting: [
    problem("sort-colors", "75. 颜色分类", "75. Sort Colors", "sort-colors", "原地分类排序。", "In-place categorical sorting."),
    problem("sort-array", "912. 排序数组", "912. Sort an Array", "sort-an-array", "实现排序算法。", "Implements sorting algorithms."),
  ],
  "bubble-sort": [
    problem("sort-array", "912. 排序数组", "912. Sort an Array", "sort-an-array", "用简单排序理解交换成本。", "Uses simple sorting to expose swap cost."),
  ],
  "selection-sort": [
    problem("sort-array", "912. 排序数组", "912. Sort an Array", "sort-an-array", "每轮选择最小值。", "Selects the minimum each round."),
  ],
  "insertion-sort": [
    problem("sort-list", "148. 排序链表", "148. Sort List", "sort-list", "插入、归并和链表排序都能联动理解。", "Connects insertion, merge, and linked-list sorting."),
  ],
  "merge-sort": [
    problem("sort-array", "912. 排序数组", "912. Sort an Array", "sort-an-array", "归并排序实现练习。", "Practices merge sort implementation."),
    problem("sort-list", "148. 排序链表", "148. Sort List", "sort-list", "链表归并排序。", "Merge sort on linked lists."),
  ],
  "quick-sort": [
    problem("sort-array", "912. 排序数组", "912. Sort an Array", "sort-an-array", "快速排序分区练习。", "Practices quicksort partitioning."),
  ],
  quickselect: [
    problem("kth-largest", "215. 数组中的第 K 个最大元素", "215. Kth Largest Element in an Array", "kth-largest-element-in-an-array", "快速选择模板题。", "A quickselect template problem."),
  ],
  "divide-and-conquer": [
    problem("powx-n", "50. Pow(x, n)", "50. Pow(x, n)", "powx-n", "分治拆半。", "Divide and conquer by halving."),
    problem("sort-list", "148. 排序链表", "148. Sort List", "sort-list", "拆分再合并。", "Splits and merges."),
  ],
  backtracking: [
    problem("permutations", "46. 全排列", "46. Permutations", "permutations", "回溯搜索树基础。", "Basic backtracking search tree."),
    problem("combination-sum", "39. 组合总和", "39. Combination Sum", "combination-sum", "选择、撤销和剪枝。", "Choose, undo, and prune."),
  ],
  "dynamic-programming": [
    problem("climbing-stairs", "70. 爬楼梯", "70. Climbing Stairs", "climbing-stairs", "DP 状态转移入门。", "Intro to DP transitions."),
    problem("coin-change", "322. 零钱兑换", "322. Coin Change", "coin-change", "完全背包基础模型。", "A basic complete-knapsack model."),
    problem("lis", "300. 最长递增子序列", "300. Longest Increasing Subsequence", "longest-increasing-subsequence", "序列 DP 代表题。", "A representative sequence-DP problem."),
  ],
  greedy: [
    problem("jump-game", "55. 跳跃游戏", "55. Jump Game", "jump-game", "维护最远可达位置。", "Maintains the farthest reachable position."),
    problem("jump-game-ii", "45. 跳跃游戏 II", "45. Jump Game II", "jump-game-ii", "贪心分层推进。", "Greedy layer expansion."),
  ],
  "bit-manipulation": [
    problem("single-number", "136. 只出现一次的数字", "136. Single Number", "single-number", "异或性质入门。", "Intro to XOR properties."),
    problem("counting-bits", "338. 比特位计数", "338. Counting Bits", "counting-bits", "位运算加 DP。", "Bit operations plus DP."),
  ],
  string: [
    problem("longest-substring", "3. 无重复字符的最长子串", "3. Longest Substring Without Repeating Characters", "longest-substring-without-repeating-characters", "字符串窗口经典题。", "A classic string-window problem."),
    problem("valid-anagram", "242. 有效的字母异位词", "242. Valid Anagram", "valid-anagram", "字符频次哈希。", "Character-frequency hashing."),
  ],
};

const examplesByArea: Record<string, AlgorithmExampleProblem[]> = {
  foundation: [lingShenList, ...examplesById["dsa-overview"].slice(1)],
  linear: examplesById.array,
  technique: examplesById["two-pointers"],
  hashing: examplesById["hash-table"],
  tree: examplesById.tree,
  heap: examplesById.heap,
  graph: examplesById.graph,
  search: examplesById["binary-search"],
  sorting: examplesById.sorting,
  algorithm: examplesById["dynamic-programming"],
  dp: examplesById["dynamic-programming"],
  greedy: examplesById.greedy,
  backtracking: examplesById.backtracking,
  string: examplesById.string,
};

export function getAlgorithmExampleProblems(point: GraphKnowledgePoint) {
  return examplesById[point.id] ?? examplesByArea[point.area ?? "foundation"] ?? [lingShenList];
}
