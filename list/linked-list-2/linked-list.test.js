const LinkedList = require('./linked-list')

describe('linked-list', () => {
  let list
  beforeEach(() => {
    list = new LinkedList()
  })

  test('init', () => {
    expect(list.head).toBeNull()
  })

  test('add node', () => {
    list.add(3)
    list.add(4)
    list.add(5)

    expect(list.head.value).toEqual(3)
    expect(list.head.next.value).toEqual(4)
    expect(list.head.next.next.value).toEqual(5)
  })
})
