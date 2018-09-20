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
    expect(list.get(0).value).toEqual(3)

    list.addAtHead(4)
    list.addAtHead(5)

    expect(list.get(1).value).toEqual(4)
    expect(list.get(3)).toEqual(-1)
  })
})
