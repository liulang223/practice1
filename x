1/去重
public ListNode Roovedupliccate(ListNode head){
      if (head == null)
      {return null}
      ListNode dummy=new ListNode(-1);
      dummy.next=head;
      ListNode pre=dummy;
      while(pre.next!==null&pre.next.next!==null){
          if(pre.next.val==pre.next.next.val){
              while(pre.next!==null){
                  pre.next=pre.next.next
              }
          }else {
              pre=pre.next
          }
      } 
      return dummy.next;                          
}
2/reverse
public ListNode Reverse(ListNode head){
    if (head == null)
      {return null}
    cur = head;
    dummy.next =null;
    while(cur!=null){
        ListNode next =cur.next;
        cur.next=dummy.next;
        dummy.next=cur;
        cur=next;
    }
    return dummy.next;
}
3/middle ListNode
public ListNode Middle(ListNode head){
    if (head == null)
      {return null}
    ListNode fast=head;
    ListNode slow=head;
    while(fast.next!=null&fast.next.next!=null){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow
}
4/cycle
public ListNode Cycle(ListNode head){
    if (head == null)
      {return null}
    ListNode fast=head;
    ListNode slow=head;
    while(fast.next!=null){
        if(fast.next==null)
        { return false }
        if(fast.next=slow){
            return true;
        }
        fast=fast.next.next;
        slow=slow.next;
    }
    return false;
}