const Node = function({ value, next }) {
  this.value = value
  this.next = next

  this.toString = () => {
    return this.value.toString()
  }

  this.getCopy = () => {
    return new Node({ value: this.value, next: this.next })
  }
}

const LinkedList = function() {
  this.head = null

  this.add = (value) => {
    const newNode = new Node({ value })

    if (!this.head) {
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
  }

  this.toString = () => {
    if (!this.head) {
      return ''
    }

    let currentNode = this.head
    let str = currentNode.toString()
    while (currentNode.next) {
      currentNode = currentNode.next
      str += ` -> ${currentNode.toString()}`
    }

    return str
  }

  this.reverse = () => {
    if (!this.head) {
      return
    }

    let currentNode = this.head
    let newHead = new Node({ value: currentNode.value })
    while (currentNode.next) {
      newHead = new Node({
        value: currentNode.next.value,
        next: newHead.getCopy(),
      })
      currentNode = currentNode.next
    }

    this.head = newHead
  }

  this.recursionReverse = () => {
    const recursionStep = (head, tail) => {
      if (!head) {
        return tail
      }

      return recursionStep(head.next, new Node({
        value: head.value,
        next: tail,
      }))
    }

    this.head = recursionStep(this.head)
  }

  this.recursionToString = (current = this.head || '') => {
    let str = current.toString()
    if (current.next) {
      str += ' -> ' + this.recursionToString(current.next)
    }

    return str
  }
}

module.exports = LinkedList
