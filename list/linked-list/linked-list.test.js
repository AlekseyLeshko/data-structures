const LinkedList = require('./linked-list')

describe('linked-list', () => {
  let list
  beforeEach(() => {
    list = new LinkedList()
  })

  test('init', () => {
    expect(list.head).toBeNull()
  })


  test('add at head', () => {
    expect(list.head).toBeNull()

    list.addAtHead(3)

    expect(list.head.value).toEqual(3)

    list.addAtHead(2)

    expect(list.head.value).toEqual(2)
    expect(list.head.next.value).toEqual(3)
    expect(list.head.next.next).toBeUndefined()
  })

  test('get by index', () => {
    expect(list.get(0)).toEqual(-1)
    expect(list.get(1)).toEqual(-1)

    list.addAtHead(3)
    expect(list.get(0)).toEqual(3)

    list.addAtHead(4)
    list.addAtHead(5)

    expect(list.get(1)).toEqual(4)
    expect(list.get(3)).toEqual(-1)
  })

  test('add at tail', () => {
    list.addAtTail(2)
    expect(list.get(0)).toEqual(2)

    list.addAtTail(3)
    expect(list.get(0)).toEqual(2)
    expect(list.get(1)).toEqual(3)

    list.addAtTail(4)
    expect(list.get(0)).toEqual(2)
    expect(list.get(1)).toEqual(3)
    expect(list.get(2)).toEqual(4)
  })

  test('add at index', () => {
    list.addAtIndex(0, 2)
    expect(list.get(0)).toEqual(2)

    list.addAtIndex(1, 3)
    expect(list.get(0)).toEqual(2)
    expect(list.get(1)).toEqual(3)

    list.addAtIndex(0, 1)
    expect(list.get(0)).toEqual(1)
    expect(list.get(1)).toEqual(2)
    expect(list.get(2)).toEqual(3)

    list.addAtIndex(1, 5)
    expect(list.get(0)).toEqual(1)
    expect(list.get(1)).toEqual(5)
    expect(list.get(2)).toEqual(2)
    expect(list.get(3)).toEqual(3)

    list.addAtIndex(2, 7)
    expect(list.get(0)).toEqual(1)
    expect(list.get(1)).toEqual(5)
    expect(list.get(2)).toEqual(7)
    expect(list.get(3)).toEqual(2)
    expect(list.get(4)).toEqual(3)

    list.addAtIndex(5, 10)
    expect(list.get(0)).toEqual(1)
    expect(list.get(1)).toEqual(5)
    expect(list.get(2)).toEqual(7)
    expect(list.get(3)).toEqual(2)
    expect(list.get(4)).toEqual(3)
    expect(list.get(5)).toEqual(10)
  })

  test('delete at index', () => {
    list.deleteAtIndex(2)

    expect(list.head).toBeNull()

    list.addAtHead(1)
    list.addAtHead(2)
    list.addAtHead(3)
    list.deleteAtIndex(1)

    expect(list.get(0)).toEqual(3)
    expect(list.get(1)).toEqual(1)

    list.addAtHead(4)
    list.addAtHead(5)
    list.deleteAtIndex(3)

    expect(list.get(0)).toEqual(5)
    expect(list.get(1)).toEqual(4)
    expect(list.get(2)).toEqual(3)
  })
})
