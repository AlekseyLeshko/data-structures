const LinkedList = require('./linked-list')

describe('linked-list', () => {
  let list
  beforeEach(() => {
    list = new LinkedList()
  })

  test('init', () => {
    expect(list.head).toBeNull()
  })
})
