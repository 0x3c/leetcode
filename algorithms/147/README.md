# 147. Insertion Sort List

Sort a linked list using insertion sort.

![insertion sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)
A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list

### Algorithm of Insertion Sort:

- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
- It repeats until no input elements remain.

## Example

```
Input: 4->2->1->3
Output: 1->2->3->4
```

```
Input: -1->5->3->4->0
Output: -1->0->3->4->5
```

## Topics

- Sort
- Linked List

## Results

| Runtime | Memory  | Pass    | submission_id                                                   |
| ------- | ------- | ------- | --------------------------------------------------------------- |
| 108 ms  | 36.6 MB | 22 / 22 | [249650001](https://leetcode.com/submissions/detail/249650001/) |
