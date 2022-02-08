const { expect } = require('@jest/globals')
const XO = require('./model')

test('returns true when given even number x and os', () => {
  expect(XO("ooxx")).toEqual(true)
})

test('returns true in a different order', () => {
  expect(XO("xoxo")).toEqual(true)
})

test('returns false if there is uneven order', () => {
  expect(XO("xoxoxoxOxoxoxoxoo")).toEqual(false)
})

test('returns true if no x and o', () => {
  expect(XO("fthfthfth")).toEqual(true)
})





