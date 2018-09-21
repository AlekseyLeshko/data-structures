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
    let current = this.head
    for (let i = 0; i < index; i++) {
      if (!current) {
        break
      }

      current = current.next
    }

    return current ? current.value : -1
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

    current.next = new Node({ val })
  }

  this.addAtIndex = (index, val) => {
    if (index === 0) {
      this.addAtHead(val)
      return
    }

    if (!this.head) {
      return
    }

    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next
      } else {
        return
      }
    }

    const next = new Node({ val, next: current.next })
    current.next = next
  }

  this.deleteAtIndex = (index) => {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next
      } else {
        return
      }
    }

    if (!current.next) {
      current.next = undefined
    } else {
      const a = current.next.next
      current.next = a
    }
  }
}

module.exports = LinkedList
