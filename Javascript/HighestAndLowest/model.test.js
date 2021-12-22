const { expect } = require('@jest/globals')
const highAndLow = require('./model')

test('returns two numbers', () => {
  expect(highAndLow("1 2")).toEqual("1 2")
})

test('Picks highest and lowest from three numbers', () => {
  expect(highAndLow("1 2 3")).toEqual("1 3")
})

test('Can find lowest and highest when numbers are not in order', () => {
  expect(highAndLow("1 3 2")).toEqual("1 3")
})
