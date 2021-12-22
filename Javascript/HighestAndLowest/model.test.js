const { expect } = require('@jest/globals')
const highAndLow = require('./model')

test('returns number', () => {
  expect(highAndLow("1 2")).toEqual("1 2")
})
