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

  this.get = (index) => {
    let itemIndex = 0
    let current = this.head
    while (current) {
      if (itemIndex === index) {
        return current
      }

      current = current.next
      itemIndex++
    }

    return -1
  }

  this.addAtTail = (val) => {
    if (this.head === null) {
      this.addAtHead(val)
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }

    const next = new Node({ val })
    current.next = next
  }
}


module.exports = LinkedList
