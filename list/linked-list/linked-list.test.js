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
})
