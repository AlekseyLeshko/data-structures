const Node = function({ value, next }) {
  this.value = value
  this.next = next

  this.toString = () => {
    return this.value.toString()
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
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next
      str += ` -> ${currentNode.toString()}`
    }

    return str
  }
}

module.exports = LinkedList
