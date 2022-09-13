/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
  if (!head) return head;
  if (head.val === 0) head = head.next;
  
  let local_head = head;
  let temp = head;
  let sum = 0;
  
  while(temp !== null) {
    if (temp.val !== 0) {
      sum += temp.val;
      temp = temp.next;
    } else {
      local_head.val = sum;
      local_head.next = temp.next;
      temp = temp.next;
      local_head = local_head.next;
      sum = 0;
    }
  }

  return head;
};