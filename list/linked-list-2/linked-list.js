const Node = function({ val, next }) {
  this.value = val
  this.next = next
}

const LinkedList = function() {
  this.head = null
}

module.exports = LinkedList
