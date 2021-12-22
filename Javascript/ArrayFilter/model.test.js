const { expect } = require('@jest/globals')
const arrayFilter = require('./model')

test('ignores odd numbers', () => {
  expect(arrayFilter([1,3])).toEqual([])
})

test('returns only even numbers', () => {
  expect(arrayFilter([1,2,3,4])).toEqual([2,4])
})