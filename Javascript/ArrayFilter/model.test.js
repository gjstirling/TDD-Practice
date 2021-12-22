const { expect } = require('@jest/globals')
const arrayFilter = require('./model')

test('', () => {
  expect(arrayFilter([1,3])).toEqual([])
})