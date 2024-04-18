
// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {


    const recursiveFunc = (l1: ListNode | null, l2: ListNode | null, isTen: boolean = false) => {
        const sum = Number(l1?.val || 0) + Number(l2?.val || 0) + Number(isTen)

        if(!l1 && !l2) {
            return sum >= 10 ? new ListNode(sum % 10, new ListNode(1)) : sum === 0 ? null : new ListNode(sum % 10)
        }

        return new ListNode(sum % 10, recursiveFunc(l1?.next || null, l2?.next || null, sum >= 10))
    }

    return recursiveFunc(l1,l2)
};