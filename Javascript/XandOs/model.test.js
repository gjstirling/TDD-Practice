const { expect } = require('@jest/globals')
const XO = require('./model')

test('returns true when given even number x and os', () => {
  expect(XO("xo")).toEqual(true)
})

