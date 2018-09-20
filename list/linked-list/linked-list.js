const Node = function({ val, next }) {
  this.value = val
  this.next = next
}

const LinkedList = function() {
  this.head = null

  this.addAtHead = (val) => {
    if (this.head === null) {
      this.head = new Node({ val })
      return
    }

    const next = this.head
    this.head = new Node({ val, next })
  }
}


module.exports = LinkedList
