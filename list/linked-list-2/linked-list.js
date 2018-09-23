const Node = function({ value, next }) {
  this.value = value
  this.next = next
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
}

module.exports = LinkedList
