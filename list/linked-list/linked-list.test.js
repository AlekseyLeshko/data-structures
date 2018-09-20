const LinkedList = require('./linked-list')

describe('linked-list', () => {
  test('init', () => {
    const list = new LinkedList()

    expect(list.head).toBeNull()
  })
})
